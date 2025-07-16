// src/pages/StudySelection.tsx

import { useEffect, useState } from "react"; // Import useState
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import ChatButton from "../../../components/common/ChatButton";
import DisableChatButton from "../../../components/common/DisableChatButton";
import Header from "../../../components/common/Header";

import {  activeButtonReducer, disableButtonReducer, setFavoriteTopic } from "../../../slice/tarkibkonSlice"; // Import reducers
import { RootState } from "../../../store";
import HeroSection from "../../components/tarkibKon/favoriteTopic/HeroSection";
import TopicSearchBox from "../../components/tarkibKon/favoriteTopic/TopicSearchBox";
import MainContent from "../../components/tarkibKon/favoriteTopic/MainContent";


const TarkibkonFavoriteTopic = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const selectedStudy = useSelector((state: RootState) => state.tarkibkon.selectedStudy);
  // selectedTopic from Redux now represents the ID of the selected card
  const favoriteTopic = useSelector((state: RootState) => state.tarkibkon.favoriteTopic); 

  const [searchQuery, setSearchQuery] = useState<string>('');

  // Redirect if no study is selected
  useEffect(() => {
    if (!selectedStudy) {
      navigate('/student/tarkibkon/study-selection');
    }
  }, [selectedStudy, navigate]);

  // Combined effect for button activation based on selection OR search query
  useEffect(() => {
    const isActive = (favoriteTopic !== null && favoriteTopic !== "") || (searchQuery.trim() !== "");
    if (isActive) {
      dispatch(activeButtonReducer());
    } else {
      dispatch(disableButtonReducer());
    }
  }, [favoriteTopic, searchQuery, dispatch]); // Depend on selectedTopic and searchQuery

  const handleStartChat = () => {
    // Before navigating, you might want to decide if the chat is based on a selected topic
    // or the search query. This logic depends on your backend expectations.
    // For now, we'll just navigate if *either* is active.
    if ((favoriteTopic && favoriteTopic !== "") || searchQuery.trim() !== "") {
      navigate('/student/tarkibkon/chat');
    }
  };

  const handleTopicSelect = (topicId: string | null) => {
    // If a topic card is selected, clear the search query.
    // This ensures only one mode of input (selection or search) triggers the button.
    if (topicId) {
      setSearchQuery(""); 
      dispatch(setFavoriteTopic(topicId));
    } else {
      dispatch(setFavoriteTopic("")); // Deselect
    }
  };

  const handleSearchQueryChange = (query: string) => {
    setSearchQuery(query);
    // If the user types in the search box, deselect any topic card.
    if (query.trim() !== "") {
      dispatch(setFavoriteTopic("")); 
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
            selectedTopicFromParent={favoriteTopic} // Pass the selected topic to MainContent
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