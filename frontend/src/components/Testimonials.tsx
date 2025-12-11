// frontend/src/components/Testimonials.tsx

import React from 'react';

const Testimonials: React.FC = () => {
  return (
    <section className="py-12 bg-gray-100 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-900 dark:text-gray-100">
          What Our Users Say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Placeholder for individual testimonial cards */}
          <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md">
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              "This app has revolutionized my learning experience. The content is
              top-notch and easy to understand!"
            </p>
            <p className="font-semibold text-gray-800 dark:text-gray-200">- Jane Doe</p>
          </div>
          <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md">
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              "Physical AI and robotics made accessible. Highly recommend to
              anyone interested in the field."
            </p>
            <p className="font-semibold text-gray-800 dark:text-gray-200">- John Smith</p>
          </div>
          <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md">
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              "The chatbot is incredibly helpful for clarifying complex topics. A
              game-changer!"
            </p>
            <p className="font-semibold text-gray-800 dark:text-gray-200">- Alice Johnson</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
