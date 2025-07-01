import { FC } from "react";
import image1 from './../assets/images/header.png'

const Header: FC = () => {
  return (
    <header className="flex items-center justify-center  bg-white p-2 ">
        <div className="w-8 h-8 rounded-md  flex items-center justify-center">
        <img src={image1}/>
      </div>
      <div className="text-xl font-bold">کیدو</div>
      
    </header>
  );
};

export default Header;
