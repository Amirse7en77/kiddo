import { FC } from "react";
import Header from "../../../components/common/Header";

import ChatButton from "../../../components/common/ChatButton";
import HeroSection from "../../../student/components/tarkibKon/welcome/HeroSection";
import CardSection from "../../../student/components/tarkibKon/welcome/CardSection";
import { useNavigate } from "react-router-dom";
;



const TarkibkonWelcome:FC = () => {
    const navigate=useNavigate()
    const handleNewChat=()=>{
        navigate('/student/tarkibkon/study-selection')
    }
    return (
      <div className="h-screen flex flex-col">
        <Header title={'ترکــــــیب‌کن'} />
        <div className="bg-backGround-1 flex-1 overflow-hidden flex flex-col">
          <div className="mx-4 md:mx-[32px] flex-1 min-h-0 overflow-y-auto pb-[80px]">
            <HeroSection />
            <CardSection />
          </div>
          <div className="fixed left-0 right-0 bottom-0 z-10 px-4 pb-4 md:static md:px-0 md:pb-0 bg-backGround-1 md:bg-transparent">
            <ChatButton textButton='ساخت چت جدید' onClick={handleNewChat} />
          </div>
        </div>
      </div>
    );
};

export default TarkibkonWelcome;