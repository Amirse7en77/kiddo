import React from "react";
import darsyar from "./../../../../assets/images/DarsYar.png";
const StudentsActivities = () => {
  return (
    <div className="border-2 border-backGround-1 rounded-[24px] mx-[16px]">
      <div >
        <div className="flex justify-between items-center bg-white rounded-[22px] p-[16px] gap-[16px] pl-[24px]">
          <div>
            <img className="w-[56px] h-[56px] " src={darsyar} />
          </div>
          <div className="flex flex-col gap-[4px] ">
            <h1 className="font-extrabold line-clamp-1  text-[14px]">
              کلاس ششم الف{" "}
            </h1>
            <div className="flex justify-start items-start gap-[4px]">
              <p className=" bg-backGround-1 gap-[8px] px-[8px] rounded-[16px] text-[10px] py-[2px]">
                22 دانش آموز
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-[4px] ">
            <div className="flex justify-start items-start gap-[4px]">
              <p className=" bg-backGround-1 gap-[8px] px-[8px] rounded-[16px] text-[10px] py-[2px] ">
                22 دانش آموز
              </p>
            </div>
            <h1 className="font-extrabold line-clamp-1  text-[14px]">
              کلاس ششم الف{" "}
            </h1>
          </div>
        </div>
         <div className="flex justify-between items-center bg-white rounded-[22px] p-[16px] gap-[16px] pl-[24px]">
          <div>
            <img className="w-[56px] h-[56px] " src={darsyar} />
          </div>
          <div className="flex flex-col gap-[4px] ">
            <h1 className="font-extrabold line-clamp-1  text-[14px]">
              کلاس ششم الف{" "}
            </h1>
            <div className="flex justify-start items-start gap-[4px]">
              <p className=" bg-backGround-1 gap-[8px] px-[8px] rounded-[16px] text-[10px] py-[2px]">
                22 دانش آموز
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-[4px] ">
            <div className="flex justify-start items-start gap-[4px]">
              <p className=" bg-backGround-1 gap-[8px] px-[8px] rounded-[16px] text-[10px] py-[2px]">
                22 دانش آموز
              </p>
            </div>
            <h1 className="font-extrabold line-clamp-1  text-[14px]">
              کلاس ششم الف{" "}
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentsActivities;
