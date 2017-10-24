<template>
	<div id="InvitationRule">
		<div class="pub_header">
			<div onclick="window.history.go(-1);" class="pub_back">
				<a >
					<img :src="imgInvitationReturn">
					<!-- <img src="img/return.png"> -->
				</a>
				<span>返回</span>
			</div>
			
			<span>特别邀请</span>
		</div>
		<div class="rule">
			规则说明
		</div>
		<div class="rule_content">
			<p>1、每邀请1名新用户成功加入，可获得5元奖励</p>
			<p>2、邀请奖励金额可用于充值计划，不可提现；</p>
			<p>3、被邀请人加入计划时的手机号，或支付账号，或微信账户若与任一曾经加入过计划的会员相同，平台不视其为首次加入计划，不给予邀请人奖励；</p>
			<p>4、若被邀请人关注后取消关注，或者加入计划后又退出该计划，爱来互助将不发放奖励并有权收回已发放的奖励；</p>
			<p>5、若发现骗取奖励行为，爱来互助有权取消、收回奖励金额并取消相关会员的会员资格；</p>
			<p>6、爱来互助保留对此活动的最终解释权。</p>
		</div>
		<router-link tag="div" to="/invitation" class="close_sub">
			<img :src="imgInvitationClose">
			<!-- <img src="img/close_sub.png" alt=""> -->
		</router-link>
	</div>
</template>
<script type="text/javascript">
	export default{
		data(){
			return{
				imgInvitationReturn:'./static/return.png',
				imgInvitationClose:'./static/close_sub.png'
			}
		}
	}
</script>
<style type="text/css">
	.pub_header {
  background: rgba(208, 2, 27, 0.9);
  box-shadow: 0 0 0 0 #b2b2b2;
  width: 100%;
  height: 64px;
  position: relative;
}
.pub_header > span {
  font-family: PingFangSC-Medium;
  font-size: 18px;
  color: #ffffff;
  letter-spacing: -0.43px;
  text-align: center;
  width: 100%;
  display: block;
  line-height: 64px;
}
.pub_back {
  position: absolute;
  left: 8px;
  top: 0;
  width: 55px;
  height: 64px;
}
.pub_back > a {
  display: block;
  width: 13px;
  height: 30px;
  float: left;
  margin-top: 22px;
}
.pub_back > a > img {
  display: block;
  height: auto;
  max-width: 100%;
}
.pub_back > span {
  float: right;
  line-height: 21px;
  font-family: PingFangSC-Regular;
  font-size: 18px;
  color: #ffffff;
  letter-spacing: -0.43px;
  text-align: center;
  margin-top: 22px;
}
.rule {
  width: 100%;
  height: 3.2rem;
  line-height: 3.2rem;
  font-family: PingFangSC-Medium;
  font-size: 1.12rem;
  color: #333333;
  text-align: center;
}
.rule_content {
  width: 12.64rem;
  height: 14.72rem;
  overflow: hidden;
  overflow-y: auto;
  margin: 0 auto;
  background: #fafafa;
  box-shadow: 0 0.04rem 0.08rem 0 rgba(0, 0, 0, 0.3);
  border-radius: 0.08rem;
  word-wrap: break-word;
  font-family: PingFangSC-Regular;
  font-size: 0.96rem;
  color: #333333;
  line-height: 1.6rem;
}
.rule_content > p {
  width: 85%;
  margin: 1rem auto 0 auto;
}
.close_sub {
  width: 13.8rem;
  margin: 1.8rem auto;
}
.close_sub > img {
  max-width: 100%;
}

</style>