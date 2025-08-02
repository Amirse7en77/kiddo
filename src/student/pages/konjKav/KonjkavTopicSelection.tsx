import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Header from "../../../components/common/Header";
import ChatButton from "../../../components/common/ChatButton";
import DisableChatButton from "../../../components/common/DisableChatButton";
import HeroSection from "../../components/konjKav/topicSelection/HeroSection";
import MainContent from "../../components/konjKav/topicSelection/MainContent";
import TopicSearchBox from "../../components/konjKav/topicSelection/TopicSearchBox";
import { setSelectedTopic, activeButtonReducer, disableButtonReducer } from "../../../slice/konjkavSlice";
import { RootState } from "../../../store";

const KonjkavTopicSelection = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  
  const { selectedStudy, selectedTopic, studySelectionButton: isButtonActive } = useSelector((state: RootState) => state.konjkav);

  useEffect(() => {
    if (!selectedStudy) {
      navigate('/student/konjkav/study-selection');
    }
  }, [selectedStudy, navigate]);

  useEffect(() => {
    if (selectedTopic && selectedTopic.trim() !== "") {
      dispatch(activeButtonReducer());
    } else {
      dispatch(disableButtonReducer());
    }
  }, [selectedTopic, dispatch]);

  const handleStartChat = () => {
    if (selectedTopic && selectedTopic.trim() !== "") {
      navigate('/student/konjkav/chat');
    }
  };

  const handleTopicChange = (topic: string | null) => {
    dispatch(setSelectedTopic(topic || ""));
  };

  return (
    <div className="h-screen flex flex-col bg-backGround-1">
      <Header title={'کنج‌کـــاو'} backPath="/student/konjkav/recent-chat" />
      <div className='flex-1 flex flex-col min-h-0'>
        <HeroSection />
        <div className="flex-1 flex flex-col min-h-0 bg-white rounded-t-[24px] border-t-2 border-x-2 border-borderColor-1">
          <TopicSearchBox 
            searchQuery={selectedTopic} 
            setSearchQuery={handleTopicChange}
          />
          <h1 className="mb-[16px] mt-[12px] mx-[16px] text-[16px] font-extrabold">موضوعات پیشنهادی</h1>
          <MainContent 
            onTopicSelect={handleTopicChange} 
            selectedTopicFromParent={selectedTopic}
          />
        </div>
      </div>
      {isButtonActive ? (
        <ChatButton textButton='بزن بریم  ' onClick={handleStartChat} />
      ) : (
        <DisableChatButton textButton='بزن بریم  '/>
      )}
    </div>
  );
};

export default KonjkavTopicSelection;