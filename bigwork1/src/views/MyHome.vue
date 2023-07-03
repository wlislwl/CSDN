<template>
  <div  style="background-color: white;width: 1200px;margin-left: 150px">
  <div class="basebody">
    <div class="container">
      <span>水</span>
      <span>果</span>
      <span>之</span>
      <span>家</span>
    </div>
  <div class="box1">
    <ul class="fr">
      <li><a href="javascript:;">讨论社区</a></li>
      <li><a href="javascript:;">公司信息</a></li>
      <li><a href="javascript:;">时蔬资料</a></li>
      <li><a href="javascript:;">客服反馈</a></li>
    </ul>
  </div>
  <div style="border-top: 1px solid rgb(133, 129, 129);"></div>
  <div class="box2" style="margin-left: 0px">

  </div>
  <div class="box3 w">
    <div style="margin-left: 0px;text-align: left;color: white;margin-left: 80px">热销水果</div>
    <ul>
      <li><a href="javascript:;">苹果</a></li>
      <li><a href="javascript:;">雪梨</a></li>
      <li><a href="javascript:;">荔枝</a></li>
      <li><a href="javascript:;">车厘子</a></li>
      <li><a href="javascript:;">西瓜</a></li>
      <li><a href="javascript:;">哈密瓜</a></li>
      <li><a href="javascript:;">火龙果</a></li>
      <li><a href="javascript:;">香蕉</a></li>
      <li><a href="javascript:;">芭蕉</a></li>
      <li><a href="javascript:;">橘子</a></li>
      <li><a href="javascript:;">橙子</a></li>
    </ul>

  </div>
    <div style="border-bottom: 1px solid rgb(133, 129, 129); height: 15px"></div>

    <br><br><br><br><br><br>

  <ul class="box6">
    <li>
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-zhuanjiadayibeifen"></use>
      </svg>
      <a href="javascript:;">在线咨询</a>
      </li>
    <li>
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-youhui"></use>
      </svg>
      <a href="javascript:;">申请优惠</a>
    </li>
    <li>
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-quanyizhongxinbeifen"></use>
      </svg>
      <a href="javascript:;">水果价格</a>
    </li>
    <li>
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-lijibaoming"></use>
          </svg>
      <a href="javascript:;">立即购买</a>
    </li>
  </ul>
    <div>
      <h1 style="color: black">良好的种植环境</h1>
      <h5>确保水果获得最大的成长</h5>
      <el-carousel :interval="4000" type="card" height="330px">
        <el-carousel-item v-for="item in 6" :key="item">
          <h3 class="medium" style="color: black;text-align: right">

          </h3>

        </el-carousel-item>
      </el-carousel>
    </div>
  <div class="w clearfix">
    <div class="box7 study1">
    </div>
    <div class="box7 study2">
    </div>
    <div class="box7 study3">
    </div>
    <div class="box7 study4">
    </div>
    <div class="box7 study5">
    </div>
  </div>
  </div>
  <div style="border-bottom: 1px solid rgb(133, 129, 129); height: 20px"></div>


  </div>
</template>

<script src="../xx.js">
export default {
  name:"MyHome",
  data(){
   return{

   }
  },
}

</script>
<style scoped>
  .clearfix:after {
    content: "";
    display: block;
    height: 0;
    clear: both;
    visibility: hidden;
  }
  li {list-style:none;}
  .basebody {
    width: 800px;
    background-image: url(../assets/水果4.jpeg);
    background-repeat: no-repeat;
    background-position:  right top;
    width: 100%;
    color: black;
    background-size: contain;
  }
  .w {
    width:1200px;
    margin: auto;
  }
  .box1 {
    width: 1520px;
    height: 88px;
    overflow: hidden;
  }
  .box1 .pic1 {
    float: left;
    margin-top:22px ;
    margin-left: 160px;
  }
  .fr {
    float: left;
    padding-right: 300px;
    font-size: 17px;
  }
  .box1 .fr li {
    float: right;
    display: block;
    padding: 30px 30px ;
  }
  a {
    text-decoration: none;
    color: rgb(131, 122, 122);
  }
  .box1 a:hover {
    color: white;
    font-weight: 700;
  }
  .box2 {
    color: white;
    padding:36px 0px 0px 28px;
    text-align: left;
    text-indent: 210px;
  }
  .box3 {

  }
  .box3 ul {
    background-color: rgba(122, 119, 119, 0.1);
    border-left:1px solid rgb(206, 201, 201) ;
    border-right: 1px solid rgb(170, 168, 168);
    border-top: 1px solid rgb(73, 61, 61);
    width: 233px;
    height: 445px;
  }
  .box3 li a {
    padding:0 16px 0 28px;
    font-size: 14px;
    line-height: 37px;
  }
  .box3 a:hover {
    color: white;
  }
  /* 头部 */
  .box4 {
    width: 300px;
    height: 100px;
    color: teal;
    float: left;
    line-height:100px ;
  }
  .pic2 {
    float: left;
    margin-top: 20px;
    margin-left: 40px;
  }
  .box4 span {
    text-align: left;
    font-size: 24px;
    margin-left:15px ;
  }
  .box4:hover {
    background-color:wheat;
  }
  .box5 {
    text-align: center;
  }
  div h1 b {
    font-weight:200;
  }
  .box6 {
    position: fixed;
    top: 50%;
    margin-top: -150px;
    left: 0;
    width: 80px;
    height: 280px;
    background-color: blanchedalmond;
    border-radius: 10px;
  }
  .box6 li {
    height: 67px;}
  .box6 li a {
    font-size: 16px;
    margin-left: 10px;
    border-bottom: 1px solid bisque;

  }
  .icon {
    width: 1em;
    height: 1em;
    vertical-align: -0.15em;
    fill: currentColor;
    overflow: hidden;
    font-size: 30px;
    display: block;
    margin: 3px auto;
  }
  .box6 li:hover {
    background-color: red;

  }
  .study1{
    background-image: url(../assets/水果8.jpeg);
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
  }
  .study1:hover{
    width: 218px;
    height: 178px;
    content: none;
    background-color: bisque;
    /*background-image: url(../assets/Java.jpeg);*/
    background-repeat: no-repeat;
    background-position: center center;
  }

  .study2{
    background-image: url(../assets/水果9.jpeg);
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
  }
  .study2:hover{
    width: 218px;
    height: 178px;
    content: none;
    background-color: bisque;
    background-repeat: no-repeat;
    background-position: center center;
  }

  .study3{
    background-image: url(../assets/水果10.jpeg);
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
  }
  .study3:hover{
    width: 218px;
    height: 178px;
    content: none;
    background-color: bisque;
    background-repeat: no-repeat;
    background-position: center center;
  }

  .study4{
    background-image: url(../assets/水果11.jpeg);
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
  }
  .study4:hover{
    width: 218px;
    height: 178px;
    content: none;
    background-color: bisque;
    background-repeat: no-repeat;
    background-position: center center;
  }

  .study5{
    background-image: url(../assets/水果12.jpeg);
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
  }
  .study5:hover{
    width: 218px;
    height: 178px;
    content: none;
    background-color: bisque;
    background-repeat: no-repeat;
    background-position: center center;
  }

  .box7 {
    text-align: center;
    width: 218px;
    height: 178px;
    float: left;
    margin-left: 20px;
    border: bisque solid 1px;
    transition: all .5s ease-in-out;
  }
  /*.box7:hover {*/
  /*  width: 218px;*/
  /*  height: 178px;*/
  /*  content: none;*/
  /*  background-color: bisque;*/
  /*  background-image: url(../assets/Java.jpeg);*/
  /*  background-repeat: no-repeat;*/
  /*  background-position: center center;*/
  /*}*/

  .title {
    height: 150px;
    font-size:38px ;
    color:black;
  }
  .el-carousel__item h3 {
    color: #475669;
    font-size: 45px;
    opacity: 0.75;
    line-height: 285px;
    text-align: center;
    margin: 0;
    /*width: 190px;*/
  }

  .el-carousel__item:nth-child(n) {
    background-color: #99a9bf;
    background-image: url(../assets/水果6.jpeg);
    background-repeat: no-repeat;
    background-size: cover;
  }

  .el-carousel__item:nth-child(2n) {
    background-color: #d3dce6;
    background-image: url(../assets/水果7.jpeg);
    background-repeat: no-repeat;
    background-size: cover;
  }
  .luyou {
    position: fixed;
    top: 50%;
    margin-top: 0px;
    left: 0px;
    width: 80px;
    height: 70px;
    background-color: red;
    border-radius: 10px;
  }
  .container span {
    display: inline-block;
    color: purple;
    font-weight: bold;
    text-transform: uppercase;
    font-size: 40px;
  }

  .container span {
    animation: sideSlide 4s forwards infinite;
    transform: translateX(-100vw);
  }

  @keyframes sideSlide {
    15%, 20% {
      transform: translateX(0.5em);
    }

    24% {
      transform: translateX(0);
    }

    25%, 75% {
      transform: translateX(0);
    }

    90%, 100% {
      transform: translateX(100vw);
    }
  }

  .container span {
    transform: translateX(-100vw) scale(0);
  }

  @keyframes sideSlide {
    15%, 20% {
      transform: translateX(0.5em) scale(1);
    }

    24% {
      transform: translateX(0) scale(1.2);
    }

    25%, 75% {
      transform: translateX(0) scale(1);
    }

    90%, 100% {
      transform: translateX(100vw) scale(0);
    }
  }

  .container span {
    filter: opacity(0);
  }

  @keyframes sideSlide {
    15%, 20% {
      transform: translateX(0.5em) scale(1);
    }

    24% {
      transform: translateX(0) scale(1.2);
    }

    25%, 75% {
      transform: translateX(0) scale(1);
      filter: opacity(1);
    }

    90%, 100% {
      transform: translateX(100vw) scale(0);
      filter: opacity(0);
    }
  }

  @keyframes sideSlide {
    15%, 20% {
      transform: translateX(0.5em) scale(1);
      color: purple;
    }

    24% {
      transform: translateX(0) scale(1.2);
      color: cyan;
    }

    25%, 75% {
      transform: translateX(0) scale(1);
      filter: opacity(1);
      color: purple;
    }

    90%, 100% {
      transform: translateX(100vw) scale(0);
      filter: opacity(0);
    }
  }

  .container span:nth-child(1) { --n: 1; }
  .container span:nth-child(2) { --n: 2; }
  .container span:nth-child(3) { --n: 3; }
  .container span:nth-child(4) { --n: 4; }
  .container span:nth-child(5) { --n: 5; }
  .container span:nth-child(6) { --n: 6; }
  .container span:nth-child(7) { --n: 7; }
  .container span:nth-child(8) { --n: 8; }
  .container span:nth-child(9) { --n: 9; }
  .container span:nth-child(10) { --n: 10; }
  .container span:nth-child(11) { --n: 11; }
  .container span:nth-child(12) { --n: 12; }
  .container span:nth-child(13) { --n: 13; }
  .container span:nth-child(14) { --n: 14; }

  .container span {
    animation-delay: calc((var(--n) - 1) * 0.05s);
  }

</style>