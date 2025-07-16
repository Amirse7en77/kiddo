import React, { useState } from "react";

import TopicSelector from "./TopicSelector";

const Topic = () => {
  const [textAreaContent, setTextAreaContent] = useState<string>("");
  const [selectedCardId, setSelectedCardId] = useState<string | null>(null);

  const handleTextAreaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.target.value;
    setTextAreaContent(value);
    // If user starts typing, unselect any card
    if (value.length > 0) {
      setSelectedCardId(null);
    }
  };

  const handleCardSelection = (id: string | null) => {
    setSelectedCardId(id);
    // If a card is selected, clear the textarea
    if (id !== null) {
      setTextAreaContent("");
    }
  };

  // Determine if textarea should be disabled
  const isTextAreaDisabled = selectedCardId !== null;
  // Determine if TopicSelector (cards) should be disabled
  const isTopicSelectorDisabled = textAreaContent.length > 0;

  return (
    <div className="flex justify-center bg-white  rounded-[24px] rounded-b-none p-[16px] flex-col pb-20">
      <textarea
        placeholder="اینجا بنویس ... "
        className="p-[16px] border-[2px] border-backGround-1 rounded-[16px] w-full text-[14px] resize-none overflow-hidden" // Added resize-none
        rows={1} // Made textarea smaller by setting rows
        value={textAreaContent}
        onChange={handleTextAreaChange}
        disabled={isTextAreaDisabled}
        style={isTextAreaDisabled ? { opacity: 0.6, cursor: 'not-allowed' } : {}} 
        
      />
      <h1 className="font-extrabold text-[14px] mt-[16px] mb-[12px]">
        موضوعات پیشنهادی
      </h1>
      <div className="flex flex-wrap gap-[12px]">
        <TopicSelector
          onSelectCard={handleCardSelection}
          selectedCardId={selectedCardId}
          isDisabled={isTopicSelectorDisabled}
        />
      </div>
    </div>
  );
};

export default Topic;