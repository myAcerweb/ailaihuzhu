<template>
	<div id="punchClock">
		<div class="pub_header">
		    <div onclick="window.history.go(-1);" class="pub_back">
		        <a>
		            <img :src="imgPunchClockreturn">
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
		                <img :src="imgPunchClockpunch1">
		                <!-- <img src="img/punch1.png" alt=""> -->
		            </p>
		            <p>
		                连续打卡<br>
		                <span style="color:#f84646;">3天</span>
		            </p>
		        </li>
		        <li style="border-left: 2px solid #999999;">
		            <p class="punch2">
		                <img :src="imgPunchClockpunch2">
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
		    <img :src="imgPunchClockpunch_word">
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
		<div class="punch_sub">
		    <img :src="imgPunchClockpunch_clock">
		    <!-- <img src="img/punch_clock.png" alt=""> -->
		</div>
	</div>
</template>
<script >
	export default{
		data(){
			return{
				imgPunchClockreturn:'./static/return.png',
				imgPunchClockpunch_clock:'./static/punch_clock.png',
				imgPunchClockpunch_word:'./static/punch_word.png',
				imgPunchClockpunch2:'./static/punch2.png',
				imgPunchClockpunch1:'./static/punch1.png'
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

</style>