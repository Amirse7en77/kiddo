// src/student/components/tarkibKon/learnTopic/TopicSelector.tsx
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
    { id: 'کسرها', title: 'کسرها' },
    { id: 'فتوسنتز', title: 'فتوسنتز' },
    { id: 'ساختار اتم', title: 'ساختار اتم' },
    { id: 'تاریخ صفویه', title: 'تاریخ صفویه' },
    { id: 'آب و هوای ایران', title: 'آب و هوای ایران' },
    { id: 'شعر نو', title: 'شعر نو' },
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