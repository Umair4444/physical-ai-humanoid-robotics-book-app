// frontend/src/types/module.ts

/**
 * A section or major division within a Book.
 */
export interface Module {
  id: string; // Unique identifier for the module.
  title: string; // The title of the module.
  chapterIds: string[]; // List of IDs for chapters belonging to this module.
}
