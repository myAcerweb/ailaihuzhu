<template>
	<div id="myplan">
		
		<div class="t_tit">
    <p onclick="window.history.go(-1)">
    
    <img :src="imgMyplanreturn" alt="">
    返回</p>
    我的互助计划
</div>
<div class="content">
    <ul class="H_list">
        <li class="marginTop dai">
            <div class="tit">
                <div class="left">
                    <p>张玉云</p>
                    <p>中青年抗癌计划</p>
                </div>
                <div class="right">
                    <!-- <img src="./img/r1.png" alt=""> -->
                </div>
            </div>
            <div class="shi plan_alert">
              <span></span>待完善信息（请于 6 天内补填身份证号，逾期将自动退出）
            </div>
            <p class="money">￥<span> 9.00</span></p>
            <div class="btn">
                <router-link tag="button" to="/modifyInfo">完善信息</router-link>&nbsp;&nbsp;<router-link tag="button" to="/cheer">充值</router-link>
            </div>
        </li>
        <li class="marginTop wan">
            <div class="tit">
                <div class="left">
                    <p>张玉云</p>
                    <p>中青年抗癌计划</p>
                </div>
                <div class="right">
                    <!-- <img src="./img/r1.png" alt=""> -->
                </div>
            </div>
            <div class="shi dai"><span></span>已加入 39 天，等待期剩余 142 天</div>
            <p class="money">￥<span> 30.00</span></p>
            <div class="btn">
                <router-link tag="button" to="/cheer">充值</router-link>
            </div>
        </li>
    </ul>
    <ul class="J_list">
        <router-link tag="li" to="/mutual">
        <img :src="imgMyplanjia1" alt="">
        为家人加入计划</router-link>
        <router-link tag="li" to="/mutual">
        <img :src="imgMyplanjia1" alt="">
        为亲朋加入计划</router-link>
        <router-link tag="li" to="/mutual">
        <img :src="imgMyplanjia1" alt="">
        为陌生人加入计划</router-link>
        <router-link tag="li" to="/invitation">
        <img :src="imgMyplanyao1" alt="">
        邀请好友加入</router-link>
    </ul>
</div>
	</div>
</template>

<script type="text/javascript">
	export default{
		data(){
			return{
				imgMyplanreturn:'./static/return.png',
				imgMyplanjit:'./static/jit.png',
				imgMyplanjia1:'./static/jia1.png',
				imgMyplanyao1:'./static/yao1.png'

			}
		}
	}
</script>

<style type="text/css" scoped>
  #myplan .content .H_list  .plan_alert{
    color: red;
  }
	.marginTop {
    margin-bottom: 0.6rem;
  /*margin-top: 0.6rem;*/
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
.content {
  background-color: #EDEDF2;
  width: 100%;
  height: auto;
  color: #333333;
  padding-top: 0.6rem;
}
.content .J_list {
  padding-left: 0.6rem;
  padding-top: 0.4rem;
  background: #fafafa;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.3);
}
.content .J_list li {
  font-size: 0.96rem;
  height: 3.16rem;
  line-height: 3.16rem;
  padding-right: 0.6rem;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  border-bottom: 1px solid rgba(151, 151, 151, 0.38);
}
.content .J_list li img {
  vertical-align: middle;
  margin-right: 0.4rem;
  width: 1.2rem;
  height: 1.2rem;
}
.content .J_list li:last-child {
  border: none;
}
.content .H_list {
  padding: 0 0.6rem;
}
.content .H_list .dai .shi span {
  background: url("../../static/tan1.png") no-repeat left center;
  -webkit-background-size: 90%;
  background-size: 90%;
}
.content .H_list .dai .btn {
  text-align: center;
}
.content .H_list .dai .btn button {
  height: 2rem;
  background-image: linear-gradient(-180deg, #e52334 0%, #9f031b 100%);
  border-radius: 8px;
  font-size: 0.96rem;
  color: #ffffff;
  letter-spacing: 1px;
  border: none;
  width: 5rem;
}
.content .H_list .wan .shi span {
  background: url("../../static/dui1.png") no-repeat left center;
  -webkit-background-size: 90%;
  background-size: 90%;
}
.content .H_list .wan .btn {
  text-align: center;
}
.content .H_list .wan .btn button {
  height: 2rem;
  background-image: linear-gradient(-180deg, #e52334 0%, #9f031b 100%);
  border-radius: 8px;
  font-size: 0.96rem;
  color: #ffffff;
  letter-spacing: 1px;
  border: none;
  width: 100%;
}
.content .H_list li {
  padding: 0.8rem 0.6rem;
}
.content .H_list li .tit {
  overflow: hidden;
}
.content .H_list li .tit .left {
  float: left;
  width: 74%;
}
.content .H_list li .tit .left p {
  font-size: 0.96rem;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
}
.content .H_list li .tit .left p:nth-of-type(1) {
  color: #0076ff;
  margin-bottom: 0.24rem;
}
.content .H_list li .tit .right {
  float: right;
}
.content .H_list li .tit .right img {
  width: 3.2rem;
  height: 2.4rem;
}
.content .H_list .shi {
  width: 100%;
  font-size: 0.72rem;
  color: #666666;
  letter-spacing: -0.43px;
  margin: 1.36rem 0 0.84rem;
}
.content .H_list .shi span {
  display: block;
  width: 1.04rem;
  height: 0.92rem;
  float: left;
}
.content .H_list .money {
  font-size: 1.28rem;
  color: #d0011b;
  margin-bottom: 1.2rem;
}

</style>