


import React, { useState } from 'react';
import Modal from '../../Modal';
import Tools from './Tools'; // Re-using the 'Tools' component for styling
import ChatButton from '../../../../../components/common/ChatButton';

interface LessonModalProps {
  isModalOpen: boolean;
  handleCloseModal: () => void;
  initialSelection: string;
  onConfirm: (selection: string) => void;
}

const LessonModal: React.FC<LessonModalProps> = ({ isModalOpen, handleCloseModal, initialSelection, onConfirm }) => {
  const [activeLesson, setActiveLesson] = useState<string>(initialSelection);

  const lessonsList = [
    { name: "علوم" },
    { name: "ریاضی" },
    { name: "فارسی" },
    { name: "تاریخ" },
  ];

  const allLessonsOptionName = "همه درس ها";

  const handleConfirmClick = () => {
    onConfirm(activeLesson);
  };

  return (
    <div>
      <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
        <div className='flex flex-col pb-20'>
          <h2 className="text-center font-bold text-lg mb-4">لطفا درس مورد نظر را انتخاب نمایید</h2>
          
          <Tools
            name={allLessonsOptionName}
            isActive={activeLesson === allLessonsOptionName}
            onClick={setActiveLesson}
          />
          
          <div className='grid grid-cols-2 gap-x-3'>
            {lessonsList.map((lesson) => (
              <Tools
                key={lesson.name}
                name={lesson.name}
                isActive={activeLesson === lesson.name}
                onClick={setActiveLesson}
              />
            ))}
          </div>

          <div onClick={handleConfirmClick}>
            <ChatButton textButton={'تایید'} />
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default LessonModal;