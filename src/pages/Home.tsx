import Header from "../components/home/Header";

import ToolCard from "../components/home/ToolCard";
import RecentChatCard from "../components/recentChat/RecentChatCard";



const Home = () => {
  return (
    <div className="h-screen">
      <Header />

     <div className=" bg-backGround-1 pb-10">
         

     <div className=" p-[16px] ">
      <h1 className="mb-[40px] font-extrabold text-[14px]">ابزار‌ها</h1>
     
     
       
        <div >
          <div className="flex mb-[40px] gap-[12px]">
          <ToolCard  title="ترکیب‌کن" description="درسا رو همونطوری که دوست داری یاد بگیر." />
        <ToolCard  title="کنج‌کاو" description="درسا رو همونطوری که دوست داری یاد بگیر."/>
        </div>
        <div className="flex gap-[12px]">
          <ToolCard  title="سوال‌یار" description="درسا رو همونطوری که دوست داری یاد بگیر." />
        <ToolCard  title="آزمون‌ساز" description="درسا رو همونطوری که دوست داری یاد بگیر." />
        </div>
        </div>
      </div>
    

      <h3 className="font-bold text-right m-2">چت‌های اخیر</h3>
      <div className="space-y-4">
     <RecentChatCard/>
     <RecentChatCard/>
     <RecentChatCard/>
      </div>
     </div>
    </div>
  );
};

export default Home;
