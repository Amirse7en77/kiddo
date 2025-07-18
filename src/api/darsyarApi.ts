import axios from 'axios';

export interface ChatResponse {
  messages: Array<{
    sender_type: 'AI' | 'USER';
    content: string;
  }>;
}

export const startDarsyarSession = async (subjectId: string, chapterIds: string[]) => {
  try {
    const response = await axios.post('https://kiddo2.pythonanywhere.com/api/v1/tools/dars-yar/start/', {
      subject_id: subjectId,
      chapter_ids: chapterIds
    });
    return response.data;
  } catch (error) {
    console.error('Error starting Darsyar session:', error);
    throw error;
  }
};

export const sendDarsyarMessage = async (sessionId: string, message: string): Promise<ChatResponse> => {
  try {
    const response = await axios.post(
      `https://kiddo2.pythonanywhere.com/api/v1/tools/dars-yar/chat/${sessionId}/`,
      { message }
    );
    return response.data;
  } catch (error) {
    console.error('Error sending message:', error);
    throw error;
  }
};

export const sendMessageAgain = async (sessionId: string, message: string): Promise<ChatResponse> => {
  try {
    const response = await axios.post(
      `https://kiddo2.pythonanywhere.com/api/v1/chat/sessions/${sessionId}/messages`,
      { content:message }
    );
    return response.data;
  } catch (error) {
    console.error('Error sending message:', error);
    throw error;
  }
};