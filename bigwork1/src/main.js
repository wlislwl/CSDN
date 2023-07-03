import { createApp } from 'vue'
import App from './App.vue'
import router from "@/router";
import ElementPlus from 'element-plus';
import 'element-plus/theme-chalk/index.css';
import locale from 'element-plus/lib/locale/lang/zh-cn'

import echarts from "echarts";
const app=createApp(App);
app.config.globalProperties.$echarts = echarts
createApp(App).use(router).use(scroll).use(ElementPlus, { locale }).mount('#app')
