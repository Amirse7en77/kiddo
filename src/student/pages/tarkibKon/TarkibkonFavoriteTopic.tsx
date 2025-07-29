import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { RootState } from "../../../store";
import { activeButtonReducer, disableButtonReducer, setFavoriteTopic } from "../../../slice/tarkibkonSlice";
import Header from "../../../components/common/Header";
import ChatButton from "../../../components/common/ChatButton";
import DisableChatButton from "../../../components/common/DisableChatButton";
import MainContent from "../../components/tarkibKon/favoriteTopic/MainContent";
import TopicSearchBox from "../../components/tarkibKon/favoriteTopic/TopicSearchBox";
import HeroSection from "../../components/tarkibKon/favoriteTopic/HeroSection";

const TarkibkonFavoriteTopic = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { learnTopic, favoriteTopic, studySelectionButton: isButtonActive } = useSelector((state: RootState) => state.tarkibkon);

  useEffect(() => {
    if (!learnTopic) {
      navigate('/student/tarkibkon/learn-topic-selection');
    }
  }, [learnTopic, navigate]);

  useEffect(() => {
    if (favoriteTopic && favoriteTopic.trim() !== "") {
      dispatch(activeButtonReducer());
    } else {
      dispatch(disableButtonReducer());
    }
  }, [favoriteTopic, dispatch]);

  const handleStartChat = () => {
    if (favoriteTopic && favoriteTopic.trim() !== "") {
      navigate('/student/tarkibkon/chat');
    }
  };

  const handleTopicChange = (topic: string | null) => {
    dispatch(setFavoriteTopic(topic || ""));
  };

  return (
    <div className="h-screen flex flex-col bg-backGround-1">
      <Header title={'ترکــــــیب‌کن'}/>
      <div className='flex-1 flex flex-col min-h-0'>
        <HeroSection />
        <div className="flex-1 flex flex-col min-h-0 bg-white rounded-t-[24px] border-t-2 border-x-2 border-borderColor-1">
          <TopicSearchBox 
            searchQuery={favoriteTopic} 
            setSearchQuery={handleTopicChange}
          />
          <h1 className="mb-[16px] mt-[12px] mx-[16px] text-[16px] font-extrabold">موضوعات پیشنهادی</h1>
          <MainContent 
            onTopicSelect={handleTopicChange} 
            selectedTopicFromParent={favoriteTopic}
          />
        </div>
      </div>
      {isButtonActive ? (
        <ChatButton textButton='بزن بریم  ' onClick={handleStartChat} />
      ) : (
        <DisableChatButton textButton='بزن بریم  ' />
      )}
    </div>
  );
};

export default TarkibkonFavoriteTopic;