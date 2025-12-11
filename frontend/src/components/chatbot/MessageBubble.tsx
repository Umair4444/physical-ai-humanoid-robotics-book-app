import React from 'react';
import clsx from 'clsx';

interface MessageBubbleProps {
  message: string;
  isUser: boolean;
}

const MessageBubble: React.FC<MessageBubbleProps> = ({ message, isUser }) => {
  return (
    <div
      className={clsx('flex', {
        'justify-end': isUser,
        'justify-start': !isUser,
      })}
    >
      <div
        className={clsx(
          'max-w-[70%]',
          'px-4',
          'py-2',
          'rounded-lg',
          'shadow-md',
          {
            'bg-blue-500 text-white': isUser,
            'bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-gray-200': !isUser,
          }
        )}
      >
        <p className="text-sm">{message}</p>
      </div>
    </div>
  );
};

export default MessageBubble;
