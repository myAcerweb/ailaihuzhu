<template>
	<div id="kuaijieCharge">
		<div class="pub_header">
		    <div class="pub_back">
		        <a >
		            <img :src="imgKJCreturn">
		            <!-- <img src="img/return.png"> -->
		        </a>
		        <span>返回</span>
		    </div>

		    <span>爱来互助-快捷支付方式</span>
		</div>
		<div class="payment_content">
		<div class="pay_word">快捷支付</div>
		    <div class="payment_money" style="border-bottom: 1px solid rgba(151,151,151,0.38);">
		        <p class="pay_gold">
		           <img :src="imgKJCpay_gold">
		           <!-- <img src="img/pay_gold.png" alt=""> -->
		        </p>
		        <p>待支付金额</p>
		        <p style="color:#d0011b;">￥ 98：00</p>
		    </div>
		    <div class="pay_number">
		        <p class="number_tu">
		            <img :src="imgKJCpay_number">
		            <!-- <img src="img/pay_number.png" alt=""> -->
		        </p>
		        <input type="text" placeholder="请输入银行卡卡号" class="number_gold">
		        <p class="pay_close">
		            <img :src="imgKJCrecharge_hide">
		            <!-- <img src="img/recharge_hide.png" alt=""> -->
		        </p>
		    </div>
		</div>
		<div class="pay_step">
		   <img :src="imgKJCstep">
		    <!-- <img src="img/step.png" alt=""> -->
		</div>
		<router-link tag="div" to="/supportCard" style="font-family:PingFangSC-Regular;font-size:24px;color:#0076ff;letter-spacing:-0.58px;text-align:right;width: 95%;margin: 0 auto">
		    查看支持银行
		</router-link>
	</div>
</template>
<script >
	export default{
		data(){
			return{
				imgKJCreturn:'./static/return.png',
				imgKJCpay_gold:'./static/pay_gold.png',
				imgKJCpay_number:'./static/pay_number.png',
				imgKJCrecharge_hide:'./static/recharge_hide.png',
				imgKJCstep:'./static/step.png'
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
.payment_content {
  width: 100%;
  height: 9.84rem;
  background: #fafafa;
  box-shadow: 0 0.04rem 0.08rem 0 rgba(0, 0, 0, 0.3);
}
.pay_word {
  width: 100%;
  height: 3.28rem;
  line-height: 3.28rem;
  font-size: 1.12rem;
  font-family: PingFangSC-Medium;
  color: #333333;
  text-align: center;
  border-bottom: 0.04rem solid rgba(151, 151, 151, 0.38);
}
.payment_money,
.pay_number {
  width: 100%;
  height: 3.28rem;
  line-height: 3.28rem;
  font-family: PingFangSC-Regular;
  font-size: 0.96rem;
  color: #333333;
}
.payment_money > p,
.pay_number > p {
  float: left;
}
.pay_gold,
.number_tu {
  width: 1rem;
  height: 1rem;
  margin: 0.24rem 0.48rem 0 0.6rem;
}
.pay_close {
  width: 1.2rem;
  height: 1.2rem;
  margin: 0.32rem 0 0 3.72rem;
}
.pay_gold > img,
.number_tu > img,
.pay_close > img,
.pay_step > img {
  max-width: 100%;
}
.number_gold {
  width: 7.52rem;
  height: 1.32rem;
  font-family: PingFangSC-Regular;
  font-size: 0.96rem;
  color: #999999;
  float: left;
  margin: 1.04rem 0 0 0;
}
.pay_step {
  width: 90%;
  margin: 2.6rem auto 1.4rem auto;
}

</style>