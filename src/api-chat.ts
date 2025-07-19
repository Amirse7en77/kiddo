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
  console.log('API CALL: startDarsYarSession', { subjectId, chapterIds });
  try {
    const response = await axios.post<ChatSession>(`${API_BASE_URL}/tools/dars-yar/start/`, {
      subject_id: subjectId,
      chapter_ids: chapterIds,
    });
    console.log('API RESPONSE: startDarsYarSession', response.data);
    return response.data;
  } catch (error) {
    console.error('API ERROR: startDarsYarSession', error);
    throw error;
  }
};

/**
 * Starts a new Konjkav Sho chat session.
 * @param subjectId The ID of the selected subject.
 * @param initialTopic The initial topic from the user.
 * @returns The newly created chat session.
 */
export const startKonjkavSession = async (subjectId: string, initialTopic: string): Promise<ChatSession> => {
    console.log('API CALL: startKonjkavSession', { subjectId, initialTopic });
    try {
        const response = await axios.post<ChatSession>(`${API_BASE_URL}/tools/konjkav-sho/start/`, {
            subject_id: subjectId,
            initial_topic: initialTopic,
        });
        console.log('API RESPONSE: startKonjkavSession', response.data);
        return response.data;
    } catch (error) {
        console.error('API ERROR: startKonjkavSession', error);
        throw error;
    }
};

/**
 * Starts a new Tarkib Kon chat session.
 * @param subjectId The ID of the selected subject.
 * @param topic The topic to learn.
 * @param theme The theme for the explanation.
 * @returns The newly created chat session.
 */
export const startTarkibkonSession = async (subjectId: string, topic: string, theme: string): Promise<ChatSession> => {
    console.log('API CALL: startTarkibkonSession', { subjectId, topic, theme });
    try {
        const response = await axios.post<ChatSession>(`${API_BASE_URL}/tools/tarkib-kon/start/`, {
            subject_id: subjectId,
            topic: topic,
            theme: theme,
        });
        console.log('API RESPONSE: startTarkibkonSession', response.data);
        return response.data;
    } catch (error) {
        console.error('API ERROR: startTarkibkonSession', error);
        throw error;
    }
};

/**
 * Sends a message to an existing chat session.
 * @param sessionId The ID of the chat session.
 * @param content The text of the message to send.
 * @returns The message object created for the user.
 */
export const sendMessage = async (sessionId: string, content: string): Promise<ApiMessage> => {
  console.log('API CALL: sendMessage', { sessionId, content });
  try {
    const response = await axios.post<ApiMessage>(`${API_BASE_URL}/chat/sessions/${sessionId}/messages/`, {
      content,
    });
    console.log('API RESPONSE: sendMessage', response.data);
    return response.data;
  } catch (error) {
    console.error('API ERROR: sendMessage', error);
    throw error;
  }
};

/**
 * Fetches the details and all messages for a given session.
 * @param sessionId The ID of the chat session.
 * @returns The full session details with all messages.
 */
export const getSessionDetails = async (sessionId: string): Promise<ChatSession> => {
  console.log('API CALL: getSessionDetails', { sessionId });
  try {
    const response = await axios.get<ChatSession>(`${API_BASE_URL}/chat/sessions/${sessionId}/`);
    console.log('API RESPONSE: getSessionDetails', response.data);
    return response.data;
  } catch(error) {
    console.error('API ERROR: getSessionDetails', error);
    throw error;
  }
}