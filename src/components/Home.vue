<template>
	<div id="home">
		<!-- <div class="t_tit">
    <p>
    <img src="./img/jit.png" alt="">
    返回</p>
      爱来互助
    </div> -->

<div>
</div>


<div class="cont">
    <div class="banner">
        <!-- <ul class="b_list"> -->
            <!-- <li> -->
                <!-- <a href="javascript:;"> -->
                    <!-- <img :src="imgHomeban1"> -->
                    <!-- <img src="./img/ban.png" alt=""> -->
                    <!-- <p style="text-align:left;">求助人感谢视频</p>
                </a>
            </li>
            <li>
                <a href="javascript:;">
                    <img :src="imgHomeban1"> -->
                    <!-- <img src="./img/ban.png" alt=""> -->
                   <!--  <p style="text-align:left;">求助人感谢视频</p>
                </a>
            </li>
            <li>
                <a href="javascript:;">
                    <img :src="imgHomeban1">
                    <img src="./img/ban.png" alt="">
                    <p style="text-align:left;">求助人感谢视频</p>
                </a>
            </li>
        </ul>
        <ul class="d_list">
            <li class="active"></li>
            <li></li>
            <li></li>
        </ul> -->
        <mt-swipe :show-indicators="false" :auto="4000" class="swipe_banner" >
            <mt-swipe-item class="home_banner"  :key="index" v-for="(banner, index) in banners">
                   <img :src="banner" />
            </mt-swipe-item>
        </mt-swipe>
    </div>



    <div class="meng marginTop">
        <div class="new">
            <img :src="imgHomelaba">
            <!-- <img src="./img/laba.png" alt=""> -->
            <marquee scrollamount="3" direction=left style="width:83%">{{marquee}}</marquee>
        </div>
        <ul class="m_list">
            <li>
                <router-link tag="a" to="/cheer" href="javascript:;">
                    <img :src="imgHome_i2">
                    <!-- <img src="./img/ai.png" alt=""> -->
                    <p>为爱加油</p>
                </router-link>
            </li>
            <li>
                <router-link tag="a" to="/invitation" href="javascript:;">
                    <img :src="imgHome_i1">
                    <!-- <img src="./img/ai.png" alt=""> -->
                    <p>一起行善</p>
                </router-link>
            </li>
            <li>
                <router-link tag="a" to='/paihang' href="javascript:;">
                    <img :src="imgHome_i3">
                    <!-- <img src="./img/yao.png" alt=""> -->
                    <p>大爱功德</p>
                </router-link>
            </li>
            <li>
                <router-link tag="a" to="/punchClockJoin" href="javascript:;">
                    <img :src="imgHome_i4">
                    <!-- <img src="./img/zao.png" alt=""> -->
                    <p>早起打卡</p>
                </router-link>
            </li>
        </ul>
    </div>
    <div class="marginTop youlai">
        <img :src="imgHomeban11" class="ban11">
        <!-- <img src="./img/ban11.png" alt="" class="ban11"> -->
        <div @click="suoxiao" id="home_text" class="text">
            <p>“爱出者爱返，福往者福来”(前后合为爱来)。这是一句佛家禅语，原话是：“一叶一菩提，一花一世界；爱出者爱返，福往者福来。”</p>
            <p>“爱出者爱返，福往者福来”意思是说：你把爱给了别人，别人也会以爱回报你；你给别人带去了福音，别人也会给你带来福音。</p>
            <p>这句话充分表达了善于奉献爱和布施福德的人，自己往往也会得到别人的爱和恩惠。这句话也说明了因果循环的道理。</p>
            <p>爱来互助缘起于传承千年的海南“爱来古村”。爱来互助冥冥中契合佛偈禅语，可谓上体天心，下达民心之善行善举。</p>
            <p>我们希望爱来互助能够链接所有人的爱心，在助人为乐的过程中继续传播“爱出者爱返，福往者福来”佛家禅语！让更多的人明白:在别人危难之时伸出援助之手，给别人帮助给别人爱和幸福，自己最终也会收获爱和幸福！</p>
        </div>
        <div class="pin">
            “爱出者爱返，福往者福来”——爱来互助
        </div>
        <img id="fangda" @click="fangdafn" :src="imgHomefangda" class="fangda">
        <!-- <img src="./img/fangda.png" alt="" class="fangda"> -->
    </div>
    <div class="jihua">
        <div class="jiayou">
            <img :src="imgHomejiayou">
            <!-- <img src="./img/jiayou.png" alt=""> -->
            <p>已经有{{players}}万人开始享受爱来互助的保障</p>
        </div>
        <ul class="you_list">
            <li>
                <router-link tag="a" to="/mutual#ab"  >
                    <img :src="imgHomej1">
                    <!-- <img src="./img/j1.png" alt=""> -->
                    <p>全家抗癌计划</p>
                </router-link>
            </li>
            <li>
                <router-link tag="a" to="/mutual#bc" >
                    <img :src="imgHomej2">
                    <!-- <img src="./img/j2.png" alt=""> -->
                    <p>中青年抗癌计划</p>
                </router-link>
            </li>
            <li>
                <router-link tag="a" to="/mutual#cd" >
                    <img :src="imgHomej3">
                    <!-- <img src="./img/j3.png" alt=""> -->
                    <p>中老年重大疾病计划</p>
                </router-link>
            </li>
            <li>
                <router-link tag="a" to="/mutual#de" >
                    <img :src="imgHomej4">
                    <!-- <img src="./img/j4.png" alt=""> -->
                    <p>儿童先天性疾病互助计划</p>
                </router-link>
            </li>
        </ul>
        <div class="fei">
            <a href="javascript:;">
                <img :src="imgHomefei">
                <!-- <img src="./img/fei.png" alt=""> -->
                <p>非疾病类帮扶计划</p>
            </a>

        </div>
        <img :src="imgHomerenr" class="renr">
        <!-- <img src="./img/renr.png" alt="" class="renr"> -->
    </div>


</div>
	</div>
</template>
<script type="text/javascript">
import {mapGetters,mapActions} from 'vuex'
import { Swipe, SwipeItem } from 'mint-ui';

	export default{
		data(){
			return{
        imgHome_i1:'./static/home_i1.png',
        imgHome_i2:'./static/home_i2.png',
        imgHome_i3:'./static/home_i3.png',
        imgHome_i4:'./static/home_i4.png',
				imgHomerenr:'./static/renr.png',
				imgHomefei:'./static/fei.png',
				imgHomej4:'./static/j4.png',
				imgHomej3:'./static/j3.png',
				imgHomej2:'./static/j2.png',
				imgHomej1:'./static/j1.png',
				imgHomejiayou:'./static/jiayou.png',
				imgHomefangda:'./static/fangda.png',
				imgHomeban11:'./static/ban11.png',
				imgHomezao:'./static/zao.png',
				imgHomeyao:'./static/yao.png',
				imgHomeai:'./static/ai.png',
				imgHomelaba:'./static/laba.png',
				imgHomeban1:'./static/ban1.png',
        imgHome_banner1:'./static/home_banner1.png',
        imgHome_banner2:'./static/home_banner2.png',
        players:'',
        marquee:''
				

			}
		},
    mounted(){
      this.banners = JSON.parse(localStorage.banners)
      
      this.players=localStorage.players;
      this.marquee=localStorage.marquee;
    },
    methods: {
      handleChange(index) {
      
      },


      fangdafn(){
        home_text.className="text text_fangda";
      },
      suoxiao(){
        if(home_text.className=="text"){
          home_text.className="text text_fangda";
        }else if(home_text.className=="text text_fangda"){
          home_text.className="text";
        }
      }




    }
    // computed:mapGetters([
    //   'getHomeInfo'
    // ])
	}
</script>
<style type="text/css" scoped>
  .text_fangda{
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    font-size: 0.8rem;
    background: #efeff4;
    z-index: 100;
  }
  #home .cont .youlai .text_fangda>p{
    font-size: 0.8rem;
    width: 92%;
    padding: 0 4%;
  }
  .swipe_banner{
    width: 100%;
    height: 8.4rem;
  }
  .home_banner>img{
    max-width: 100%;
  }
	.marginTop {
  margin-top: 0.6rem;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.3);
  background: #fff;
}
.t_tit {
  position: relative;
  height: 40 25rem;
  width: 100%;
  background: rgba(208, 2, 27, 0.9);
  box-shadow: 0 0 0 0 #b2b2b2;
  text-align: center;
  font-size: 0.72rem;
  color: #ffffff;
  letter-spacing: -0.43px;
  line-height: 1.6rem;
}
.t_tit p {
  position: absolute;
  left: 0;
  top: 0;
  padding-left: 0.6rem;
}
.t_tit p img {
  vertical-align: middle;
  height: 0.88rem;
  margin-top: -0.2rem;
  margin-right: 0.16rem;
}
.cont {
  background-color: #EDEDF2;
  width: 100%;
  height: auto;
  color: #333333;
}
.cont .banner {
  width: 100%;
  height: 8.4rem;
  position: relative;
}
.cont .banner .b_list {
  width: 100%;
  height: 100%;
}
.cont .banner .b_list li {
  width: 100%;
  position: absolute;
  left: 0;
  top: 0;
}
.cont .banner .b_list li a {
  display: block;
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
}
.cont .banner .b_list li a img {
  width: 100%;
  height: 100%;
  vertical-align: middle;
}
.cont .banner .b_list li a p {
  position: absolute;
  left: 0;
  bottom: 0;
  font-size: 1rem;
  color: #ffffff;
  padding-left: 5%;
  width: 95%;
  background: rgba(0, 0, 0, 0.5);
  height: 1.76rem;
  line-height: 1.76rem;
}
.cont .banner .d_list {
  width: 95%;
  height: auto;
  overflow: hidden;
  position: absolute;
  left: 0;
  bottom: 5%;
  text-align: right;
  padding-right: 5%;
}
.cont .banner .d_list li {
  display: inline-block;
  width: 0.44rem;
  height: 0.44rem;
  border-radius: 50%;
  background: #ffffff;
  margin-left: 0.2rem;
}
.cont .banner .d_list li.active {
  background: #d0011b;
}
.cont .meng {
  background: #fafafa;
  margin-top: 0;
}
.cont .meng .new {
  height: 2.6rem;
  font-size: 0.96rem;
  color: #90696e;
  letter-spacing: -0.58px;
  white-space: nowrap;
  line-height: 2.6rem;
  background: #f6eff0;
}
.cont .meng .new img {
  height: 1.24rem;
  vertical-align: top;
  margin-top: 0.68rem;
  padding: 0 0.4rem 0 0.6rem;
}
.cont .meng .m_list {
  width: 100%;
  overflow: hidden;
}
.cont .meng .m_list li {
  width: 25%;
  float: left;
  /*padding: 1.2rem 0 1rem 0;*/
  padding: 0 0 1rem 0;
}
.cont .meng .m_list li a {
  display: block;
  text-align: center;
  width: 100%;
  font-size: 0.8rem;
}
.cont .meng .m_list li a img {
  /*height: 1.36rem;*/
  width: 100%;
}
.cont .meng .m_list li a p {
  margin-top: -0.6rem;

}
.cont .youlai {
  position: relative;
  left: 0;
  top: 0;
}
.cont .youlai .ban11 {
  width: 100%;
  height: 5.6rem;
}
.cont .youlai .text {
  font-family: "PingFangSC-Regular", "微软雅黑";
  /*padding: 0.28rem 0.6rem 0;*/
  width: 100%;
}
.cont .youlai .text p {
  text-indent: 2em;
  font-size: 0.6rem;
  margin-top: 0.4rem;
  line-height: 0.88rem;
  letter-spacing: 0.1px;
  width: 92%;
  padding: 0 4%;
}
.cont .youlai .pin {
  font-size: 0.72rem;
  color: #c78415;
  height: 2.88rem;
  line-height: 2.88rem;
  text-align: center;
}
.cont .youlai .fangda {
  position: absolute;
  right: 5%;
  bottom: 10%;
  width: 24%;
}
.cont .jihua {
  background-color: #fff;
  margin-top: 0.5rem;
  width: 100%;
}
.cont .jihua .jiayou {
  width: 100%;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.5);
  border-radius: 2px 2px 0 0;
}
.cont .jihua .jiayou img {
  height: 8.36rem;
  width: 100%;
}
.cont .jihua .jiayou p {
  height: 1.72rem;
  line-height: 1.72rem;
  font-size: 0.76rem;
  color: #f84646;
  text-align: center;
}
.cont .jihua .you_list {
  overflow: hidden;
  padding: 1.28rem 0.6rem 0;
}
.cont .jihua .you_list li {
  float: left;
  width: 48%;
  margin-bottom: 1rem;
}
.cont .jihua .you_list li a {
  display: block;
  width: 100%;
}
.cont .jihua .you_list li img {
  width: 100%;
  height: 4.96rem;
}
.cont .jihua .you_list li p {
  font-size: 0.96rem;
  text-align: center;
  color: #333333;
  letter-spacing: -0.58px;
  line-height: 30px;
}
.cont .jihua .you_list li:nth-of-type(2n) {
  float: right;
}
.cont .jihua .fei {
  padding: 0 0.6rem 0;
}
.cont .jihua .fei img {
  width: 100%;
  height: 5rem;
}
.cont .jihua .fei p {
  font-size: 0.96rem;
  color: #333333;
  letter-spacing: -0.58px;
  line-height: 35px;
  text-align: center;
  height: 2.28rem;
}
.cont .jihua .renr {
  width: 100%;
  height: 7.24rem;
}

</style>