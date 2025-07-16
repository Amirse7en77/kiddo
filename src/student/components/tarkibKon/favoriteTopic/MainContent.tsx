// src/student/pages/konjKav/topicSelection/MainContent.tsx
import React from 'react';
import { useDispatch } from 'react-redux';
import { activeButtonReducer, disableButtonReducer } from '../../../../slice/konjkavSlice';
import TopicSelector from './TopicSelector'

// This Topic interface isn't directly used by TopicSelector anymore,
// but it's good to keep if you plan to use these topics for filtering/search later.
interface Topic {
  id: string;
  title: string;
  description: string;
  emoji: string;
}

interface MainContentProps {
  onTopicSelect: (topicId: string | null) => void; // Now passes a single ID or null
  selectedTopicFromParent: string | null; // New prop to receive the currently selected topic
}

const MainContent: React.FC<MainContentProps> = ({ onTopicSelect, selectedTopicFromParent }) => {
  const dispatch = useDispatch();

 

  // handleTopicSelect now directly passes the selected ID to the parent via onTopicSelect
  const handleTopicSelect = (topicId: string | null) => {
    onTopicSelect(topicId); // Pass the ID directly to the parent
    
    // Logic for activating/deactivating button based on selection
    if (topicId) { // If something is selected
      dispatch(activeButtonReducer());
    } else { // If nothing is selected
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
      '
    >
      <TopicSelector
        onSelectCard={handleTopicSelect}
        selectedCardId={selectedTopicFromParent} // Pass the selected ID from parent to TopicSelector
        isDisabled={false} // Assuming TopicSelector itself is not disabled
      />
    </div>
  );
};

export default MainContent;