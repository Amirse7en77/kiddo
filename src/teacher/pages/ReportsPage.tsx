// src/teacher/pages/ReportsPage.tsx
import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import ReportTools from '../components/contentContainer/reports/ReportTools';
import StudentReports from '../components/contentContainer/reports/StudentReports';
import ReportDetailModal from '../components/contentContainer/reports/modals/ReportDetailModal';
import { fetchChatEvents } from '../../api-teacher';
import LessonModal from '../components/contentContainer/reports/modals/LessonModal';
import ToolsModal from '../components/contentContainer/reports/modals/ToolsModal';
import tool from './../../assets/images/reportsPage/tool.png'
import lesson from './../../assets/images/reportsPage/lesson.png'

const ReportsPage = () => {
  const [selectedEventId, setSelectedEventId] = useState<string | null>(null);
  
  // State to manage which modal is open
  const [openModal, setOpenModal] = useState<'lessons' | 'tools' | null>(null);
  
  // State for selected filters
  const [selectedLesson, setSelectedLesson] = useState('همه درس ها');
  const [selectedTool, setSelectedTool] = useState('همه ابزار ها');

  const { data: events, isLoading, isError } = useQuery({
    queryKey: ['chatEvents'], // This key could be enhanced with filters later
    queryFn: fetchChatEvents,
  });

  const handleOpenDetailModal = (eventId: string) => {
    setSelectedEventId(eventId);
  };

  const handleCloseDetailModal = () => {
    setSelectedEventId(null);
  };

  const handleConfirmLesson = (lesson: string) => {
    setSelectedLesson(lesson);
    setOpenModal(null);
  };
  
  const handleConfirmTool = (tool: string) => {
    setSelectedTool(tool);
    setOpenModal(null);
  };

  return (
    <>
      <div className='flex justify-center items-center gap-[12px] mb-[16px]'>
        <ReportTools title={selectedLesson} onClick={() => setOpenModal('lessons')} image={lesson}/>
        <ReportTools title={selectedTool} onClick={() => setOpenModal('tools')} image={tool}/>
      </div>

      <div className='border-[2px] border-borderColor-1 rounded-[24px] bg-white p-[16px]'>
        {isLoading && <p className='text-center py-4'>در حال بارگذاری گزارشات...</p>}
        {isError && <p className='text-center py-4 text-red-500'>خطا در دریافت گزارشات.</p>}
        {events && events.length === 0 && <p className='text-center py-4 text-gray-500'>گزارشی برای نمایش وجود ندارد.</p>}
        
        <div className='space-y-4 divide-y divide-gray-100'>
            {events?.map((event) => (
              <div key={event.id} className="pt-4 first:pt-0">
                <StudentReports event={event} onOpenModal={handleOpenDetailModal} />
              </div>
            ))}
        </div>
      </div>
      
      <ReportDetailModal 
        eventId={selectedEventId}
        onClose={handleCloseDetailModal}
      />

      <LessonModal
        isModalOpen={openModal === 'lessons'}
        handleCloseModal={() => setOpenModal(null)}
        initialSelection={selectedLesson}
        onConfirm={handleConfirmLesson}
      />
      
      <ToolsModal
        isModalOpen={openModal === 'tools'}
        handleCloseModal={() => setOpenModal(null)}
        initialSelection={selectedTool}
        onConfirm={handleConfirmTool}
      />
    </>
  );
};

export default ReportsPage;