<template>
	<div id="invitation">
		<div class="pub_header">
		<div class="pub_back">
			<a >
				<!-- <img :src="imgInvitationReturn"> -->
				<!-- <img src="img/return.png"> -->
			</a>
			<!-- <span>返回</span> -->
		</div>

		<span>特别邀请</span>
	</div>
	<div class="In_content">
	<div class="In_header">
		<div class="In_logo">
			<img :src="imgInvitationLOGO">
			<!-- <img src="img/In_LOGO.png" alt=""> -->
		</div>
		<div class="In_header_word">
			你已获得鼓励金 <span style="color:red">10元</span> ，爱心<span style="color:red">2</span>颗，继续加油
		</div>
		
	</div>
	<div class="In_word">
		把爱来互助推荐给你的亲朋好友，并邀请到他们就可以获得鼓励奖和爱心。
	</div>
	<router-link tag="div" to="/cheer" class="Invitation_sub2">
		<img :src="imgInvitation_sbu2">
		<!-- <img src="img/Invitation_sub2.png"> -->
	</router-link>
	</div>
	<div class="Invitation_ceremony">
		<img :src="imgInvitationCeremony">
		<!-- <img src="img/Invitation_ceremony.png"> -->
	</div>
	<div class="In_gd">功德榜</div>
	<div  class="In_con">
	<div class="In_head" >
		<div v-for="(gd, index) in gdList" :key="index">
		<p class="p1">
      <img :src="gd.headimgurl" />
    </p>
		<p>第{{index + 1}}位</p>
		</div>

	</div>
	<!-- 喊亲朋好友一起为爱加油 按钮 -->
	<div class="Invitation_sub1">
		<img :src="imgInvitation_sub1">
		<!-- <img src="img/Invitation_sub1.png"> -->
    <!-- <div class="Invitation_sub2">
      <button>微博分享</button>
    </div> -->
	</div>
  
	</div>
<!-- 推荐 -->
<div class="Invitation_sub2">
      <button>微博分享</button>
</div>
<div class="Recommend">
	
	<!-- <img src="img/Recommend.png"> -->
</div>
<router-link tag="div"  to="/invitationRule" style="font-family:PingFangSC-Regular;font-size:18px;color:#0076ff;width: 60%;margin: 0.5rem auto;text-align: center;">
	规则说明>
</router-link>
	</div>
</template>
 <script type="text/javascript">
  import { DONATIONSFIRST } from '../jiekou/api'
	export default{
		data(){
			return{
				imgInvitationReturn:'./static/return.png',
				imgInvitationLOGO:'./static/In_LOGO.png',
				imgInvitation_sbu2:'./static/Invitation_sub2.png',
				imgInvitationCeremony:'./static/Invitation_ceremony.png',
				imgInvitation_more:'./static/Invitation_more.png',
        imgInvitation_sub1:'./static/Invitation_sub1.png',
        gdList: [],
			}
    },
    created () {
      DONATIONSFIRST().then((res) => {
        if (res.data.err === 0 && res.data) 
        console.log(res)
        this.gdList= res.data.records.slice(0, 4)
        }
      )
    }
	}
</script>
<style type="text/css">
.Invitation_sub2{
  width: 100%;
  margin-top: 1rem;
}
.Invitation_sub2>button{
  width: 100%;
  background-image: linear-gradient(-180deg, #e52334 0%, #9f031b 100%);
  border-radius: 0.32rem;
  height: 2.04rem;
  font-family: PingFangSC-Semibold;
  font-size: 0.96rem;
  color: #ffffff;
  letter-spacing: 0.04rem;
  text-align: center;
}
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
  letter-spacing: -0.43px;
  text-align: center;
  width: 100%;
  display: block;
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
.payment_content {
  width: 100%;
  background: #fafafa;
  box-shadow: 0 0.04rem 0.08rem 0 rgba(0, 0, 0, 0.3);
}
.pay_word {
  font-size: 1.12rem;
  color: #333333;
}
.In_content {
  width: 15rem;
  height: 11.32rem;
  background: #fafafa;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.3);
}
.In_header {
  width: 15rem;
  height: 5.28rem;
  background: #efeff4;
}
.In_header > div {
  float: left;
}
.In_logo {
  width: 1.96rem;
  height: 1.96rem;
  margin: 1.32rem 0.88rem 0 0.6rem;
}
.In_logo > img,
.Invitation_sub2 > img,
.Invitation_ceremony > img,
.In_head > div > .p1 > img,
.Invitation_sub1 > img,
.Recommend > img {
  max-width: 100%;
}
.In_header_word {
  width: 11.12rem;
  height: 2.64rem;
  font-size: 0.96rem;
  word-wrap: break-word;
  margin-top: 1.32rem;
}
.In_word {
  word-wrap: break-word;
  width: 13.8rem;
  height: 2rem;
  color: #666666;
  margin: 0.7rem auto;
  font-size: 0.72rem;
}
.Invitation_sub2 {
  width: 13.8rem;
  margin: 1.28rem auto;
}
.Invitation_ceremony {
  /*margin-top: 1rem;*/
  width: 100%;
}
.In_gd {
  width: 15rem;
  background: #d0011b;
  height: 3.08rem;
  text-align: center;
  line-height: 3.08rem;
  font-size: 1.12rem;
  color: #ffffff;
}
.In_con {
  background: #fafafa;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.3);
  width: 100%;
  height: 9.4rem;
}
.In_head {
  width: 100%;
  height: 1.6rem;
  /*	border: 1px solid;*/
}
.In_head > div {
  width: 25%;
  float: left;
  margin-top: 1.44rem;
  margin-bottom: 1.48rem;
}
.In_head > div > .p1 {
  width: 2.64rem;
  height: 2.64rem;
  border-radius: 100%;
  background: red;
  margin: 0 auto;
}
.In_head > div > p {
  text-align: center;
  font-size: 0.72rem;
  color: #666666;
}
.Invitation_sub1,
.Recommend {
  width: 13.8rem;
  margin: 1.2rem auto 0;
}

</style>