import React from 'react';
import SuggestionChip from './SuggestionChip';

interface SuggestionScrollerProps {
  suggestions: string[];
  onSelect: (suggestion: string) => void;
}

const SuggestionScroller: React.FC<SuggestionScrollerProps> = ({ suggestions, onSelect }) => {
  return (
    <div className="w-full overflow-x-auto scrollbar-hide">
      <div className="flex items-center gap-2 px-4 py-2">
        {suggestions.map((suggestion) => (
          <SuggestionChip key={suggestion} text={suggestion} onClick={onSelect} />
        ))}
      </div>
    </div>
  );
};

export default SuggestionScroller;