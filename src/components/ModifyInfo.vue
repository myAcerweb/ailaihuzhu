<template>
	<div id="modifyInfo">
		<div class="pub_header">
		    <div onclick="window.history.go(-1)"  class="pub_back">
		        <a >
		            <img :src="imgModifyInforeturn">
		            <!-- <img src="img/return.png"> -->
		        </a>
		        <span>返回</span>
		    </div>

		    <span>修改被保障人信息</span>
		</div>
		<div class="guarantee_content">
		    <ul class="gua_list">
		        <li>
		            <a href="javascript:">
		                <p style="text-align:left;">被保障人</p>
		                <p style="text-align: right;">张玉云</p>
		            </a>
		        </li>
		        <li>
                <a href="javascript:">
                    <p style="width: 30%;text-align:left;">关系</p>
                    <input type="text" placeholder="输入与被保障人关系" class="sfz">
                </a>
            </li>
		        <li>
		            <a href="javascript:">
		                <p style="width: 30%;text-align:left;">身份证</p>
		                <input type="text" placeholder="输入被保障人身份证号" class="sfz">
		            </a>
		        </li>
		    </ul>
		</div>
		<div class="gu_foot">请核对身份证，填写正确的姓名与身份证号</div>
		<router-link tag="div" to="/myplan" class="gu_sub">
		    <img :src="imgModifyInfopreservation">
		    <!-- <img src="img/preservation.png" alt=""> -->
		</router-link>
	</div>
</template>
<script type="text/javascript">
	export default{
		data(){
			return{
				imgModifyInfopreservation:'./static/preservation.png',
				imgModifyInfojt:'./static/jt.png',
				imgModifyInforeturn:'./static/return.png'
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
.guarantee_content {
  width: 100%;
  height: 10.68rem;
  padding-bottom: 1rem;
  background: #fafafa;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.3);
}
.gua_list {
  width: 95%;
  margin: 0 0 0 0.8rem;
}
.gua_list > li {
  width: 100%;
  height: 3.52rem;
  line-height: 3.52rem;
  border-bottom: 1px solid gainsboro;
}
.gua_list > li > a {
  width: 100%;
  height: 3.52rem;
}
.gua_list > li > a > p {
  width: 48%;
  float: left;
  font-family: PingFangSC-Regular;
  font-size: 0.96rem;
  color: #333333;
}
.sfz {
  width: 70%;
  height: 0.96rem;
  color: #666666;
  font-size: 0.96rem;
}
.gu_foot {
  width: 13.8rem;
  height: 1rem;
  text-align: center;
  margin: 1.2rem auto 2.4rem auto;
  font-family: PingFangSC-Regular;
  font-size: 0.72rem;
  color: #666666;
}
.gu_sub {
  width: 13.8rem;
  margin: 0 auto;
}
.gu_sub > img {
  max-width: 100%;
}

</style>