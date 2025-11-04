// https://vitepress.dev/guide/custom-theme
import { h } from 'vue'
import { createPinia } from 'pinia'
import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'

import { enhanceAppWithTabs } from 'vitepress-plugin-tabs/client'

import './style.css'
import './minecraft.css'
import './extra.css'
import './custom.scss'

const pinia = createPinia()

export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      // https://vitepress.dev/guide/extending-default-theme#layout-slots
    })
  },
  enhanceApp({ app, router, siteData }) {
    enhanceAppWithTabs(app)
    app.use(pinia)
  },
} satisfies Theme
