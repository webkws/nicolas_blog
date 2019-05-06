module.exports = {
  dest: 'vuepress',
  title: 'Nicolas',
  description: 'Winter is coming...',
  base:'/nicolas_blog/',
  head: [
    ['link', {
      rel: 'icon',
      href: `/logo.jpg`
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
    ['meta', {
      name: 'msapplication-TileColor',
      content: '#000000'
    }]
  ],
  serviceWorker: true,
  theme: 'vue',
  themeConfig: {
    repo: 'https://github.com/webkws',
    docsDir: 'docs',
    search: true,
    searchMaxSuggestions: 10,
    label: '简体中文',
    lastUpdated: '上次更新',
    serviceWorker: {
      updatePopup: {
        message: "发现新内容可用",
        buttonText: "刷新"
      }
    },
    nav: [
      {
        text: 'My Cheatsheets',
        link: '/docs/',        
      },
      {
        text: 'My Blog',
        link: '/blogs/',        
      },
      {
        text: 'About Me',
        link: '/about/',        
      },
    ],
    sidebar: {
      '/docs/': genSidebarConfig('开发文档'),
      '/blogs/':genSidebarConfig2('My Blog')  
    }
  }
}

function genSidebarConfig(title) {
  return [{
    title,
    collapsable: false,
    children: [
      '',
      'community',
      'standard_style',           
      'http',     
      'git_collect',      
      'nuxt_collect'
    ]
  }]
}

function genSidebarConfig2(title) {
  return [{
    title,
    collapsable: false,
    children: [
      '',      
      'web_optimization',
      'issues',
      'curry_functions',      
      'safe_access',
      'canvas',
      'js_optimization',
      'data_structures',
      'mobile_unit',
      'sentry',
      'oocss',
      'vue_inject',         
      'es6_tips',
      'sass',            
      'vue_watch',
      'webpack',      
    ]
  }]
}