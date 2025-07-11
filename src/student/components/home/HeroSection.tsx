import { FC } from "react";
import book from './../../../assets/images/book.png'
import hero from './../../../assets/images/heroSection.png'

const HeroSection: FC = () => {
  return (
   <div  className="bg-gradient-to-l from-custom-purple via-custom-orange-1 to-custom-orange-2 p-[2px] rounded-[18px] flex items-center justify-between h-25 ">
        <div className="flex h-full w-full bg-gradient-to-l from-purple-100 to-orange-100 rounded-[16px] ">
            <div className="flex flex-3/4 justify-center items-center flex-col">
       <div className="flex justify-center">
         <img src={book}/>
          <h2 className="font-bold text-lg text-center">درس‌یار</h2>
       </div>
          <p className="text-sm text-gray-700">بهت کمک می‌کنه، درسا رو بهتر بفهمی!</p>
        </div>
        <div className="text-4xl flex flex-1/4 justify-end ml-4">
        <img  src={hero}/>
        </div>
        </div>
        
      </div>
  );
};

export default HeroSection;
