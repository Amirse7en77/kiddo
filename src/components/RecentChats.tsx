// src/components/RecentChats.tsx

import React from 'react';
import { useChatSessions } from '../hooks/useChatSessions';
import RecentChatCard from './common/RecentChatCard';
import LoadingIndicator from './common/LoadingIndicator';

interface RecentChatsProps {
  filterByTool?: 'DARS_YAR' | 'KONJKAV_SHO' | 'TARKIB_KON' | 'AZMOON_SAZ';
}

const RecentChats: React.FC<RecentChatsProps> = ({ filterByTool }) => {
  const { data: chatSessions, isLoading, isError } = useChatSessions();

  if (isLoading) {
    return  <div className="flex justify-center items-center text-center">
                  <LoadingIndicator className="w-10 h-10 " />
                </div>;
  }

  if (isError) {
    return <div className="text-center text-red-500 py-4">خطا در بارگذاری چت‌ها</div>;
  }

  const filteredSessions = filterByTool 
    ? chatSessions?.filter(session => session.tool === filterByTool)
    : chatSessions;

  if (!filteredSessions || filteredSessions.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center p-6 text-center">
        <p className="text-gray-500">چت اخیری وجود ندارد.</p>
      </div>
    );
  }
  
  return (
    <div className="space-y-[12px]">
      {filteredSessions.map((session) => (
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