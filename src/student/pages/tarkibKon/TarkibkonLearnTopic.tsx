import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { RootState } from "../../../store";
import { useEffect, useState } from "react";
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
  const selectedStudy = useSelector((state: RootState) => state.tarkibkon.selectedStudy);
  // selectedTopic from Redux now represents the ID of the selected card
  const learnTopic = useSelector((state: RootState) => state.tarkibkon.learnTopic); 

  const [searchQuery, setSearchQuery] = useState<string>('');

  // Redirect if no study is selected
  useEffect(() => {
    if (!selectedStudy) {
      navigate('/student/tarkibkon/study-selection');
    }
  }, [selectedStudy, navigate]);

  // Combined effect for button activation based on selection OR search query
  useEffect(() => {
    const isActive = (learnTopic !== null && learnTopic !== "") || (searchQuery.trim() !== "");
    if (isActive) {
      dispatch(activeButtonReducer());
    } else {
      dispatch(disableButtonReducer());
    }
  }, [learnTopic, searchQuery, dispatch]); // Depend on selectedTopic and searchQuery

  const handleStartChat = () => {
    // Before navigating, you might want to decide if the chat is based on a selected topic
    // or the search query. This logic depends on your backend expectations.
    // For now, we'll just navigate if *either* is active.
    if ((learnTopic && learnTopic !== "") || searchQuery.trim() !== "") {
      navigate('/student/tarkibkon/favorite-topic-selection');
    }
  };

  const handleTopicSelect = (topicId: string | null) => {
    // If a topic card is selected, clear the search query.
    // This ensures only one mode of input (selection or search) triggers the button.
    if (topicId) {
      setSearchQuery(""); 
      dispatch(setLearnTopic(topicId));
    } else {
      dispatch(setLearnTopic("")); // Deselect
    }
  };

  const handleSearchQueryChange = (query: string) => {
    setSearchQuery(query);
    // If the user types in the search box, deselect any topic card.
    if (query.trim() !== "") {
      dispatch(setLearnTopic("")); 
    }
  };

  // Get button activation state from Redux (if you want to control it that way)
  const isButtonActive = useSelector((state: RootState) => state.tarkibkon.studySelectionButton);

  return (
    <div className="h-screen">
      <Header title={'کنج‌کاو'}/>
      <div className='font-yekanBakh bg-backGround-1 pb-20'>
        
        <HeroSection />
        <div className="bg-white rounded-[24px] rounded-b-none pb-40 border-[2px] border-borderColor-1">
          <TopicSearchBox 
            searchQuery={searchQuery} 
            setSearchQuery={handleSearchQueryChange} // Use the new handler
          />
          <MainContent 
            onTopicSelect={handleTopicSelect} 
            selectedTopicFromParent={learnTopic} // Pass the selected topic to MainContent
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

export default TarkibkonLearnTopic;