<template>
  <div  style="background-color: green">
    <div class="know">
      <el-button>
        <router-link to="/home" @click="ChangeShow">商店主页</router-link>
      </el-button>
      <el-button>
        <router-link to="/detail" @click="ChangeShow">立即购买</router-link>
      </el-button>
      <el-button>
        <router-link to="/data" @click="ChangeShow">销售数据</router-link>
      </el-button>
      <div style="border-top: 1px solid rgb(133, 129, 129); height: 15px"></div>

    </div>
    <div style="display: flex; margin-top:0px;">
      <el-collapse-transition>
        <div class="transition-box">
          <router-view></router-view>
        </div>
      </el-collapse-transition>
    </div>
  </div>

</template>

<script>

import MyHome from "@/views/MyHome";

export default {
  name: 'HelloWorld',
  components:{
    // eslint-disable-next-line vue/no-unused-components
    MyHome
  },
  props: {
    msg: String
  },
  data(){
    return{
      show:1,
      show2:true
    }
  },
  methods:{
    ChangeShow:function (){
      this.show=0;

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
*{
  padding: 0px;
  margin: 0px;
}
.know{
  width: 1600px;
  height: 50px;
  margin-right: 50px;
  padding-right:50px;

}
.app{
  background-image:url(../assets/水果1.jpeg);
  width: 80%;
  height: 600px;
  margin-left: 150px;
  background-repeat: no-repeat;
  background-position: center;
}
.box1{
  margin-bottom: 0px;
}
.clearfix:after {
  content: "";
  display: block;
  height: 0;
  clear: both;
  visibility: hidden;
}
.transition-box {
  margin-top: 10px;
  /*width: 1600px;*/
  /*height: 100px;*/
  border-radius: 4px;
  text-align: center;
  color: #fff;
  padding: 0px 0px;
  margin-right: 0px;
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 200px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
  background-image: url(../assets/水果2.jpeg);
  background-repeat: no-repeat;
}

.el-carousel__item:nth-child(2n+1) {
  background-color: #d3dce6;
  background-image: url(../assets/水果三.jpeg);
  background-repeat: no-repeat;
  background-size: auto;
}
</style>
