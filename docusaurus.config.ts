import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'ReSearch of AI',
  tagline: 'A Textbook',
  favicon: 'img/favicon.ico',

  future: {
    v4: true,
  },

  url: 'https://github.com/Tasbihanoor.github.io',
  baseUrl: '/',

  organizationName: 'Tasbihanoor',
  projectName: 'ai-book',

  onBrokenLinks: 'throw',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          editUrl: 'https://github.com/Tasbihanoor/ai-rag-book/tree/main/',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
        blog: false,
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/docusaurus-social-card.jpg',

    colorMode: {
      defaultMode: 'dark',
      disableSwitch: true,
      respectPrefersColorScheme: false,
    },

    navbar: {
      title: 'ReSearch of AI',
      logo: undefined,
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Textbook',
        },
        {
          href: 'https://github.com/Tasbihanoor/ai-rag-book',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },

    footer: {
      style: 'dark',
      links: [
        {
          title: 'Textbook',
          items: [
            { label: 'Introduction', to: '/docs/intro' },
            { label: 'Chapter 1: Foundations', to: '/docs/physical-ai-book/intro/foundations' },
            { label: 'Chapter 2: ROS 2', to: '/docs/physical-ai-book/chapter2/ros2-architecture' },
          ],
        },
        {
          title: 'More',
          items: [{ href: 'https://github.com/Tasbihanoor/ai-rag-book', label: 'GitHub Repository' }],
        },
      ],
      copyright: `© ${new Date().getFullYear()} ReSearch of AI.`,
    },

    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
