export interface User {
  id: string;
  email: string;
  subscriptionTierId?: string; // Optional, as a user might not have a subscription
}