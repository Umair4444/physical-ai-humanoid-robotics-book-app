// frontend/src/types/testimonial.ts

export interface Testimonial {
  id: string;
  user_name: string;
  book_id: string;
  rating: number;
  comment: string;
  date: string; // ISO 8601 date-time string
}
