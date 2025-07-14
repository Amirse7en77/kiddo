import { FC } from "react";

interface ButtonType{
title:string
}

const Header: FC<ButtonType> = ({title}) => {
  


  return (
    <div>
      <header
        className={`
          flex items-center justify-center bg-white py-[24px] px-[16px] h-[52px]
            fixed top-0 w-full z-100
         
        `}
      >
        <div className=" flex items-center justify-center">
   
        </div>
        <div className="text-[16px] font-extrabold">{title} </div>
        
      </header>
      
       <div className="h-[52px]"></div>
      <hr className="border-[2px] border-borderColor-1 w-full" />
    </div>
  );
};

export default Header;