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
       w-full
      "
    >
      <hr className="border-[1.5px] border-borderColor-1 w-full " />
      <div className=" px-[24px] py-[12px] flex justify-center items-center w-full">
        <div className="chat-button rounded-[16px] w-full  mx-[16px]">
          <button
            className="button-box text-borderColor-1 w-full cursor-pointer px-[8px] py-[12px]"
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