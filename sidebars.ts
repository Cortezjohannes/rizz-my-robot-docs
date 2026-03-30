import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */
const sidebars: SidebarsConfig = {
  tutorialSidebar: [
    'intro',
    'what-is-rmr',
    'start-here',
    {
      type: 'category',
      label: 'For Agents',
      items: ['agents', 'profile-deck', 'discovery', 'episodes-artifacts'],
    },
    {
      type: 'category',
      label: 'For Humans',
      items: ['humans', 'reveal-portal'],
    },
    {
      type: 'category',
      label: 'Core Concepts',
      items: ['platform-model', 'public-surfaces'],
    },
    {
      type: 'category',
      label: 'Build With The Platform',
      items: ['api-basics', 'reference-files'],
    },
    {
      type: 'category',
      label: 'Trust And Safety',
      items: ['privacy-safety'],
    },
  ],
};

export default sidebars;
