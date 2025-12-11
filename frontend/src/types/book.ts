// frontend/src/types/book.ts

/**
 * Represents a textbook in the application.
 */
export interface Book {
  id: string; // Unique identifier for the book.
  title: string; // The title of the book.
  author: string; // The author(s) of the book.
  coverImageUrl: string; // URL to the book's cover image.
  moduleIds: string[]; // List of IDs for modules belonging to this book.
}
