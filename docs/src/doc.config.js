/* eslint-disable */
const version = require('../../package.json').version;

module.exports = {
  'zh-CN': {
    header: {
      logo: {
        image: 'http://static.sosout.com/images/zanm-logo.svg',
        title: 'Zanm',
        version,
        href: '#/'
      },
      nav: {
        '个人博客': 'http://www.sosout.com/',
        lang: {
          text: 'English',
          from: 'zh-CN',
          to: 'en-US'
        },
        github: 'https://github.com/meitianyitan/zanm'
      }
    },
    nav: [
      {
        name: 'Zanm Mobile of Vue',
        groups: [
          {
            list: [
              {
                path: '/intro',
                title: '介绍'
              },
              {
                path: '/quickstart',
                title: '快速上手'
              },
              {
                path: '/zanm-css',
                title: '内置样式'
              },
              {
                path: '/theme',
                title: '定制主题'
              },
              {
                path: '/locale',
                title: '国际化'
              },
              // {
              //   path: '/changelog',
              //   title: '更新日志'
              // },
              {
                path: '/contribution',
                title: '贡献指南'
              },
              // {
              //   path: '/case',
              //   title: '实践案例'
              // },
            ]
          }
        ]
      },
      {
        name: '组件',
        showInMobile: true,
        groups: [
          {
            groupName: '基础组件',
            list: [
              {
                path: '/button',
                title: 'Button 按钮'
              },
              {
                path: '/icon',
                title: 'Icon 图标'
              },
            ]
          },
          {
            groupName: '布局组件',
            list: [
              {
                path: '/col',
                title: 'Grid 栅格'
              },
              {
                path: '/card',
                title: 'Card 卡片'
              },
            ]
          },
          {
            groupName: '导航组件',
            list: [
              {
                path: '/badge',
                title: 'Badge 徽标数'
              },
            ]
          },
          {
            groupName: '视图组件',
            list: [
              {
                path: '/tag',
                title: 'Tag 标记'
              },
            ]
          },
        ]
      }
    ]
  },
  'en-US': {
    header: {
      logo: {
        image: 'http://static.sosout.com/images/zanm-logo.svg',
        title: 'Zanm',
        version,
        href: '#/'
      },
      nav: {
        'My Blog': 'http://www.sosout.com/',
        lang: {
          text: '中文',
          from: 'en-US',
          to: 'zh-CN'
        },
        github: 'https://github.com/meitianyitan/zanm'
      }
    },
    nav: [
      {
        name: 'Zanm Mobile of Vue',
        groups: [
          {
            list: [
              {
                path: '/intro',
                title: 'Introduction'
              },
              {
                path: '/quickstart',
                title: 'Quickstart'
              },
              {
                path: '/zanm-css',
                title: 'Built-in style'
              },
              {
                path: '/theme',
                title: 'Custom Theme'
              },
              {
                path: '/locale',
                title: 'Internationalization'
              },
              // {
              //   path: '/changelog',
              //   title: 'Changelog'
              // },
              {
                path: '/contribution',
                title: 'Contributing'
              },
              // {
              //   path: '/case',
              //   title: 'Case pages'
              // },
            ]
          }
        ]
      },
      {
        name: 'Components',
        showInMobile: true,
        groups: [
          {
            groupName: 'Basic Components',
            list: [
              {
                path: '/button',
                title: 'Button'
              },
              {
                path: '/icon',
                title: 'Icon'
              },
            ]
          },
          {
            groupName: 'Layout Components',
            list: [
              {
                path: '/col',
                title: 'Grid'
              },
              {
                path: '/card',
                title: 'Card'
              },
            ]
          },
          {
            groupName: 'Navigation Components',
            list: [
              {
                path: '/badge',
                title: 'Badge'
              },
            ]
          },
          {
            groupName: 'View Components',
            list: [
              {
                path: '/tag',
                title: 'Tag'
              },
            ]
          },
        ]
      }
    ]
  }
};
