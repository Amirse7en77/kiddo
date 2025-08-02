// src/teacher/pages/ReportsPage.tsx
import React, { useState, useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import ReportTools from '../components/contentContainer/reports/ReportTools';
import StudentReports from '../components/contentContainer/reports/StudentReports';
import ReportDetailModal from '../components/contentContainer/reports/modals/ReportDetailModal';
import { fetchChatEvents } from '../../api-teacher';
import LessonModal from '../components/contentContainer/reports/modals/LessonModal';
import ToolsModal from '../components/contentContainer/reports/modals/ToolsModal';
import StudentAlert from '../components/contentContainer/StudentAlert';
import tool from './../../assets/images/reportsPage/tool.png'
import lesson from './../../assets/images/reportsPage/lesson.png'
import LoadingIndicator from '../../components/common/LoadingIndicator';

const ReportsPage = () => {
  const [selectedEventId, setSelectedEventId] = useState<string | null>(null);
  
  // State to manage which modal is open
  const [openModal, setOpenModal] = useState<'lessons' | 'tools' | null>(null);
  
  // State for selected filters - initialize from localStorage
  const [selectedLesson, setSelectedLesson] = useState(() => {
    return localStorage.getItem('reportsPage_selectedLesson') || 'همه درس‌ها';
  });
  const [selectedTool, setSelectedTool] = useState(() => {
    return localStorage.getItem('reportsPage_selectedTool') || 'همه ابزارها';
  });

  // Save to localStorage whenever filters change
  useEffect(() => {
    localStorage.setItem('reportsPage_selectedLesson', selectedLesson);
  }, [selectedLesson]);

  useEffect(() => {
    localStorage.setItem('reportsPage_selectedTool', selectedTool);
  }, [selectedTool]);

  const { data: events, isLoading, isError } = useQuery({
    queryKey: ['chatEvents'],
    queryFn: fetchChatEvents,
  });

  // Filter events based on selected lesson and tool
  const filteredEvents = events?.filter(event => {
    const lessonMatch = selectedLesson === 'همه درس‌ها' || event.subject_name === selectedLesson;
    // Since ChatEvent doesn't have tool_name, we'll just filter by lesson for now
    // You may need to add tool filtering logic based on your actual data structure
    return lessonMatch;
  }) || [];

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
        <ReportTools 
          title={selectedLesson} 
          onClick={() => setOpenModal('lessons')} 
          image={lesson}
          isSelected={selectedLesson !== 'همه درس‌ها'}
        />
        <ReportTools 
          title={selectedTool} 
          onClick={() => setOpenModal('tools')} 
          image={tool}
          isSelected={selectedTool !== 'همه ابزارها'}
        />
      </div>

      <div className='border-[2px] border-borderColor-1 rounded-[24px] bg-white p-[16px]'>
        {isLoading &&  <div className="flex justify-center items-center text-center">
                  <LoadingIndicator className="w-10 h-10 " />
                </div>}
        {isError && <p className='text-center py-4 text-red-500'>خطا در دریافت گزارشات.</p>}
        {filteredEvents && filteredEvents.length === 0 && <p className='text-center py-4 text-gray-500'>گزارشی برای نمایش وجود ندارد.</p>}
        
        <div className='space-y-4 divide-y divide-gray-100'>
            {filteredEvents?.map((event) => (
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