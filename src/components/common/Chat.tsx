// src/components/common/Chat.tsx
import React, { useState, useEffect, useRef } from "react";
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
}

const mapApiMessageToUiMessage = (apiMessage: ApiMessage): Message => ({
  id: apiMessage.id,
  sender: apiMessage.sender_type === 'USER' ? 'user' : 'bot',
  text: apiMessage.content,
});

const Chat: React.FC<ChatProps> = ({ startSession, setIsChatting }) => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputMessage, setInputMessage] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [sessionId, setSessionId] = useState<string | null>(null);
  const [inputAreaHeight, setInputAreaHeight] = useState(0); // For dynamic padding

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const inputAreaRef = useRef<HTMLDivElement>(null); // Ref for the input container

  useEffect(() => {
    const initChat = async () => {
      setIsChatting(true);
      setIsLoading(true);
      try {
        const response = await startSession();
        setSessionId(response.id);
        setMessages(
          response.messages
            .filter(msg => msg.sender_type !== 'SYSTEM')
            .map(mapApiMessageToUiMessage)
        );
      } catch (err) {
        setError("خطا در شروع گفتگو. لطفاً دوباره تلاش کنید.");
        console.error('Failed to start chat session:', err);
      } finally {
        setIsLoading(false);
      }
    };
    initChat();
  }, [startSession, setIsChatting]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // Adjust textarea height and update container height for padding
  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    }
    if (inputAreaRef.current) {
        setInputAreaHeight(inputAreaRef.current.offsetHeight);
    }
  }, [inputMessage]);

  // Set initial height of input area on mount
  useEffect(() => {
    if (inputAreaRef.current) {
      setInputAreaHeight(inputAreaRef.current.offsetHeight);
    }
  }, []);

  const pollForResponse = (sid: string, originalMessageCount: number) => {
    const timeout = 20000;
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

  return (
    <div className='flex flex-col flex-grow bg-backGround-1'>
      {error && <Toast message={error} type="error" onClose={() => setError(null)} />}
      
      <div className="flex-1 overflow-y-auto p-4" style={{ paddingBottom: `${inputAreaHeight}px` }}>
        {messages.map((msg) => (
          <div key={msg.id} className={`flex my-2 ${msg.sender === "user" ? "justify-start" : "justify-end"}`}>
            <div className={`max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg p-3 rounded-2xl mx-2 ${msg.sender === "user" ? "bg-custom-purple text-white" : "bg-white text-gray-800 border border-borderColor-1"}`}>
              <p className="text-sm sm:text-base whitespace-pre-wrap break-words">{msg.text}</p>
            </div>
          </div>
        ))}
        {isLoading && (
          <div className="flex justify-start mx-2 my-2">
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