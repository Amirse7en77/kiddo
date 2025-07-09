import { FC } from "react";
import Header from "../../components/common/Header";
import HeroSection from "../../components/darsYar/studyAssistant/HeroSection";
import CardSection from "../../components/darsYar/studyAssistant/CardSection";
import ChatButton from "../../components/common/ChatButton";



const StudyAssistant:FC = () => {
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

export default StudyAssistant;