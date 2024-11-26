export interface ChatMessage {
  role: 'user' | 'assistant' | 'system';
  content: string;
}

export interface ChatRequest {
  message: string;
  agentId: number;
}

export interface ChatResponse {
  message: string;
  error?: string;
}
