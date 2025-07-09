import { FC } from "react";
import Header from "../../components/common/Header";

import ChatButton from "../../components/common/ChatButton";
import HeroSection from "../../components/konjKav/welcome/HeroSection";
import CardSection from "../../components/konjKav/welcome/CardSection";



const Welcome:FC = () => {
    return <div >
        <Header/>
        <div className="bg-backGround-1 h-full pb-10 ">
  <div className="mx-[32px] ">
      <HeroSection/>
    <CardSection/>
    
  </div>
        </div>
       
        <ChatButton textButton='ساخت چت جدید'/>
    </div>
};

export default Welcome;