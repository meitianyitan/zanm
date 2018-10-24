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
              {
                path: '/changelog',
                title: '更新日志'
              },
              {
                path: '/contribution',
                title: '贡献指南'
              },
              {
                path: '/case',
                title: '实践案例'
              },
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
              {
                path: '/changelog',
                title: 'Changelog'
              },
              {
                path: '/contribution',
                title: 'Contributing'
              },
              {
                path: '/case',
                title: 'Case pages'
              },
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
        ]
      }
    ]
  }
};
