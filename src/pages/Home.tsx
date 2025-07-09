import Header from "../components/home/Header";

import ToolCard from "../components/home/ToolCard";
import RecentChatCard from "../components/darsYar/recentChat/RecentChatCard";



const Home = () => {
  return (
    <div className="h-screen bg-backGround-1 ">
      <Header />

     <div className=" bg-backGround-1  pb-4">
         

     <div className=" p-[16px] ">
      <h1 className="mb-[40px] font-extrabold text-[14px]">ابزار‌ها</h1>
     
     
       
        <div className="mb-[24px]">
          <div className="flex justify-center items-center mb-[40px] gap-[12px]">
          <ToolCard  title="ترکیب‌کن" description="درسا رو همونطوری که دوست داری یاد بگیر." />
        <ToolCard  title="کنج‌کاو" description="درسا رو همونطوری که دوست داری یاد بگیر."/>
        </div>
        <div className="flex justify-center items-center gap-[12px]">
          <ToolCard  title="سوال‌یار" description="درسا رو همونطوری که دوست داری یاد بگیر." />
        <ToolCard  title="آزمون‌ساز" description="درسا رو همونطوری که دوست داری یاد بگیر." />
        </div>
        </div>
      </div>
    

      <h3 className="font-extrabold text-right text-[14px] mr-[16px] mb-[16px]">چت‌های اخیر</h3>
      <div className="space-y-[12px] mx-[24px]">
     <RecentChatCard/>
     <RecentChatCard/>
     <RecentChatCard/>
     
      </div>
     </div>
    </div>
  );
};

export default Home;
