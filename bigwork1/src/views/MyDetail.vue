<template>
  <div style="padding-left: 100px;background-color: white;margin-left: 200px">
    <bar-graph :width="'900px'" :height="'600px'"></bar-graph>
  </div>
  <div class="test">
  <div class="detail_base">

  </div>
    <img src="../assets/水果14.jpeg" alt="">
    <img src="../assets/水果15.jpeg" alt="">
    <img src="../assets/水果16.jpeg" alt="">
    <img src="../assets/水果17.jpeg" alt="">
  </div>

  <div class="modify">
    <div style="padding-left: 300px">
      <el-table
          :data="tableData"
          style="width: 100%">
        <el-table-column
            prop="date"
            label="水果"
            width="180">
        </el-table-column>
        <el-table-column
            prop="name"
            label="产地"
            width="180">
        </el-table-column>
        <el-table-column
            prop="address"
            label="价格">
        </el-table-column>
      </el-table>
    </div>

    <p>要购买的水果</p>
    <div>
      <el-cascader :options="options" clearable></el-cascader>
    </div>
    <br>
    <br>

    <div>
      <h4>购买的数量（单位：千克）</h4>
      <el-input  placeholder="请输入数量"  v-model="input" style="width: 220px"></el-input>
    </div>
    <br>
    <br>
    <br>
    <el-row style="padding-left: 500px">
      <el-button type="danger" @click="sign()">立即购买</el-button>
    </el-row>
  </div>
</template>

<script>

// eslint-disable-next-line no-unused-vars
import BarGraph from "@/components/BarGraph";
export default {
  name: "MyDetail",
  components:{BarGraph},
  data() {
    return {
      input:'',
      tableData: [{
        date: '苹果',
        name: '山东',
        address: '20元/斤'
      }, {
        date: '香蕉',
        name: '湖南',
        address: '20元/斤'
      }, {
        date: '哈密瓜',
        name: '新疆',
        address: '25元/斤'
      }, {
        date: '火龙果',
        name: '广西',
        address: '10元/斤'
      },
        {
          date: '橘子',
          name: '四川',
          address:
              '30元/斤'
        }],
      options: [{
        value: 'zhinan',
        label: '橘子',
      }, {
        value: 'zujian',
        label: '火龙果',
      }, {
        value: 'ziyuan',
        label: '香蕉',
      },{
        value: 'ziyuan',
        label: '哈密瓜',
      },
        {
          value: 'ziyuan',
          label: '苹果',
        }]
    }
  },
  methods:{
    sign:function (){
      console.log('人数+1')
    }
  }
};

</script>

<style scoped >
*{
  padding:0px;
  margin: 0px;
  color: black;
}
.detail_base{
  /*background-image: url(../assets/主题2.jpg);*/
  background-repeat: no-repeat;
  width: 1200px;
  background-color: white;
}
.test{
  background-color: white;
  margin-left: 200px;
}
img{
  display: block;
  width: 1200px;
}
.modify{
  width: 1200px;
  height: 600px;
  background-color: white;
  margin-left: 200px;
}
</style>