import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "比较休闲的科研笔记",
  description: "随便看看",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '主页', link: '/' },
      { text: '不知所谓的文件夹', link: '/不知所谓的文件夹/' }
    ],

    sidebar: [
      {
        text: '不知所谓的文件夹',
        collapsed: true,
        items: [
          { text: '现在', link: '/不知所谓的文件夹/' },
          { text: '很久很久以前', link: '/不知所谓的文件夹/很久很久以前' },
          { text: '很久很久以后', link: '/不知所谓的文件夹/很久很久以后' }
        ]
      } ,
      {
        text: 'ORS科研项目',
        collapsed: true,
        items: [
          { text: '介绍', link: '/ORS科研/' },
        ]
      }
    ], 

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
