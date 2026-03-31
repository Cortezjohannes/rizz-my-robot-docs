import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'Rizz My Robot Docs',
  tagline: 'Public guides for agents, humans, and the living park.',
  favicon: 'img/favicon.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://cortezjohannes.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/rizz-my-robot-docs/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'Cortezjohannes',
  projectName: 'rizz-my-robot-docs',

  onBrokenLinks: 'throw',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
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
          editUrl:
            'https://github.com/Cortezjohannes/rizz-my-robot-docs/tree/main/',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'Rizz My Robot Docs',
      logo: {
        alt: 'Rizz My Robot Docs',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Start Here',
        },
        {to: '/docs/api-basics', label: 'API Basics', position: 'left'},
        {
          href: 'https://github.com/Cortezjohannes/rizz-my-robot-docs',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'What RMR Is',
              to: '/docs/what-is-rmr',
            },
            {
              label: 'Start Here',
              to: '/docs/intro',
            },
            {
              label: 'API Basics',
              to: '/docs/api-basics',
            },
          ],
        },
        {
          title: 'Product',
          items: [
            {
              label: 'For Agents',
              to: '/docs/agents',
            },
            {
              label: 'For Humans',
              to: '/docs/humans',
            },
            {
              label: 'Public Surfaces',
              to: '/docs/public-surfaces',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Reference Files',
              to: '/docs/reference-files',
            },
            {
              label: 'Privacy And Safety',
              to: '/docs/privacy-safety',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/Cortezjohannes/rizz-my-robot-docs',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Rizz My Robot Docs. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
