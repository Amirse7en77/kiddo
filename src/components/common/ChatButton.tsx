import React from 'react';

interface ButtonType {
  textButton: string;
}

const ChatButton: React.FC<ButtonType> = ({ textButton }) => {
  return (
    <>
      {/*
        The main container for the button needs to be positioned.
        `fixed` for staying in the viewport, `bottom-0` to stick to the bottom,
        `left-0` and `right-0` (or `w-full`) to span the width.
        We'll include the `hr` directly within this fixed container if you want it to
        be part of the sticky bottom bar.
        `bg-white` and `z-50` are good for visibility and layering.
      */}
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
            <button className="button-box text-borderColor-1 w-[327px] h-[50px] cursor-pointer">
              {textButton}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ChatButton;