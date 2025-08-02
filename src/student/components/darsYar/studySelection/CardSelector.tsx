// src/student/components/darsYar/studySelection/CardSelector.tsx
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setSelectedStudy, clearSelections } from '../../../../slice/darsyarSlice';
import CardContent from './CardContent';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import LoadingIndicator from '../../../../components/common/LoadingIndicator';

interface Card {
  id: string;
  name: string;
  image_url: string;
}

const CardSelector: React.FC = () => {
  const dispatch = useDispatch();
  const selectedStudy = useSelector((state: any) => state.darsyar.selectedStudy);
  const [selectedCardId, setSelectedCardId] = useState<string | null>(selectedStudy?.id || null);

  const {
    data,
    isLoading,
    isError,
  } = useQuery<Card[]>({ 
    queryKey: ['subjectsForDarsyar'],
    queryFn: async () => { 
      console.log("API CALL: fetching subjects for Darsyar");
      const response = await axios.get<Card[]>('https://kiddo2.pythonanywhere.com/api/v1/academics/subjects');
      console.log("API RESPONSE: fetching subjects for Darsyar success", response.data);
      return response.data; 
    },
  });

  useEffect(() => {
    if (selectedStudy?.id) {
      setSelectedCardId(selectedStudy.id);
    }
  }, [selectedStudy]);

  const handleCardClick = (clickedId: string, name: string) => {
    const newSelectedId = selectedCardId === clickedId ? null : clickedId;
    setSelectedCardId(newSelectedId);
    
    if (newSelectedId) {
      dispatch(setSelectedStudy({
        id: clickedId,
        name: name
      }));
    } else {
      dispatch(clearSelections());
    }
  };

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-[500px]">
        <LoadingIndicator className='w-10 h-10' />
      </div>
    );
  }

  if (isError) {
    return (
      <div className="text-center p-4 text-red-500">
        خطا در بارگذاری دروس.
      </div>
    );
  }

  return (
    <div className="grid grid-cols-2 gap-[12px]">
      {data?.map((card) => (
        <CardContent
          key={card.id}
          name={card.name}
          image={card.image_url}
          selectId={selectedCardId}
          isSelected={selectedCardId === card.id}
          onClick={() => handleCardClick(card.id, card.name)}
        />
      ))}
    </div>
  );
};

export default CardSelector;