import type { ReactNode } from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type LearnItem = {
  title: string;
  image: string;
  icon: string;
  description: ReactNode;
};

const LearnList: LearnItem[] = [
  {
    title: 'Core AI & Machine Intelligence',
    image: 'https://images.unsplash.com/photo-1505678261036-a3fcc5e884ee?auto=format&fit=crop&w=800&q=60',
    icon: '🧠',
    description: <>Understand the foundations of modern AI, neural systems, and intelligent decision-making.</>,
  },

  {
    title: 'Robotics with AI-Powered Perception',
    image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg',
    icon: '🤖',
    description: <>Learn how robots interpret their environment using deep learning and real-time sensing.</>,
  },

  {
    title: 'Autonomous Navigation & Motion Planning',
    image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=60',
    icon: '🦾',
    description: <>Master intelligent movement, obstacle avoidance, and dynamic robotics coordination.</>,
  },

  {
    title: 'ROS 2 for AI Robotics',
    image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=800&q=60',
    icon: '⚙️',
    description: <>Build scalable robotic systems using ROS 2—the core framework for modern automation.</>,
  },

  {
    title: 'Simulation with Isaac, Gazebo & Unity',
    image: 'https://images.unsplash.com/photo-1677442135703-1787eea5ce01?auto=format&fit=crop&w=800&q=60',
    icon: '🧪',
    description: <>Train and test intelligent robots in realistic 3D simulation environments.</>,
  },

  {
    title: 'Robots with LLM-Driven Intelligence',
    image: 'https://images.unsplash.com/photo-1603791440384-56cd371ee9a7?auto=format&fit=crop&w=800&q=60',
    icon: '💬',
    description: <>Enable robots to understand language, reason, and act using GPT-powered intelligence.</>,
  },
];




function Learn({ title, image, icon, description }: LearnItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className={clsx('card card--full-height', styles.learnCard)}>
        <div className={styles.learnImage}>
          <img src={image} alt={title} />
          <div className={styles.learnIcon}>{icon}</div>
        </div>
        <div className="card__header">
          <Heading as="h3">{title}</Heading>
        </div>
        <div className="card__body">
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
}

export default function WhatYouWillLearn(): ReactNode {
  return (
    <section className={styles.learn}>
      <div className="container">
        <div className="text--center margin-bottom--xl">
          <Heading as="h2" className={styles.sectionTitle}>
            What You Will Learn
          </Heading>
          <p className={styles.sectionSubtitle}>
            Build deep expertise in AI-driven robotics, intelligent systems, and modern autonomous technologies.
          </p>
        </div>
        <div className="row">
          {LearnList.map((props, idx) => (
            <Learn key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}

