import React, { useState, useEffect, useRef } from "react";

// Define the structure for a chat message
interface Message {
  sender: "user" | "bot";
  text: string;
}
interface chatType{
  isChatting:boolean,
  setIsChatting:boolean
}

const ChatBot: React.FC<chatType> = ({ isChatting, setIsChatting }) => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputMessage, setInputMessage] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isInputFocused, setIsInputFocused] = useState<boolean>(false);

  // Ref for the messages container to enable auto-scrolling
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Scroll to the latest message whenever messages state changes
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleChatting = () => {
    setIsChatting(true);
  };

  // Function to call the Gemini API for bot responses
  const getBotResponse = async (userPrompt: string): Promise<string> => {
    setIsLoading(true);
    try {
      const chatHistory = [];
      chatHistory.push({ role: "user", parts: [{ text: userPrompt }] });

      const payload = { contents: chatHistory };
      const apiKey = ""; // Canvas will automatically provide the API key at runtime
      const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`;

      const response = await fetch(apiUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const result = await response.json();

      if (
        result.candidates &&
        result.candidates.length > 0 &&
        result.candidates[0].content &&
        result.candidates[0].content.parts &&
        result.candidates[0].content.parts.length > 0
      ) {
        return result.candidates[0].content.parts[0].text;
      } else {
        console.error("Unexpected API response structure:", result);
        return "Sorry, I couldn't get a response. Please try again.";
      }
    } catch (error) {
      console.error("Error fetching bot response:", error);
      return "Oops! Something went wrong. Please try again later.";
    } finally {
      setIsLoading(false);
    }
  };

  const handleSendMessage = async () => {
    if (inputMessage.trim() === "") return;

    const newUserMessage: Message = {
      sender: "user",
      text: inputMessage.trim(),
    };
    setMessages((prevMessages) => [...prevMessages, newUserMessage]);
    setInputMessage(""); // Clear input immediately

    // Get bot response
    const botResponseText = await getBotResponse(newUserMessage.text);

    const newBotMessage: Message = { sender: "bot", text: botResponseText };
    setMessages((prevMessages) => [...prevMessages, newBotMessage]);
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && !isLoading) {
      handleSendMessage();
    }
  };

  return (
    <div
      className={`flex flex-col   antialiased ${
        isChatting && "h-screen bg-backGround-1"
      }`}
    >
      {/* Chat Header */}

      {/* Messages Display Area */}
      <div className="flex-1 overflow-y-auto ">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`flex ${
              msg.sender === "user" ? "justify-start" : "justify-end"
            }`}
          >
            {/* Outer div for gradient border */}
            <div>
              {/* Inner div for solid background and message text */}
              <div
                className={`max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg p-3 rounded-[16px] ${
                  msg.sender === "user"
                    ? "bg-backGroundCard text-gray-900  border-2 border-chatButton-1 p-[16px] m-[16px]"
                    : "bg-white text-gray-800 ml-[8px] border-borderColor-1 border-2"
                }`}
              >
                <p className="text-sm sm:text-base">{msg.text}</p>
              </div>
            </div>
          </div>
        ))}
        {isLoading && (
          <div className="flex justify-start">
            <div className="max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg p-3 rounded-xl shadow-md bg-gray-300 text-gray-800 rounded-bl-none">
              <div className="flex items-center space-x-2">
                <div
                  className="w-3 h-3 bg-gray-600 rounded-full animate-bounce"
                  style={{ animationDelay: "0s" }}
                ></div>
                <div
                  className="w-3 h-3 bg-gray-600 rounded-full animate-bounce"
                  style={{ animationDelay: "0.2s" }}
                ></div>
                <div
                  className="w-3 h-3 bg-gray-600 rounded-full animate-bounce"
                  style={{ animationDelay: "0.4s" }}
                ></div>
              </div>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} /> {/* Element to scroll into view */}
      </div>

      {/* Message Input Area */}
      <div>
        <div className="p-4 bg-white border-t border-gray-200 flex items-center gap-2 shadow-lg rounded-t-lg ">
          {/* New container for input and button */}
          <div className="relative flex-1">
            {/* Gradient Border Overlay */}
            <div
              className="absolute inset-0 rounded-full p-[2px]" /* Adjust p-[2px] for border thickness */
              style={{
                background:
                  "linear-gradient(to right, #8B5CF6, #F97316)" /* Purple to Orange */,
                mask: "url(#mask)" /* Apply mask for inner cut-out */,
                WebkitMask: "url(#mask)" /* For Webkit browsers */,
                maskComposite: "exclude" /* Exclude inner content from mask */,
                WebkitMaskComposite: "exclude" /* For Webkit browsers */,
              }}
            >
              {/* SVG for the mask to create the border effect */}
              <svg width="0" height="0">
                <defs>
                  <mask id="mask">
                    <rect x="0" y="0" width="100%" height="100%" fill="white" />
                    <rect
                      x="2px"
                      y="2px"
                      width="calc(100% - 4px)"
                      height="calc(100% - 4px)"
                      rx="9999px"
                      ry="9999px"
                      fill="black"
                    />
                  </mask>
                </defs>
              </svg>
            </div>

         <div className="relative rounded-[26px] p-[2px] bg-gradient-to-l from-custom-purple via-custom-orange-1 to-custom-orange-2 flex items-center " >
  <input
    type="text"
    className="w-full p-[12px] pr-[64px]  rounded-[24px] focus:outline-none transition duration-200 bg-white h-[64px]"
    placeholder="اینجا بنویس ... "
    value={inputMessage}
    onChange={(e) => setInputMessage(e.target.value)}
    onKeyPress={handleKeyPress}
    disabled={isLoading}
    onClick={handleChatting}
    onFocus={() => setIsInputFocused(true)}
    onBlur={() => setIsInputFocused(false)}
  />
  <button
    onClick={handleSendMessage}
    disabled={isLoading || inputMessage.trim() === ""}
    className={`absolute inset-y-0 right-0 flex items-center justify-center
                bg-chatButton-1  text-white w-10 h-10 my-auto mr-4 rounded-full shadow-lg
                transition duration-200 ease-in-out transform hover:scale-105
                disabled:bg-gray-400 disabled:cursor-not-allowed
                rotate-270`}
  >
    {isLoading ? (
      <svg
        className="animate-spin h-5 w-5 text-white"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
      >
        <circle
          className="opacity-25"
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          strokeWidth="4"
        ></circle>
        <path
          className="opacity-75"
          fill="currentColor"
          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
        ></path>
      </svg>
    ) : (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M14 5l7 7m0 0l-7 7m7-7H3"
        />
      </svg>
    )}
  </button>
</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatBot;
