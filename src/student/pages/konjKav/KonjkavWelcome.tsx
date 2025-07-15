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

    return <div >
        <Header title={'کنج‌کاو'}/>
        <div className="bg-backGround-1 h-full pb-10 ">
  <div className="mx-[32px] ">
      <HeroSection/>
    <CardSection/>
    
  </div>
        </div>
       
        <ChatButton textButton='ساخت چت جدید' onClick={handleNavigate}/>
    </div>
};

export default KonjkavWelcome;