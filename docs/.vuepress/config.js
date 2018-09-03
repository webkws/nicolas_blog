module.exports = {
  dest: 'vuepress',
  title: 'Nicolas',
  description: 'Vue 驱动的静态网站生成器',
  base:'/nicolas_blog/',
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
    repo: 'https://github.com/webkws',
    docsDir: 'docs',
    search: true,
    searchMaxSuggestions: 10,
    // #697 Provided by the official algolia team.
    // algolia: {
    //   apiKey: '3a539aab83105f01761a137c61004d85',
    //   indexName: 'vuepress'
    // },
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
      'webpack',    
      'vue_watch',
      'js_optimization',
      'vue_inject',         
      'es6_tips',
      'oocss',
      'sass',
      'mobile_unit',
      'issues' 
    ]
  }]
}