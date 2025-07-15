// CardSelector.tsx
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setSelectedStudy } from '../../../../slice/darsyarSlice';
import CardContent from './CardContent';

interface Card {
  id: string;
  title: string;
}

const CardSelector: React.FC = () => {
  const dispatch = useDispatch();
  const cards: Card[] = [
    { id: 'math', title: 'ریاضی' },
    { id: 'science', title: 'علوم' },
    { id: 'history', title: 'تاریخ' },
    { id: 'geography', title: 'جغرافیا' },
  ];

  const [selectedCardId, setSelectedCardId] = useState<string | null>(null);

  const handleCardClick = (clickedId: string, title: string) => {
    const newSelectedId = selectedCardId === clickedId ? null : clickedId;
    setSelectedCardId(newSelectedId);
    
    // Now properly dispatch the action with a payload
    if (newSelectedId) {
      dispatch(setSelectedStudy(title));
    } else {
      dispatch(setSelectedStudy(''));
    }
  };

  return (
    <div className="grid grid-cols-2 gap-[12px]">
      {cards.map((card) => (
        <CardContent
          key={card.id}
          title={card.title}
          isSelected={selectedCardId === card.id}
          onClick={() => handleCardClick(card.id, card.title)}
        />
      ))}
    </div>
  );
};

export default CardSelector;