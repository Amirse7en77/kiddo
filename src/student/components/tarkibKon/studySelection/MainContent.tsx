// MainContent.tsx
import React from 'react';
import CardSelector from './CardSelector';

interface MainContentProps {
  onLessonSelect: (selectedLessonValue: string) => void;
}

const MainContent: React.FC<MainContentProps> = ({ onLessonSelect }) => {
  return (
    <div
      className='
        border-2 border-borderColor-1 bg-white rounded-[16px]
        p-4 
        h-full w-full 
        overflow-y-auto 
        flex flex-col 
      '
    >
      <div> 
        <CardSelector onLessonSelect={onLessonSelect} />
      </div>
    </div>
  );
};

export default MainContent;