import React from "react";

interface ButtonType {
  textButton: string;
}

const ChatButton: React.FC<ButtonType> = ({ textButton }) => {
  console.log(textButton);
  return (
    <>
      <hr className="border-[1.5px] border-borderColor-1 w-full" />
      
      <div
        className="
          fixed bottom-0 left-0 right-0
          flex justify-center items-center
          bg-white p-4 z-50
          
        "
      >
        <div className="chat-button border-2 border-backGroundButton m-1">
          <button className="button-box text-white w-[327px] h-[50px] cursor-pointer">
            {textButton}
          </button>
        </div>
      </div>
    </>
  );
};

export default ChatButton;