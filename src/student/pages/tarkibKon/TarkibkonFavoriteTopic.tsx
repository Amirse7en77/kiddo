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
    if (!learnTopic) { // Should have a learnTopic to be here
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
    <div className="h-screen">
      <Header title={'ترکیب‌کن'}/>
      <div className='font-yekanBakh bg-backGround-1 pb-20'>
        <HeroSection />
        <div className="bg-white rounded-[24px] rounded-b-none pb-40 border-[2px] border-borderColor-1">
          <TopicSearchBox 
            searchQuery={favoriteTopic} 
            setSearchQuery={handleTopicChange}
          />
          <MainContent 
            onTopicSelect={handleTopicChange} 
            selectedTopicFromParent={favoriteTopic}
          />
        </div>
      </div>
      {isButtonActive ? (
        <ChatButton textButton='ساخت چت جدید' onClick={handleStartChat} />
      ) : (
        <DisableChatButton textButton='ساخت چت جدید' />
      )}
    </div>
  );
};

export default TarkibkonFavoriteTopic;