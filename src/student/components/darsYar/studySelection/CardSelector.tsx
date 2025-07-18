// CardSelector.tsx
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setSelectedStudy, clearSelections } from '../../../../slice/darsyarSlice';
import CardContent from './CardContent';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

interface Card {
  id: string;
  name: string;
}

const CardSelector: React.FC = () => {

   const {
    data,
    isLoading,
    isError, 
    error,   
  } = useQuery<Card[]>({ 
    queryKey: ['classes'],
    queryFn: async () => { 
      const response = await axios.get<Card[]>(`https://kiddo2.pythonanywhere.com/api/v1/academics/subjects`);
      return response.data; 
    },
    });
   if (!isLoading){
     console.log(data)
   }
  const dispatch = useDispatch();
 

  const [selectedCardId, setSelectedCardId] = useState<string | null>(null);

  const handleCardClick = (clickedId: string, name: string) => {
    const newSelectedId = selectedCardId === clickedId ? null : clickedId;
    setSelectedCardId(newSelectedId);
    
    if (newSelectedId) {
      dispatch(setSelectedStudy({
        id: clickedId,
        name: name
      }));
    } else {
      // When deselecting, we set the study to null
      dispatch(clearSelections());
    }
  };

  return (
   (!isLoading) &&  <div className="grid grid-cols-2 gap-[12px]">
      {data?.map((card) => (
        <CardContent
          key={card.id}
          name={card.name}
          isSelected={selectedCardId === card.id}
          onClick={() => handleCardClick(card.id, card.name)}
        />
      ))}
    </div>
  );
};

export default CardSelector;