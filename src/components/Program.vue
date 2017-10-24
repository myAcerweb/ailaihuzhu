<template>
	<div id="program">
  <div class="pub_header">
    <div onclick="window.history.go(-1);" class="pub_back">
        <a >
            <img src="../assets/img/return.png">
        </a>
        <span>返回</span>
    </div>
    <span>互助计划</span>
</div>
		<div class="H_cont" style="padding:0;">
    <div class="banner ">
        <img src="../assets/img/bann.png" alt="">
        <div class="s_txt" style="display:block;">
            <p>全家抗癌计划</p>
            <p>最高获捐10万元</p>
            <p>一人投入，全家受益</p>
        </div>
    </div>
    <div class="s_ren">
        <div>
            <p>312565</p>
            <p>已加入会员（人）</p>
        </div>
        <div>
            <p>3742</p>
            <p>近3日新增（人）</p>
        </div>
    </div>
    <div class="liao marginTop">
        <h5>了解互助</h5>
        <div class="s_txt">
            <p>你知道吗？</p>
            <p>每天有9000多个家庭因癌致贫</p>
        </div>
        <ul class="yi_list">
            <li>医保</br>报销少</li>
            <li>花费多</br>年积蓄</li>
            <li>家庭收</br>入大减</li>
        </ul>
    </div>
    <div class="liao marginTop guize">
        <h5>互助规则</h5>
        <ul>
            <li><a href="javascript:;">加入条件 <img src="../assets/img/jt.png" alt=""><span>51-65周岁，身体健康</span></a></li>
            <li><a href="javascript:;">事件范围 <img src="../assets/img/jt.png" alt=""><span>肺癌、肚癌等各种癌症</span></a></li>
        </ul>
    </div>
    <div class="liao marginTop baozhang">
        <h5>互助规则</h5>
        <ul>
            <li>
                <p><span>平台可靠</span></p>
                <p>海圈战略投资</p>
            </li>
            <li>
                <p><span>资金安全</span></p>
                <p>资金存管，专款专用</p>
            </li>
            <li>
                <p><span>事件真实</span></p>
                <p>经公估机构专业核实</p>
            </li>
            <li>
                <p><span>流程透明</span></p>
                <p>互助全程公示，全员监督</p>
            </li>
        </ul>
    </div>
    <div class="liao marginTop guize wenti">
        <h5>互助规则</h5>
        <ul>
            <li><a href="javascript:;">若不幸怎么申请互助？</a></li>
            <li><a href="javascript:;">快到65岁了加入后还能的发过火发过火发过火</a></li>
            <li><a href="javascript:;">爱来互助是保险吗？</a></li>
        </ul>
        <div class="zixun ">
            <div>
                <p><img src="../assets/img/dian.png" alt="">  电话咨询</p>
                <p><img src="../assets/img/wei.png" alt="">  微信咨询</p>
            </div>
        </div>
    </div>
    <div class="liao marginTop guize">
        <ul>
            <li><a href="javascript:;">《会员公约》 <img src="../assets/img/jt.png" alt=""></a></li>
            <li><a href="javascript:;">《中老年抗癌计划条款》 <img src="../assets/img/jt.png" alt=""></a></li>
            <li><a href="javascript:;">《健康要求》 <img src="../assets/img/jt.png" alt=""></a></li>
        </ul>
    </div>
    <div class="chak">
        <a href="javascript:;">查看其他互助计划</a>
    </div>
    <div class="s_btn">
        <a href="javascript:;">
            <p>分享转发</p>
            <p>得5元奖励</p>
        </a>
        <router-link to="/inform" tag="p" style="height: 98%;">
        <a href="javascript:;" style="background: #d0011b;">
            <p>立即加入</p>
            <span>（也可以为家人加入）</span>
        </a>
        </router-link>
    </div>

</div>
	</div>
</template>

<script type="text/javascript">
	export default{
    data(){
      return{
        
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
.H_cont {
  background-color: #EDEDF2;
  width: 100%;
  height: auto;
}
.H_cont .banner {
  width: 100%;
  height: 8.44rem;
  position: relative;
}
.H_cont .banner img {
  height: 100%;
  width: 100%;
}
.H_cont .banner .s_txt {
  width: 100%;
  position: absolute;
  left: 0;
  top: 0;
  text-align: center;
  color: #d0011b;
  padding-top: 15%;
}
.H_cont .banner .s_txt p {
  font-size: 0.96rem;
}
.H_cont .banner .s_txt p:nth-of-type(1) {
  font-size: 1.44rem;
  font-weight: 600;
  margin-bottom: 0.44rem;
}
.H_cont .s_ren {
  background: #f84646;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.3);
  height: 2.72rem;
  padding: 1.04rem 0;
}
.H_cont .s_ren div {
  float: left;
  width: 50%;
  color: #ffffff;
  text-align: center;
  border-right: 1px solid #fff;
  box-sizing: border-box;
}
.H_cont .s_ren div p {
  font-size: 0.72rem;
}
.H_cont .s_ren div p:nth-of-type(1) {
  font-size: 1.12rem;
}
.H_cont .s_ren div:nth-of-type(2) {
  border-left: 1px solid #fff;
  border-right: none;
}
.H_cont .liao {
  width: 100%;
}
.H_cont .liao h5 {
  font-size: 1.12rem;
  height: 2.8rem;
  border-bottom: 1px solid rgba(151, 151, 151, 0.38);
  line-height: 2.8rem;
  padding-left: 0.6rem;
  font-weight: 600;
}
.H_cont .liao .s_txt {
  font-size: 0.96rem;
  padding: 0.8rem 0 1.08rem 0.6rem;
  line-height: 1.6rem;
}
.H_cont .liao .yi_list {
  overflow: hidden;
  padding-bottom: 1.12rem;
}
.H_cont .liao .yi_list li {
  height: 2.48rem;
  width: 3.92rem;
  background: #f84646;
  border-radius: 50%;
  float: left;
  font-size: 0.96rem;
  color: #ffffff;
  letter-spacing: -0.57px;
  text-align: center;
  padding: 0.72rem 0;
  margin-left: 5.3%;
}
.H_cont .guize {
  width: 100%;
  overflow: hidden;
}
.H_cont .guize ul {
  width: calc(99.2%);
/*  padding-left: 0.8rem;*/
  overflow: hidden;
}
.H_cont .guize ul li {
  border-bottom: 1px solid rgba(151, 151, 151, 0.38);
}
.H_cont .guize ul li a {
  display: block;
  color: #333;
  height: 3.2rem;
  font-size: 0.96rem;
  line-height: 3.2rem;
}
.H_cont .guize ul li a span {
  font-size: 0.72rem;
  float: right;
}
.H_cont .guize ul li a img {
  float: right;
  margin: 7.5% 9% 0 2%;
  height: 30%;
}
.H_cont .guize ul li:last-child {
  border: none;
}
.H_cont .baozhang ul {
  overflow: hidden;
  padding-bottom: 1.32rem;
}
.H_cont .baozhang ul li {
  float: left;
  width: 50%;
  text-align: center;
}
.H_cont .baozhang ul li p:nth-of-type(1) {
  display: inline-block;
  background: #f84646;
  font-size: 1.12rem;
  height: 2.24rem;
  line-height: 2.24rem;
  color: #fff;
  padding: 0 0.4rem;
  box-shadow: 6px 7px 0 #F9D5D5, -6px -7px 0 #F9D5D5, 6px -7px 0 #F9D5D5, -6px 7px 0 #F9D5D5;
  margin-top: 1.76rem;
}
.H_cont .baozhang ul li p:nth-of-type(2) {
  font-size: 0.72rem;
  margin: 0.48rem auto 0;
  color: #666666;
  letter-spacing: -0.43px;
  width: 85%;
}
.H_cont .wenti li {
  width: 100%;
}
.H_cont .wenti li:last-child {
  border-bottom: 1px solid rgba(151, 151, 151, 0.38) !important;
}
.H_cont .wenti a {
  width: 90%;
  display: block;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.H_cont .wenti .zixun {
  padding: 0.96rem 0 1.04rem;
}
.H_cont .wenti .zixun div {
  width: 100%;
  overflow: hidden;
}
.H_cont .wenti .zixun div p {
  width: 50%;
  float: left;
  font-size: 0.96rem;
  text-align: center;
  height: 2.08rem;
  padding-top: 0.2rem;
  box-sizing: border-box;
}
.H_cont .wenti .zixun div p img {
  height: 1.28rem;
  vertical-align: bottom;
}
.H_cont .wenti .zixun div p:nth-of-type(1) {
  border-right: 1px solid #999999;
}
.H_cont .wenti .zixun div p:nth-of-type(2) {
  border-left: 1px solid #999999;
}
.H_cont .chak {
  width: 100%;
  text-align: center;
  padding: 1.2rem 0 4rem;
}
.H_cont .chak a {
  font-size: 0.72rem;
  color: #0076ff;
  letter-spacing: -0.43px;
}
.H_cont .s_btn {
  height: 3.2rem;
  width: 100%;
  position: fixed;
  bottom: 0;
  right: 0;
  overflow: hidden;
}
.H_cont .s_btn a {
  float: left;
  width: 50%;
  height: 98%;
  color: #fff;
  padding-top: 2%;
}
.H_cont .s_btn a p {
  text-align: center;
  font-size: 0.96rem;
}
.H_cont .s_btn a span {
  font-size: 0.72rem;
}
.H_cont .s_btn a:nth-of-type(1) {
  background: #f6a623;
}
.H_cont .s_btn a:nth-of-type(2) {
  background: #d0011b;
}
.marginTop {
  margin-top: 0.6rem;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.3);
  background: #fff;
}

</style>