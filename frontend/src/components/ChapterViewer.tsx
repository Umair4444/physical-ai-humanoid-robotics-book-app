// frontend/src/components/ChapterViewer.tsx

import React, { useState } from 'react';
import { Chapter } from '../types/chapter';
import clsx from 'clsx';
// Assuming Docusaurus's MDX/Markdown rendering capabilities or a similar library for content display

interface ChapterViewerProps {
  chapter: Chapter;
}

const ChapterViewer: React.FC<ChapterViewerProps> = ({ chapter }) => {
  const [activeTab, setActiveTab] = useState<'full' | 'summary'>('full');

  if (!chapter) {
    return <div className="text-center text-gray-500 dark:text-gray-400">Select a chapter to view content.</div>;
  }

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
      <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">{chapter.title}</h2>

      <div className="border-b border-gray-200 dark:border-gray-700 mb-6">
        <nav className="-mb-px flex space-x-8" aria-label="Tabs">
          <button
            onClick={() => setActiveTab('full')}
            className={clsx(
              'whitespace-nowrap py-3 px-1 border-b-2 font-medium text-sm',
              activeTab === 'full'
                ? 'border-blue-500 text-blue-600 dark:text-blue-400'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 dark:text-gray-400 dark:hover:text-gray-200'
            )}
          >
            Full Lesson
          </button>
          <button
            onClick={() => setActiveTab('summary')}
            className={clsx(
              'whitespace-nowrap py-3 px-1 border-b-2 font-medium text-sm',
              activeTab === 'summary'
                ? 'border-blue-500 text-blue-600 dark:text-blue-400'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 dark:text-gray-400 dark:hover:text-gray-200'
            )}
          >
            Summary
          </button>
        </nav>
      </div>

      <div className="prose dark:prose-invert max-w-none">
        {activeTab === 'full' && (
          // In a Docusaurus context, chapter.fullLessonContent might be rendered using a Markdown/MDX component
          // For now, we'll just display it as raw HTML or markdown.
          // A more robust solution would involve a dedicated MDX rendering component if needed.
          <div dangerouslySetInnerHTML={{ __html: chapter.fullLessonContent }} />
        )}
        {activeTab === 'summary' && (
          <div dangerouslySetInnerHTML={{ __html: chapter.summaryContent }} />
        )}

        {chapter.imageUrls && chapter.imageUrls.length > 0 && (
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
            {chapter.imageUrls.map((imageUrl, index) => (
              <img
                key={index}
                src={imageUrl}
                alt={`Chapter illustration ${index + 1}`}
                className="w-full h-auto rounded-lg shadow-sm"
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ChapterViewer;
