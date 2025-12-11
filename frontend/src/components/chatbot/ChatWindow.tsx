import React, { useState, useRef, useEffect } from 'react';
import MessageBubble from './MessageBubble';
import ChatInput from './ChatInput';
import { queryChatbot } from '../../services/chatbotService'; // Import the chatbot service

interface ChatMessage {
  id: string;
  message: string;
  isUser: boolean;
}

interface ChatWindowProps {
  // Add any props if needed, e.g., for initial messages or external control
}

const ChatWindow: React.FC<ChatWindowProps> = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(scrollToBottom, [messages]);

  const handleSendMessage = async (text: string) => { // Make function async
    const newUserMessage: ChatMessage = {
      id: Date.now().toString() + '-user',
      message: text,
      isUser: true,
    };
    setMessages((prevMessages) => [...prevMessages, newUserMessage]);
    setIsLoading(true);

    try {
      const response = await queryChatbot(text); // Call the chatbot service
      const botResponse: ChatMessage = {
        id: Date.now().toString() + '-bot',
        message: response.response,
        isUser: false,
      };
      setMessages((prevMessages) => [...prevMessages, botResponse]);
    } catch (error) {
      const errorMessage: ChatMessage = {
        id: Date.now().toString() + '-error',
        message: 'Error: Could not get a response from the chatbot.',
        isUser: false,
      };
      setMessages((prevMessages) => [...prevMessages, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col h-full bg-white dark:bg-gray-800 rounded-lg shadow-lg">
      <div className="flex-grow p-4 overflow-y-auto space-y-4">
        {messages.map((msg) => (
          <MessageBubble key={msg.id} message={msg.message} isUser={msg.isUser} />
        ))}
        <div ref={messagesEndRef} />
      </div>
      <ChatInput onSendMessage={handleSendMessage} isLoading={isLoading} />
    </div>
  );
};

export default ChatWindow;
