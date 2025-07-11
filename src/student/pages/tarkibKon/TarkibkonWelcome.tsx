import { FC } from "react";
import Header from "../../../components/common/Header";

import ChatButton from "../../../components/common/ChatButton";
import HeroSection from "../../../student/components/tarkibKon/welcome/HeroSection";
import CardSection from "../../../student/components/tarkibKon/welcome/CardSection";
;



const TarkibkonWelcome:FC = () => {
    return <div >
        <Header title={'ترکیب‌کن'}/>
        <div className="bg-backGround-1 h-full pb-10 ">
  <div className="mx-[32px] ">
      <HeroSection/>
    <CardSection/>
    
  </div>
        </div>
       
        <ChatButton textButton='ساخت چت جدید'/>
    </div>
};

export default TarkibkonWelcome;