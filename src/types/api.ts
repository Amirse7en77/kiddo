// src/types/api.ts

// Based on GET /api/v1/chat/sessions/{session_id}/
export interface ApiMessage {
  id: string;
  sender_type: 'SYSTEM' | 'USER' | 'AI';
  content: string;
  timestamp: string;
  raw_ai_response?: any; // Define more strictly if needed
}

// Based on POST /api/v1/tools/dars-yar/start/
export interface ChatSession {
  id: string; // This is the crucial session_id
  tool: string;
  title: string;
  messages: ApiMessage[];
}

// Based on GET /api/v1/chat/events/
export interface ChatEvent {
  id: string;
  student_name: string;
  overview: string;
  emoji: string;
  level: 'INFO' | 'CONCERN' | 'DANGER';
  subject_name: string;
  created_at: string;
  is_resolved: boolean;
}

// Based on GET /api/v1/chat/events/{event_id}/
export interface ChatEventDetail extends ChatEvent {
  explanation: string;
  session_id: string;
  resolved_by: {
    id: string;
    username: string;
  } | null;
}