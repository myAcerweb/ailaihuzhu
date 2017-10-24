<template>
	<div id="product">
		<div class="pub_header">
		    <div onclick="window.history.go(-1);" class="pub_back">
		        <a >
		        	<img :src="imgProductreturn">
		            <!-- <img src="img/return.png"> -->
		        </a>
		        <span>返回</span>
		    </div>

		    <span>常见问题</span>
		</div>
		<div class="Insurance_content">
		    <ul class="Insurance_nav">
		        <li>全部</li>
		        <li>成人</li>
		        <li>少儿</li>
		        <li>老人</li>
		        <li>健康</li>
		        <li>意外</li>
		    </ul>
		    <!--全部-->
		    <div class="In_whole">
		        <div class="whole_title">安联臻爱百万医疗险</div>
		        <div class="whole_content">
		            最高报销600万<br>
		            用药全报销<br>
		            不限社保<br>
		        </div>
		        <div class="whole_j">¥ 0.4元起/天</div>
		    </div>
		</div>
	</div>
</template>
<script type="text/javascript">
	export default{
		data(){
			return{
				imgProductreturn:'./static/return.png'
			}
		}
	}
</script>
<style scoped>
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
.Insurance_nav {
  width: 22%;
  height: 24.08rem;
  float: left;
  border-right: 1px solid grey;
}
.Insurance_nav > li {
  width: 100%;
  height: 3.2rem;
  font-family: PingFangSC-Regular;
  font-size: 0.96rem;
  line-height: 3.2rem;
  text-align: center;
  color: #333333;
}
.In_whole {
  width: 77%;
  float: left;
}
.whole_title {
  width: 10.52rem;
  height: 1.6rem;
  font-family: PingFangSC-Medium;
  font-size: 1.12rem;
  color: #333333;
  margin: 0.6rem auto 0 auto;
  text-align: center;
}
.whole_content {
  background: #f9ede2;
  width: 10.52rem;
  height: 6rem;
  margin: 0 auto;
  font-size: 0.96rem;
  color: #333333;
}
.whole_j {
  width: 10.52rem;
  text-align: right;
  margin: 0 auto;
  font-size: 0.96rem;
  color: #d0011b;
}

</style>
