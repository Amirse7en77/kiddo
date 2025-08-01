import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setSelectedStudy } from '../../../../slice/tarkibkonSlice';
import CardContent from './CardContent';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

interface Subject {
  id: string;
  name: string;
  image_url:string
}

const CardSelector: React.FC = () => {
    const dispatch = useDispatch();
    const selectedStudy = useSelector((state: any) => state.tarkibkon.selectedStudy);
    
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
                    name={subject.name}
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