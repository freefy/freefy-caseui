
// examples/main.js
// import Vue from 'vue'
import { createApp } from 'vue'
import App from './App.vue'
import xui from '../packages'

// 注册组件库
const app = createApp(App)
app.use(xui)
app.mount('#app')