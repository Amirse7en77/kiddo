import { FC } from "react";
import Header from "../../../components/common/Header";

import ChatButton from "../../../components/common/ChatButton";
import HeroSection from "../../../student/components/konjKav/welcome/HeroSection";
import CardSection from "../../../student/components/konjKav/welcome/CardSection";
import { useNavigate } from "react-router-dom";



const KonjkavWelcome:FC = () => {
    const navigate=useNavigate()
    const handleNavigate=()=>{
        navigate('/student/konjkav/study-selection')
    }

    return (
      <div className="h-screen flex flex-col">
        <Header title={'کنج‌کـــاو'} />
        <div className="bg-backGround-1 flex-1  flex flex-col">
          <div className="mx-4  flex-1   pb-[80px]">
            <HeroSection />
            <CardSection />
          </div>
          <div >
            <ChatButton textButton='ساخت چت جدید' onClick={handleNavigate} />
          </div>
        </div>
      </div>
    );
};

export default KonjkavWelcome;