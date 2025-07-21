// docs/.vitepress/sidebar/en.ts
import type { DefaultTheme } from 'vitepress'

export const zhSidebar: DefaultTheme.Sidebar = {
  '/zh/': [
    {
        text: '👋 Hi',
        items: [
          { text: '欢迎来到Dataly', link: '/zh/hi' },
        ]
      },
      {
        text: '🚀 开始使用',
        items: [
          { text: '下载和安装', link: '/zh/download' },
          { text: '注册登陆', link: '/zh/registe' },
        ]
      },
      {
        text: '📖 界面说明',
        items: [
          { text: '侧边栏', link: '/zh/sidebar' },
          { text: '概览', link: '/zh/overview' },
          { text: '应用', link: '/zh/apps' },
          { text: '新增', link: '/zh/add' },
          { text: '仪表盘', link: '/zh/dashboard' },
          { text: '触发器', link: '/zh/trigger' },
        ]
      }
  ]
}