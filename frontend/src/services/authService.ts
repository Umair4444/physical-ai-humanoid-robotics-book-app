import apiClient from './apiClient';

export const signup = async (email: string, password: string) => {
  try {
    const response = await apiClient.post('/auth/signup', { email, password });
    return response.data;
  } catch (error) {
    console.error('Signup error:', error);
    throw error;
  }
};

export const login = async (email: string, password: string) => {
  try {
    const response = await apiClient.post('/auth/signin', { email, password });
    return response.data;
  } catch (error) {
    console.error('Login error:', error);
    throw error;
  }
};
