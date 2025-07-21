// src/components/common/Chat.tsx
import React, { useState, useEffect, useRef } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { sendMessage, getSessionDetails } from "../../api-chat";
import { ApiMessage, ChatSession } from "../../types/api";
import Toast from "./Toast";

interface Message {
  id: string;
  sender: "user" | "bot";
  text: string;
}

interface ChatProps {
  startSession: () => Promise<ChatSession>;
  setIsChatting: React.Dispatch<React.SetStateAction<boolean>>;
  tool: 'DARS_YAR' | 'KONJKAV_SHO' | 'TARKIB_KON' | string;
  initialUserActionText?: string;
}

const mapApiMessageToUiMessage = (apiMessage: ApiMessage): Message => ({
  id: apiMessage.id,
  sender: apiMessage.sender_type === 'USER' ? 'user' : 'bot',
  text: apiMessage.content,
});

const Chat: React.FC<ChatProps> = ({ startSession, setIsChatting, tool, initialUserActionText }) => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputMessage, setInputMessage] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [sessionId, setSessionId] = useState<string | null>(null);
  const [inputAreaHeight, setInputAreaHeight] = useState(0);

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const inputAreaRef = useRef<HTMLDivElement>(null);

  const pollForResponse = (sid: string, originalMessageCount: number) => {
    const timeout = 35000;
    const interval = 1000;
    let pollTimeoutId: NodeJS.Timeout;

    const poller = setInterval(async () => {
      try {
        const sessionDetails = await getSessionDetails(sid);
        if (sessionDetails.messages.length > originalMessageCount) {
          const lastMessage = sessionDetails.messages[sessionDetails.messages.length - 1];
          if (lastMessage.sender_type === 'AI') {
            clearInterval(poller);
            clearTimeout(pollTimeoutId);
            // Replace all local messages with the definitive list from the server
            setMessages(
              sessionDetails.messages
                .filter(msg => msg.sender_type !== 'SYSTEM')
                .map(mapApiMessageToUiMessage)
            );
            setIsLoading(false);
          }
        }
      } catch (err) {
        console.error("Polling error:", err);
      }
    }, interval);

    pollTimeoutId = setTimeout(() => {
      clearInterval(poller);
      if (isLoading) {
          setError("پاسخی از سرور دریافت نشد. لطفاً دوباره تلاش کنید.");
          setIsLoading(false);
      }
    }, timeout);
  };

  useEffect(() => {
    const initChat = async () => {
      setIsChatting(true);

      const isToolWithInitialMessage = (tool === 'KONJKAV_SHO' || tool === 'TARKIB_KON') && initialUserActionText;

      if (isToolWithInitialMessage) {
        const tempMessage: Message = {
          id: 'temp-initial-message',
          sender: 'user', // Show as user's action
          text: initialUserActionText
        };
        setMessages([tempMessage]);
        setIsLoading(true);
      }

      try {
        const initialSession = await startSession();
        setSessionId(initialSession.id);
        
        const hasAiMessage = initialSession.messages.some(m => m.sender_type === 'AI');

        if (hasAiMessage) {
          setMessages(
            initialSession.messages
              .filter(msg => msg.sender_type !== 'SYSTEM')
              .map(mapApiMessageToUiMessage)
          );
          setIsLoading(false);
        } else {
          if (tool !== 'DARS_YAR') {
            pollForResponse(initialSession.id, initialSession.messages.length);
          } else {
            setMessages([]);
            setIsLoading(false);
          }
        }
      } catch (err) {
        setError("خطا در شروع گفتگو. لطفاً دوباره تلاش کنید.");
        console.error('Failed to start chat session:', err);
        setMessages([]);
        setIsLoading(false);
      }
    };

    initChat();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [startSession, setIsChatting, tool, initialUserActionText]);
  
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isLoading]);

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    }
    if (inputAreaRef.current) {
        setInputAreaHeight(inputAreaRef.current.offsetHeight);
    }
  }, [inputMessage]);

  useEffect(() => {
    if (inputAreaRef.current) {
      setInputAreaHeight(inputAreaRef.current.offsetHeight);
    }
  }, []);

  const handleSendMessage = async () => {
    if (!sessionId || inputMessage.trim() === "") return;

    const userMessageText = inputMessage.trim();
    
    const tempUserMessage: Message = {
        id: `temp-${Date.now()}`,
        sender: "user",
        text: userMessageText,
    };
    setMessages(prev => [...prev, tempUserMessage]);
    setInputMessage("");
    setIsLoading(true);

    try {
      await sendMessage(sessionId, userMessageText);
      const sessionDetailsBeforePoll = await getSessionDetails(sessionId);
      pollForResponse(sessionId, sessionDetailsBeforePoll.messages.length);
    } catch (err) {
      setError("خطا در ارسال پیام.");
      setIsLoading(false);
      setMessages(prev => prev.filter(m => m.id !== tempUserMessage.id));
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey && !isLoading) {
      e.preventDefault();
      handleSendMessage();
    }
  };
  
  const showTypingIndicator = isLoading && messages.length > 0 && messages[messages.length - 1].sender === 'user';

  return (
    <div className='flex flex-col flex-grow bg-backGround-1 relative'>
      {error && <Toast message={error} type="error" onClose={() => setError(null)} />}
      
      <div className="flex-1 overflow-y-auto p-4" style={{ paddingBottom: `${inputAreaHeight}px` }}>
        {messages.map((msg) => (
          <div key={msg.id} className={`w-full flex my-2 ${msg.sender === "user" ? "justify-start" : "justify-end"}`}>
            <div 
              dir="auto" 
              className={`
                prose prose-sm break-words max-w-[85%]
                ${msg.sender === 'user' ? 'prose-invert' : ''}
                p-3 rounded-[16px] mt-2 
                ${msg.sender === "user" ? "bg-custom-purple text-white" : "bg-white text-gray-800 border border-borderColor-1"}
              `}>
              <ReactMarkdown
                  remarkPlugins={[remarkGfm]}
                  components={{
                      a: ({ node, ...props }) => <a {...props} target="_blank" rel="noopener noreferrer" />
                  }}
              >
                  {msg.text}
              </ReactMarkdown>
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

      <div ref={inputAreaRef} className="fixed bottom-0 left-0 right-0 bg-white p-4 w-full border-t border-borderColor-1 z-20">
        <div className="relative flex items-center">
          <textarea ref={textareaRef} rows={1} className="w-full py-3 pl-4 pr-14 rounded-full focus:outline-none bg-backGround-1 resize-none overflow-y-auto max-h-40" placeholder="اینجا بنویس ... " value={inputMessage} onChange={(e) => setInputMessage(e.target.value)} onKeyPress={handleKeyPress} disabled={isLoading || !sessionId} />
          <button onClick={handleSendMessage} disabled={isLoading || inputMessage.trim() === "" || !sessionId} className="absolute right-2 top-1/2 -translate-y-1/2 flex items-center justify-center bg-custom-purple text-white w-10 h-10 rounded-full shadow-lg transition duration-200 ease-in-out transform hover:scale-105 disabled:bg-gray-400 disabled:cursor-not-allowed rotate-90">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" transform="rotate(180)">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Chat;