<template>
  <HelloWorld/>
  <div>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import MyDetail from "@/views/MyDetail";
import MyHome from "@/views/MyHome";
import BarGraph from "@/components/BarGraph";
export default {
  name: 'App',
  components: {
    HelloWorld,
    // eslint-disable-next-line vue/no-unused-components
    MyDetail,
    // eslint-disable-next-line vue/no-unused-components
    MyHome,
    // eslint-disable-next-line vue/no-unused-components
    BarGraph,
    // eslint-disable-next-line vue/no-unused-components
  }
}
</script>

<style>
*{
  padding: 0;
  margin: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0px;
}
</style>
