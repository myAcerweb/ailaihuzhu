<template>
	<div id="punchClockJoin">
		<div class="pub_header">
		    <div onclick="window.history.go(-1);" class="pub_back">
		        <a>
		            <img :src="imgPunchClockJoinreturn">
		            <!-- <img src="img/return.png"> -->
		        </a>
		        <span>返回</span>
		    </div>
		    <span style="margin-left: 35%">早起打卡</span>
		    <span style="text-align: right">分享</span>
		</div>
		<div class="punch_header">
		    <ul class="punch_list">
		        <li>
		            <p class="punch1">
		                <img :src="imgPunchClockJoinpunch1">
		                <!-- <img src="img/punch1.png" alt=""> -->
		            </p>
		            <p>
		                连续打卡<br>
		                <span style="color:#f84646;">3天</span>
		            </p>
		        </li>
		        <li style="border-left: 2px solid #999999;">
		            <p class="punch2">
		                <img :src="imgPunchClockJoinpunch2">
		                <!-- <img src="img/punch2.png" alt=""> -->
		            </p>
		            <p>
		                累计金额<br>
		                <span style="color: #f82646;">￥0.46</span>
		            </p>
		        </li>
		    </ul>
		</div>
		<div class="punch_content">
		    <div class="punch_img">
		        <img :src="imgPunchClockJoinpunch_word">
		        <!-- <img src="img/punch_word.png" alt=""> -->
		    </div>
		    <div class="punch_word">
		        435456人参加明早挑战
		        累计挑战金28863元
		    </div>
		    <div class="punch_gz">
		        <div class="punch_t">
		            挑战规则
		        </div>
		        <div class="punch_g">
		            1. 支付 1 元加入挑战<br>
		            2. 早上 5:00-8:00打卡<br>
		            3. 准时打卡的人平分挑战金<br>
		        </div>
		    </div>
		</div>
		<div  class="punch_sub" @click="alertUp">
		    <img :src="imgPunchClockJoinGroup">
		    <!-- <img src="img/Group.png" alt=""> -->
		</div>



		<!--您的挑战已启动、弹出框-->
		<div id="PunchStart" class="start" style="display:none;">
		    <div class="start_content" style="display: none">
		        <div class="start_img">
		           <img :src="imgPCJStart4">
		            <!-- <img src="img/start-img.png" alt=""> -->
		        </div>
		        <div class="start_n">
		            <div class="start_l">
		            	<img :src="imgPCJStart3">
		            <!-- <img src="img/start_l.png" alt=""> -->
		        </div>
		            <div class="start_s">
		                明天5:00-8:00
		                记得来打卡哦
		            </div>
		        </div>

		        <div class="start_sub">
		            喊好友来参加
		        </div>
		    </div>
		<!--支付挑战金-->
		    <div class="start_money" >
		        <h1 class="start_money1">
		            支付挑战金
		            1 元
		        </h1>
		        <div class="start_img2">
		        	<img :src="imgPCJStart2">
		            
		        </div>
		        <div class="money_sub" @click="goToPAY">
		        	<img :src="imgPCJStart0">
		            
		        </div>
		    </div>
		</div>
	</div>
</template>
<script type="text/javascript">
import {PAY, wxpay} from '../jiekou/api.js'
	export default{
		data(){
			return{
				imgPunchClockJoinreturn:'./static/return.png',
				imgPunchClockJoinGroup:'./static/Group.png',
				imgPunchClockJoinpunch_word:'./static/punch_word.png',
				imgPunchClockJoinpunch2:'./static/punch2.png',
				imgPunchClockJoinpunch1:'./static/punch1.png',
				imgPCJStart0:'./static/start-sub.png',
				imgPCJStart2:'./static/start-img2.png',
				imgPCJStart3:'./static/start_l.png',
				imgPCJStart4:'./static/start-img.png'

			}
		},
		methods:{
      goToPAY () {
        PAY(wxpay)     
      },
			alertUp:function(){
				PunchStart.style.display="block";
			}
		}
	}
</script>
<style type="text/css" scoped>
	.pub_header {
  background: rgba(208, 2, 27, 0.9);
  box-shadow: 0 0 0 0 #b2b2b2;
  width: 100%;
  height: 2.56rem;
  position: relative;
}
.pub_header > span {
  font-family: PingFangSC-Medium;
  font-size: 0.72rem;
  color: #ffffff;
  letter-spacing: -0.0172rem;
  text-align: center;
  width: 30%;
  display: block;
  float: left;
  line-height: 2.56rem;
}
.pub_back {
  position: absolute;
  left: 0.32rem;
  top: 0;
  width: 2.2rem;
  height: 2.56rem;
}
.pub_back > a {
  display: block;
  width: 0.52rem;
  height: 1.2rem;
  float: left;
  margin-top: 0.88rem;
}
.pub_back > a > img {
  display: block;
  height: auto;
  max-width: 100%;
}
.pub_back > span {
  float: right;
  line-height: 0.84rem;
  font-family: PingFangSC-Regular;
  font-size: 0.72rem;
  color: #ffffff;
  letter-spacing: -0.0172rem;
  text-align: center;
  margin-top: 0.88rem;
}
.punch_header {
  background: #fafafa;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.3);
  width: 100%;
  height: 4rem;
}
.punch_list {
  width: 100%;
  height: 2.64rem;
  padding: 0.6rem;
  font-size: 0.84rem;
}
.punch_list > li {
  width: 40%;
  height: 2.64rem;
  float: left;
  padding: 0.4rem 0 0 0.6rem;
}
.punch_list > li > p {
  float: left;
  margin-left: 0.24rem;
}
.punch_list > li > p > img {
  max-width: 100%;
}
.punch1,
.punch2 {
  width: 25%;
}
.punch_content {
  background: #fafafa;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.3);
  width: 100%;
  height: 12.72rem;
  margin-top: 0.6rem;
}
.punch_img {
  width: 13.8rem;
  margin: 0 auto;
  position: relative;
  top: 0;
  left: 0;
}
.punch_img > img,
.punch_sub > img {
  max-width: 100%;
}
.punch_word {
  width: 10.92rem;
  height: 2.56rem;
  word-wrap: break-word;
  position: absolute;
  top: 10.6rem;
  left: 2.4rem;
  font-size: 0.96rem;
  text-align: center;
  background-color: #f84646 ;
  color: #ffffff;
}
.punch_t {
  width: 2.12rem;
  height: 2.48rem;
  font-size: 1.04rem;
  color: #666666;
  float: left;
  padding-right: 0.6rem;
  line-height: 1.24rem;
  padding-top: 0.24rem;
}
.punch_g {
  width: 10.24rem;
  height: 3.12rem;
  float: left;
  font-size: 0.72rem;
  color: #666666;
  border-left: 0.12rem solid gainsboro;
  padding-left: 0.56rem;
}
.punch_gz {
  width: 100%;
  margin: 2.4rem auto 0 auto;
  padding-left: 2rem;
}
.punch_sub {
  width: 13.8rem;
  position: absolute;
  top: 18.8rem;
  left: 0.6rem;
}
.start {
  position: absolute;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.75);
  width: 100%;
  height: 26.68rem;
}
.start_content {
  background: #ffffff;
  box-shadow: 0 0 0.96rem 0 rgba(0, 0, 0, 0.22), 0 0.96rem 0.96rem 0 rgba(0, 0, 0, 0.3);
  border-radius: 0.08rem;
  width: 13.76rem;
  height: 13.96rem;
  margin: 6.36rem auto 0 auto;
}
.start_img {
  width: 12.32rem;
  height: 2.2rem;
  margin: 0 auto;
  padding-top: 1.52rem;
}
.start_img > img,
.start_l > img,
.start_img2 > img,
.money_sub > img {
  max-width: 100%;
}
.start_l {
  width: 4.36rem;
  height: 5.48rem;
  margin-left: 1.96rem;
}
.start_s {
  width: 6.48rem;
  height: 2.08rem;
  word-wrap: break-word;
  font-family: PingFangSC-Regular;
  font-size: 0.96rem;
  color: #333333;
  margin-left: 0.8rem;
}
.start_l,
.start_s {
  float: left;
}
.start_n {
  width: 100%;
  height: 5.48rem;
}
.start_sub {
  width: 11.52rem;
  height: 2.36rem;
  border: 0.08rem solid #f84646;
  border-radius: 0.08rem;
  margin: 0.6rem auto;
  font-size: 1.16rem;
  color: #f84646;
  text-align: center;
  line-height: 2.36rem;
}
.start_money {
  background: #ffffff;
  box-shadow: 0 0 0.96rem 0 rgba(0, 0, 0, 0.22), 0 0.96rem 0.96rem 0 rgba(0, 0, 0, 0.3);
  border-radius: 0.08rem;
  width: 13.76rem;
  height: 13.96rem;
  margin: 6.36rem auto 0 auto;
}
.start_money1 {
  width: 8.84rem;
  height: 4.4rem;
  font-family: FZLTTHJW--GB1-0;
  font-size: 1.76rem;
  color: #f84646;
  word-wrap: break-word;
  margin: 0 auto;
  text-align: center;
  padding-top: 1.52rem;
}
.start_img2 {
  width: 80%;
  margin: 0 auto;
}
.money_sub {
  width: 11.96rem;
  margin: 0.72rem auto 0 auto;
}

</style>