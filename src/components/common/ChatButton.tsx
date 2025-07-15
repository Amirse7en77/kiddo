import React from 'react';

interface ButtonType {
  textButton: string;
  onClick?: () => void;
}

const ChatButton: React.FC<ButtonType> = ({ textButton, onClick }) => {
  return (
    <div
      className="
        fixed bottom-0 left-0 right-0
        bg-white z-50
        shadow-lg 
      "
    >
      <hr className="border-[1.5px] border-borderColor-1 w-full" />
      <div className="h-[70px] px-[24px] py-[16px] flex justify-center items-center">
        <div className="chat-button rounded-[24px] border-2 border-backGroundButton mx-[16px]">
          <button
            className="button-box text-borderColor-1 w-[327px] h-[50px] cursor-pointer"
            onClick={onClick}
          >
            {textButton}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatButton;