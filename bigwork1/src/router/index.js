// 先下载组件npm install vue-router --save

import {createRouter, createWebHashHistory} from "vue-router";
import MyHome from "@/views/MyHome";
import MyDetail from "@/views/MyDetail";
import Data from "@/views/Data";

// 2. 定义一些路由
// 每个路由都需要映射到一个组件。
// 我们后面再讨论嵌套路由。
const routes = [
    { path: '/', component: MyHome },
    { path: '/detail', component: MyDetail },
    { path: '/home', component: MyHome },
    {path: '/data', component: Data},
]

// 3. 创建路由实例并传递 `routes` 配置
// 你可以在这里输入更多的配置，但我们在这里
// 暂时保持简单
const router = createRouter({
    // 4. 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
    history: createWebHashHistory(),
    routes, // `routes: routes` 的缩写
})

export default router