import Header from "../components/home/Header";
import HeroSection from "../components/home/HeroSection";
import RecentItem from "../components/home/RecentItem";
import ToolCard from "../components/home/ToolCard";
import RecentChatCard from "../components/recentChat/RecentChatCard";
import book from './../assets/images/DarsYar.png'


const Home = () => {
  return (
    <div >
      <Header />

     <div className="h-screen bg-backGround-1">
         

     
     
      <div className="flex items-center m-10 flex-row">
       
        <div>
          <ToolCard  title="ترکیب‌کن" description="درسا رو همونطوری که دوست داری یاد بگیر." />
        <ToolCard  title="گنج‌کاو" description="همراه خوب تو برای یادگرفتن چیزی جدید را یاد بگیر!" />
        </div>
        <div >
          <ToolCard  title="سوال‌یار" description="با راهنمایی آزمون بده و درسا رو بهتر یاد بگیر!" />
        <ToolCard  title="آزمون‌ساز" description="کلی نمونه سوال حرفه‌ای برات طراحی می‌کنه!" />
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
