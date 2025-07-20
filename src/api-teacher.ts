
// src/api-teacher.ts
import axios from 'axios';
import { ChatEvent, ChatEventDetail } from './types/api';


const API_BASE_URL = 'https://kiddo2.pythonanywhere.com/api/v1';

/**
 * Fetches the list of chat events for the staff member.
 * @returns A promise that resolves to an array of chat events.
 */
export const fetchChatEvents = async (): Promise<ChatEvent[]> => {
  console.log('API CALL: fetchChatEvents');
  try {
    const response = await axios.get<ChatEvent[]>(`${API_BASE_URL}/chat/events/`);
    console.log('API RESPONSE: fetchChatEvents', response.data);
    return response.data;
  } catch (error) {
    console.error('API ERROR: fetchChatEvents', error);
    throw error;
  }
};

/**
 * Fetches the detailed information for a specific chat event.
 * @param eventId The ID of the event.
 * @returns A promise that resolves to the detailed chat event object.
 */
export const fetchEventDetails = async (eventId: string): Promise<ChatEventDetail> => {
  console.log('API CALL: fetchEventDetails', { eventId });
  try {
    const response = await axios.get<ChatEventDetail>(`${API_BASE_URL}/chat/events/${eventId}/`);
    console.log('API RESPONSE: fetchEventDetails', response.data);
    return response.data;
  } catch (error) {
    console.error('API ERROR: fetchEventDetails', error);
    throw error;
  }
};