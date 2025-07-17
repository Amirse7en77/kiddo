// src/api-chat.ts
import axios from 'axios';
import { ApiMessage, ChatSession } from './types/api';


const API_BASE_URL = 'https://kiddo2.pythonanywhere.com/api/v1';

// Remember that the auth token is set globally in api.ts after login

/**
 * Starts a new DarsYar chat session.
 * @param subjectId The ID of the selected subject.
 * @param chapterIds An array of chapter IDs.
 * @returns The newly created chat session.
 */
export const startDarsYarSession = async (subjectId: string, chapterIds: string[]): Promise<ChatSession> => {
  const response = await axios.post<ChatSession>(`${API_BASE_URL}/tools/dars-yar/start/`, {
    subject_id: subjectId,
    chapter_ids: chapterIds,
  });
  return response.data; //
};

/**
 * Sends a message to an existing chat session.
 * @param sessionId The ID of the chat session.
 * @param content The text of the message to send.
 * @returns The message object created for the user.
 */
export const sendMessage = async (sessionId: string, content: string): Promise<ApiMessage> => {
  const response = await axios.post<ApiMessage>(`${API_BASE_URL}/chat/sessions/${sessionId}/messages/`, {
    content,
  });
  return response.data; //
};

/**
 * Fetches the details and all messages for a given session.
 * @param sessionId The ID of the chat session.
 * @returns The full session details with all messages.
 */
export const getSessionDetails = async (sessionId: string): Promise<ChatSession> => {
    const response = await axios.get<ChatSession>(`${API_BASE_URL}/chat/sessions/${sessionId}/`);
    return response.data; //
}