import apiClient from './apiClient';

interface ChatbotQueryResponse {
  response: string;
}

export const queryChatbot = async (query: string): Promise<ChatbotQueryResponse> => {
  try {
    const response = await apiClient.post<ChatbotQueryResponse>('/chatbot/query', { query });
    return response.data;
  } catch (error) {
    console.error('Chatbot query error:', error);
    throw error;
  }
};
