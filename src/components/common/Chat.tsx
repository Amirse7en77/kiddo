// src/components/common/Chat.tsx

import React, { useState, useEffect, useRef, useCallback } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { useQueryClient } from "@tanstack/react-query";
import { sendMessage, getSessionDetails } from "../../api-chat";
import { ApiMessage, ChatSession } from "../../types/api";
import Toast from "./Toast";
import vector from './../../assets/images/Vector.svg';
import SuggestionChip from "./SuggestionChip"; 

interface Message {
  id: string;
  sender: "user" | "bot";
  text: string;
  questions?: string[];
}

interface Suggestion {
  text: string;
}

interface ChatProps {
  startSession?: () => Promise<ChatSession>;
  resumeSessionId?: string;
  setIsChatting: React.Dispatch<React.SetStateAction<boolean>>;
  tool?: 'DARS_YAR' | 'KONJKAV_SHO' | 'TARKIB_KON' | string;
  initialUserActionText?: string;
  onFirstInteraction?: () => void;
  suggestions?: Suggestion[];
}

const mapApiMessageToUiMessage = (apiMessage: ApiMessage, tool: string): Message => {
  let text = apiMessage.content;
  let questions: string[] | undefined = undefined;

  if (
    tool === 'KONJKAV_SHO' &&
    apiMessage.sender_type === 'AI' &&
    apiMessage.raw_ai_response &&
    Array.isArray(apiMessage.raw_ai_response.follow_up_questions)
  ) {
    text = apiMessage.raw_ai_response.explanation || apiMessage.content;
    questions = apiMessage.raw_ai_response.follow_up_questions;
  }
  
  return {
    id: apiMessage.id,
    sender: apiMessage.sender_type === 'AI' ? 'bot' : 'user',
    text,
    questions: questions && questions.length > 0 ? questions : undefined,
  };
};

const Chat: React.FC<ChatProps> = ({ startSession, resumeSessionId, setIsChatting, tool, initialUserActionText, onFirstInteraction, suggestions }) => {
  const queryClient = useQueryClient();
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputMessage, setInputMessage] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [sessionId, setSessionId] = useState<string | null>(null);
  const [currentTool, setCurrentTool] = useState<string | undefined>(tool);
  const [inputAreaHeight, setInputAreaHeight] = useState(0);

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const inputAreaRef = useRef<HTMLDivElement>(null);
  const loadingRef = useRef(isLoading);
  const hasInteracted = useRef(false);
  
  const handleInteraction = useCallback(() => {
    if (!hasInteracted.current && onFirstInteraction) {
      onFirstInteraction();
      hasInteracted.current = true;
    }
  }, [onFirstInteraction]);
  
  useEffect(() => {
    loadingRef.current = isLoading;
  }, [isLoading]);

  const pollForResponse = useCallback((sid: string, originalMessageCount: number) => {
    const timeout = 35000;
    const interval = 1000;
    let pollTimeoutId: ReturnType<typeof setTimeout>;

    const poller = setInterval(async () => {
      try {
        const sessionDetails = await getSessionDetails(sid);
        if (sessionDetails.messages.length > originalMessageCount) {
          const lastMessage = sessionDetails.messages[sessionDetails.messages.length - 1];
          if (lastMessage.sender_type === 'AI') {
            clearInterval(poller);
            clearTimeout(pollTimeoutId);
            const uiMessages = sessionDetails.messages
              .filter(msg => msg.sender_type !== 'SYSTEM')
              .map(msg => mapApiMessageToUiMessage(msg, sessionDetails.tool));
            setMessages(uiMessages);
            setIsLoading(false);
          }
        }
      } catch (err) {
        console.error("Polling error:", err);
      }
    }, interval);

    pollTimeoutId = setTimeout(() => {
      clearInterval(poller);
      if (loadingRef.current) {
        setError("پاسخی از سرور دریافت نشد. لطفاً دوباره تلاش کنید.");
        setIsLoading(false);
      }
    }, timeout);
  }, []);

  useEffect(() => {
    const initChat = async () => {
      setIsLoading(true);
      try {
        let sessionToProcess: ChatSession;
        let toolName: string;

        if (resumeSessionId) {
          handleInteraction();
          sessionToProcess = await getSessionDetails(resumeSessionId);
          toolName = sessionToProcess.tool;
        } else if (startSession) {
          if ((tool === 'KONJKAV_SHO' || tool === 'TARKIB_KON') && initialUserActionText) {
            const tempMessage: Message = { id: `temp-${Date.now()}`, sender: 'user', text: initialUserActionText };
            setMessages([tempMessage]);
          }
          sessionToProcess = await startSession();
          await queryClient.invalidateQueries({ queryKey: ['chatSessions'] });
          toolName = tool!;
        } else {
          throw new Error("Chat component requires either 'resumeSessionId' or 'startSession'");
        }

        setSessionId(sessionToProcess.id);
        setCurrentTool(toolName);
        setIsChatting(true);

        const serverMessages = sessionToProcess.messages.filter(msg => msg.sender_type !== 'SYSTEM');
        const uiMessages = serverMessages.map(msg => mapApiMessageToUiMessage(msg, toolName));
        setMessages(uiMessages);

        const lastMessage = serverMessages[serverMessages.length - 1];
        if (lastMessage && lastMessage.sender_type !== 'AI') {
          pollForResponse(sessionToProcess.id, serverMessages.length);
        } else {
          setIsLoading(false);
        }
      } catch (err) {
        setError("خطا در شروع یا بارگذاری گفتگو. لطفاً دوباره تلاش کنید.");
        console.error('Failed to initialize chat session:', err);
        setMessages([]);
        setIsLoading(false);
      }
    };

    initChat();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [resumeSessionId, startSession]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isLoading]);

  useEffect(() => {
    if (inputAreaRef.current) {
      setInputAreaHeight(inputAreaRef.current.offsetHeight);
    }
  }, [inputMessage, suggestions, isLoading, messages]); 

  const sendUserMessage = async (content: string) => {
    if (!sessionId || content.trim() === "" || isLoading) return;

    handleInteraction();

    const tempUserMessage: Message = {
      id: `temp-${Date.now()}`,
      sender: "user",
      text: content,
    };
    setMessages(prev => [...prev, tempUserMessage]);
    setIsLoading(true);

    try {
      await sendMessage(sessionId, content);
      const sessionDetailsBeforePoll = await getSessionDetails(sessionId);
      pollForResponse(sessionId, sessionDetailsBeforePoll.messages.length);
    } catch (err) {
      setError("خطا در ارسال پیام.");
      setMessages(prev => prev.filter(m => m.id !== tempUserMessage.id));
      setIsLoading(false);
    }
  };

  const handleSendMessage = async () => {
    await sendUserMessage(inputMessage.trim());
    setInputMessage("");
  };

  const handleSuggestionClick = async (suggestionText: string) => {
    await sendUserMessage(suggestionText);
  };

  const handleQuestionClick = async (question: string) => {
    await sendUserMessage(question);
  };
  
  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInputMessage(e.target.value);
    if (e.target.value.length > 0) {
      handleInteraction();
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey && !isLoading) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const showTypingIndicator = isLoading && messages.length > 0 && messages[messages.length - 1]?.sender === 'user';
  
  const lastMessage = messages.length > 0 ? messages[messages.length - 1] : null;
  // EDITED: Corrected logic to show suggestions on initial load or after a bot message.
  const shouldShowSuggestions = suggestions && !isLoading && (lastMessage?.sender === 'bot' || messages.length === 0);

  return (
    <div className='flex flex-col flex-grow bg-backGround-1 relative'>
      {error && <Toast message={error} type="error" onClose={() => setError(null)} />}
      
      <div className={`flex-1 overflow-y-auto p-4`} style={{ paddingBottom: `${inputAreaHeight}px` }}>
        {messages.map((msg) => (
          <div key={msg.id} className={`w-full flex my-2 ${msg.sender === "user" ? "justify-start" : "justify-start"}`}>
            <div 
              dir="auto" 
              className={`
                prose prose-sm break-words
                ${msg.sender === 'user' ? 'max-w-[85%]' : 'w-full'}
                p-4 rounded-[16px] 
                ${msg.sender === "user" ? "border-chatButton-1 bg-backGroundCard border-[2px]" : "bg-white border-borderColor-1 border-[2px] prose-invert"}
              `}>
              <ReactMarkdown
                  remarkPlugins={[remarkGfm]}
                  components={{
                      a: ({ node, ...props }) => <a {...props} target="_blank" rel="noopener noreferrer" />
                  }}
              >
                  {msg.text}
              </ReactMarkdown>
              
              {msg.sender === 'bot' && msg.questions && currentTool === 'KONJKAV_SHO' && (
                <div className="mt-3 space-y-2">
                  {msg.questions.map((question, index) => (
                    <button
                      key={index}
                      onClick={() => handleQuestionClick(question)}
                      disabled={isLoading}
                      className="block w-full text-right p-3 rounded-lg text-sm text-gray-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed infoGradient"
                    >
                      {index + 1}. {question}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}

        {showTypingIndicator && (
          <div className="w-full flex my-2 justify-start">
            <div className="p-3 rounded-2xl bg-white border border-borderColor-1">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-gray-600 rounded-full animate-bounce" style={{ animationDelay: "0s" }}></div>
                <div className="w-2 h-2 bg-gray-600 rounded-full animate-bounce" style={{ animationDelay: "0.2s" }}></div>
                <div className="w-2 h-2 bg-gray-600 rounded-full animate-bounce" style={{ animationDelay: "0.4s" }}></div>
              </div>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      <div ref={inputAreaRef} className="fixed bottom-0 left-0 right-0 bg-backGround-1 border-borderColor-1 z-20">
        
        {shouldShowSuggestions && (
          <div className="mr-6 py-4">
             <div className="flex gap-2 overflow-x-auto pb-3 scrollbar-hide">
                {suggestions.map((suggestion) => (
                    <SuggestionChip 
                        key={suggestion.text} 
                        text={suggestion.text} 
                        onClick={() => handleSuggestionClick(suggestion.text)}
                    />
                ))}
             </div>
          </div>
        )}
        
        <div className="p-4 bg-backGround-1 pt-0">
          <div className="bg-gradient-to-r from-[#FFB800] via-[#FE4C4A] to-[#6248FF] p-[2px] rounded-[18px]">
            <div className="relative flex items-center">
              <textarea
                ref={textareaRef}
                rows={1}
                className="w-full py-4 pl-4 pr-14 rounded-[16px] focus:outline-none bg-white resize-none overflow-y-auto max-h-40"
                placeholder="اینجا بنویس ... "
                value={inputMessage}
                onChange={handleInputChange}
                onKeyPress={handleKeyPress}
                disabled={!sessionId || isLoading}
              />
              <button
                onClick={handleSendMessage}
                disabled={isLoading || inputMessage.trim() === "" || !sessionId}
                className="absolute right-2 top-1/2 -translate-y-1/2 flex items-center justify-center bg-[#6248FF] w-10 h-10 rounded-full shadow-lg transition duration-200 ease-in-out transform hover:scale-105 disabled:bg-[#DCDCDC] disabled:cursor-not-allowed"
              >
                <img className="w-4 h-4" src={vector} alt="Send" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chat;