import React from 'react';
import { SubscriptionTier } from '../types/subscription';
import { Button } from './ui/button';

interface PricingCardProps {
  tier: SubscriptionTier;
  onSelect?: (tierId: string) => void;
}

const PricingCard: React.FC<PricingCardProps> = ({ tier, onSelect }) => {
  const handleSelect = () => {
    if (onSelect) {
      onSelect(tier.id);
    }
  };

  return (
    <div
      className="flex flex-col p-6 mx-auto max-w-lg text-center text-gray-900 bg-white rounded-lg border border-gray-100 shadow dark:border-gray-600 dark:bg-gray-800 dark:text-white"
    >
      <h3 className="mb-4 text-2xl font-semibold">{tier.name}</h3>
      <p className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
        {tier.name === 'Free' && 'Best for small teams and personal use.'}
        {tier.name === 'Standard' && 'Perfect for growing teams with advanced needs.'}
        {tier.name === 'Premium' && 'Enterprise-grade features for large organizations.'}
      </p>
      <div className="flex justify-center items-baseline my-8">
        <span className="mr-2 text-5xl font-extrabold">
          {tier.name === 'Free' ? '$0' : tier.name === 'Standard' ? '$29' : '$99'}
        </span>
        <span className="text-gray-500 dark:text-gray-400">/month</span>
      </div>
      <ul role="list" className="mb-8 space-y-4 text-left">
        {tier.features.map((feature, index) => (
          <li key={index} className="flex items-center space-x-3">
            <svg
              className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              ></path>
            </svg>
            <span>{feature}</span>
          </li>
        ))}
      </ul>
      <Button onClick={handleSelect} className="w-full">
        {tier.name === 'Free' ? 'Current Plan' : 'Get Started'}
      </Button>
    </div>
  );
};

export default PricingCard;

