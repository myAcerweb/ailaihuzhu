<template>
	<div id="apply">
		<div class="pub_header">
    <div onclick="window.history.go(-1);" class="pub_back">
        <a >
            <img :src="imgApplyReturn">
            <!-- <img src="img/return.png"> -->
        </a>
        <span>返回</span>
    </div>

    <span>互助申请</span>
</div>
<div class="apply_content">
<div class="apply_title">
    互助流程说明
</div>

<div class="apply_word1">
    <p>您已经加入爱来互助平台，成为我们中的一员，
        且已度过静默期，如需求助，请根据自己的实际情
        况按照下面不同的流程进行申请。如需帮助，请拨打
        ：400-5151-888,竭诚为您解答。
    </p>
    <p>根据求助情况的严重程度不同，
        分为小额捐助和大额捐助，
        五万以下为小额，以上为大额，
        大额捐助需要求助人提交更多的证明材料。
    </p>
</div>
</div>
<div class="apply_seek">
<div style="background:#d0011b;color: white;text-align:center;line-height:1.68rem;font-size:0.96rem;">
    求助流程
    <!-- <p @click="showSmall" id="changeBtn1" style="background:#d0011b;color: white;" >小额求助</p>
    <p @click="showBig" id="changeBtn2">大额求助</p> -->
</div>
</div>
<!--小额去求助-->
<div id="Small_amount" class="Small_amount">
	
    <!--第一步-->
    <div class="apply_one">
        <div class="small_title">
            <p  class="small_left" style="margin-left: 3.4rem"></p>
            <p style="font-family:PingFangSC-Medium;font-size:28px;color:#ffffff;width: 87px;height: 40px;text-align: center;margin-top: 0.1rem">
                第1步
            </p>
            <p class="small_right"></p>
        </div>
        <div class="small_word">
            通过爱来互助平台，以发起申请；</br>
            按照要求准备相应的证明材料。
        </div>
    </div>
    <!--第二步-->
    <div class="apply_two">
        <div class="small_title">
            <p  class="small_left" style="margin-left: 3.4rem"></p>
            <p style="font-family:PingFangSC-Medium;font-size:28px;color:#ffffff;width: 87px;height: 40px;text-align: center;margin-top: 0.1rem">
                第2步
            </p>
            <p class="small_right"></p>
        </div>
        <div class="small_word">
            平台确认申请后，在线提交所有材料；
        </div>
    </div>
    <!--第三步-->
    <div class="apply_two">
        <div class="small_title">
            <p  class="small_left" style="margin-left: 3.4rem"></p>
            <p style="font-family:PingFangSC-Medium;font-size:28px;color:#ffffff;width: 87px;height: 40px;text-align: center;margin-top: 0.1rem">
                第3步
            </p>
            <p class="small_right"></p>
        </div>
        <div class="small_word">
            平台委托第三方专业机构进行核实；
            </br>
            *证明材料包括：</br>
            1、身份/户籍证明</br>
            2、加入互助电子凭证</br>
            3、申请表</br>
            4、入院/出院证明

        </div>
    </div>
    <!--第四步-->
    <div class="apply_two">
        <div class="small_title">
            <p  class="small_left" style="margin-left: 3.4rem"></p>
            <p style="font-family:PingFangSC-Medium;font-size:28px;color:#ffffff;width: 87px;height: 40px;text-align: center;margin-top: 0.1rem">
                第4步
            </p>
            <p class="small_right"></p>
        </div>
        <div class="small_word">
            核实通过后，进行全员公示，通过公示期后发放捐助金。

        </div>
    </div>
</div>

<!--大额求助-->

<router-link tag="div" to="/eleAgree" class="apply_sub">
    <img :src="imgApplyapply_sub">
    <!-- <img src="img/apply_sub.png" alt=""> -->
</router-link>
	</div>
</template>
<script type="text/javascript">
	export default{
		data(){
			return{
				imgApplyReturn:'./static/return.png',
				imgApplyapply_sub:'./static/apply_sub.png'
			}
		},
		methods:{
			showSmall:function(){
				Big_amount.style.display = 'none';
				Small_amount.style.display = 'block';
				changeBtn1.style.background = '#d0011b';
				changeBtn1.style.color = 'white';
				changeBtn2.style.background = 'white';
				changeBtn2.style.color = '#d0011b';
			},
			showBig:function(){
				
				Big_amount.style.display = 'block';
				Small_amount.style.display = 'none';
				changeBtn2.style.background = '#d0011b';
				changeBtn2.style.color = 'white';
				changeBtn1.style.background = 'white';
				changeBtn1.style.color = '#d0011b';

			}
		}
	}
</script>
<style type="text/css" scoped>
	.btn_active{
		background:#d0011b;color: white;
		
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
.apply_content {
  width: 100%;
  background: #fafafa;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.3);
  padding-top: 1.48rem;
}
.apply_title {
  width: 90%;
  height: 1.6rem;
  margin: 0 auto;
  font-family: PingFangSC-Medium;
  font-size: 1.12rem;
  color: #333333;
}
.apply_word1 {
  width: 13.8rem;
  height: 17.5rem;
  margin: 0.88rem auto 0 auto;
  font-family: PingFangSC-Regular;
  font-size: 0.96rem;
  color: #333333;
  word-wrap: break-word;
}
.apply_word1 > p {
  margin-bottom: 1.6rem;
}
.apply_seek {
  width: 100%;
  height: 3.2rem;
  background: #f8f0f1;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.3);
  padding-top: 1.32rem;
}
.apply_seek > div {
  background: #ffffff;
  border: 1px solid #d0011b;
  border-radius: 0.2rem;
  width: 13.8rem;
  height: 1.68rem;
  margin: 0 auto;
}
.apply_seek > div > p {
  float: left;
  width: 6.88rem;
  height: 1.72rem;
  text-align: center;
  line-height: 1.72rem;
  font-family: PingFangSC-Regular;
  font-size: 0.96rem;
  color: #d0011b;
}
.apply_one,
.apply_two {
  width: 13.8rem;
  background: #fafafa;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.3);
  border-radius: 2px;
  margin: 0.64rem auto;
}
.small_word {
  width: 12.44rem;
  margin: 0 auto;
  font-family: PingFangSC-Regular;
  font-size: 0.96rem;
  color: #333333;
  letter-spacing: 0;
  line-height: 1.6rem;
  text-align: justify;
  overflow: hidden;
}
.small_title {
  background: #f84646;
  border-radius: 2px 2px 0 0;
  width: 13.8rem;
  height: 2rem;
}
.small_title > p {
  float: left;
  margin: 0.9rem auto;
}
.small_left {
  width: 1.88rem;
  height: 0.16rem;
  background: white;
}
.small_right {
  width: 1.88rem;
  height: 0.16rem;
  background: white;
}
.apply_sub {
  width: 13.8rem;
  margin: 3.2rem auto;
}
.apply_sub > img {
  max-width: 100%;
}

</style>