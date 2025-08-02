import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import Modal from '../../Modal';
import Tools from './Tools';
import ChatButton from '../../../../../components/common/ChatButton';

// Interface for API response
interface Subject {
  id: string;
  name: string;
}

interface LessonModalProps {
  isModalOpen: boolean;
  handleCloseModal: () => void;
  initialSelection: string;
  onConfirm: (selection: string) => void;
}

const LessonModal: React.FC<LessonModalProps> = ({ isModalOpen, handleCloseModal, initialSelection, onConfirm }) => {
  const [activeLesson, setActiveLesson] = useState<string>(initialSelection);

  // Fetch subjects dynamically
  const { data: subjects, isLoading, isError } = useQuery<Subject[]>({
    queryKey: ['allSubjectsForFilter'], // Use a distinct query key
    queryFn: async () => {
      console.log("API CALL: fetching all subjects for LessonModal");
      const res = await axios.get('https://kiddo2.pythonanywhere.com/api/v1/academics/subjects/');
      console.log("API RESPONSE: fetching all subjects for LessonModal success", res.data);
      return res.data;
    },
    staleTime: 5 * 60 * 1000, // Cache for 5 minutes
    enabled: isModalOpen, // Only fetch when the modal is open
  });

  const allLessonsOptionName = "همه درس‌ها";
  const isAllLessonsSelected = activeLesson === allLessonsOptionName;

  const handleConfirmClick = () => {
    onConfirm(activeLesson);
  };

  const renderLessonList = () => {
    if (isLoading) {
      return <p className="text-center py-4">در حال بارگذاری دروس...</p>;
    }
    if (isError) {
      return <p className="text-center py-4 text-red-500">خطا در دریافت دروس.</p>;
    }
    return (
      <>
        <Tools
          name={allLessonsOptionName}
          isActive={activeLesson === allLessonsOptionName}
          onClick={setActiveLesson}
          isDisabled={false}
        />
        <div className='grid grid-cols-2 gap-x-3'>
          {subjects?.map((lesson) => (
            <Tools
              key={lesson.id}
              name={lesson.name}
              isActive={activeLesson === lesson.name}
              onClick={setActiveLesson}
              isDisabled={isAllLessonsSelected}
            />
          ))}
        </div>
      </>
    );
  };

  return (
    <div>
      <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
        <div className='flex flex-col pb-20'>
          <h2 className="text-center font-bold text-lg mb-4">لطفا درس مورد نظر را انتخاب نمایید</h2>
          
          {renderLessonList()}

          <div onClick={handleConfirmClick}>
            <ChatButton textButton={'تایید'} />
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default LessonModal;