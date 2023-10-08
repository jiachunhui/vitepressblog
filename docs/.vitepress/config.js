

export default {
 // base: '/vitepressblog/',
  title: 'aiyy.site',
  description: '网站建设、网站设计、小程序开发、H5、二次开发',
  markdown: {
    lineNumbers: true,

  },
  outlineTitle: '目录',
 
  themeConfig: {
    siteTitle: '大龄程序员',
    nav: [
      { text: '文档', link: '/' , activeMatch: '/index'},
      { text: '案例', link: '/case' },
     
      { text: '演示', link: '/demo' },
      { text: '首页', link: '/home' }
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' },
      { icon: 'twitter', link: '...' }, 
    ],
    sidebar: [
      {
        text: '学习笔记',
        items: [
          { text: '.net笔记', link: '/netLearnning/' ,items:[{text:'.net core',link:'/netLearnning/netcore'},{text:'微信开发',link:'/netLearnning/weixin'}]},
          { text: 'CSS 学习笔记', link: '/cssLearnning/',items:[{text:'less',link:'/cssLearnning/less'}] },
          { text: 'Html笔记', link: '/htmlLearnning/' },
          { text: 'Vue笔记', link: '/vueLearnning/',items:[{text:'Element',link:'/vueLearnning/element'}] },
          { text: 'TypeScript笔记', link: '/typescriptLearnning/' },
          { text: 'JavaScript笔记', link: '/javascriptLearnning/' },
          {text:'Git笔记',link:'/gitLearnning/'},
          {text:'VS Code/Visual Studio',link:'/vsLearnning/'},
         
        ]
      },
      {
        text: '托管/部署/发布',
        items: [
          { text: '在Centos7 部署', link: '/deploy-centos/' }
      }，
      {
        text:'资源收录',
        items:[
          {
            text:'免费工具和资源',link:'/favorites/'
          },
          {
            text:'在线工具',link:'/favorites/onetool'
          },
          {
            text:'互联网学习资源',link:'/favorites/learn'
          },
          {
            text:'博客',link:'/favorites/blog'
          }
        ]
      },
      {
        text:'小技巧',
        items:[
          {text:'Windows小技巧',link:'/windows'},
         
        ]
      }
    ],
    docFooter: {
      prev: '上一页',
      next: '下一页'
    },
    footer: {
      message: '网站建设、北京网站设计、北京VUE网站制作、微信H5小程序开发等建站服务',
      copyright: 'Copyright © 2023 网站建设（北京、厦门到场服务）'
    },
    lastUpdated: true,
    lastUpdatedText: 'Updated Date',
    algolia: {
      appId: '...',
      apiKey: '...',
      indexName: '...',
      locales: {
        zh: {
          placeholder: '搜索文档',
          translations: {
            button: {
              buttonText: '搜索文档',
              buttonAriaLabel: '搜索文档'
            },
            modal: {
              searchBox: {
                resetButtonTitle: '清除查询条件',
                resetButtonAriaLabel: '清除查询条件',
                cancelButtonText: '取消',
                cancelButtonAriaLabel: '取消'
              },
              startScreen: {
                recentSearchesTitle: '搜索历史',
                noRecentSearchesText: '没有搜索历史',
                saveRecentSearchButtonTitle: '保存至搜索历史',
                removeRecentSearchButtonTitle: '从搜索历史中移除',
                favoriteSearchesTitle: '收藏',
                removeFavoriteSearchButtonTitle: '从收藏中移除'
              },
              errorScreen: {
                titleText: '无法获取结果',
                helpText: '你可能需要检查你的网络连接'
              },
              footer: {
                selectText: '选择',
                navigateText: '切换',
                closeText: '关闭',
                searchByText: '搜索提供者'
              },
              noResultsScreen: {
                noResultsText: '无法找到相关结果',
                suggestedQueryText: '你可以尝试查询',
                reportMissingResultsText: '你认为该查询应该有结果？',
                reportMissingResultsLinkText: '点击反馈'
              }
            }
          }
        }
      }
    }
  }
}