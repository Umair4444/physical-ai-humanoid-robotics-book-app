// frontend/src/types/chapter.ts

/**
 * A unit of educational content within a Module.
 */
export interface Chapter {
  id: string; // Unique identifier for the chapter.
  title: string; // The title of the chapter.
  fullLessonContent: string; // The complete lesson content, potentially in MDX or HTML format.
  summaryContent: string; // A concise summary of the full lesson content, potentially in MDX or HTML format.
  imageUrls: string[]; // List of URLs for images embedded within the chapter content.
}
