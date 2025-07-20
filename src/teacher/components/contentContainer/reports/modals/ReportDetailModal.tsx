// src/teacher/components/contentContainer/reports/modals/ReportDetailModal.tsx
import React from 'react'
import Modal from '../../Modal';
import ChatButton from '../../../../../components/common/ChatButton';
import { useQuery } from '@tanstack/react-query';
import { fetchEventDetails } from '../../../../../api-teacher';
import { useNavigate } from 'react-router-dom';
import { FluentEmoji } from '@lobehub/ui'
interface ReportDetailModalProps {
  eventId: string | null;
  onClose: () => void;
}

const ReportDetailModal: React.FC<ReportDetailModalProps> = ({ eventId, onClose }) => {
  const navigate = useNavigate();
  
  const { data: event, isLoading, isError } = useQuery({
    queryKey: ['eventDetails', eventId],
    queryFn: () => fetchEventDetails(eventId!), // The '!' asserts eventId is not null here
    enabled: !!eventId, // Only run query if eventId is not null
  });
  let level
  if(event?.level==='DANGER'){
    level='هشدار جدی'
  }else if(event?.level==='CONCERN'){
    level='نیاز به توجه'
  } else{
    level='اطلاع‌رسانی'
  }
  const handleViewChat = () => {
    if (event?.session_id) {
      // This route might need to be adjusted based on your final routing for specific chats
      navigate(`/teacher/chat/${event.session_id}`);
    }
    onClose(); // Close modal after navigation
  };
  
  return (
    <div>
      <Modal isOpen={!!eventId} onClose={onClose}>
        {isLoading && <p className='text-center py-8'>در حال بارگذاری جزئیات...</p>}
        {isError && <p className='text-center py-8 text-red-500'>خطا در دریافت جزئیات گزارش.</p>}
        {event && (
          <div className='flex flex-col justify-center gap-4 pb-20'>
            <div className='flex flex-col items-center gap-2'>
               <FluentEmoji emoji={event.emoji} size={70} type="anim" />
                <h1 className='font-bold text-lg'>{event.student_name}</h1>
                <div className='flex justify-center gap-2'>
                  <p className='bg-backGround-1 px-3 py-1 rounded-full text-xs'>{event.subject_name}</p>
                  <p className='bg-backGround-1 px-3 py-1 rounded-full text-xs'>{level}</p>
                </div>
            </div>
            
            <div className='text-right'>
                <h2 className='font-bold mb-1'>توضیحات</h2>
                <p className='text-sm text-gray-700'>{event.explanation}</p>
            </div>

            <div onClick={handleViewChat}>
              <ChatButton textButton={'مشاهده چت'} />
            </div>
          </div>
        )}
      </Modal>
    </div>
  )
}

export default ReportDetailModal;