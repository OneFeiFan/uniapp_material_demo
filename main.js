import App from './App'

import { setTheme } from './components/material-uni/colors'
import {updateRippleConfig} from './components/material-uni/ripple/config'
import materialTabBar from "@/components/material-uni/material-tab-bar/material-tab-bar.vue";

import { SvgIconLib } from '@/static/svg-icons-lib.js';
import { SvgIconLib as MaterialFilled } from '@/uni_modules/zui-material-icons/static/material-filled.js';

SvgIconLib.registerCollection("material-filled", MaterialFilled);

Vue.use(materialTabBar,[
  {
    icon:'event_note',
    name:"课表",
    page: "pages/index/index",
  },
  {
    icon:'report',
    name:"通知",
    page: "pages/page2/page2",
  }
])

setTheme("blue")
updateRippleConfig({
  color: "var(--md-sys-color-surface-dim)",
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