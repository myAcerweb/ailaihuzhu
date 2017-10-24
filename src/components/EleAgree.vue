<template>
	<div id="eleAgree">
		<div class="pub_header">
				    <div onclick="window.history.go(-1);" class="pub_back">
				        <a >
				            <img :src="imgEleAgreereturn">
				            <!-- <img src="img/return.png"> -->
				        </a>
				        <span>返回</span>
				    </div>

				    <span>求助材料提交方式</span>
		</div>
		<div class="elect_agr">
        <span>电子协议确认</span>
        <div class="elect_agr_text">
            <span>1、爱来互助是上海爱来公司（以下简称“本公司”）为了帮助实现人民群众“病有所医、病有所养”而设立的网络互助平台。基于“人人助我、我助人人”、“健康我帮人、有难众帮我”的公益理念，互助金的用途聚焦于重大疾病和意外伤残的治疗与康复以及意外身故后其家庭的救助。</span>
            <span>互助平台包括但不限于爱来互助网站、APP和微信公众号。</span>
            <span>本公约是爱来互助平台和会员（以下或简称“您”）共同遵守的约定。</span>
            <span>您加入爱来互助平台前请务必认真阅读本公约的全部内容。</span>
            <span>本公约一经您确认并同意接受，即视为您已完全同意并接受本公约约束，承诺遵守本公约约定，届时您不应以未阅读本公约的内容主张本公约无效；</span>
        </div>
        <div class="elect_agr_text">
            <span>2、如会员发现任何机构或个人存在违反本公约约定的行为，请及时通知爱来互助平台；
</span>
        </div>
        <div class="elect_agr_text">
            <span>3、加入互助计划的本质，是向互助计划中随机发生的符合互助条件的会员单向的赠予行为，不能预期获得确定的风险保障回报。</span>
        </div>
    </div>
    <router-link tag="div" to="/youji" class="elect_agr_btn">
        <img :src="imgEleAgreebtn">
        <!-- <img src="img/agree.png" alt=""/> -->
    </router-link>
	</div>
</template>
<script type="text/javascript">
	export default{
		data(){
			return{

				imgEleAgreebtn:'./static/agree.png',
				imgEleAgreereturn:'./static/return.png'
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
	.elect_agr {
  width: 94%;
  padding: 0 3% 1rem;
  background: #fafafa;
  box-shadow: 0 0.04rem 0.08rem 0 rgba(0, 0, 0, 0.3);
  min-height: 12rem;
}
.elect_agr > span {
  font-family: PingFangSC-Medium;
  font-size: 1.12rem;
  color: #333333;
  letter-spacing: 0;
  text-align: left;
  display: block;
  padding-top: 1.48rem;
  width: 6.72rem;
  height: 1.6rem;
  font-weight: bold;
}
.elect_agr_text > span {
  display: block;
  font-family: PingFangSC-Regular;
  font-size: 0.96rem;
  color: #333333;
  letter-spacing: 0;
  line-height: 1.6rem;
  text-align: justify;
  margin-top: 1.48rem;
}
.elect_agr_btn {
  width: 94%;
  padding: 2rem 3%;
}
.elect_agr_btn > img {
  width: 100%;
}

</style>