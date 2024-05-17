// https://vitepress.dev/guide/custom-theme
import { h } from 'vue'
// import { useData, EnhanceAppContext } from 'vitepress'
import DefaultTheme from 'vitepress/theme'

import ElementPlus from "element-plus";
import "element-plus/dist/index.css";

import './style.css'
import './custom.css'
import LNavLink from './components/LNavLink.vue'

/** @type {import('vitepress').Theme} */
export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      // https://vitepress.dev/guide/extending-default-theme#layout-slots
    })
  },
  enhanceApp: async ({ app, router, siteData, isServer }) => {
    app.use(ElementPlus);
    app.component('LNavLink', LNavLink)
  }
}
