// CardSelector.tsx
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { activeButtonReducer, disableButtonReducer } from '../../../../slice/tarkibkonSlice';
import CardContent from './CardContent';

interface Card {
  id: string;
  title: string;
}

interface CardSelectorProps {
  onLessonSelect: (selectedLessonValue: string) => void;
}

const CardSelector: React.FC<CardSelectorProps> = ({ onLessonSelect }) => {
  const dispatch = useDispatch();
  const cards: Card[] = [
    { id: 'math', title: 'ریاضی' },
    { id: 'science', title: 'علوم' },
    { id: 'social', title: 'مطالعات اجتماعی' },
    { id: 'literature', title: 'ادبیات فارسی' },
  ];

  const [selectedCardId, setSelectedCardId] = useState<string | null>(null);

  const handleCardClick = (clickedId: string, title: string) => {
    if (selectedCardId === clickedId) {
      setSelectedCardId(null);
      onLessonSelect('');
      dispatch(disableButtonReducer());
    } else {
      setSelectedCardId(clickedId);
      onLessonSelect(title);
      dispatch(activeButtonReducer());
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