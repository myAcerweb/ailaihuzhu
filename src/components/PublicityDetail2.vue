<template>
	<div id="publicityDetail">
		<div class="pub_gr" >
    
    		<div class="pub_header" >
    		    <div onclick="window.history.go(-1);" class="pub_back">
    		        <a >
    		            <img :src="imgPublicityDetailreturn">
    		            <!-- <img src="img/return.png"> -->
    		        </a>
    		        <span>返回</span>
    		    </div>

    		    <span>个人公示</span>
    		</div>
		    <div class="pub_gr_text">
		        为保护受助者个人隐私，公示结束后将隐藏个人信息
		    </div>

		    <div class="pub_gr_user">
		        <div>
		            <img :src="imgPublicityDetailpub_1">
		            <!-- <img src="img/pub_1.png" alt=""/> -->

		        </div>
		        <div>
		            <h3>赵峰</h3>
		            <span>男 86岁</span>
		        </div>
		        <div>
		            对事件有疑问？
		        </div>
		    </div>

		    <div class="pub_gr_plan">
		        <div class="pub_gr_plan_list">
		            <span>互助计划</span>
		            <span>老年抗癌计划</span>
		        </div>
		        <div class="pub_gr_line"></div>
		        <div class="pub_gr_plan_list">
		            <span>加入日期</span>
		            <span>2016-5-23</span>
		        </div>
		        <div class="pub_gr_line"></div>
		        <div class="pub_gr_plan_list">
		            <span>生效日期</span>
		            <span>2017-6-17</span>
		        </div>
		        <div class="pub_gr_line"></div>
		        <div class="pub_gr_plan_list">
		            <span>参与人数</span>
		            <span>1572755</span>
		        </div>
		        <div class="pub_gr_line"></div>
		        <div class="pub_gr_plan_list">
		            <span>所需互助金</span>
		            <span>300000.00元</span>
		        </div>
		        <div class="pub_gr_line"></div>
		        <div class="pub_gr_plan_list">
		            <span>公示日期</span>
		            <span>2017-08-12-2017-08-21</span>
		        </div>
		    </div>

		    <div class="pub_gr_events">
		        <div>事件概况</div>
		        <div class="pub_gr_line"></div>
		        <div>
		            会员赵峰2017年5月因无诱因呕吐伴头疼，于5月11号到汇源县医院做CT检查，医生建议去上级医院进行确诊和治疗。会员赵峰于5月15日到山西省人民医院确诊为脑胶质瘤，于当天入院治疗。
		        </div>
		    </div>

		    <div class="pub_gr_detail">
		        <div>调查过程</div>
		        <div class="pub_gr_line"></div>
		        <div class="pub_gr_detail_list">
		            <span></span>
		            <span>
		                目前很多内容运营撰写得最多的可能就是这类型软文，配合活动运营，一起提高活动的影响力，推动用户的参与积极性。活动宣传型软文通常有一个发布进度。
		            </span>
		        </div>
		        <div class="pub_gr_detail_list">
		            <span></span>
		            <span>
		                在活动开始前，软文通常会先行。
		            </span>
		        </div>
		        <div class="pub_gr_detail_list">
		            <span></span>
		            <span>
		                活动宣传软文通常较为直白，告诉用户本次活动的具体情况是怎样的，它与产品之间的关联是怎样的，用户该如何参与，产品有何种规则，诸如此类。
		            </span>
		        </div>
		    </div>

		    <div class="pub_gr_detail1">
		        <div>
		            互助详情
		        </div>
		        <div class="pub_gr_line"></div>
		        <div class="pub_gr_detail_list">
		            <span></span>
		            <span>
		                根据《中老年抗癌计划条款》3.2，会员邹辉可申请互助金30万元；
		            </span>
		        </div>
		        <div class="pub_gr_detail_list">
		            <span></span>
		            <span>
		                若有会员在公示期有依据地提出异议，平台将根据异议情况要求互助申请人解释或者提交补充材料，并再次进行审定。
		            </span>
		        </div>
		    </div>

		    <div class="pub_gr_mater">
		        <div>
		            相关材料
		        </div>
		        <div class="pub_gr_line"></div>
		        <div class="pub_gr_mater_text">
		            选择捐助类型，查验材料
		        </div>
		        <router-link tag="div" to="/publicityDetailSm2" class="pub_img_change">
		            <img :src="imgPublicityDetailpub_small_change">
		            <!-- <img src="img/pub_small_change.png" alt=""/> -->
		        </router-link>
		        <router-link tag="div" to="/publicityDetailBg2" class="pub_img_change">
		            <img :src="imgPublicityDetailpub_big_change">
		            <!-- <img src="img/pub_big_change.png" alt=""/> -->
		        </router-link>
		    </div>
		</div>
	</div>
</template>
<script type="text/javascript">
	export default{
		data(){
			return{
				imgPublicityDetailpub_big_change:'./static/pub_big_change.png',
				imgPublicityDetailpub_small_change:'./static/pub_small_change.png',
				imgPublicityDetailreturn:'./static/return.png',
				imgPublicityDetailpub_1:'./static/3.jpg'
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
	.pub_gr {
  background: #efeff4;
  width: 100%;
}
.pub_gr_text {
  font-family: PingFangSC-Regular;
  font-size: 0.72rem;
  color: #666666;
  letter-spacing: -0.0172rem;
  text-align: left;
  width: 13.8rem;
  padding: 0.8rem 0.6rem;
}
.pub_gr_user {
  background: #fafafa;
  box-shadow: 0 0.04rem 0.08rem 0 rgba(0, 0, 0, 0.3);
  width: 100%;
  height: 4.8rem;
  margin-bottom: 0.6rem;
}
.pub_gr_user > div:nth-child(1) {
  width: 3.6rem;
  height: 3.6rem;
  margin: 0.6rem;
  float: left;
}
.pub_gr_user > div:nth-child(1) > img {
  width: 100%;
}
.pub_gr_user > div:nth-child(2) {
  float: left;
  width: 3.8rem;
  height: 100%;
}
.pub_gr_user > div:nth-child(2) > h3 {
  margin: 0.72rem 0;
  font-family: PingFangSC-Medium;
  font-size: 1.12rem;
  color: #333333;
  letter-spacing: -0.0272rem;
  text-align: left;
}
.pub_gr_user > div:nth-child(2) > span {
  font-family: PingFangSC-Regular;
  font-size: 0.96rem;
  color: #333333;
  letter-spacing: 0;
  text-align: left;
}
.pub_gr_user > div:nth-child(3) {
  float: left;
  width: 6.4rem;
  height: 100%;
  font-family: PingFangSC-Regular;
  font-size: 0.72rem;
  color: #d2192f;
  letter-spacing: -0.0172rem;
  text-align: left;
  margin-top: 1.04rem;
}
.pub_gr_plan {
  width: 100%;
  /*padding: 0 0.6rem;*/
  background: #fafafa;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.3);
  margin-bottom: 0.6rem;
}
.pub_gr_plan_list {
  padding: 1.16rem 0;
  width: 94%;
  overflow: hidden;
  margin: 0 3%;
}
.pub_gr_plan_list > span:nth-child(1) {
  float: left;
  font-family: PingFangSC-Regular;
  font-size: 0.96rem;
  color: #333333;
  letter-spacing: -0.0232rem;
  line-height: 0.96rem;
  text-align: left;
}
.pub_gr_plan_list > span:nth-child(2) {
  float: right;
  font-family: PingFangSC-Regular;
  font-size: 0.96rem;
  color: #333333;
  letter-spacing: -0.0232rem;
  line-height: 0.96rem;
  text-align: left;
}
.pub_gr_line {
  border-top: 0.08rem solid rgba(151, 151, 151, 0.38);
  width: 100%;
}
.pub_gr_events {
  width: 100%;
  /*padding: 0.6rem;*/
  padding: 0.6rem 0;
  background: #fafafa;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.3);
  margin-bottom: 0.6rem;
}
.pub_gr_events > div:nth-child(1) {
  font-family: PingFangSC-Medium;
  font-size: 1.12rem;
  color: #333333;
  letter-spacing: -0.0272rem;
  text-align: left;
  width: 94%;
  margin: 0 3% 0.6rem;
  /*margin-bottom: 0.6rem;*/
  
}
.pub_gr_events > div:nth-child(3) {
  font-family: PingFangSC-Regular;
  font-size: 0.96rem;
  color: #333333;
  letter-spacing: -0.0232rem;
  line-height: 1.6rem;
  text-align: justify;
  width: 94%;
  margin: 0.6rem 3% 0.6rem;
}
.pub_gr_detail {
  width: 100%;
  padding: 0.6rem 0;
  background: #fafafa;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.3);
  margin-bottom: 0.6rem;
}
.pub_gr_detail > div:nth-child(1) {
  font-family: PingFangSC-Medium;
  font-size: 1.12rem;
  color: #333333;
  letter-spacing: -0.0272rem;
  text-align: left;
  width: 94%;
  margin: 0 3% 0.6rem;
}
.pub_gr_detail_list {
  overflow: hidden;
  width: 94%;
  margin: 0 3% 0.6rem;
}
.pub_gr_detail_list > span:nth-child(1) {
  float: left;
  width: 0.6rem;
  height: 0.6rem;
  margin-right: 0.6rem;
  border-radius: 50%;
  background: #000;
  margin-top: 1.2rem;
}
.pub_gr_detail_list > span:nth-child(2) {
  font-family: PingFangSC-Regular;
  font-size: 0.96rem;
  color: #333333;
  letter-spacing: -0.0232rem;
  line-height: 1.6rem;
  text-align: justify;
  margin-top: 0.6rem;
  float: right;
  width: 12.6rem;
}
.pub_gr_detail1 {
  width: 100%;
  padding: 0.6rem 0;
  background: #fafafa;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.3);
  margin-bottom: 0.6rem;
}
.pub_gr_detail1 > div:nth-child(1) {
  font-family: PingFangSC-Medium;
  font-size: 1.12rem;
  color: #333333;
  letter-spacing: -0.0272rem;
  text-align: left;
   width: 94%;
  margin: 0 3% 0.6rem;
}
.pub_gr_mater {
  width: 100%;
  padding: 0.6rem 0;
  background: #fafafa;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.3);
  margin-bottom: 0.6rem;
}
.pub_gr_mater > div:nth-child(1) {
  font-family: PingFangSC-Medium;
  font-size: 1.12rem;
  color: #333333;
  letter-spacing: -0.0272rem;
  text-align: left;
  width: 94%;
  margin: 0 3%;
  margin-bottom: 0.6rem;
}
.pub_gr_mater_text {
  font-family: PingFangSC-Regular;
  font-size: 0.72rem;
  color: #666666;
  letter-spacing: -0.0172rem;
  text-align: center;
  margin: 1.2rem 0;
}
.pub_img_change {
  width: 100%;
  margin: 0.8rem 0;

}
.pub_img_change > img {
  width: 100%;
}

</style>