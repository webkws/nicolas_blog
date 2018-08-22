module.exports = {
  dest: 'vuepress',
  title: 'Nicolas',
  description: 'Vue 驱动的静态网站生成器',
  head: [
    ['link', {
      rel: 'icon',
      href: `/logo.png`
    }],
    ['link', {
      rel: 'manifest',
      href: '/manifest.json'
    }],
    ['meta', {
      name: 'theme-color',
      content: '#3eaf7c'
    }],
    ['meta', {
      name: 'apple-mobile-web-app-capable',
      content: 'yes'
    }],
    ['meta', {
      name: 'apple-mobile-web-app-status-bar-style',
      content: 'black'
    }],
    ['link', {
      rel: 'apple-touch-icon',
      href: `/icons/apple-touch-icon-152x152.png`
    }],
    ['link', {
      rel: 'mask-icon',
      href: '/icons/safari-pinned-tab.svg',
      color: '#3eaf7c'
    }],
    ['meta', {
      name: 'msapplication-TileImage',
      content: '/icons/msapplication-icon-144x144.png'
    }],
    ['meta', {
      name: 'msapplication-TileColor',
      content: '#000000'
    }]
  ],
  serviceWorker: true,
  theme: 'vue',
  themeConfig: {
    repo: 'vuejs/vuepress',
    docsDir: 'docs',
    // #697 Provided by the official algolia team.
    algolia: {
      apiKey: '3a539aab83105f01761a137c61004d85',
      indexName: 'vuepress'
    },
    label: '简体中文',
    lastUpdated: '上次更新',
    serviceWorker: {
      updatePopup: {
        message: "发现新内容可用",
        buttonText: "刷新"
      }
    },
    nav: [{
        text: '指南',
        link: '/guide/',
      },
      {
        text: '配置',
        link: '/config/'
      },
      {
        text: '开发文档',
        link: '/docs/',        
      },
      {
        text: '默认主题',
        link: '/default-theme-config/'
      }
    ],
    sidebar: {
      '/guide/': genSidebarConfig1('指南'),
      '/docs/': genSidebarConfig2('开发文档')
    }
  }
}

function genSidebarConfig1(title) {
  return [{
    title,
    collapsable: false,
    children: [
      '',
      'getting-started',
      'basic-config',
      'assets',
      'markdown',
      'using-vue',
      'custom-themes',
      'i18n',
      'deploy'
    ]
  }]
}
function genSidebarConfig2(title) {
  return [{
    title,
    collapsable: false,
    children: [
      '',
      'awesome',
      'standard_style',
      'es6_tips',      
      'http',      
      'issues',      
      'sass_collect',      
      'git_collect',      
      'vue_collect'
    ]
  }]
}