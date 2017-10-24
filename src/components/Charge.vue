<template>
	<div id="charge">
		<div class="wei">
		<router-link to="/cheer" tag="p" class="return"><img :src="imgChargeReturn" alt=""></router-link>

		<p style="width: 65%;font-size: 18px;font-family:PingFangSC-Medium;">爱来互助为爱加油站</p>
		</div>
		<div class="pay">感谢您对陌生人进行爱心捐助</div>
		<div class="pay_ce">
		   <!--  <p class="p_1">此笔订单支付金额是 <span class="col">95.00</span> 元，主要用于：</p>
		    <p class="p_2">扶持<span class="col">郑和先生研发新式ZH-1型航海船</span>项目。</p>
		    <p class="p_3">目前已有 125 名家人参与扶持计划，累积计划保障金 26479.00 元</p> -->
		    <p class="payment_word">此笔订单支付金额是 <span class="col">95.00</span> 元，主要用于：
		       扶持<span class="col">郑和先生研发新式ZH-1型航海船</span>项目。
		       <span style="color:#666666;">目前已有 125 名家人参与扶持计划，累积计划保障金 26479.00 元</span> 
		    </p>

		    <p class="p_img"><img :src="imgChargeBg_ti" alt="" /></p>
		    <p class="p_4">订单金额：<span class="col">95.00</span>元</p>
		    <p class="p_5">订单提交成功，请在<span class="col">30:00</span>分钟内完成付款</p>
		    
		</div>
		<div>
			
		</div>

	<div class="payment_content">
    <ul class="payment_list">
        <li>
            <a href="javascript:;">
                <div class="pay_img1">
                    <img :src="imgChargeCh_1" alt="" @click="imgChange1">
                </div>
                <div class="pay_img2">
                    <img :src="imgChargeZhi_1" alt="">
                </div>
                <div class="pay_z">支付宝</div>
            </a>
        </li>
        <li>
            <a href="javascript:;">
                <div class="pay_img1">
                    <img :src="imgChargeCh_2" alt="" @click="imgChange2">
                </div>
                <div class="pay_img2">
                    <img :src="imgChargeYinlian" alt="">
                </div>
                <div class="pay_ka">
                    <p class="pay_k">银行卡快捷支付</p>
                    <p class="pay_m">满199减3</p>
                    <p class="pay_t">太平洋保险承保  盗用全额赔付</p>
                </div>
            </a>
        </li>
        <li>
            <a href="javascript:;">
                <div class="pay_img1">
                    <img :src="imgChargeCh_3" alt="" @click="imgChange3">
                </div>
                <div class="pay_img2">
                    <img :src="imgChargeWeixin" alt="">
                </div>
                <div class="pay_z">微信支付</div>
            </a>
        </li>
    </ul>
</div>

		<router-link tag="div" to="/kuaijieCharge" style="width: 90%;margin: 0 auto">
		    <img :src="imgChargeGo_pay" style="max-width: 100%">
		</router-link>
		<!-- <div class="qu_pay">
		    <img src="img/go_pay.png">
		</div> -->
		<div class="foot"><a href="#">我同意《会员公约》和《计划条款》</a></div>
	</div>
</template>
<script type="text/javascript">
	export default{
		data(){
			return{
				imgChargeReturn:'./static/return.png',
				imgChargeBg_ti:'./static/bg_ti.png',
				imgChargeCh_1:'./static/ch_1.png',
				imgChargeCh_2:'./static/ch_2.png',
				imgChargeZhi_1:'./static/zhi_1.png',
				imgChargeWeixin:'./static/weixin.png',
				imgChargeYinlian:'./static/yinlian.png',
				imgChargeGo_pay:'./static/go_pay.png',
				imgChargeCh_3:'./static/ch_2.png'



			}
		},
		methods:{
			imgChange1:function(){
				this.imgChargeCh_1='./static/ch_2.png';
				this.imgChargeCh_2='./static/ch_1.png';
				this.imgChargeCh_3='./static/ch_2.png';
			},
			imgChange2:function(){
				this.imgChargeCh_1='./static/ch_2.png';
				this.imgChargeCh_2='./static/ch_1.png';
				this.imgChargeCh_3='./static/ch_2.png';
			},
			imgChange3:function(){
				this.imgChargeCh_1='./static/ch_2.png';
				this.imgChargeCh_2='./static/ch_2.png';
				this.imgChargeCh_3='./static/ch_1.png';
			}
		}
	}
</script>
<style type="text/css" scoped>
	.wei{  background:rgba(208,2,27,0.90); box-shadow:0 0 0 0 #b2b2b2; width:100%;height:64px; line-height: 64px;text-align: center;color: #fff;font-size: 18px;}
    
     .wei>p{
        float: left;
     }
     .return{
        width: 12%;
        margin-top: 0.5rem;
     }
     .return>img{
        max-width: 100%;
        height: 2rem
     }
     .pay{width:100%;height:65px;font-family:PingFangSC-Regular;background:rgba(0,0,0,0.75); line-height: 65px; font-size:24px;color:#ffffff;letter-spacing:-0.58px;text-align:center;}
    .pay_ce{width: 100%;font-family:PingFangSC-Medium;font-size:18px;color:#333333; letter-spacing:-0.43px;text-align:left;background-color: #FAFAFA; box-shadow: 1px 2px 0 rgba(0,0,0,0.30);margin-bottom: 17px;}
    .pay_ce p{display: block; }
    .pay_ce .p_1,.pay_ce .p_2{color: #000; font-family: "微软雅黑"}
    .payment_word{
        width: 86%;
        margin: 0 auto;
        word-wrap: break-word;
    }
    .pay_ce .p_4 {font-size:24px;color:#333333;letter-spacing:-0.58px;text-align:center;}
    .pay_ce .p_5 {font-size:18px;color:#666666;letter-spacing:-0.43px;text-align:center;}

    .pay_ce .col{color: #D0021B; }
   
      /*checkbox样式*/
      .p_img{
        width: 64%;
        margin: 0 auto;
      }
    .box-left span {position: relative;}
    .box-left .input_check {position: absolute;visibility: hidden;}
    .box-left .input_check+label {display: inline-block;width: 30px;height: 30px;border: 1px solid #fd8845;border-radius: 50px;}
    .box-left .input_check:checked+label:after {content: "";position: absolute;left: 3px;bottom: 14px;width: 23px;height: 10px;
    border: 2px solid #fd8845;border-top-color: transparent;border-right-color: transparent;border-radius: 50px;
    -ms-transform: rotate(-60deg); 
    -moz-transform: rotate(-60deg); 
    -webkit-transform: rotate(-60deg); 
    transform: rotate(-45deg);} 
    
    .box-right{
        margin-top: 3%;
    }
    .payment_content {
  width: 100%;
  height: 9.84rem;
  background: #fafafa;
  box-shadow: 0 0.04rem 0.08rem 0 rgba(0, 0, 0, 0.3);
}
.payment_list {
  width: 95%;
  height: 9.84rem;
  margin-left: 0.68rem;
}
.payment_list > li {
  width: 100%;
  height: 3.24rem;
  overflow: hidden;
  border-bottom: 1px solid rgba(0, 0, 0, 0.3);
}
.pay_z {
  line-height: 3.28rem;
  font-size: 0.96rem;
}
.payment_list > li > a > div {
  height: 2.08rem;
  float: left;
}
.payment_list > li > a {
  width: 100%;
  height: 3.28rem;
}
.pay_img1 {
  width: 1.2rem;
  height: 1.2rem;
  margin: 1.16rem 0.2rem 0 0.6rem;
}
.pay_img1 > img,
.pay_img2 > img {
  max-width: 100%;
}
.pay_img2 {
  width: 1.72rem;
  height: 1.6rem;
  margin: 0.92rem 0.64rem 0 0.44rem;
}
.pay_k {
  width: 6.72rem;
  height: 1.04rem;
  font-size: 0.96rem;
  line-height: 1.04rem;
  float: left;
}
.pay_m {
  width: 2.6rem;
  height: 0.96rem;
  border: 0.04rem solid #d0011b;
  border-radius: 0.08rem;
  float: left;
  font-size: 0.56rem;
  color: #d0011b;
  line-height: 0.96rem;
}
.pay_ka {
  margin-top: 0.68rem;
  line-height: 0.4rem;
}
.pay_t {
  width: 9.2rem;
  height: 1rem;
  clear: both;
  font-size: 0.68rem;
  color: #666666;
  line-height: 1rem;
}
.foot {
  font-family: PingFangSC-Regular;
  margin-top: 50px;
  margin-bottom: 12px;
}
.foot a {
  display: block;
  font-size: 18px;
  color: #666666;
  letter-spacing: -0.43px;
  text-align: center;
  text-decoration: none;
}

   /* .zhi_fu{background-color: #FAFAFA; width: 100%; margin-bottom: 40px; box-shadow: 1px 2px 0 rgba(0,0,0,0.30)}
    .zhi_fu .zhi_box{width:94%; overflow: hidden; margin: 0 auto; border-bottom: 2px solid #F0F0F0; padding-bottom: 10px;}
    .zhi_fu .zhi_box .box-left{width:15%; float: left}
    .zhi_fu .zhi_box .box-right{width:84%; float: left; overflow: hidden;}
    .zhi_fu .zhi_box .box-right img{width: 17%; float: left;}
    .zhi_fu .zhi_box .box-right span{width: 80%; float: left; display: block;padding-left: 3%;}

    .box-left img{ vertical-align:middle; padding-top: 20px;}
    .foot{font-family:PingFangSC-Regular;margin-top: 50px;margin-bottom: 12px;}
    .foot a{display: block;font-size:18px;color:#666666;letter-spacing:-0.43px;text-align:center;text-decoration: none;}*/
</style>