import Header from "../components/home/Header";
import HeroSection from "../components/home/HeroSection";
import RecentItem from "../components/home/RecentItem";
import ToolCard from "../components/home/ToolCard";
import book from './../assets/images/book.png'


const Home = () => {
  return (
    <div className="min-h-screen bg-gray-200  space-y-4 font-yekanBakh">
      <Header />

     <div className="m-4">
         <HeroSection/>

      <h3 className="font-bold text-right m-1">ابزارهای برتر</h3>
       <div className="flex flex-col items-center text-center p-4 rounded-xl bg-white shadow gap-2 relative   overflow-visible mb-10">
      
         <img src={book} alt="Image" className="absolute -top-5  w-10 h-10"/>
      
      <h3 className="font-bold">درس یار</h3>
      <p className="text-sm text-gray-500">"بهت کمک می‌کنه، درسا رو بهتر بفهمی!"</p>
    </div>
      <div className="grid grid-cols-2 gap-3">
       
        <ToolCard icon="🧩" title="ترکیب‌کن" description="درسا رو همونطوری که دوست داری یاد بگیر." />
        <ToolCard icon="🔍" title="گنج‌کاو" description="همراه خوب تو برای یادگرفتن چیزی جدید را یاد بگیر!" />
        <ToolCard icon="✅" title="سوال‌یار" description="با راهنمایی آزمون بده و درسا رو بهتر یاد بگیر!" />
        <ToolCard icon="✏️" title="آزمون‌ساز" description="کلی نمونه سوال حرفه‌ای برات طراحی می‌کنه!" />
      </div>

      <h3 className="font-bold text-right m-2">چت‌های اخیر</h3>
      <div className="space-y-4">
        <RecentItem icon="✏️" title="آزمون درس علوم فصل ۱ و ۳ و ۴" date="۲۲ خرداد" />
        <RecentItem icon="♾️" title="توضیحات مربوط به فتوستنز و بقیه اطلاعات مهم..." date="۲۲ خرداد" />
        <RecentItem icon="📖" title="توضیحات مربوط به فتوستنز و بقیه اطلاعات مهم..." date="۲۲ خرداد" />
      </div>
     </div>
    </div>
  );
};

export default Home;
