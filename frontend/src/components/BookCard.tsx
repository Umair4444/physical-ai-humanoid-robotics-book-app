// frontend/src/components/BookCard.tsx

import React from 'react';
import clsx from 'clsx';
import { Book } from '../types/book';

interface BookCardProps {
  book: Book;
  onClick?: (bookId: string) => void;
}

const BookCard: React.FC<BookCardProps> = ({ book, onClick }) => {
  const handleClick = () => {
    if (onClick) {
      onClick(book.id);
    }
  };

  return (
    <div
      className={clsx(
        'relative',
        'group',
        'bg-white',
        'dark:bg-gray-800',
        'rounded-lg',
        'shadow-md',
        'hover:shadow-lg',
        'transition-shadow',
        'duration-300',
        'ease-in-out',
        'overflow-hidden',
        'cursor-pointer',
        'transform',
        'hover:-translate-y-1',
        'flex',
        'flex-col',
        'h-full' // Ensure card takes full height of its container
      )}
      onClick={handleClick}
      role="button"
      tabIndex={0}
      onKeyPress={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          handleClick();
        }
      }}
    >
      <div className="flex-shrink-0">
        <img
          src={book.coverImageUrl}
          alt={`Cover of ${book.title}`}
          className="w-full h-48 object-cover rounded-t-lg"
        />
      </div>
      <div className="p-4 flex-grow flex flex-col justify-between">
        <div>
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
            {book.title}
          </h3>
          <p className="text-sm text-gray-600 dark:text-gray-300">
            By {book.author}
          </p>
        </div>
        {/* Placeholder for more actions or details */}
        <div className="mt-4">
          <span className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-100">
            Read Now
          </span>
        </div>
      </div>
    </div>
  );
};

export default BookCard;
