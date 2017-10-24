<template>
	<div id="ailai">
		<div class="s_content">
		    <div class="s_banner">
		        <img :src="imgAilaiban" class="s_bg">
		        <!-- <img src="./img/ban.png" alt="" class="s_bg"> -->
		        <div class="s_cot">
		            <div class="toux">
		                <img :src="headimgurl">
		                <!-- <img src="./img/touxiang.png" alt=""> -->
		                <p>{{nickname}}</p>
		                <p class="s_pp"><span>40</span>天互助历程</p>
		            </div>
		            <div class="jinpai">
		                <router-link tag="a" to="/paihang" href="javascript:;"  class="s_as">
		                    <img :src="imgAilaijinpai">
		                    <!-- <img src="./img/jinpai.png" alt=""> -->
		                    <span>爱心榜单</span>
		                    <img :src="imgAilaijiantou" class="s_im">
		                    <!-- <img src="./img/jiantou.png" alt="" class="s_im"> -->
		                </router-link>

		            </div>
		        </div>
		    </div>
		    <div class="huzhu marginTop">
		        <ul>
		            <li>
		                <router-link tag="a" to="/myplan" href="javascript:;">
		                    <img :src="imgAilaijihua">
		                    <!-- <img src="./img/jihua.png" alt=""> -->
		                    <p>我的互助计划</p>
		                </router-link>
		            </li>
		            <li>
		                <router-link tag="a" to="/jilu" href="javascript:;">
		                    <img :src="imgAilaizhurn">
		                    <!-- <img src="./img/zhurn.png" alt=""> -->
		                    <p>查看助人记录</p>
		                </router-link>
		            </li>
		        </ul>
		    </div>
		    <div class="meng marginTop">
		        <div class="new">
		            <img :src="imgAilailaba">
		            <!-- <img src="./img/laba.png" alt=""> -->
		            <marquee scrollamount="3" direction=left style="width:83%">黄八月，报告一个好消息，您参与捐助</marquee>
		        </div>
		        <ul class="m_list">
		            <li>
		                <router-link tag="a" to="/cheer" href="javascript:;">
		                    <img :src="imgAilaichongzhi">
		                    <!-- <img src="./img/chongzhi.png" alt=""> -->
		                    <p>圆梦充值</p>
		                </router-link>
		            </li>
		            <li>
		                <router-link tag="a" to="/invitation" href="javascript:;">
		                    <img :src="imgAilaijiaru">
		                    <!-- <img src="./img/jiaru.png" alt=""> -->
		                    <p>家人加入</p>
		                </router-link>
		            </li>
		            <li>
		                <router-link tag="a" to="/punchClockJoin" href="javascript:;">
		                    <img :src="imgAilaidaka">
		                    <!-- <img src="./img/daka.png" alt=""> -->
		                    <p>早起打卡</p>
		                </router-link>
		            </li>
		        </ul>
		    </div>
		    <div class="shen marginTop">
		        <router-link tag="a" to="/apply" class="a_left" href="javascript:;">
		            <img :src="imgAilaishenqing">
		            <!-- <img src="./img/shenqing.png" alt=""> -->
		            <span>申请互助金</span>
		            <img :src="imgAilaijt" class="s_img">
		            <!-- <img src="./img/jt.png" alt="" class="s_img"> -->
		        </router-link>
		    </div>
		    <div class="baox  marginTop">
		        <ul>
		            <li>
		                <a class="a_left" href="javascript:;">
		                    <img :src="imgAilaibaoxian">
		                    <!-- <img src="./img/baoxian.png" alt=""> -->
		                    <span>保险服务</span>
		                    <img :src="imgAilaijt" class="s_img">
		                    <!-- <img src="./img/jt.png" alt="" class="s_img"> -->
		                    <span class="z_txt">买保险  查看保单</span>
		                </a>
		            </li>
		            <li>
		                <a class="a_left" href="javascript:;">
		                    <img :src="imgAilaijiankang">
		                    <!-- <img src="./img/jiankang.png" alt=""> -->
		                    <span>健康服务</span>
		                    <img :src="imgAilaijt" class="s_img">
		                    <!-- <img src="./img/jt.png" alt="" class="s_img"> -->
		                    <span class="z_txt">体检、癌症筛查等</span>
		                </a>
		            </li>
		            <li>
		                <a class="a_left" href="javascript:;">
		                    <img :src="imgAilaichou">
		                    <!-- <img src="./img/chou.png" alt=""> -->
		                    <span>爱来筹</span>
		                    <img :src="imgAilaijt" class="s_img">
		                    <!-- <img src="./img/jt.png" alt="" class="s_img"> -->
		                    <span class="z_txt z_width">快速发起大病/梦想/农产众筹</span>
		                </a>
		            </li>
		            <li>
		                <a class="a_left" href="javascript:;">
		                    <img :src="imgAilaidingdan">
		                    <!-- <img src="./img/dingdan.png" alt=""> -->
		                    <span>我的订单</span>
		                    <img :src="imgAilaijt" class="s_img">
		                    <!-- <img src="./img/jt.png" alt="" class="s_img"> -->
		                    <!--<span class="z_txt">买保险  查看保单</span>-->
		                </a>
		            </li>
		            <li>
		                <a class="a_left" href="javascript:;">
		                    <img :src="imgAilaidaijin">
		                    <!-- <img src="./img/daijin.png" alt=""> -->
		                    <span>我的代金券</span>
		                    <img :src="imgAilaijt" class="s_img">
		                    <!-- <img src="./img/jt.png" alt="" class="s_img"> -->
		                    <!--<span class="z_txt">买保险  查看保单</span>-->
		                </a>
		            </li>
		        </ul>
		    </div>
		    <div class="baox  marginTop">
		        <ul>
		            <li>
		                <router-link tag="a" to="/knowAilai" class="a_left" href="javascript:;">
		                    <img :src="imgAilailiaojie">
		                    <!-- <img src="./img/liaojie.png" alt=""> -->
		                    <span>了解爱来</span>
		                    <img :src="imgAilaijt" class="s_img">
		                    <!-- <img src="./img/jt.png" alt="" class="s_img"> -->
		                    <!--<span class="z_txt">买保险  查看保单</span>-->
		                </router-link>
		            </li>
		            <li>
		                <router-link tag="a" to="/question" class="a_left" href="javascript:;">
		                    <img :src="imgAilaiwenti">
		                    <!-- <img src="./img/wenti.png" alt=""> -->
		                    <span>常见问题</span>
		                    <img :src="imgAilaijt" class="s_img">
		                    <!-- <img src="./img/jt.png" alt="" class="s_img"> -->
		                    <!--<span class="z_txt">体检、癌症筛查等</span>-->
		                </router-link>
		            </li>
		            <li>
		                <a class="a_left" href="javascript:;">
		                    <img :src="imgAilaishouji">
		                    <!-- <img src="./img/shouji.png" alt=""> -->
		                    <span>手机绑定</span>
		                    <img :src="imgAilaijt" class="s_img">
		                    <!-- <img src="./img/jt.png" alt="" class="s_img"> -->
		                    <span class="z_txt ">139*****4354</span>
		                </a>
		            </li>
		            <li>
		                <a class="a_left" href="javascript:;">
		                    <img :src="imgAilaixiazai">
		                    <!-- <img src="./img/xiazai.png" alt=""> -->
		                    <span>下载APP</span>
		                    <img :src="imgAilaijt" class="s_img">
		                    <!-- <img src="./img/jt.png" alt="" class="s_img"> -->
		                    <!--<span class="z_txt">买保险  查看保单</span>-->
		                </a>
		            </li>
		            <li>
		                <a class="a_left" href="javascript:;">
		                    <img :src="imgAilailianxi">
		                    <!-- <img src="./img/lianxi.png" alt=""> -->
		                    <span>联系客服</span>
		                    <img :src="imgAilaijt" class="s_img">
		                    <!-- <img src="./img/jt.png" alt="" class="s_img"> -->
		                    <span class="z_txt">400 868 1266</span>
		                </a>
		            </li>
		        </ul>
		    </div>
		</div>
	</div>
</template>
<script type="text/javascript">
	export default{
		data(){
			return{
				imgAilaijt:'./static/jt.png',
				imgAilailianxi:'./static/lianxi.png',
				imgAilaixiazai:'./static/xiazai.png',
				imgAilaishouji:'./static/shouji.png',
				imgAilaiwenti:'./static/wenti.png',
				imgAilailiaojie:'./static/liaojie.png',
				imgAilaidaijin:'./static/daijin.png',
				imgAilaidingdan:'./static/dingdan.png',
				imgAilaichou:'./static/chou.png',
				imgAilaijiankang:'./static/jiankang.png',
				imgAilaibaoxian:'./static/baoxian.png',
				imgAilaishenqing:'./static/shenqing.png',
				imgAilaidaka:'./static/daka.png',
				imgAilaijiaru:'./static/jiaru.png',
				imgAilaichongzhi:'./static/chongzhi.png',
				imgAilailaba:'./static/laba.png',
				imgAilaizhurn:'./static/zhurn.png',
				imgAilaijihua:'./static/jihua.png',
				imgAilaijiantou:'./static/jiantou.png',
				imgAilaijinpai:'./static/jinpai.png',
				imgAilaitouxiang:'./static/touxiang.png',
				imgAilaiban:'./static/ban.png'
			}
			
		},
	created(){
			this.headimgurl = localStorage.headimgurl
			this.nickname = localStorage.nickname
			this.$http({
				method:'POST',
		        url:'https://www.ailaihuzhu.com/i/',
		        data:{
		          cmd:'alhz_askhelp_acquit',
		          token:localStorage.token,
		          ahpid:'1'
		        },
		        headers: {
		            'Content-Type': 'application/json'
		        }
			}).then(function(res){
				console.log('我的爱来首页接口',res);

			}).catch(function(err){
				console.log(err);
			})
		},
		activated(){
			this.$router.push('ailai');
		}
	}
</script>
<style type="text/css" scoped>
.s_as>img{
	float: left;
}
.s_as>span{
	float: left;
	margin: 0 4%;
}
.toux img{
	float: left;
}
.toux p{
	text-align: left;
	clear: both;
}
.a_left{
	text-align: left;
}
	.s_content {
  background-color: #EDEDF3;
}
.s_banner {
  height: 8.44rem;
  width: 100%;
  position: relative;
}
.s_banner .s_bg {
  width: 100%;
  height: 100%;
}
.s_banner .s_cot {
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
}
.s_banner .s_cot .toux {
  padding: 1.28rem 0 0 1rem;
  font-size: 0.96rem;
  color: #ffffff;
  letter-spacing: -0.58px;
}
.s_banner .s_cot .toux img {
  border: 2px solid #ffffff;
  width: 3.2rem;
  height: 3.2rem;
  border-radius: 100%;
}
.s_banner .s_cot .jinpai {
      position: absolute;
    height: 2rem;
    background: #ffebee;
    border-radius: 1rem 0 0 1rem;
    width: 7rem;
    top: 2.68rem;
    right: 0;
    padding: 0 0.4rem;
    font-size: 1.12rem;
    letter-spacing: -0.68px;
    line-height: 1.92rem;
}
.s_banner .s_cot .jinpai img {
  height: 62%;
  vertical-align: top;
  margin-top: 4.3%;
}
.s_banner .s_cot .jinpai span {
  color: #d0011b;
}
.s_banner .s_cot .jinpai .s_im {
  height: 45%;
  margin-top: 6%;
}
.s_banner .s_cot .jinpai .s_as {
  display: block;
  width: 100%;
  height: 100%;
}
.marginTop {
  margin-top: 0.6rem;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.3);
  background: #fff;
}
.huzhu ul {
  overflow: hidden;
  background-color: #fff;
}
.huzhu ul a {
  display: block;
}
.huzhu li {
  float: left;
  width: 50%;
  box-sizing: border-box;
  text-align: center;
  padding: 0.6rem 0;
}
.huzhu li img {
  width: 2.24rem;
  height: 2.24rem;
}
.huzhu li p {
  font-size: 0.96rem;
}
.huzhu li:nth-of-type(2n-1) {
  border-right: 1px solid rgba(151, 151, 151, 0.38);
}
.meng {
  background: #fafafa;
}
.meng .new {
  height: 2.6rem;
  border-bottom: 1px solid rgba(151, 151, 151, 0.38);
  font-size: 0.96rem;
  color: #90696e;
  letter-spacing: -0.58px;
  white-space: nowrap;
  line-height: 2.6rem;
}
.meng .new img {
  height: 1.24rem;
  vertical-align: top;
  margin-top: 0.68rem;
  padding: 0 0.4rem 0 0.6rem;
}
.meng .m_list {
  width: 100%;
  overflow: hidden;
}
.meng .m_list li {
  width: 33.333%;
  float: left;
  padding: 1rem 0 1.24rem 0;
}
.meng .m_list li a {
  display: block;
  text-align: center;
  width: 100%;
  font-size: 0.96rem;
}
.meng .m_list li a img {
  width: 2.24rem;
}
.shen {
  height: 3.2rem;
  font-size: 0.96rem;
  line-height: 3.2rem;
  padding-left: 0.68rem;
}
.shen a {
  display: block;
  height: 100%;
  width: 100% ;
  color: #333;
}
.shen img {
  vertical-align: top;
  height: 1.04rem;
  margin-top: 7.4%;
}
.shen .s_img {
  float: right;
  margin-right: 17px;
}
.baox {
  background: #fff;
  width: 100%;
}
.baox ul {
  padding-left: 0.72rem;
}
.baox ul li {
  height: 3.2rem;
  font-size: 0.96rem;
  line-height: 3.2rem;
}
.baox ul li a {
  display: block;
  height: 100%;
  width: 100% ;
  color: #333;
  border-bottom: 1px solid rgba(151, 151, 151, 0.38);
}
.baox ul li img {
  vertical-align: top;
  height: 1.04rem;
  margin-top: 7.9%;
}
.baox ul li .s_img,
.baox ul li .z_txt {
  float: right;
}
.baox ul li .s_img {
  margin-right: 0.68rem;
  margin-left: 0.32rem;
}
.baox ul li .z_txt {
  font-size: 0.72rem;
  color: #666666;
  letter-spacing: -0.43px;
}
.baox ul li .z_width {
  width: 4.56rem;
  display: block;
  line-height: 1rem;
  margin-top: 0.72rem;
}

</style>