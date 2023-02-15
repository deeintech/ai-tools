const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'The ultimate list of best AI tools',
  favicon: 'img/favicon.ico',
  url: 'https://ai-tools-pro.netlify.app',
  baseUrl: '/',
  organizationName: 'deeintech',
  projectName: 'ai-tools',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: false,
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // image: 'img/logo/png',
      navbar: {
        // logo: {
        //   alt: 'Logo',
        //   src: 'img/logo.png',
        // },
        // items: [
        //   {
        //     href: '/',
        //     label: 'Submit your tool',
        //     position: 'right',
        //   },
        // ],
      },
      colorMode: {
        defaultMode: 'dark',
      },
      footer: {
        style: 'dark',
        copyright: `© ${new Date().getFullYear()} @deeintech`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
