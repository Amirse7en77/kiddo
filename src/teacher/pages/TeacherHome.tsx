import React from "react";
import Header from "../../student/components/home/Header";
import Classes from "../components/home/Classes";
import ToolCard from "../components/home/ToolCard";
import RecentChatCard from "../../components/common/RecentChatCard";
import ProgressQuestion from "../components/home/ProgressQuestion";

const TeacherHome = () => {
  return (
    <div>
      <Header />
      <div className="bg-backGround-1 h-full">
        <div className="p-[24px] gap-[16px]">
          <div>
            <h1 className="pb-[16px]">کلاس‌ها</h1>
            <Classes />
            <Classes />
          </div>
          <div>
            <h1 className="pt-[20px] pb-[32px]">ابزار‌ها</h1>
            <div className="mb-[24px]">
              <div className="flex justify-center items-center mb-[40px] gap-[12px]">
                <ToolCard
                  title="ترکیب‌کن"
                  description="درسا رو همونطوری که دوست داری یاد بگیر."
                />
                <ToolCard
                  title="کنج‌کاو"
                  description="درسا رو همونطوری که دوست داری یاد بگیر."
                />
              </div>
              <div className="flex justify-center items-center gap-[12px]">
                <ToolCard
                  title="سوال‌یار"
                  description="درسا رو همونطوری که دوست داری یاد بگیر."
                />
                <ToolCard
                  title="آزمون‌ساز"
                  description="درسا رو همونطوری که دوست داری یاد بگیر."
                />
              </div>
            </div>
          </div>
          <div>
            <h1 className="mb-[16px]">وضعیت مصرف</h1>
            
            <ProgressQuestion progress={50} />
          </div>
          <h3 className="font-extrabold text-right text-[14px] mt-[32px] mb-[16px]">چت‌های اخیر</h3>
      <div className="space-y-[12px] ">
     <RecentChatCard/>
     <RecentChatCard/>
     <RecentChatCard/>
     
      </div>
        </div>

      </div>
    </div>
  );
};

export default TeacherHome;
