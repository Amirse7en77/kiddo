import { FC } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../../components/common/Header";
import HeroSection from "../../components/darsYar/studyAssistant/HeroSection";
import CardSection from "../../components/darsYar/studyAssistant/CardSection";
import ChatButton from "../../../components/common/ChatButton";

const DarsyarWelcome: FC = () => {
  const navigate = useNavigate();
  

  const handleNewChat = () => {
    navigate("/student/darsyar/study-selection");
  };

  return (
    <div className="h-screen flex flex-col">
      <Header title={'درس‌یـــــار'} />
      <div className="bg-backGround-1 flex-1 ">
        <div className="mx-[32px] h-full  pb-[80px]">
          <HeroSection />
          <CardSection />
        </div>
      </div>
      <ChatButton textButton='ساخت چت جدید' onClick={handleNewChat} />
    </div>
  );
};

export default DarsyarWelcome;