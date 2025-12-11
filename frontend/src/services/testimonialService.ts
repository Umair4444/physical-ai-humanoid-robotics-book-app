// frontend/src/services/testimonialService.ts

import apiClient from './apiClient';
import { Testimonial } from '../types/testimonial'; // Assuming a Testimonial type will be created

interface TestimonialData {
  book_id: string;
  rating: number;
  comment: string;
}

const testimonialService = {
  getTestimonials: async (bookId?: string): Promise<Testimonial[]> => {
    try {
      const response = await apiClient.get('/testimonials', {
        params: bookId ? { book_id: bookId } : {},
      });
      return response.data;
    } catch (error) {
      console.error('Error fetching testimonials:', error);
      throw error;
    }
  },

  postTestimonial: async (data: TestimonialData): Promise<{ message: string; testimonial_id: string }> => {
    try {
      const response = await apiClient.post('/testimonials', data);
      return response.data;
    } catch (error) {
      console.error('Error posting testimonial:', error);
      throw error;
    }
  },
};

export default testimonialService;
