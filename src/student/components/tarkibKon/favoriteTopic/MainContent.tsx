// src/student/components/tarkibKon/favoriteTopic/MainContent.tsx
import React from 'react';
import { useDispatch } from 'react-redux';
import { activeButtonReducer, disableButtonReducer } from '../../../../slice/tarkibkonSlice';
import TopicSelector from './TopicSelector'

interface MainContentProps {
  onTopicSelect: (topicId: string | null) => void;
  selectedTopicFromParent: string | null;
}

const MainContent: React.FC<MainContentProps> = ({ onTopicSelect, selectedTopicFromParent }) => {
  const dispatch = useDispatch();

  const handleTopicSelect = (topicId: string | null) => {
    onTopicSelect(topicId);
    
    if (topicId) {
      dispatch(activeButtonReducer());
    } else {
      dispatch(disableButtonReducer());
    }
  };

  return (
    <div
      className='
        p-4 
        h-full w-full 
        overflow-y-auto 
        flex flex-col 
        pb-24
      '
    >
      <TopicSelector
        onSelectCard={handleTopicSelect}
        selectedCardId={selectedTopicFromParent}
        isDisabled={false}
      />
    </div>
  );
};

export default MainContent;