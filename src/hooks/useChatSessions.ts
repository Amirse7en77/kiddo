import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const API_BASE_URL = 'https://kiddo2.pythonanywhere.com';

interface ChatSession {
  id: string;
  tool: string;
  title: string;
  subject: string;
  updated_at: string;
}

const fetchChatSessions = async (): Promise<ChatSession[]> => {
  console.log("API CALL: fetchChatSessions");
  // The token is handled by the global axios interceptor.
  const response = await axios.get(`${API_BASE_URL}/api/v1/chat/sessions/`);
  console.log("API RESPONSE: fetchChatSessions success", response.data);
  // Ensure we always return an array
  return Array.isArray(response.data) ? response.data : [];
};

export const useChatSessions = () => {
  return useQuery({
    queryKey: ['chatSessions'],
    queryFn: fetchChatSessions,
    staleTime: 60000, // Cache for 1 minute
  });
};