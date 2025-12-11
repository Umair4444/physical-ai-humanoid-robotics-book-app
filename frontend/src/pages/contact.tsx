// frontend/src/pages/contact.tsx

import React from 'react';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import { Label } from '../components/ui/label';
import { Input } from '../components/ui/input';
import { Button } from '../components/ui/button';

const Contact: React.FC = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Contact form submitted!');
  };

  return (
    <Layout title="Contact Us" description="Contact us for any inquiries.">
      <main className="container mx-auto px-4 py-8">
        <Heading as="h1" className="text-4xl font-bold text-center mb-8">
          Contact Us
        </Heading>
        <div className="max-w-lg mx-auto bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <Label htmlFor="name">Name</Label>
              <Input type="text" id="name" placeholder="Your Name" required />
            </div>
            <div>
              <Label htmlFor="email">Email</Label>
              <Input type="email" id="email" placeholder="your@example.com" required />
            </div>
            <div>
              <Label htmlFor="message">Message</Label>
              <textarea
                id="message"
                rows={5}
                className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-md bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Your message"
                required
              ></textarea>
            </div>
            <Button type="submit" className="w-full">
              Send Message
            </Button>
          </form>
        </div>
      </main>
    </Layout>
  );
};

export default Contact;
