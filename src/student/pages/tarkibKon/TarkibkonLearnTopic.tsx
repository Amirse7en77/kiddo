import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { RootState } from "../../../store";
import { activeButtonReducer, disableButtonReducer, setLearnTopic } from "../../../slice/tarkibkonSlice";
import Header from "../../../components/common/Header";
import ChatButton from "../../../components/common/ChatButton";
import DisableChatButton from "../../../components/common/DisableChatButton";
import MainContent from "../../components/tarkibKon/learnTopic/MainContent";
import TopicSearchBox from "../../components/tarkibKon/learnTopic/TopicSearchBox";
import HeroSection from "../../components/tarkibKon/learnTopic/HeroSection";

const TarkibkonLearnTopic = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { selectedStudy, learnTopic, studySelectionButton: isButtonActive } = useSelector((state: RootState) => state.tarkibkon);

  useEffect(() => {
    if (!selectedStudy) {
      navigate('/student/tarkibkon/study-selection');
    }
  }, [selectedStudy, navigate]);

  useEffect(() => {
    if (learnTopic && learnTopic.trim() !== "") {
      dispatch(activeButtonReducer());
    } else {
      dispatch(disableButtonReducer());
    }
  }, [learnTopic, dispatch]);

  const handleNext = () => {
    if (learnTopic && learnTopic.trim() !== "") {
      navigate('/student/tarkibkon/favorite-topic-selection');
    }
  };

  const handleTopicChange = (topic: string | null) => {
    dispatch(setLearnTopic(topic || ""));
  };

  return (
    <div className="h-screen flex flex-col bg-backGround-1">
      <Header title={'ترکــــــیب‌کن'} backPath="/student/tarkibkon/recent-chat" />
      <div className='flex-1 flex flex-col min-h-0'>
        <HeroSection />
        <div className="flex-1 flex flex-col min-h-0 bg-white rounded-t-[24px] border-t-2 border-x-2 border-borderColor-1">
          <TopicSearchBox 
            searchQuery={learnTopic} 
            setSearchQuery={handleTopicChange}
          />
          <h1 className="mb-[16px] mt-[12px] mx-[16px] text-[16px] font-extrabold">موضوعات پیشنهادی</h1>
          <MainContent 
            onTopicSelect={handleTopicChange} 
            selectedTopicFromParent={learnTopic}
          />
        </div>
      </div>
      {isButtonActive ? (
        <ChatButton textButton='بعدی' onClick={handleNext} />
      ) : (
        <DisableChatButton textButton='بعدی' />
      )}
    </div>
  );
};

export default TarkibkonLearnTopic;