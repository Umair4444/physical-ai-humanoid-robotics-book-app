import React from 'react';
import Layout from '@theme/Layout';
import PricingCard from '../components/PricingCards';
import { SubscriptionTier } from '../types/subscription';

const Pricing: React.FC = () => {
  // Dummy data for subscription tiers - replace with actual API calls later (T041)
  const subscriptionTiers: SubscriptionTier[] = [
    {
      id: 'free',
      name: 'Free',
      features: ['Access to basic content', 'Limited chapters', 'Community support'],
    },
    {
      id: 'standard',
      name: 'Standard',
      features: ['Access to all content', 'Unlimited chapters', 'Email support', 'Early access to new features'],
    },
    {
      id: 'premium',
      name: 'Premium',
      features: ['All Standard features', 'Dedicated account manager', 'Offline access', 'Exclusive webinars'],
    },
  ];

  const handleTierSelect = (tierId: string) => {
    console.log('Selected tier:', tierId);
    // Logic for subscribing to a tier will be handled elsewhere
  };

  return (
    <Layout title="Pricing" description="Choose a subscription plan">
      <div className="container mx-auto my-12 px-4">
        <h1 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-8">
          Choose Your Plan
        </h1>
        <p className="text-xl text-center text-gray-600 dark:text-gray-300 mb-12">
          Unlock full access to our Physical AI & Humanoid Robotics textbook.
        </p>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {subscriptionTiers.map((tier) => (
            <PricingCard key={tier.id} tier={tier} onSelect={handleTierSelect} />
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Pricing;
