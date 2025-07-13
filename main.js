import App from './App'

import { setTheme } from './components/material-uni/colors'
import {updateRippleConfig} from './components/material-uni/ripple/config'

setTheme("blue")
updateRippleConfig({
  color: "var(--md-sys-color-primary-fixed)",
  opacity: 0.4,
  transition: "ease-out",
  duration: 250,
  backgroundColor: "var(--md-sys-color-surface-container)"
})
// #ifndef VUE3
import Vue from 'vue'
import './uni.promisify.adaptor'
Vue.config.productionTip = false
App.mpType = 'app'
const app = new Vue({
  ...App
})
app.$mount()
// #endif

// #ifdef VUE3
import { createSSRApp } from 'vue'
export function createApp() {
  const app = createSSRApp(App)
  return {
    app
  }
}
// #endif