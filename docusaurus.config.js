// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const math = require("remark-math");
const katex = require("rehype-katex");

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

module.exports = {
    title: 'THUAI7 Game Rules',
    tagline: 'EESΛST 软件部 倾情奉献',
    favicon: 'img/favicon.ico',

    // Set the production url of your site here
    url: 'https://thuai7.panxuc.com',
    // Set the /<baseUrl>/ pathname under which your site is served
    // For GitHub pages deployment, it is often '/<projectName>/'
    baseUrl: '/',

    // GitHub pages deployment config.
    // If you aren't using GitHub pages, you don't need these.
    organizationName: 'Panxuc', // Usually your GitHub org/user name.
    projectName: 'THUAI7-GameRules', // Usually your repo name.

    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'warn',

    // Even if you don't use internalization, you can use this field to set useful
    // metadata like html lang. For example, if your site is Chinese, you may want
    // to replace "en" with "zh-Hans".
    i18n: {
        defaultLocale: 'zh-CN',
        locales: ['zh-CN'],
    },

    presets: [
        [
            'classic',
            /** @type {import('@docusaurus/preset-classic').Options} */
            ({
                docs: {
                    sidebarPath: require.resolve('./sidebars.js'),
                    editUrl:
                        'https://github.com/Panxuc/THUAI7-GameRules/edit/main',
                    showLastUpdateAuthor: true,
                    showLastUpdateTime: true,
                    remarkPlugins: [math],
                    rehypePlugins: [katex],
                },
                blog: {
                    showReadingTime: true,
                },
                theme: {
                    customCss: require.resolve('./src/css/custom.css'),
                },
            }),
        ],
    ],

    stylesheets: [
        {
            href: 'https://cdn.jsdelivr.net/npm/katex@0.13.24/dist/katex.min.css',
            type: 'text/css',
            integrity:
                'sha384-odtC+0UGzzFL/6PNoE8rX/SPcQDXBJ+uRepguP4QkPCm2LBxH3FA3y+fKSiJ+AmM',
            crossorigin: 'anonymous',
        },
    ],

    themeConfig: {
        docs: {
            sidebar: {
                hideable: true,
            },
        },
        navbar: {
            title: 'THUAI7 Game Rules',
            logo: {
                alt: 'EESΛST Logo',
                src: 'img/favicon.ico',
            },
            items: [
                {
                    to: "docs/",
                    activeBasePath: "docs",
                    label: "规则",
                    position: "left",
                    items: [
                        {
                            label: "引入",
                            to: "docs/intro",
                        },
                        {
                            label: "地图",
                            to: "docs/map",
                        },
                        {
                            label: "舰船",
                            to: "docs/ship",
                        },
                        {
                            label: "建筑",
                            to: "docs/construction",
                        },
                        {
                            label: "攻击",
                            to: "docs/attack",
                        },
                        {
                            label: "得分",
                            to: "docs/score",
                        },
                        {
                            label: "细则",
                            to: "docs/detail",
                        },
                    ],
                },
                { to: '/blog', label: '公告', position: 'left' },
                {
                    href: 'https://github.com/Panxuc/THUAI7-GameRules',
                    label: 'GitHub',
                    position: 'right',
                },
            ],
        },
        footer: {
            style: 'dark',
            links: [
                {
                    title: '规则',
                    items: [
                        {
                            label: "引入",
                            to: "docs/intro",
                        },
                        {
                            label: "地图",
                            to: "docs/map",
                        },
                        {
                            label: "舰船",
                            to: "docs/ship",
                        },
                        {
                            label: "建筑",
                            to: "docs/construction",
                        },
                        {
                            label: "攻击",
                            to: "docs/attack",
                        },
                        {
                            label: "得分",
                            to: "docs/score",
                        },
                        {
                            label: "细则",
                            to: "docs/detail",
                        },
                    ],
                },
                {
                    title: "EESΛST",
                    items: [
                        {
                            label: "Home",
                            href: "https://eesast.com",
                        },
                    ],
                },
                {
                    title: '更多',
                    items: [
                        {
                            label: '公告',
                            to: 'blog',
                        },
                        {
                            label: 'GitHub',
                            href: 'https://github.com/Panxuc/THUAI7-GameRules',
                        },
                    ],
                },
            ],
            copyright: `Copyright © ${new Date().getFullYear()} THUAI7 Game Rules, EESΛST. Built with Docusaurus.`,
        },
        prism: {
            theme: lightCodeTheme,
            darkTheme: darkCodeTheme,
        },
    },

    plugins: [
        [
            require.resolve("@easyops-cn/docusaurus-search-local"),
            {
                hashed: true,
                language: ["en", "zh"],
            },
        ],
    ],
};
