import React from "react";
interface buttonType{
  textButton:string
}

const ChatButton:React.FC<buttonType> = ({textButton}) => {
  console.log(textButton)
  return (
    <>
      <hr className="border-[1.5px] text-borderColor-1 w-full " />
      <div className="h-[70px] px-[24px] py-[16px] flex justify-center items-center  font-yekanBakhText">
        <div className="button-box rounded-[24px] border-2 border-backGroundButton mx-[16px]">
          <button className="chat-button text-white w-[327px] h-[50px] cursor-pointer">
            {textButton}
          </button>
        </div>
      </div>
    </>
  );
};

export default ChatButton;
