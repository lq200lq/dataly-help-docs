import { defineConfig } from 'vitepress'
import { nav as navEn } from './nav/en'
import { nav as navZh } from './nav/zh'
import { enSidebar } from './sidebar/en'
import { zhSidebar } from './sidebar/zh'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Dataly",
  description: "Dataly Documention",
  locales: {
    root: {
      label: 'English',
      lang: 'en',
      themeConfig: { 
        nav: navEn,
        sidebar: enSidebar 
      }
    },
    zh: {
      label: '简体中文',
      lang: 'zh', // 可选，将作为 `lang` 属性添加到 `html` 标签中,
      link: '/zh/',
      themeConfig: { 
        nav: navZh,
        sidebar: zhSidebar
      }
    }
  },
  themeConfig: {
     logo: '/logo.png',
    // https://vitepress.dev/reference/default-theme-config
    // nav: [
    //   { text: '主页', link: '/' },
    //   { text: '文档', link: '/markdown-examples' }
    // ],

    // sidebar: [
    //   {
    //     text: '👋 Hi',
    //     items: [
    //       { text: '欢迎来到Dataly', link: '/hi' },
    //     ]
    //   },
    //   {
    //     text: '🚀 开始使用',
    //     items: [
    //       { text: '下载和安装', link: '/download' },
    //       { text: '注册登陆', link: '/registe' },
    //     ]
    //   },
    //   {
    //     text: '📖 界面说明',
    //     items: [
    //       { text: '侧边栏', link: '/download' },
    //       { text: '概览', link: '/registe' },
    //       { text: '应用', link: '/registe' },
    //       { text: '新增', link: '/registe' },
    //       { text: '仪表盘', link: '/registe' },
    //       { text: '触发器', link: '/registe' },
    //     ]
    //   }
    // ],

    socialLinks: [
      { icon: {
        svg: '<?xml version="1.0" encoding="UTF-8"?><svg width="32" height="32" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M39 6H9C7.34315 6 6 7.34315 6 9V39C6 40.6569 7.34315 42 9 42H39C40.6569 42 42 40.6569 42 39V9C42 7.34315 40.6569 6 39 6Z" fill="none" stroke="#4a90e2" stroke-width="4"/><path d="M28 13L21.5 24L19.875 26.75L19.0625 28.125" stroke="#4a90e2" stroke-width="4" stroke-linecap="round" stroke-linejoin="bevel"/><path d="M15 35L15.8125 33.625" stroke="#4a90e2" stroke-width="4" stroke-linecap="round" stroke-linejoin="bevel"/><path d="M12 29L23 29" stroke="#4a90e2" stroke-width="4" stroke-linecap="round" stroke-linejoin="bevel"/><path d="M30 29H36" stroke="#4a90e2" stroke-width="4" stroke-linecap="round" stroke-linejoin="bevel"/><path d="M19 13L22.5 18.5L23.375 19.875" stroke="#4a90e2" stroke-width="4" stroke-linecap="round" stroke-linejoin="bevel"/><path d="M33 35L29.5 29.5L27.75 26.75L26.875 25.375" stroke="#4a90e2" stroke-width="4" stroke-linecap="round" stroke-linejoin="bevel"/></svg>'
      }, link: 'https://apps.apple.com/cn/app/dataly-%E6%9E%84%E5%BB%BA%E4%BD%A0%E6%95%B0%E6%8D%AE%E4%BB%93%E5%BA%93/id6479346857' }
    ],

    
  }
})
