// CardSelector.tsx
import React from 'react';
import TopicCard from './TopicCard';

interface Card {
  id: string;
  title: string;
}

interface TopicSelectorProps {
  onSelectCard: (id: string | null) => void;
  selectedCardId: string | null;
  isDisabled: boolean;
}

const TopicSelector: React.FC<TopicSelectorProps> = ({ onSelectCard, selectedCardId, isDisabled }) => {
  const cards: Card[] = [
    { id: 'math', title: 'ریاضی' },
    { id: 'science', title: 'علوم' },
    { id: 'history', title: 'تاریخ' },
    { id: 'geography', title: 'جغرافیا' },
    { id: 'literature', title: 'ادبیات فارسی طولانی تر' },
    { id: 'art', title: 'هنر' },
    
  ];

  const handleCardClick = (clickedId: string) => {
    if (!isDisabled) { // Only allow click if not disabled
      onSelectCard(selectedCardId === clickedId ? null : clickedId);
    }
  };

  return (
    <div
      className={`
        flex flex-wrap gap-[12px]
        ${isDisabled ? 'opacity-60 pointer-events-none' : ''} // Visual feedback and prevent clicks
      `}
    >
      {cards.map((card) => (
        <TopicCard
          key={card.id}
          title={card.title}
          isSelected={selectedCardId === card.id}
          onClick={() => handleCardClick(card.id)}
          isDisabled={isDisabled} // Pass disabled state to TopicCard
        />
      ))}
    </div>
  );
};

export default TopicSelector;