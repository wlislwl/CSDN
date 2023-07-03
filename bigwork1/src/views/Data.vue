<template>
<!--  <img src="../assets/logo.png" style="background-color: black;">-->

  <div class="container" style="color: green">

    <h1>订购信息</h1>
    <div class="input-bar">
      <table>
        <tbody>
        <td>水果：</td>
        <td><input type="text" v-model="addObj.title"/></td>
        <td>数量：</td>
        <td><input type="text" v-model="addObj.user"/></td>
        <td>订购时间：</td>
        <td><input type="date" v-model="addObj.time"/></td>
        <td><button @click="add">添加</button></td>
        </tbody>
      </table>
    </div>

    <table width="100%" class="table table-bordered">
      <thead>
      <tr>
        <td>序号</td>
        <td>水果</td>
        <td>数量</td>
        <td>订购时间</td>
        <td>操作</td>
      </tr>
      </thead>
      <tbody>
      <tr v-for="(user, index) in users" :key="index">
        <td>{{index+1}}</td>
        <td>{{user.title}}</td>
        <td>{{user.user}}</td>
        <td>{{user.time}}</td>
        <td>
          <button @click="edit(user)">编辑</button>
          <button @click="del(index)">删除</button>
        </td>
      </tr>
      </tbody>
    </table>

    <div class="modal" v-if="isShow">
      <h3 class="modal-header">编辑 <span @click="isShow=false">x</span></h3>
      <div class="modal-body">
        <table>
          <tbody>
          <tr>
            <td width="20%">标题：</td>
            <td width="80%"><input type="text" v-model="editObj.title"/></td>
          </tr>
          <tr>
            <td>发布人：</td>
            <td><input type="text" v-model="editObj.user"/></td>
          </tr>
          </tbody>
        </table>
      </div>
      <div class="modal-footer">
        <button @click="save">保存</button>
        <button @click="isShow=false">取消</button>
      </div>
    </div>
    <div style="margin-left: 0px;padding-top: 50px">
      <button @click="select()" style="margin-left: 0px;margin-bottom: 50px">统计销量</button>
    </div>
    <table style="margin-left: 400px" align="center" border="1">
      <thead>
      <td>水果</td>
      <td style="padding-left: 20px">数量（千克）</td>
      </thead>
      <tbody>
      <tr>
      <td>火龙果</td>
      <td style="padding-left: 200px">{{HLGNum}}</td>
      </tr>
      <tr>
        <td>橘子</td>
        <td style="padding-left: 200px">{{JZNum}}</td>
      </tr>
      <tr>
        <td>哈密瓜</td>
        <td style="padding-left: 200px">{{HMGNum}}</td>
      </tr>
      <tr>
        <td>苹果</td>
        <td style="padding-left: 200px">{{PGNum}}</td>
      </tr>
      <tr>
        <td>香蕉</td>
        <td style="padding-left: 200px">{{XJNum}}</td>
      </tr>
      </tbody>
    </table>
  </div>
  <bar-graph :width="'900px'" :height="'600px'"></bar-graph>
</template>

<script>
import BarGraph from "@/components/BarGraph";

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Data',
  components:BarGraph,
  data(){
    return {
      PGNum:'',
      JZNum:'',
      HMGNum:'',
      XJNum:'',
      HLGNum:'',
      isShow: false,
      addObj: {
        title: '',
        user: '',
        time: '',
        id: '',
      },
      editObj: {
        title: '',
        user: ''
      },
      users: [
        {
          title: '苹果',
          user: '20',
          time: '2019-12-01',
          id: 0
        },
        {
          title: '橘子',
          user: '40',
          time: '2019-12-02',
          id: 1
        }
      ]
    }
  },
  methods: {
    add(){
      if(!this.addObj.title || !this.addObj.user || !this.addObj.time){
        this.$toastr("输入框不能为空！");
        return;
      }

      this.addObj.id = Math.max(...this.users.map(function(v){
        return v.id;
      }))+1;

      this.users.unshift({
        title: this.addObj.title,
        user: this.addObj.user,
        time: this.addObj.time,
        id: this.addObj.id
      });

      this.addObj={};
    },
    del(i){
      this.users.splice(i, 1);
    },
    edit(obj){
      this.isShow = true;
      this.editObj.title = obj.title;
      this.editObj.user = obj.user;
      this.editObj.id = obj.id;
    },
    save(){
      for(let i=0; i<this.users.length; i++){
        if(Number(this.users[i].id)===Number(this.editObj.id)){
          this.users[i].title = this.editObj.title;
          this.users[i].user = this.editObj.user;
        }
      }
      this.isShow = false;
    },
    select(){
      this.PGNum=this.HMGNum=this.XJNum=this.HLGNum=this.JZNum='';
      for(let i=0; i<this.users.length; i++){
        if(this.users[i].title=='苹果'){
          this.PGNum=this.PGNum+this.users[i].user;
        } else if(this.users[i].title=='橘子'){
          this.JZNum=this.JZNum+this.users[i].user;
        } else if(this.users[i].title=='哈密瓜'){
          this.HMGNum=this.HMGNum+this.users[i].user;
        } else if(this.users[i].title=='香蕉'){
          this.XJNum=this.XJNum+this.users[i].user;
        } else if(this.users[i].title=='火龙果'){
          this.HLGNum=this.HLGNum+this.users[i].user;
        }
        // console.log(this.users)
      }
    }
  }
}
</script>

<style scoped>
img{
  left: 50%;
  background-color: black;
}
.container{
  margin-left: 200px;
  padding-left: 100px;
  width: 1000px;
  height: 1000px;
  /*background-image:url(../assets/主题1.png) ;*/
  background-repeat: no-repeat;
  background-position: center center;
  background-color: white;
}
.input-bar{
  padding: 5px;
  background: #f1f1f1;
  margin-bottom: 10px;
}
input{
  display: block;
  width: 100%;
  height: 30px;
  font-size: 14px;
  line-height: 1.42857143;
  color: #555;
  background-color: #fff;
  background-image: none;
  /* border: 1px solid #ccc; */
  border: 1px solid #e4eaec;
  /* border-radius: 4px; */
  border-radius: 2px;
  /* -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075); */
  /* box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075); */
  -webkit-transition: border-color ease-in-out .15s, -webkit-box-shadow ease-in-out .15s;
  -o-transition: border-color ease-in-out .15s, box-shadow ease-in-out .15s;
  transition: border-color ease-in-out .15s, box-shadow ease-in-out .15s;
}
.table, .table > tbody > tr > th, .table > tfoot > tr > th, .table > thead > tr > td, .table > tbody > tr > td, .table > tfoot > tr > td {
  padding: 8px !important;
  margin-bottom: 0 !important;
  /* border-bottom: 1px solid #d4d8da; */
  border-bottom: 1px solid #e4eaec;
  border-collapse: collapse !important;
  border-radius: 1px;
}
.table tbody {
  display: table-row-group;
  vertical-align: middle;
  border-color: inherit;
}
.table tr {
  display: table-row;
  vertical-align: inherit;
  border-color: inherit;
}
.table-bordered {
  border: 1px solid #e4eaec;
}
.table-bordered > thead > tr > th, .table-bordered > tbody > tr > th, .table-bordered > tfoot > tr > th, .table-bordered > thead > tr > td, .table-bordered > tbody > tr > td, .table-bordered > tfoot > tr > td {
  border: 1px solid #e4eaec;
}
.table-bordered > tbody > tr > td, .table-bordered > tfoot > tr > td {
  border: 1px solid #e4eaec;
}
.modal{
  width: 400px;
  height: 200px;
  position: fixed;
  top: 50%;
  left: 50%;
  margin-top: -100px;
  margin-left: -200px;
  background: #ffffff;
  border: 1px solid #dddddd;
  border-radius: 5px;
  z-index: 100000;
}
.modal-header{
  margin: 0;
  padding: 0;
  font-size: 14px;
  font-weight: normal;
  padding-left: 10px;
  padding-right: 10px;
  line-height: 40px;
}
.modal-header span{
  float: right;
  cursor: pointer;
}
.modal-body{
  padding: 10px;
}
.modal-footer{
  text-align: right;
  padding: 10px;
}
button{
  color: #fff;
  background-color: #36a9e1;
  border-color: #36a9e1;
  display: inline-block;
  padding: 4px 12px;
  margin-bottom: 0;
  font-size: 14px;
  font-weight: normal;
  line-height: 1.42857143;
  text-align: center;
  white-space: nowrap;
  vertical-align: middle;
  -ms-touch-action: manipulation;
  touch-action: manipulation;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  background-image: none;
  border: 1px solid transparent;
  /* border-radius: 4px; */
  border-radius: 2px;
}

</style>