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
    <div className="h-screen">
      <Header title={'ترکیب‌کن'}/>
      <div className='font-yekanBakh bg-backGround-1 pb-20'>
        <HeroSection />
        <div className="bg-white rounded-[24px] rounded-b-none pb-40 border-[2px] border-borderColor-1">
          <TopicSearchBox 
            searchQuery={learnTopic} 
            setSearchQuery={handleTopicChange}
          />
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