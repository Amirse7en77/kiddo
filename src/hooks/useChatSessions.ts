import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

interface ChatSession {
  id: string;
  tool: string;
  title: string;
  subject: string;
  updated_at: string;
}

const fetchChatSessions = async (): Promise<ChatSession[]> => {
  const response = await axios.get('/api/v1/chat/sessions/', {
    headers: {
      Authorization: `Token ${localStorage.getItem('token')}`,
    },
  });
  // Ensure we always return an array
  return Array.isArray(response.data) ? response.data : [];
};

export const useChatSessions = () => {
  return useQuery({
    queryKey: ['chatSessions'],
    queryFn: fetchChatSessions,
    // Initialize with an empty array
    initialData: [],
  });
};
