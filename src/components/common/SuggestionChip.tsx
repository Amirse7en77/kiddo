import React from 'react';

interface SuggestionChipProps {
  text: string;
  onClick: (text: string) => void;
}

const SuggestionChip: React.FC<SuggestionChipProps> = ({ text, onClick }) => {
  return (
    
        <button
      onClick={() => onClick(text)}
      className="flex-shrink-0 flex items-center gap-2 infoGradient  rounded-[16px] py-3 px-4 text-sm font-semibold whitespace-nowrap hover:bg-backGround-1 transition-colors"
    >
     
      <span>{text}</span>
    </button>
    
  );
};

export default SuggestionChip;