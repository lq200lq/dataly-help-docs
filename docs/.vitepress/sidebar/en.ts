// docs/.vitepress/sidebar/en.ts
import type { DefaultTheme } from 'vitepress'

export const enSidebar: DefaultTheme.Sidebar = {
  '/': [
    {
        text: '👋 Hi',
        items: [
          { text: 'Welcome to Dataly', link: '/hi' },
        ]
      },
      {
        text: '🚀 Start',
        items: [
          { text: 'Download', link: '/download' },
          { text: 'Register and login', link: '/registe' },
        ]
      },
      {
        text: '📖 Page description',
        items: [
          { text: 'Sidebar', link: '/sidebar' },
          { text: 'Overview', link: '/overview' },
          { text: 'Apps', link: '/apps' },
          { text: 'Add', link: '/add' },
          { text: 'Dashboard', link: '/dashboard' },
          { text: 'Trigger', link: '/trigger' },
        ]
      }
  ]
}