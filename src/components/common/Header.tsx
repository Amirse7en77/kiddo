import { FC } from "react";

const Header: FC = () => {
  


  return (
    <div>
      <header
        className={`
          flex items-center justify-center bg-white py-[24px] px-[16px] h-[52px]
            fixed top-0 w-full
         
        `}
      >
        <div className=" flex items-center justify-center">
   
        </div>
        <div className="text-[16px] font-extrabold">درس یار</div>
        
      </header>
      
       <div className="h-[52px]"></div>
      <hr className="border-[1.5px] border-borderColor-1 w-full" />
    </div>
  );
};

export default Header;