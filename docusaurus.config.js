const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Calendso Developer Documentation',
  tagline: 'Dinosaurs are cool',
  url: 'https://docs.calendso.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'calendso', // Usually your GitHub org/user name.
  projectName: 'docs', // Usually your repo name.
  themeConfig: {
    navbar: {
      logo: {
        alt: 'Calendso Logo',
        src: 'img/logo.svg',
        srcDark: 'img/logo-white.svg'
      },
      items: [
        {href: 'https://docs.calendso.com', label: 'Product Docs', position: 'left'},
        {
          type: 'doc',
          docId: 'code-styling',
          position: 'left',
          label: 'Developer',
        },
        {href: 'https://design.calendso.com', label: 'Design', position: 'left'},
        {
          href: '/api',
          position: 'left',
          label: 'API',
        },
        {
          href: 'https://github.com/calendso/calendso',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'light',
      links: [
        {
          title: 'Calendso',
          items: [
            {
              label: 'Website',
              href: 'https://calendso.com',
            },
            {
              label: 'Slack',
              href: 'https://calendso.com/slack',
            },
            {
              label: 'Careers',
              href: 'https://calendso.com/jobs',
            },
          ],
        },
        {
          title: 'Repositories',
          items: [
            {
              label: 'Calendso',
              href: 'https://github.com/calendso/calendso',
            },
            {
              label: 'Documentation',
              href: 'https://github.com/calendso/docs',
            },
            {
              label: 'Docker',
              href: 'https://github.com/calendso/docker',
            },
          ],
        },
        {
          title: 'Social',
          items: [
            {
              label: 'Twitter',
              href: 'https://twitter.com/calendso',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/calendso/calendso',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Cal.com, Inc.`,
    },
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
              'https://github.com/calendso/developer/edit/main/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
              'https://github.com/calendso/developer/edit/main/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
