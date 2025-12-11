// frontend/src/services/contentService.ts

import { apiClient } from './apiClient';
import { Book } from '../types/book';
import { Module } from '../types/module';
import { Chapter } from '../types/chapter';

/**
 * Fetches a list of all available books with summary information.
 * @returns A promise that resolves to an array of Book objects.
 */
export const getBooks = async (): Promise<Book[]> => {
  const response = await apiClient.get<Book[]>('/books');
  return response.data;
};

/**
 * Retrieves detailed information for a specific book.
 * @param bookId The ID of the book.
 * @returns A promise that resolves to a Book object.
 */
export const getBookDetails = async (bookId: string): Promise<Book> => {
  const response = await apiClient.get<Book>(`/books/${bookId}`);
  return response.data;
};


/**
 * Fetches detailed information for a specific module within a book.
 * @param bookId The ID of the book.
 * @param moduleId The ID of the module.
 * @returns A promise that resolves to a Module object.
 */
export const getModuleDetails = async (bookId: string, moduleId: string): Promise<Module> => {
  const response = await apiClient.get<Module>(`/books/${bookId}/modules/${moduleId}`);
  return response.data;
};

/**
 * Fetches the full lesson and summary content for a specific chapter.
 * @param bookId The ID of the book.
 * @param moduleId The ID of the module.
 * @param chapterId The ID of the chapter.
 * @returns A promise that resolves to a Chapter object.
 */
export const getChapterContent = async (
  bookId: string,
  moduleId: string,
  chapterId: string
): Promise<Chapter> => {
  const response = await apiClient.get<Chapter>(
    `/books/${bookId}/modules/${moduleId}/chapters/${chapterId}`
  );
  return response.data;
};

