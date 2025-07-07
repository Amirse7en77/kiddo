import React from 'react'
interface buttonType{
  textButton:string
}

const DisableChatButton:React.FC<buttonType> = ({textButton}) => {
  return (
    <div>
       <>
      <hr className="border-[1.5px] text-borderColor-1 w-full " />
      <div className="h-[70px] px-[24px] py-[16px] flex justify-center items-center  ">
        <div className="card-box rounded-[24px] border-2 border-backGround-1 mx-[16px]">
          <button className="disableChat-button text-borderColor-1 w-[327px] h-[50px] cursor-pointer">
            {textButton}
          </button>
        </div>
      </div>
    </>
    </div>
  )
}

export default DisableChatButton
