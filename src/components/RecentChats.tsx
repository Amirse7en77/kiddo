import React from 'react';
import { useChatSessions } from '../hooks/useChatSessions';
import RecentChatCard from './common/RecentChatCard';

const RecentChats: React.FC = () => {
  const { data: chatSessions, isLoading, isError } = useChatSessions();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error loading recent chats</div>;
  }

  if (!chatSessions || chatSessions.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center p-6 text-center">
        <p className="text-gray-500">There are no recent chats here.</p>
      </div>
    );
  }

  return (
    <div className="grid gap-4">
      {chatSessions.map((session) => (
        <RecentChatCard
          key={session.id}
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
