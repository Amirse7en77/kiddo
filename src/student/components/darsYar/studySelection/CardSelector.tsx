// CardSelector.tsx
import React, { useState } from 'react';
import CardContent from './CardContent';

interface Card {
  id: string;
  title: string;
}

const CardSelector: React.FC = () => {
  const cards: Card[] = [
    { id: 'math', title: 'ریاضی' },
    { id: 'science', title: 'علوم' },
    { id: 'history', title: 'تاریخ' },
    { id: 'geography', title: 'جغرافیا' },
    
  ];

  const [selectedCardId, setSelectedCardId] = useState<string | null>(null);


  const handleCardClick = (clickedId: string) => {
    setSelectedCardId(prevId => (prevId === clickedId ? null : clickedId));
    
  };
  

  return (
    <div
      className="
        grid
        grid-cols-2 
        
       gap-[12px] 
        
        
        
      "
    >
      {cards.map((card) => (
        <CardContent
          key={card.id}
          title={card.title}
          isSelected={selectedCardId === card.id}
          onClick={() => handleCardClick(card.id)}
        />
      ))}
    </div>
  );
};

export default CardSelector;