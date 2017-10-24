<template>
	<div id="cheer">
        <div class="t_tit">
            <p onclick="window.history.go(-1)">
            
            <img :src="imgCheerReturn" alt="">
            返回</p>
            为爱加油
        </div>
        <div class="cheer_change">
            <span id="cheer_change_span1" @click="cheer1" class="cheer_change_active">为账户充值</span>
            <span id="cheer_change_span2" @click="cheer2" >为计划充值</span>
        </div>
    <!-- 为账户充值-->
    <div  id="cheer_contain" class="cheer_contain">

        <div class="cheer_main1">
            <div class="cheer_main1_text">
                <p>
                    多少随意，量力而行
                </p>
                <p>
                    每一分都代表了您满满的爱心
                </p>
            </div>
            <div class="cheer_main1_sum">
                <div>
                    <div>
                        <img @click="reduce1" :src="imgCheerreduce">
                        <!-- <img src="img/recharge_reduce.png" alt=""/> -->
                    </div>

                    <span>{{num1}}元</span>
                    <div>
                        <img @click="plus1" :src="imgCheerplus">
                        <!-- <img src="img/recharge_plus.png" alt=""/> -->
                    </div>

                </div>
                <div>
                    <div>
                        <img @click="reduce2" :src="imgCheerreduce">
                        <!-- <img src="img/recharge_reduce.png" alt=""/> -->
                    </div>

                    <span>{{num2}}元</span>
                    <div>
                        <img @click="plus2" :src="imgCheerplus">
                        <!-- <img src="img/recharge_plus.png" alt=""/> -->
                    </div>

                </div>
                <div>
                    <div>
                        <img @click="reduce3" :src="imgCheerreduce">
                        <!-- <img src="img/recharge_reduce.png" alt=""/> -->
                    </div>

                    <span>{{num3}}元</span>
                    <div>
                        <img @click="plus3" :src="imgCheerplus">
                        <!-- <img src="img/recharge_plus.png" alt=""/> -->
                    </div>

                </div>
            </div>
            <div class="cheer_main1_money">
                <div>
                    <img :src="imgCheerCh_1">
                    <!-- <img src="img/ch_1.png" /> -->
                </div>
                <span>奖励金额</span>
                <span>可用{{num4}}元</span>
                <span>￥{{num4}}</span>
            </div>
            <div class="cheer_main1_detail">
                <div class="cheer_main1_list">
                    <p>实到账：</p>
                    <span>￥{{sum}}</span>
                </div>
                <div class="cheer_main1_line"></div>
                <div class="cheer_main1_list">
                    <p>奖励金：</p>
                    <span>￥{{num4}}</span>
                </div>
                <div class="cheer_main1_line"></div>
                <div class="cheer_main1_list">
                    <p class="cheer_main1_paytext">待支付：</p>
                    <span class="cheer_main1_pay">￥{{sum}}</span>
                </div>
                <div class="cheer_main1_line"></div>
            </div>
            <div class="cheer_main1_btn">
                <button>马上支付</button>
            </div>
        </div>
    </div>
    <!-- 为计划充值-->
    <div style="display:none"  id="cheer_contain1" class="cheer_contain1">
        <div class="cheer_contain1_main">
            <div class="cheer_contain1_list">
                <div>
                    <div>
                        <p>郑成功</p>
                        <span>中青年抗癌计划</span>
                    </div>
                    <div>
                        <img :src="imgCheerr1">
                        <!-- <img src="img/r1.png" /> -->
                    </div>
                </div>
                <div>
                    <div>
                        <img :src="imgCheerCh_1">
                        <!-- <img src="img/ch_1.png" /> -->
                    </div>
                    <div>
                        已加入31天，等待149天（建议充够150元，以免除余额不足影响求助）
                    </div>
                </div>
                <div>
                    <div>￥99.0</div>
                    <div>
                        <button>充值</button>
                    </div>
                </div>
            </div>
            <div class="cheer_contain1_list cheer_contain1_list1">
                <div>
                    <div>
                        <p>郑和</p>
                        <span>老年抗癌计划</span>
                    </div>
                    <div>
                        <img :src="imgCheerr1">
                        <!-- <img src="img/r1.png" /> -->
                    </div>
                </div>
                <div>
                    <div>
                        <img :src="imgCheerCh_1">
                        <!-- <img src="img/ch_1.png" /> -->
                    </div>
                    <div>
                        已加入49天，等待131天（建议充够150元，以免除余额不足影响求助）
                    </div>
                </div>
                <div>
                    <div>￥150.00</div>
                    <div>
                        <button class="cheer_contain1_btn">费用已缴</button>
                    </div>
                </div>
            </div>
        </div>
        <div class="cheer_contain1_else">
            <img :src="imgCheerplus">
            <!-- <img src="img/recharge_plus.png" /> -->
            <span>帮助其他人</span>
        </div>
    </div> 
  </div>
</template>
<script type="text/javascript">
  import { wxpay,GETDREAM,DONATIONSPAY } from '../jiekou/api.js' 
	export default {
		data(){
			return{
          imgCheerCh_1:'./static/ch_1.png',
          imgCheerplus:'./static/recharge_plus.png',
          imgCheerreduce:'./static/recharge_reduce.png',
          imgCheerr1:'./static/r1.png',
          imgCheerReturn:'./static/return.png',
				  num1:'1',
          num2:'10',
          num3:'100',
          num4:'0',
          sum:'111'
			}
		},
    created () {
      // GETDREAM().then((res) => {
      //   console.log(res)
      //   if (res.data &&　res.data.err === 0 ) {
      //    this.records = res.data.records
      //    this.no = this.records[0].no
      //    this.money = this.records[0].money
      //   }
      // })
    },
		methods:{
      cheer1(){
        cheer_contain.style.display="block";
        cheer_contain1.style.display="none";
        cheer_change_span1.className="cheer_change_active";
        cheer_change_span2.className="";
      },
      cheer2(){
        cheer_contain.style.display="none";
        cheer_contain1.style.display="block";
        cheer_change_span2.className="cheer_change_active";
        cheer_change_span1  .className="";
      },
      plus1(){
        this.num1=parseInt(this.num1)+1;
        this.sum=parseInt(this.num1)+parseInt(this.num2)+parseInt(this.num3)-parseInt(this.num4);
      },
      plus2(){
        this.num2=parseInt(this.num2)+10;
        this.sum=parseInt(this.num1)+parseInt(this.num2)+parseInt(this.num3)-parseInt(this.num4);
      },
      plus3(){
        this.num3=parseInt(this.num3)+100;
        this.sum=parseInt(this.num1)+parseInt(this.num2)+parseInt(this.num3)-parseInt(this.num4);
      },
      reduce1(){
        if(parseInt(this.num1)>0){
          this.num1=parseInt(this.num1)-1;
          this.sum=parseInt(this.num1)+parseInt(this.num2)+parseInt(this.num3)-parseInt(this.num4);
        }
        
      },
      reduce2(){
        if(parseInt(this.num2)>0){
          this.num2=parseInt(this.num2)-10;
          this.sum=parseInt(this.num1)+parseInt(this.num2)+parseInt(this.num3)-parseInt(this.num4);
        }
      },
      reduce3(){
        if(parseInt(this.num3)>0){
          this.num3=parseInt(this.num3)-100;
          this.sum=parseInt(this.num1)+parseInt(this.num2)+parseInt(this.num3)-parseInt(this.num4);
        }
      }

			// block:function(){
				
			// 	charge.style.display='block';
			// },
			// hiden:function(){
			// 	charge.style.display='none';
			// },
			// charge1(){
			// 	// this.imgCh_2='./static/ch_2.png';
			// 	if(this.imgCh_1=='./static/ch_1.png'){
			// 		this.imgCh_1='./static/ch_2.png';
			// 	}else{
			// 		this.imgCh_1='./static/ch_1.png';
			// 	}
				
			// },
			// charge2(){
			// 	// this.imgCh_2='./static/ch_1.png';
			// 	// this.imgCh_1='./static/ch_2.png';
			// 	if(this.imgCh_2=='./static/ch_1.png'){
			// 		this.imgCh_2='./static/ch_2.png';
			// 	}else{
			// 		this.imgCh_2='./static/ch_1.png';
			// 	}
   //    },
   //    addPlan (no, money) {
   //      if (no && money) {
   //        this.no = no
   //        this.money = money
   //      }
   //    },
   //    payNow () {
   //      if (!this.money) return false
   //      DONATIONSPAY(this.no, this.money).then((res) => {
   //        if (res.data.err == 0 && res.data) {
   //          console.log(123)
   //          wxpay(res)
   //        }
   //      }) 
      // }
		}
	}
</script>
<style type="text/css" scoped>
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

	 .cheer_contain {
  width: 92%;
  padding: 0 4%;
}
.cheer_change {
  width: 92%;
  height: 1.68rem;
  padding: 4%;
}
.cheer_change > span:nth-child(1) {
  float: left;
  width: 49%;
  height: 100%;
  border: 0.04rem solid #d0011b;
  border-bottom-left-radius: 0.2rem;
  border-top-left-radius: 0.2rem;
  font-family: PingFangSC-Regular;
  font-size: 0.96rem;
  letter-spacing: -0.0232rem;
  text-align: center;
  line-height: 1.68rem;
  color: #d0011b;
}
.cheer_change > span:nth-child(2) {
  float: left;
  width: 49%;
  height: 100%;
  border: 0.04rem solid #d0011b;
  border-bottom-right-radius: 0.2rem;
  border-top-right-radius: 0.2rem;
  font-family: PingFangSC-Regular;
  font-size: 0.96rem;
  letter-spacing: -0.0232rem;
  text-align: center;
  line-height: 1.68rem;
  color: #d0011b;
}


#cheer .cheer_change>.cheer_change_active {
  background: #d0011b;
  color: #ffffff;
}
.cheer_main1_text {
  width: 100%;
  height: 2rem;
  margin-top: 0.6rem;
}
.cheer_main1_text > p {
  margin: 0;
  font-family: PingFangSC-Regular;
  font-size: 0.72rem;
  line-height: 1rem;
  color: #666666;
  letter-spacing: -0.0172rem;
  text-align: center;
}
.cheer_main1_sum {
  width: 100%;
  height: 10rem;
}
.cheer_main1_sum > div > input {
  border: 0.04rem solid #666666;
  border-radius: 0.08rem;
  width: 50%;
  height: 1.84rem;
  float: left;
  font-family: PingFangSC-Regular;
  font-size: 0.96rem;
  color: #999999;
  letter-spacing: -0.0232rem;
  text-align: center;
}
.cheer_main1_sum > div > span {
  border: 0.04rem solid #666666;
  border-radius: 0.08rem;
  width: 50%;
  height: 1.84rem;
  line-height: 1.84rem;
  float: left;
  font-family: PingFangSC-Regular;
  font-size: 0.96rem;
  color: #999999;
  letter-spacing: -0.0232rem;
  text-align: center;
}
.cheer_main1_sum > div {
  width: 100%;
  overflow: hidden;
  margin-top: 1.2rem;
}
.cheer_main1_sum > div > div:nth-child(1) {
  width: 24%;
  float: left;
  height: 1.84rem;
}
.cheer_main1_sum > div > div:nth-child(1) > img {
  width: 1.2rem;
  display: block;
  margin: 0.32rem auto;
}
.cheer_main1_sum > div > div:nth-child(3) {
  width: 24%;
  float: right;
  height: 1.84rem;
}
.cheer_main1_sum > div > div:nth-child(3) > img {
  width: 1.2rem;
  display: block;
  margin: 0.32rem auto;
}
.cheer_main1_money {
  width: 100%;
  height: 1.6rem;
  padding: 1rem 0;
}
.cheer_main1_money > div {
  float: left;
  width: 1.2rem;
  height: 1.2rem;
}
.cheer_main1_money > div >img{
  width: 80%;
  display: block;
  margin-top: 10%;
}
.cheer_main1_money > span {
  font-family: PingFangSC-Regular;
  font-size: 0.72rem;
  color: #666666;
  letter-spacing: -0.0172rem;
  text-align: left;
  display: block;
  line-height: 1.2rem;
}
.cheer_main1_money > span:nth-child(2) {
  float: left;
}
.cheer_main1_money > span:nth-child(3) {
  float: left;
  margin-left: 0.8rem;
}
.cheer_main1_money > span:nth-child(4) {
  float: right;
}
.cheer_main1_list {
  overflow: hidden;
  width: 100%;
  height: 1.32rem;
  margin: 0.96rem 0;
}
.cheer_main1_list > p {
  float: left;
  margin: 0;
  line-height: 1.32rem;
  font-family: PingFangSC-Regular;
  font-size: 0.96rem;
  color: #333333;
  letter-spacing: -0.0232rem;
  text-align: left;
}
.cheer_main1_list > span {
  float: right;
  font-family: PingFangSC-Regular;
  font-size: 0.96rem;
  color: #666666;
  letter-spacing: -0.0232rem;
  text-align: left;
}
.cheer_main1_line {
  opacity: 0.59;
  border-top: 0.08rem solid rgba(151, 151, 151, 0.38);
  width: 100%;
}
.cheer_main1_list > .cheer_main1_pay {
  font-family: PingFangSC-Medium;
  font-size: 0.96rem;
  color: #d0021b;
  letter-spacing: -0.0232rem;
  text-align: left;
  font-weight: bold;
}
.cheer_main1_paytext {
  color: #333333;
  font-weight: bold;
}
.cheer_main1_btn {
  width: 100%;
  padding: 0.8rem 0;
}
.cheer_main1_btn > button {
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
.cheer_contain1 {
  width: 100%;
  background: #efeff4;
  padding-top: 4%;
}
.cheer_contain1_main {
  width: 92%;
  margin: 0 4%;
  background: #efeff4;
  padding-bottom: 0.6rem;
}
.cheer_contain1_list {
  width: 92%;
  min-height: 4rem;
  padding: 4%;
  background: #fff;
}
.cheer_contain1_list > div:nth-child(1) {
  width: 100%;
  overflow: hidden;
  height: 3.2rem;
}
.cheer_contain1_list > div:nth-child(1) > div:nth-child(1) {
  width: 65%;
  float: left;
  height: 100%;
}
.cheer_contain1_list > div:nth-child(1) > div:nth-child(1) > p {
  margin: 0.28rem 0;
  font-family: PingFangSC-Medium;
  font-size: 1.12rem;
  color: #333333;
  letter-spacing: 0;
  text-align: left;
}
.cheer_contain1_list > div:nth-child(1) > div:nth-child(1) > span {
  font-family: PingFangSC-Regular;
  font-size: 0.96rem;
  color: #333333;
  letter-spacing: -0.0232rem;
  line-height: 0.96rem;
  text-align: left;
}
.cheer_contain1_list > div:nth-child(1) > div:nth-child(2) {
  width: 35%;
  float: right;
  height: 100%;
}
.cheer_contain1_list > div:nth-child(1) > div:nth-child(2) > img {
  height: 100%;
}
.cheer_contain1_list > div:nth-child(2) {
  overflow: hidden;
  margin-top: 0.8rem;
}
.cheer_contain1_list > div:nth-child(2) > div:nth-child(1) {
  float: left;
  width: 10%;
}
.cheer_contain1_list > div:nth-child(2) > div:nth-child(1)>img {
  
  width: 80%;
}
.cheer_contain1_list > div:nth-child(2) > div:nth-child(2) {
  float: right;
  width: 90%;
  font-family: PingFangSC-Regular;
  font-size: 0.72rem;
  color: #666666;
  letter-spacing: -0.0172rem;
  text-align: left;
}
.cheer_contain1_list > div:nth-child(3) {
  width: 100%;
  overflow: hidden;
  margin-top: 0.8rem;
}
.cheer_contain1_list > div:nth-child(3) > div:nth-child(1) {
  font-family: PingFangSC-Medium;
  font-size: 1.28rem;
  color: #d0011b;
  letter-spacing: 0;
  text-align: left;
  width: 50%;
  float: left;
  line-height: 2.04rem;
}
.cheer_contain1_list > div:nth-child(3) > div:nth-child(2) {
  width: 50%;
  float: right;
}
.cheer_contain1_list > div:nth-child(3) > div:nth-child(2) > button {
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
.cheer_contain1_list1 {
  margin-top: 0.8rem;
}
.cheer_contain1_list > div:nth-child(3) > div:nth-child(2) > .cheer_contain1_btn {
  width: 100%;
  border-radius: 0.32rem;
  height: 2.04rem;
  font-family: PingFangSC-Semibold;
  font-size: 0.96rem;
  color: #d0011b;
  background: #fff;
  border: 0.04rem solid #d0021b;
  letter-spacing: 0.04rem;
  text-align: center;
}
.cheer_contain1_else {
  background: #fafafa;
  box-shadow: 0 0.04rem 0.08rem 0 rgba(0, 0, 0, 0.3);
  border-radius: 0.08rem;
  width: 100%;
  height: 3.2rem;
  position: relative;
}
.cheer_contain1_else > img {
  width: 1.2rem;
  position: absolute;
  top: 1rem;
  left: 4rem;
}
.cheer_contain1_else > span {
  font-family: PingFangSC-Regular;
  font-size: 0.96rem;
  color: #333333;
  letter-spacing: 0.04rem;
  text-align: center;
  width: 5rem;
  line-height: 3.2rem;
  display: block;
  margin-left: 5.6rem;
}

</style>