import React from "react";
import darsyar from "./../../../../assets/images/DarsYar.png";
const StudentActivity = () => {
  return (
    <div >
      <div className="flex  p-[16px] gap-[16px]  items-center">
        <div >
          <img className="w-[32px] h-[32px] " src={darsyar} />
        </div>
        <div  className="flex flex-col">
          <div className="flex justify-between mb-[8px]">
           <div className="flex ">
             <h1 className="font-extrabold text-[14px]">امیر علی رستمی</h1>
           </div>

           <div className="flex mr-10">
             <p className=" bg-backGround-1  px-[8px] rounded-[16px] text-[10px] py-[2px] mx-[2px]">
              فعال
            </p>
            <p className=" bg-backGround-1  px-[8px] rounded-[16px] text-[10px] py-[2px]">
              خوشحال
            </p>
           </div>
          </div>
          <div className="flex justify-between ">
           <div className="flex ">
             <h1 className="font-extrabold text-[10px]"> آخرین فعالیت : 22 خرداد </h1>
           </div>

           <div className="flex mr-10">
            
            <p className=" bg-[#F2EFFF]  px-[8px] rounded-[16px] text-[10px] py-[2px]">
              خوب
            </p>
           </div>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default StudentActivity;
