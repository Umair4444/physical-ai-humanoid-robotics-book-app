export interface SubscriptionTier {
  id: string;
  name: 'Free' | 'Standard' | 'Premium';
  features: string[];
}