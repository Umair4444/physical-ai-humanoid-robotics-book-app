import { create } from 'zustand';
import { User } from '../types/user'; // Import User interface

interface UserState {
  user: User | null;
  isLoggedIn: boolean;
  login: (userData: User, token: string) => void;
  logout: () => void;
  setUser: (userData: User) => void;
}

export const useUserStore = create<UserState>((set) => ({
  user: null,
  isLoggedIn: false,
  login: (userData, token) => {
    localStorage.setItem('authToken', token); // Store token
    set({ user: userData, isLoggedIn: true });
  },
  logout: () => {
    localStorage.removeItem('authToken'); // Remove token
    set({ user: null, isLoggedIn: false });
  },
  setUser: (userData) => set({ user: userData }),
}));
