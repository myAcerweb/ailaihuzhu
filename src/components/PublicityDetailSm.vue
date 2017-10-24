<template>
	<div id="publicityDetailSm">
		  <!-- 弹出框 -->
      <div id="pub_alert1" class="pub_alert1">
          <div class="pub_alert1_content">
              <div class="pub_alert1_content_header">
                  <span>小额求助提示</span>
                  <img :src="imgPDSX" @click="hidden_header1" >
                  <!-- <img src="img/recharge_hide.png" /> -->
              </div>
              <div class="pub_alert1_content_1">
                  爱来互助平台接受全体会员监督，但为了不影响受助会员的日常生活，平台在共识内容中隐去了会员的联系方式和住址，若需要了解更多或对公示有异议，可通过微信公众号“爱来互助”及客服热线400-686-1266与爱来互助平台取得联系，爱来互助平台将协助会员了解相关情况。
              </div>
          </div>
      </div>
    		
			<div class="pub_gr" >
			<div class="pub_header">
			    <div onclick="window.history.go(-1);" class="pub_back">
			        <a >
			            <img :src="imgPDSreturn">
			            <!-- <img src="img/return.png"> -->
			        </a>
			        <span>返回</span>
			    </div>

			    <span>小额公示</span>
			</div>
		    <div class="pub_gr_text">
		        为保护受助者个人隐私，公示结束后将隐藏个人信息
		    </div>
		    <div class="pub_gr_user">
		        <div>
		            <img :src="imgPDSpub_1">
		            <!-- <img src="img/pub_1.png" alt=""/> -->

		        </div>
		        <div>
		            <h3>余晓明</h3>
		            <span>男 34岁</span>
		        </div>
		        <div>
		            对事件有疑问？
		        </div>
		    </div>
		    <div class="pub_gr_plan">
		        <div class="pub_gr_plan_list">
		            <span>互助计划</span>
		            <span>中年抗癌计划</span>
		        </div>
		        <div class="pub_gr_line"></div>
		        <div class="pub_gr_plan_list">
		            <span>加入日期</span>
		            <span>2016-07-19</span>
		        </div>
		        <div class="pub_gr_line"></div>
		        <div class="pub_gr_plan_list">
		            <span>生效日期</span>
		            <span>2017-01-15</span>
		        </div>
		        <div class="pub_gr_line"></div>
		        <div class="pub_gr_plan_list">
		            <span>参与人数</span>
		            <span>1572755</span>
		        </div>
		        <div class="pub_gr_line"></div>
		        <div class="pub_gr_plan_list">
		            <span>所需互助金</span>
		            <span>250000.00元</span>
		        </div>
		        <div class="pub_gr_line"></div>
		        <div class="pub_gr_plan_list">
		            <span>公示日期</span>
		            <span>2017.06.27-2017.07.03</span>
		        </div>
		    </div>
		    <div class="pub_gr_events">
		        <div>事件概况</div>
		        <div class="pub_gr_line"></div>
		        <div>
		            热点话题有可预测型，也有突发型。可预测型话题比如每到六月份的高考话题、毕业季话题、每到大片上映前的电影热议话题等等，基本上每年周而复始，事情的发生前后相关话题总是能够重复引起用户的关注。
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
		                本次实际互助金额为25万元，平台已于2017年8月24日讲全部互助金划拨到会员指定账户。
		            </span>
		        </div>
		        <div class="pub_gr_detail_list">
		            <span></span>
		            <span>
		                为保护受助人隐私，划款公示3日后将不再公示其照片以及身份信息。
		            </span>
		        </div>
		    </div>
		    <div class="pub_gr_mater">
		        <div>
		            相关材料
		        </div>
		        <div class="pub_gr_line"></div>
		        <div class="pub_gr_img_mater">
		            <div>
		                <img :src="imgPDSpub_1">
		                <!-- <img src="img/pub_1.png" alt=""/> -->
		                <span>加入凭证</span>
		            </div>
		            <div >
		                <img :src="imgPDSpub_1">
		                <!-- <img src="img/pub_1.png" alt=""/> -->
		                <span>申请表1</span>
		            </div>
		            <div>
		                <img :src="imgPDSpub_1">
		                <!-- <img src="img/pub_1.png" alt=""/> -->
		                <span>申请表2</span>
		            </div>
		            <div>
		                <img :src="imgPDSpub_1">
		                <!-- <img src="img/pub_1.png" alt=""/> -->
		                <span>申请表3</span>
		            </div>
		            <div>
		                <img :src="imgPDSpub_1">
		                <!-- <img src="img/pub_1.png" alt=""/> -->
		                <span>申请表4</span>
		            </div>
		            <div>
		                <img :src="imgPDSpub_1">
		                <!-- <img src="img/pub_1.png" alt=""/> -->
		                <span>申请表5</span>
		            </div>
		            <div>
		                <img :src="imgPDSpub_1">
		                <!-- <img src="img/pub_1.png" alt=""/> -->
		                <span>申请表1</span>
		            </div>
		            <div>
		                <img :src="imgPDSpub_1">
		                <!-- <img src="img/pub_1.png" alt=""/> -->
		                <span>申请表1</span>
		            </div>
		            <div>
		                <img :src="imgPDSpub_1">
		                <!-- <img src="img/pub_1.png" alt=""/> -->
		                <span>申请表1</span>
		            </div>
		            <div>
		                <img :src="imgPDSpub_1">
		                <!-- <img src="img/pub_1.png" alt=""/> -->
		                <span>申请表1</span>
		            </div>
		            <div>
		                <img :src="imgPDSpub_1">
		                <!-- <img src="img/pub_1.png" alt=""/> -->
		                <span>申请表1</span>
		            </div>
		            <div>
		                <img :src="imgPDSpub_1">
		                <!-- <img src="img/pub_1.png" alt=""/> -->
		                <span>申请表1</span>
		            </div>
		        </div>
            <div class="pub_juankuan">
                <img :src="imgPDSjukuan">
                <!-- <img src="img/pub_jukuan.png" alt=""/> -->
            </div>
		    </div>
		</div>
	</div>
</template>
<script type="text/javascript">
	export default{
		data(){
			return{
				imgPDSpub_1:'./static/pub_1.png',
				imgPDSreturn:'./static/return.png',
        imgPDSjukuan:'./static/pub_jukuan.png',
        imgPDSX:'./static/recharge_hide.png'
			}
		},
    methods:{
      hidden_header1(){
        pub_alert1.style.display="none";
      }
    }
	}
</script>
<style type="text/css" scoped>
  .pub_alert1 {
  width: 100%;
  background: rgba(0, 0, 0, 0.75);
  height: 22.32rem;
  padding-top: 3.56rem;
  position: fixed;
  left: 0;
  top: 0;
}
.pub_alert1_content {
  background: #d0011b;
  background: #ffffff;
  box-shadow: 0 0 0.96rem 0 rgba(0, 0, 0, 0.22), 0 24px 24px 0 rgba(0, 0, 0, 0.3);
  border-radius: 0.08rem;
  width: 92%;
  margin: 0 4% 0;
  height: 20rem;
}
.pub_alert1_content_header {
  background: #d0011b;
  border-radius: 0.08rem;
  width: 100%;
  height: 3.12rem;
  position: relative;
}
.pub_alert1_content_header > span {
  font-family: PingFangSC-Semibold;
  font-size: 0.96rem;
  color: #ffffff;
  letter-spacing: -0.0232rem;
  text-align: center;
  display: block;
  width: 100%;
  line-height: 3.12rem;
}
.pub_alert1_content_header > img {
  width: 1.2rem;
  position: absolute;
  left: 0.48rem;
  top: 0.4rem;
}
.pub_alert1_content_1 {
  width: 94%;
  padding: 3%;
  font-family: PingFangSC-Regular;
  font-size: 0.96rem;
  color: #333333;
  letter-spacing: 0;
  line-height: 1.6rem;
  text-align: justify;
}

  .pub_juankuan {
  width: 94%;
  margin: 1.2rem 3%;
}
.pub_juankuan > img {
  width: 100%;
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
  margin: 0 3%;
  overflow: hidden;
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
  margin: 0 3%;
  margin-bottom: 0.6rem;
}
.pub_gr_events > div:nth-child(3) {
  font-family: PingFangSC-Regular;
  font-size: 0.96rem;
  color: #333333;
  letter-spacing: -0.0232rem;
  line-height: 1.6rem;
  text-align: justify;
  width: 94%;
  margin: 0 3%;
  margin-top: 0.6rem;
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
  margin: 0 3%;
  margin-bottom: 0.6rem;
}
.pub_gr_detail_list {
  overflow: hidden;
  width: 94%;
  margin: 0 3%;
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
  margin:0 3%;
  margin-bottom: 0.6rem;
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
  margin:0 3%;
  margin-bottom: 0.6rem;
}
.pub_gr_img_mater {
  overflow: hidden;
  width: 94%;
  margin:0 3%;
}
.pub_gr_img_mater > div {
  float: left;
  width: 48%;
  margin-top: 0.8rem;
}
.pub_gr_img_mater > div > img {
  width: 100%;
}
.pub_gr_img_mater > div > span {
  width: 100%;
  display: block;
  text-align: center;
  margin-top: 0.6rem;
  font-family:PingFangSC-Regular;
  font-size:0.96rem;
  color:#333333;
  letter-spacing:-0.0232rem;
  text-align:center;
}
.pub_gr_img_mater > div:nth-of-type(even) {
  margin-left: 4%;
}

</style>