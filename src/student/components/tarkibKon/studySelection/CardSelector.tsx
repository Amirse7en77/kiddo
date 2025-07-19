import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setSelectedStudy } from '../../../../slice/tarkibkonSlice';
import CardContent from './CardContent';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

interface Subject {
  id: string;
  name: string;
}

const CardSelector: React.FC = () => {
    const dispatch = useDispatch();
    const [selectedCardId, setSelectedCardId] = useState<string | null>(null);

    const { data: subjects, isLoading, isError } = useQuery<Subject[]>({
        queryKey: ['subjects'],
        queryFn: async () => {
            const response = await axios.get<Subject[]>(`https://kiddo2.pythonanywhere.com/api/v1/academics/subjects`);
            return response.data;
        },
    });

    const handleCardClick = (subject: Subject) => {
        if (selectedCardId === subject.id) {
            setSelectedCardId(null);
            dispatch(setSelectedStudy(null));
        } else {
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
                    name={subject.name}
                    isSelected={selectedCardId === subject.id}
                    onClick={() => handleCardClick(subject)}
                />
            ))}
        </div>
    );
};

export default CardSelector;