<template>
  <div>
    <button @click="open('picker1')" >日期选择</button>
    {{date1}}
    {{value}}
    {{value1}}
    <br>
    <mt-datetime-picker
      ref="picker1"
      type="date"
      v-model="value1"
      year-format="{value} 年"
      month-format="{value} 月"
      date-format="{value} 日"
      :startDate="startDate"
      :endDate="endDate"
      @confirm="handleChange">
    </mt-datetime-picker>
<!-- 
    <mt-button type="default" @click="toast">提示信息</mt-button>
    <mt-button type="default" @click="loading">加载</mt-button>
    <mt-button type="default" @click="box">弹框</mt-button>
    <mt-button type="default" @click="sheetVisible=true">操作表</mt-button>
    
    
    <mt-actionsheet
      :actions="actions"
      v-model="sheetVisible" >
    </mt-actionsheet>

    <mt-swipe :auto="0">
      <mt-swipe-item>1</mt-swipe-item>
      <mt-swipe-item>2</mt-swipe-item>
      <mt-swipe-item>3</mt-swipe-item>
    </mt-swipe> -->
    {{data.err}}
  </div>
</template>
<script >
  import {Toast} from 'mint-ui'
  import { DatetimePicker } from 'mint-ui'

  import jiekou from '../jiekou/index.js'
  
  export default{
    data(){
      return{
        actions:[
          {name:'文本1',method:this.sheet},
          {name:'文本2',method:this.sheet}
        ],
        sheetVisible:false,
        data:{'a':1},

        value: null,
        value1: null,
        //show: true,
        startDate: new Date('2014'),
        endDate: new Date()
      }
    },
    mounted:function(){

       const _this = this
       jiekou.test(function (res) {
        console.log(res);
        _this.data=res.data;

       })

       console.log(this.data);
       setTimeout(function(){console.log(this.data)}.bind(this),6000);
      
    },
    methods:{
       open(picker) {
        this.$refs[picker].open();
      },
      handleChange(value) {
        this.date1 = value.toString();
        //this.show = true;
        Toast({
          message: '已选择 ' + value.toString(),
          position: 'bottom'
        });
      }
    
    }
  }
</script>
<style scoped>
  .mint-swipe{
   
    height: 100px;
  }
  .mint-swipe-item{
     background: red;
  }
</style>