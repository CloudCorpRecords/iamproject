import axios from 'axios';
import type { ChatRequest, ChatResponse } from './types';

const api = axios.create({
  baseURL: '/api',
});

export const sendChatMessage = async (data: ChatRequest): Promise<ChatResponse> => {
  try {
    const response = await api.post<ChatResponse>('/chat', data);
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      return { message: '', error: error.response.data.error || 'Failed to send message' };
    }
    return { message: '', error: 'Failed to send message' };
  }
};
