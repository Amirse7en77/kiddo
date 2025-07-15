// src/pages/StudySelection.tsx

import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import ChatButton from "../../../components/common/ChatButton";
import DisableChatButton from "../../../components/common/DisableChatButton";
import Header from "../../../components/common/Header";
import HeroSection from "../../components/konjKav/topicSelection/HeroSection";
import MainContent from "../../components/konjKav/topicSelection/MainContent";
import { setSelectedTopics } from "../../../slice/konjkavSlice";
import { RootState } from "../../../types/state";

const KonjkavTopicSelection = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const selectedStudy = useSelector((state: RootState) => state.konjkav.selectedStudy);
  const selectedTopics = useSelector((state: RootState) => state.konjkav.selectedTopics);

  // Redirect if no study is selected
  useEffect(() => {
    if (!selectedStudy) {
      navigate('/student/konjkav/study-selection');
    }
  }, [selectedStudy, navigate]);

  const handleStartChat = () => {
    if (selectedStudy && selectedTopics.length > 0) {
      navigate('/student/konjkav/chat');
    }
  };

  const handleTopicSelect = (topics: string[]) => {
    dispatch(setSelectedTopics(topics));
  };

  // Check if any topics are selected for button activation
  const isButtonActive = selectedStudy !== null && selectedTopics.length > 0;

  return (
    <div className="h-screen">
      <Header title={'کنج‌کاو'}/>
      <div className='font-yekanBakh bg-backGround-1 pb-20'>
        <HeroSection />
        <MainContent onTopicSelect={handleTopicSelect} selectedStudy={selectedStudy} />
      </div>
      {isButtonActive ? (
        <ChatButton textButton='ساخت چت جدید' onClick={handleStartChat} />
      ) : (
        <DisableChatButton textButton='ساخت چت جدید' />
      )}
    </div>
  );
};

export default KonjkavTopicSelection;