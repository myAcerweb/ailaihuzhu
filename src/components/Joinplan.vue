<template>
	<div id="joinplan">
		<div class="pub_header">
    <div class="pub_back">
        <a >
            <img :src="imgJoinplanreturn">
        </a>
        <span>返回</span>
    </div>

    <span>互助计划</span>
</div>
<div class="plan_header">
    <img :src="imgJoinplanbanner" alt="" style="max-width: 100%;position: absolute;top: 0;left:0;z-index: -1">
<div class="plan_head">
第1位
</div>
</div>
<div class="plan_content">
    <ul class="plan_list">
        <li>
            <a href="javascript:;">
                <p class="plan_name">姓名</p>
                <p class="play_n">为谁加入，请输入TA姓名</p>
            </a>
        </li>
        <li>
            <a href="javascript:;">
                <p class="plan_g">关系</p>
                <p class="plan_z">TA是我的</p>
                <p class="plan_img">
                <img :src="imgJoinplanjt" alt="" style="max-width: 100%">
                </p>
            </a>
        </li>
        <li>
            <a href="javascript:;">
                <p class="plan_s">身份证号</p>
                <input type="text" placeholder="输入身份证号 （选填）" class="plan_input">
            </a>
        </li>
        <li>
            <a href="javascript:;">
                <p class="plan_c">充值</p>
                <p class="plan_z">选择充值金额</p>
                <p class="plan_img">
                    <img :src="imgJoinplanjt" alt="" style="max-width: 100%">
                </p>
            </a>
        </li>
        <li>
            <a href="javascript:;">
                <p class="plan_plus">
                    <img :src="imgJoinplanplus" alt="" style="max-width: 100%">
                </p>
                <p class="plan_w">为更多家人加入计划</p>
            </a>
        </li>
    </ul>
</div>
<div class="plan_sub">
    <img :src="imgJoinplanplansub" alt="" style="max-width: 100%">
</div>
<div class="plan_foot">
    我同意《健康要求》《会员公约》
    及《计划条款》
</div>
	</div>
</template>

<script type="text/javascript">
	export default{
		data(){
			return{
				imgJoinplanreturn:'./static/return.png',
				imgJoinplanbanner:'./static/banner.png',
				imgJoinplanjt:'./static/jt.png',
				imgJoinplanplus:'./static/plus.png',
				imgJoinplanplansub:'./static/plan_sub.png'
			}
		}
	}
</script>
<style type="text/css">
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
.plan_header {
  width: 100%;
  height: 5rem;
  position: relative;
}
.plan_head {
  width: 100%;
  height: 1.6rem;
  margin: 0 auto;
  font-size: 1.12rem;
  color: #ffffff;
  text-align: center;
  line-height: 6.8rem;
}
.plan_content {
  background: #fafafa;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.3);
  width: 15rem;
  height: 16.8rem;
  margin-top: 1.2rem;
  font-size: 0.96rem;
}
.plan_list {
  width: 14.4rem;
  margin-left: 0.6rem;
}
.plan_list > li {
  width: 100%;
  height: 3.32rem;
  border-bottom: 1px solid rgba(0, 0, 0, 0.3);
  line-height: 3.36rem;
}
.plan_list > li > a {
  width: 100%;
  display: inline-block;
}
.plan_list > li > a > p {
  float: left;
}
.plan_name,
.plan_g,
.plan_c {
  width: 3.2rem;
  font-family: PingFangSC-Regular;
  color: #333333;
}
.play_n {
  width: 11rem;
}
.plan_z {
  width: 9.6rem;
  text-align: right;
  padding-right: 0.4rem;
}
.plan_img {
  width: 5%;
  height: 0.8rem;
  line-height: 3.84rem;
}
.plan_s {
  width: 4.8rem;
  color: #333333;
}
.plan_input {
  width: 9.4rem;
  font-size: 0.88rem;
}
.plan_plus {
  width: 1.2rem;
  height: 1.2rem;
  margin-left: 2.28rem;
  line-height: 3.84rem;
}
.plan_w {
  width: 9rem;
  color: #d2192f;
}
.plan_sub {
  width: 13.8rem;
  margin: 2.32rem auto 0 auto;
}
.plan_foot {
  width: 12.16rem;
  height: 2rem;
  word-wrap: break-word;
  font-family: PingFangSC-Regular;
  font-size: 0.72rem;
  color: #666666;
  text-align: center;
  margin: 1.2rem auto 0 auto;
}

</style>