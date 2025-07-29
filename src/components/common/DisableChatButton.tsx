import React from 'react';

interface ButtonType {
  textButton: string;
}

const DisableChatButton: React.FC<ButtonType> = ({ textButton }) => {
  return (
   
      <div
        className="
          fixed bottom-0 left-0 right-0
        bg-white z-50
       w-full
      "
        
      >
        <hr className="border-[1.5px] border-borderColor-1 w-full" />
        <div className="px-[24px] py-[12px] flex justify-center items-center w-full">
          <div className="disableButton-box rounded-[16px]  mx-[16px] w-full">
            <button className="disableChat-button text-borderColor-1 px-[8px] py-[12px] w-full  cursor-pointer">
              {textButton}
            </button>
          </div>
        </div>
      </div>
    
  );
};

export default DisableChatButton;