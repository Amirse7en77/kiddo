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