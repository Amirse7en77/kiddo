import React from 'react';
import { useChatSessions } from '../hooks/useChatSessions';
import RecentChatCard from './common/RecentChatCard';

const RecentChats: React.FC = () => {
  const { data: chatSessions, isLoading, isError } = useChatSessions();

  if (isLoading) {
    return <div className="text-center py-4">در حال بارگذاری...</div>;
  }

  if (isError) {
    return <div className="text-center text-red-500 py-4">خطا در بارگذاری چت‌ها</div>;
  }

  if (!chatSessions || chatSessions.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center p-6 text-center">
        <p className="text-gray-500">چت اخیری وجود ندارد.</p>
      </div>
    );
  }
  
  return (
    <div className="space-y-[12px]">
      {chatSessions.map((session) => (
        <RecentChatCard
          key={session.id}
          id={session.id}
          title={session.title}
          tool={session.tool}
          subject={session.subject}
          updatedAt={session.updated_at}
        />
      ))}
    </div>
  );
};

export default RecentChats;