import apiClient from './apiClient';
import { SubscriptionTier } from '../types/subscription';

export const getSubscriptionPlans = async (): Promise<SubscriptionTier[]> => {
  try {
    const response = await apiClient.get<SubscriptionTier[]>('/subscriptions/plans');
    return response.data;
  } catch (error) {
    console.error('Error fetching subscription plans:', error);
    throw error;
  }
};
