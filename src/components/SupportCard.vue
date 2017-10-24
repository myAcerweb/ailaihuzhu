<template>
	<div id="supportCard">
		<div class="pub_header">
			<div onclick="window.history.go(-1);" class="pub_back">
				<a >
					<img :src="imgSCreturn">
					<!-- <img src="img/return.png"> -->
				</a>
				<span>返回</span>
			</div>

			<span>爱来互助-快捷支付方式</span>

		<div class="Qk_word">
			<p style="font-family:PingFangSC-Medium;font-size:28px;color:#333333;text-align: right;width: 61%;margin: 0 1rem">
				查看支持银行
			</p>
			<p class="close">
				<img :src="imgSCguanbi">
				<!-- <img src="img/guanbi.png"> -->
			</p>
		</div>
		<!-- 银行分类 -->
		<div style="width: 100%;background:#fafafa">
		<div class="Qk_card">
		<div class="Qk_nav">
		    <p id="savings" class="savings" @click="cardChange1">储蓄卡</p>
		    <p id="credit" class="credit" @click="cardChange2">信用卡</p>
		</div>
		</div>
		</div>
		<!-- 储蓄 -->
		<div id="Qk_savings" class="Qk_savings">
		<br>
		<h3>储蓄卡</h3>
		<!-- 邮政 -->
		<div class="Post_Office card">
			<img :src="imgSCPost_Office">
			<!-- <img src="img/Post_Office.png"> -->
		</div>
		<!--招商-->
		<div class="Attract_investment card">
			<img :src="imgSCAttract_investment">
			<!-- <img src="img/Attract_investment.png"> -->
		</div>
		<!-- 建设 -->
		<div class="build card">
			<img :src="imgSCbuild">
			<!-- <img src="img/build.png"> -->
		</div>
		<!-- 工商-->
		<div class="Business_circles card">
			<img :src="imgSCBusiness_circles">
			<!-- <img src="img/Business_circles.png"> -->
		</div>
		<!-- 农业 -->
		<div class="Business_circles card">
			<img :src="imgSCAgriculture">
			<!-- <img src="img/Agriculture.png"> -->
		</div>
		<!-- 中国 -->
		<div class="China card">
			<img :src="imgSCChina">
			<!-- <img src="img/China.png"> -->
		</div>
		<!-- 交通 -->
		<div class="traffic card">
			<img :src="imgSCtraffic">
			<!-- <img src="img/traffic.png"> -->
		</div>
		<!-- 光大 -->
		<div class="Everbright card">
			<img :src="imgSCEverbright">
			<!-- <img src="img/Everbright.png"> -->
		</div>
		</div>



		<!-- 信用 -->
		<div id="Qk_credit" class="Qk_credit">
		<br>
		<h3>信用卡</h3>
		<!-- 邮政 -->
		<div class="Post_Office card">
			<img :src="imgSCPost_Office">
			<!-- <img src="img/Post_Office.png"> -->
		</div>
		<!--招商-->
		<div class="Attract_investment card">
			<img :src="imgSCAttract_investment">
			<!-- <img src="img/Attract_investment.png"> -->
		</div>
		<!-- 建设 -->
		<div class="build card">
			<img :src="imgSCbuild">
			<!-- <img src="img/build.png"> -->
		</div>
		<!-- 工商-->
		<div class="Business_circles card">
			<img :src="imgSCBusiness_circles">
			<!-- <img src="img/Business_circles.png"> -->
		</div>
		<!-- 农业 -->
		<div class="Business_circles card">
			<img :src="imgSCAgriculture">
			<!-- <img src="img/Agriculture.png"> -->
		</div>
		<!-- 中国 -->
		<div class="China card">
			<img :src="imgSCChina">
			<!-- <img src="img/China.png"> -->
		</div>
		<!-- 交通 -->
		<div class="traffic card">
			<img :src="imgSCtraffic">
			<!-- <img src="img/traffic.png"> -->
		</div>
		<!-- 光大 -->
		<div class="Everbright card">
			<img :src="imgSCEverbright">
			<!-- <img src="img/Everbright.png"> -->
		</div>
		</div>
		</div>
	</div>

</template>
<script type="text/javascript">
	export default{
		data(){
			return{
				imgSCreturn:'./static/return.png',
				imgSCEverbright:'./static/Everbright.png',
				imgSCtraffic:'./static/traffic.png',
				imgSCChina:'./static/China.png',
				imgSCAgriculture:'./static/Agriculture.png',
				imgSCBusiness_circles:'./static/Business_circles.png',
				imgSCbuild:'./static/build.png',
				imgSCAttract_investment:'./static/Attract_investment.png',
				imgSCPost_Office:'./static/Post_Office.png',
				imgSCguanbi:'./static/guanbi.png'
			}
		},
		methods:{
			cardChange1(){
				credit.className="credit";
				savings.className="savings";
				Qk_credit.style.display="none";
				Qk_savings.style.display="block";

			},
			cardChange2(){
				credit.className="savings";
				savings.className="credit";
				Qk_credit.style.display="block";
				Qk_savings.style.display="none";

			}
		}
	}
</script>
<style scoped>
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
.Qkpayment_header {
  width: 100%;
  height: 45px;
  background: rgba(208, 2, 27, 0.9);
  font-family: 微软雅黑;
}
.Qk_return {
  width: 9%;
  float: left;
}
.Qk_return > img {
  max-width: 100%;
  height: 1.5rem;
  margin: 35%;
}
.Qk_title {
  width: 61%;
  text-align: center;
  line-height: 45px;
  float: left;
  font-size: 18px;
  color: #ffffff;
}
.Qk_word {
  width: 100%;
  height: 3.52rem;
  /* border: 1px solid;*/
  line-height: 3.52rem;
  background: #fafafa;
}
.Qk_word > p {
  float: left;
}
.close {
  width: 19%;
  height: 4rem;
  line-height: 4rem;
  /*margin-left: 1rem;*/
  text-align: right;
}
.close > img {
  max-width: 100%;
}
.Qk_card {
  width: 100%;
  height: 1.6rem;
  padding-top: 0.5rem;
}
.Qk_nav {
  width: 13.88rem;
  margin: 0 auto;
  border-radius: 5px;
  border: 1px solid #f11476;
  height: 1.7rem;
}
.Qk_nav > p {
  width: 6.8rem;
  height: 1.76rem;
  float: left;
  font-family: PingFangSC-Regular;
  font-size: 0.96rem;
  text-align: center;
  line-height: 1.76rem;
  /*	margin: 2rem auto;*/
}
.savings {
  background: #f11476;
  color: white;
}
.credit {
  color: #f11476;
}
.card {
  width: 15rem;
  height: 3.2rem;
  margin: 0 auto;
}
.card > img {
  max-width: 100%;
}
.Qk_credit {
  display: none;
}
	
</style>