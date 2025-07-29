import React, { useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import { fetchChatEvents } from '../../../api-teacher'
import { FluentEmoji } from '@lobehub/fluent-emoji'
import Modal from './Modal'
import ChatButton from '../../../components/common/ChatButton'
import { useNavigate } from 'react-router-dom'
import { ChatEvent } from '../../../types/api'

const StudentAlert = () => {
  const { data: events, isLoading } = useQuery({
    queryKey: ['chatEvents'],
    queryFn: fetchChatEvents,
  });
  const navigate=useNavigate()
  const dangerEvents = events?.filter(
    (e) => e.level === 'DANGER' && !e.is_resolved
  ) || [];

  // State for modal
  const [selectedEvent, setSelectedEvent] = useState<ChatEvent | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleViewChat = () => {
    // If ChatEvent has a session or chat_session_id property, use it. Otherwise, remove this logic or adjust as needed.
    // Example: if (selectedEvent?.session) { ... }
    setIsModalOpen(false);
  };

  if (isLoading || dangerEvents.length === 0) return null;
console.log(selectedEvent)
  return (
    <div className='py-[16px]'>
      {dangerEvents.map((event) => (
        <div key={event.id} className='alert-box mb-[12px]'>
          <div className='flex justify-between items-center bg-[#FFF0F0] rounded-[16px] px-[16px] py-[12px] gap-[16px] pl-[24px] text-[#FE4C4A] text-[12px]'>
            <div className='flex flex-col gap-[4px]'>
              <div className="flex items-center gap-2">
                <FluentEmoji emoji={event.emoji} size={20} />
                <h1 className='line-clamp-1 font-bold'>
                  {event.student_name} رفتار های خطرناکی دارد
                </h1>
              </div>
             
            </div>
            <button
              onClick={() => {
                setSelectedEvent(event);
                setIsModalOpen(true);
              }}
            >
              بررسی
            </button>
          </div>
        </div>
      ))}

      {/* Modal for event details */}
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        {selectedEvent && (
           <div className='flex flex-col justify-center gap-4 pb-20'>
            <div className='flex flex-col items-center gap-2'>
              <div className='p-2 bg-backGround-1 rounded-full'>
                 <FluentEmoji emoji={selectedEvent.emoji} size={70} type="anim" />
              </div>
                <h1 className='font-bold text-lg'>{selectedEvent.student_name}</h1>
                <div className='flex justify-center gap-2'>
                  <p className='bg-backGround-1 px-3 py-1 rounded-full text-xs'>{selectedEvent.subject_name}</p>
                  <p className='bg-backGround-1 px-3 py-1 rounded-full text-xs'>{selectedEvent.level}</p>
                </div>
            </div>
            
            <div className='text-right'>
                <h2 className='font-bold mb-1'>توضیحات</h2>
                <p className='text-sm text-gray-700'>{selectedEvent.overview}</p>
            </div>
            <div className=''>
              <ChatButton textButton={'مشاهده چت'} onClick={handleViewChat} />
            </div>
           
          </div>
        )}
      </Modal>
    </div>
  )
}

export default StudentAlert