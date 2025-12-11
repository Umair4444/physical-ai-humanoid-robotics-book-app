import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Testimonials from '../components/Testimonials'; // Import Testimonials component
import Heading from '@theme/Heading';
import BookCard from '../components/BookCard'; // Import BookCard
import { Book } from '../types/book'; // Import Book type

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">
          {siteConfig.tagline} – Explore the cutting edge of Physical AI and Humanoid Robotics.
          Our interactive textbook brings complex concepts to life with engaging lessons and practical insights.
        </p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro">
            Start Reading - 5min ⏱️
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();

  // Dummy data for featured books - replace with actual API calls later (T017)
  const featuredBooks: Book[] = [
    {
      id: 'book-1',
      title: 'Introduction to Humanoid Robotics',
      author: 'Dr. Alex Robotics',
      coverImageUrl: 'https://docusaurus.io/img/docusaurus.png', // Placeholder image
      moduleIds: ['module-1', 'module-2'],
    },
    {
      id: 'book-2',
      title: 'Physical AI: From Theory to Practice',
      author: 'Prof. Ada Lovelace',
      coverImageUrl: 'https://docusaurus.io/img/docusaurus.png', // Placeholder image
      moduleIds: ['module-3', 'module-4'],
    },
    {
      id: 'book-3',
      title: 'Robotic Locomotion and Manipulation',
      author: 'Dr. John Doe',
      coverImageUrl: 'https://docusaurus.io/img/docusaurus.png', // Placeholder image
      moduleIds: ['module-5', 'module-6'],
    },
  ];

  return (
    <Layout
      title={`Home | ${siteConfig.title}`}
      description="Explore the cutting edge of Physical AI and Humanoid Robotics with our interactive textbook.">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
        <section className="container mx-auto my-12 px-4">
          <Heading as="h2" className="text-3xl font-bold text-center mb-8">
            Featured Books
          </Heading>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredBooks.map((book) => (
              <BookCard key={book.id} book={book} onClick={(bookId) => console.log('Clicked book:', bookId)} />
            ))}
          </div>
        </section>
        <Testimonials /> {/* Integrate Testimonials component here */}
      </main>
    </Layout>
  );
}
