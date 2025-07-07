import React from "react";

interface ButtonType {
  textButton: string;
}

const ChatButton: React.FC<ButtonType> = ({ textButton }) => {
  console.log(textButton);
  return (
    <>
      <hr className="border-[1.5px] border-borderColor-1 w-full" />
      {/*
        The main container for the button needs to be positioned.
        `fixed` for staying in the viewport, `bottom-0` to stick to the bottom,
        `left-0` and `right-0` (or `w-full`) to span the width,
        and `p-4` for some padding around the button.
        `bg-white` and `z-50` are good for visibility and layering.
      */}
      <div
        className="
          fixed bottom-0 left-0 right-0
          flex justify-center items-center
          bg-white p-4 z-50
          shadow-lg 
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