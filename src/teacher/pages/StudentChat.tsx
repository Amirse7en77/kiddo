import React from 'react';
import { useLocation } from 'react-router-dom';
import Header from '../../components/common/Header';
import RecentChatCard from '../../components/common/RecentChatCard';
import { useStudentChatSessions } from '../../hooks/useStudentChatSessions';
import LoadingIndicator from '../../components/common/LoadingIndicator';

const StudentChat = () => {
  const location = useLocation();
  const studentName = location.state?.studentName;

  const { data: chatSessions, isLoading, isError } = useStudentChatSessions(studentName);
  console.log(chatSessions)
  if (!studentName) {
    return (
      <>
        <Header title={'خطا'} backPath="/teacher/students" />
        <div className="p-4 text-center text-gray-700">
          اطلاعات دانش‌آموز یافت نشد. لطفاً از صفحه دانش‌آموزان وارد شوید.
        </div>
      </>
    );
  }

  return (
    <>
      <Header title={studentName} backPath="/teacher/students" />
      <div className="bg-backGround-1 min-h-screen">
        <div className="p-4 space-y-3">
          {isLoading &&  <div className="flex justify-center items-center text-center">
                  <LoadingIndicator className="w-10 h-10 " />
                </div>}
          {isError && <div className="text-center text-red-500 py-4">خطا در بارگذاری چت‌ها.</div>}
          {!isLoading && !isError && chatSessions.length === 0 && (
            <div className="text-center text-gray-500 py-4">
              هیچ چت قابل نمایشی برای این دانش‌آموز وجود ندارد.
              <br />
              <small>(تنها چت‌هایی که رویدادی ثبت کرده باشند نمایش داده می‌شوند)</small>
            </div>
          )}
          {!isLoading && !isError && chatSessions.length > 0 && (
            chatSessions.map((session) => {
              if (!session) return null; // Safety check
              const lastMessage = session.messages[session.messages.length - 1];
              const subject = session.title.split(' on ')[1] || session.title || 'نامشخص';

              return (
                <RecentChatCard
                  key={session.id}
                  id={session.id}
                  title={session.title}
                  tool={session.tool}
                  subject={subject}
                  updatedAt={lastMessage?.timestamp || ''}
                />
              );
            })
          )}
        </div>
      </div>
    </>
  );
};

export default StudentChat;