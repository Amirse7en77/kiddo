// src/student/components/tarkibKon/favoriteTopic/TopicSelector.tsx
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
    { id: 'فوتبال', title: 'فوتبال' },
    { id: 'ماینکرفت', title: 'ماینکرفت' },
    { id: 'دایناسورها', title: 'دایناسورها' },
    { id: 'سفر به فضا', title: 'سفر به فضا' },
    { id: 'داستان‌های شاهنامه', title: 'داستان‌های شاهنامه' },
    { id: 'ابرقهرمان‌ها', title: 'ابرقهرمان‌ها' },
  ];

  const handleCardClick = (clickedId: string) => {
    if (!isDisabled) {
      onSelectCard(selectedCardId === clickedId ? null : clickedId);
    }
  };

  return (
    <div
      className={`
        flex flex-wrap gap-[12px]
        ${isDisabled ? 'opacity-60 pointer-events-none' : ''}
      `}
    >
      {cards.map((card) => (
        <TopicCard
          key={card.id}
          title={card.title}
          isSelected={selectedCardId === card.id}
          onClick={() => handleCardClick(card.id)}
          isDisabled={isDisabled}
        />
      ))}
    </div>
  );
};

export default TopicSelector;