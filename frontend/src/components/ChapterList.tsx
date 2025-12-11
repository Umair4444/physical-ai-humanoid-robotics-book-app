// frontend/src/components/ChapterList.tsx

import React from 'react';
import { Chapter } from '../types/chapter';
import clsx from 'clsx';

interface ChapterListProps {
  chapters: Chapter[];
  onSelectChapter: (chapterId: string) => void;
  activeChapterId?: string;
}

const ChapterList: React.FC<ChapterListProps> = ({ chapters, onSelectChapter, activeChapterId }) => {
  return (
    <div className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg shadow-inner">
      <h3 className="text-lg font-semibold mb-3 text-gray-800 dark:text-white">Chapters</h3>
      <ul>
        {chapters.map((chapter) => (
          <li key={chapter.id} className="mb-1">
            <button
              onClick={() => onSelectChapter(chapter.id)}
              className={clsx(
                'w-full',
                'text-left',
                'py-2',
                'px-3',
                'rounded-md',
                'transition-colors',
                'duration-200',
                'ease-in-out',
                activeChapterId === chapter.id
                  ? 'bg-blue-500 text-white'
                  : 'text-gray-600 dark:text-gray-300 hover:bg-blue-200 dark:hover:bg-blue-600'
              )}
            >
              {chapter.title}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ChapterList;
