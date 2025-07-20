import React from 'react';
import { ChatEvent } from '../../../../types/api';

interface StudentReportsProps {
  event: ChatEvent;
  onOpenModal: (eventId: string) => void;
}

const StudentReports: React.FC<StudentReportsProps> = ({ event, onOpenModal }) => {
  return (
    <div className="mb-2">
      <div className="flex justify-between items-center mb-2">
        <h1 className="font-bold text-sm"> {event.emoji}{event.student_name} </h1>
        <button onClick={() => onOpenModal(event.id)} className='p-1'>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" transform='rotate(270)'>
            <path d="M15.7071 16.7071C16.0976 16.3166 16.0976 15.6834 15.7071 15.2929L10.4142 10L15.7071 4.70711C16.0976 4.31658 16.0976 3.68342 15.7071 3.29289C15.3166 2.90237 14.6834 2.90237 14.2929 3.29289L8.29289 9.29289C7.90237 9.68342 7.90237 10.3166 8.29289 10.7071L14.2929 16.7071C14.6834 17.0976 15.3166 17.0976 15.7071 16.7071Z" fill="#333333"/>
          </svg>
        </button>
      </div>
      <div>
        <p className="text-[12px] text-gray-600 line-clamp-2">{event.explanation}</p>
      </div>
    </div>
  );
};

export default StudentReports;