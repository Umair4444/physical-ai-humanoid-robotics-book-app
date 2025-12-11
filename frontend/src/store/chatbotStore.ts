import { create } from 'zustand';

// Define the ChatMessage interface here for the store
interface ChatMessage {
  id: string;
  message: string;
  isUser: boolean;
}

interface ChatbotState {
  messages: ChatMessage[];
  addMessage: (message: ChatMessage) => void;
  clearMessages: () => void;
}

export const useChatbotStore = create<ChatbotState>((set) => ({
  messages: [],
  addMessage: (message) => set((state) => ({ messages: [...state.messages, message] })),
  clearMessages: () => set({ messages: [] }),
}));
