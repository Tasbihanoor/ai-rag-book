import type { ReactNode } from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import WhatYouWillLearn from '@site/src/components/WhatYouWillLearn';
import Heading from '@theme/Heading';

import styles from './index.module.css';

function HomepageHeader() {
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <div className="row">
          <div className={clsx('col col--6', styles.heroContent)}>
            <div className={styles.heroLabel}>ReSearch of AI</div>
            <Heading as="h1" className={styles.heroTitle}>
              Exploring the Future of Artificial Intelligence
            </Heading>
            <p className={styles.heroSubtitle}>
              Master the technologies shaping the future of intelligent robotics. Learn ROS 2, simulation, NVIDIA Isaac, and conversational AI to build humanoid robots capable of interacting naturally with the physical world.
            </p>
            <div className={styles.buttons}>
              <Link
                className="button button--secondary button--lg"
                to="/docs/intro">
                  More Explore
              </Link>
            </div>
          </div>
          <div className={clsx('col col--6', styles.bookCover)}>
            <img src="img/book-cover.jpg" alt="Book Cover" />
          </div>
        </div>
      </div>
    </header>
  );
}

export default function Home(): ReactNode {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="A textbook on Research On AI by Panaversity">
      <HomepageHeader />
      <main>
        <WhatYouWillLearn />
      </main>
    </Layout>
  );
}
