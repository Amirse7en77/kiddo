import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setSelectedStudy } from '../../../../slice/konjkavSlice';
import CardContent from './CardContent';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import LoadingIndicator from '../../../../components/common/LoadingIndicator';

interface Subject {
  id: string;
  name: string;
  image_url: string;
}

const CardSelector: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const selectedStudy = useSelector((state: any) => state.konjkav.selectedStudy);
  
  const [selectedCardId, setSelectedCardId] = useState<string | null>(selectedStudy?.id || null);

  useEffect(() => {
    if (selectedStudy?.id) {
      setSelectedCardId(selectedStudy.id);
    }
  }, [selectedStudy]);

  const { data: subjects, isLoading, isError } = useQuery<Subject[]>({
    queryKey: ['subjects'],
    queryFn: async () => {
      const response = await axios.get<Subject[]>(`https://kiddo2.pythonanywhere.com/api/v1/academics/subjects`);
    
      return response.data;
    },
  });

 if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-[500px]">
        <LoadingIndicator className='w-10 h-10' />
      </div>
    );
  }
  const handleCardClick = (subject: Subject) => {
    // Only allow switching to a different card, not deselecting
    if (selectedCardId !== subject.id) {
      setSelectedCardId(subject.id);
      dispatch(setSelectedStudy(subject));
    }
  };

  if (isLoading) return <div>در حال بارگذاری دروس...</div>;
  if (isError) return <div>خطا در بارگذاری دروس.</div>;

  return (
    <div className="grid grid-cols-2 gap-[12px]">
      {subjects?.map((subject) => (
        <CardContent
          key={subject.id}
          title={subject.name}
          image={subject.image_url}
          isSelected={selectedCardId === subject.id}
          selectedCardId={selectedCardId}
          onClick={() => handleCardClick(subject)}
        />
      ))}
    </div>
  );
};

export default CardSelector;