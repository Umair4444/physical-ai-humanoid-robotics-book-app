import React, { useState } from 'react';
import { Input } from '../../components/ui/input'; // Assuming Input component is shared
import { Button } from '../../components/ui/button'; // Assuming Button component is shared

interface ChatInputProps {
  onSendMessage: (message: string) => void;
  isLoading?: boolean;
}

const ChatInput: React.FC<ChatInputProps> = ({ onSendMessage, isLoading }) => {
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (message.trim() && !isLoading) {
      onSendMessage(message);
      setMessage('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex space-x-2 p-4 border-t border-gray-200 dark:border-gray-700">
      <Input
        type="text"
        placeholder="Type your message..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        disabled={isLoading}
        className="flex-grow"
      />
      <Button type="submit" disabled={isLoading}>
        {isLoading ? 'Sending...' : 'Send'}
      </Button>
    </form>
  );
};

export default ChatInput;
