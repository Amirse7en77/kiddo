// src/pages/StudySelection.tsx
import React, { useState } from 'react';
import Header from '../components/common/Header';
import HeroSection from '../components/studySelection/HeroSection';
import MainContent from '../components/studySelection/MainContent'; // This is now draggable
import ChatButton from '../components/common/ChatButton';

const StudySelection = () => {
   

  return (
    <div className="relative min-h-screen">
      <Header />
      <div className='font-yekanBakh bg-backGround-1 pb-40'> {/* Increased pb to avoid overlap with draggable MainContent */}
        <HeroSection />
         <MainContent />
      </div>
      <ChatButton textButton=' بعدی '/>


     
    </div>
  );
};

export default StudySelection;