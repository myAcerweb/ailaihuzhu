<template>
	<div id="knowAilai">
		<div class="pub_header">
		    <router-link tag="div" to="/ailai" class="pub_back">
		        <a href="javascript;">
		            <img :src="imgKAreturn">
		            <!-- <img src="img/return.png"> -->
		        </a>
		        <span>返回</span>
		    </router-link>

		    <span>了解爱来</span>
		</div>
		<div class="stand_content">
		    <div class="stand_img">
		        <img :src="imgKAunderstand_img">
		        <!-- <img src="img/understand_img.png" alt=""> -->
		    </div>
		    <div class="stand_x">2756899人的信赖之选</div>
		    <div class="stand_s">视频版</div>
		</div>
		<h1 class="stand_j">绝症不可怕，费用大家捐</h1>
		<div class="stand_g">最高获捐30万元=100万人X每人0.3元</div>
		<div class="stand_foot">
		    <img :src="imgKAunderstand_f">
		    <!-- <img src="img/understand_f.png" alt=""> -->
		</div>
	</div>
</template>
<script >
	export default{
		data(){
			return{
				imgKAreturn:'./static/return.png',
				imgKAunderstand_f:'./static/understand_f.png',
				imgKAunderstand_img:'./static/understand_img.png'
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
.stand_content {
  width: 100%;
  height: 15.72rem;
  background: url('../../static/understand.png');
  background-size: 100%;
}
.stand_img {
  width: 12.4rem;
  margin: 0 auto;
  padding-top: 1.6rem;
}
.stand_img > img,
.stand_foot > img {
  max-width: 100%;
}
.stand_x {
  width: 9.76rem;
  height: 1.32rem;
  font-size: 0.96rem;
  color: #ffffff;
  margin: 0 auto;
}
.stand_s {
  width: 4.28rem;
  height: 1.6rem;
  margin: 0.36rem auto 0 auto;
  border: 0.04rem solid #ffffff;
  border-radius: 0.08rem;
  text-align: center;
  line-height: 1.6rem;
  font-size: 0.8rem;
  color: #ffffff;
}
.stand_j {
  width: 11.88rem;
  height: 1.36rem;
  font-size: 1.08rem;
  color: #d0011b;
  margin: 1.36rem auto 0 auto;
  text-align: center;
}
.stand_g {
  width: 11.92rem;
  height: 1rem;
  font-size: 0.68rem;
  color: #d0011b;
  margin: 0.24rem auto 0 auto;
  font-family: PingFangSC-Semibold;
}
.stand_foot {
  width: 100%;
}

</style>