<template>
	<div id="huzhuplan">
    <div class="huzhuplan_header">
        <span>为所有需要帮助的人加入互助计划</span>
    </div>
    <div class="huzhu_main">
        <img :src="imgHuzhuplan1">
        <!-- <img src="img/huzhuplanmain.png" alt=""/> -->
    </div>
    <div class="huzhu_master">
        <div class="huzhu_master_1">
            <div>
                <span>
                    给全家
                </span>
            </div>
            <div>
                <p>全家防癌互助计划</p>
                <span class="huzhu_master_1_span1">一份投入，保障全家，防癌抗癌，美满无忧。</span>
                <span class="huzhu_master_1_span2">最高10万元健康保障。</span>
            </div>

        </div>
        <div class="huzhu_master_1">
            <div style="background:#54c7fc;">
                <span>
                    给父母
                </span>
            </div>
            <div>
                <p>中老年大病互助计划
                    空巢老人鹊桥计划</p>
                <span class="huzhu_master_1_span1">一份心意，免除儿女的后顾之忧，让绝症不再可怕。</span>
                <span class="huzhu_master_1_span2">最高10万元健康保障。</span>
            </div>

        </div>
        <div class="huzhu_master_1">
            <div style="background:#ffcd00;">
                <span>
                    给爱人
                </span>
            </div>
            <div>
                <p>中青年大病互助计划
                    不孕不育领养互助计划</p>
                <span class="huzhu_master_1_span1">保障意外绝症，夫妻一起抵御各种癌症的侵袭，永浴爱河。</span>
                <span class="huzhu_master_1_span2">最高30万元健康保障。</span>
            </div>

        </div>
        <div class="huzhu_master_2">
            <div style="background:#ff9600;">
                <span>
                    给孩子
                </span>
            </div>
            <div>
                <p>少儿阳光关爱计划
                    儿童先天疾病互助计划</p>
                <span class="huzhu_master_1_span1">保障白血病、癌症等50种大病，让祖国的花骨朵肆意盛开。</span>
                <span class="huzhu_master_1_span2">最高20万元健康保障。</span>
            </div>

        </div>
        <div class="huzhu_master_1">
            <div style="background:#fe2851;">
                <span>
                    给自己
                </span>
            </div>
            <div>
                <p>中青年抗癌互助计划
                    亚健康旅居修养计划</p>
                <span class="huzhu_master_1_span1">保障意外绝症，帮你一起抵御各种癌症的侵袭。</span>
                <span class="huzhu_master_1_span2">最高30万元健康保障。</span>
            </div>

        </div>
        <div class="huzhu_master_1">
            <div style="background:#0076ff;">
                <span>
                    给亲友
                </span>
            </div>
            <div>
                <p>大病健康互助计划</p>
                <span class="huzhu_master_1_span1">保障白血病、癌症等50种大病，让亲情友情延续终生。</span>
                <span class="huzhu_master_1_span2">最高30万元健康保障。</span>
            </div>

        </div>
        <div class="huzhu_master_3">
            <div style="background:#fe3824;">
                <span>
                    给陌生人
                </span>
            </div>
            <div>
                <p>爱心帮扶计划</p>
                <span class="huzhu_master_1_span1">虽然我们可能不熟，但是TA的事迹和精神却感染了，</span>
                <span class="huzhu_master_1_span2">假如援助一点爱心可以使TA重新站起来，那我们为何不做呢？</span>
                <span class="huzhu_master_1_span3">创业失败、发明经费不济、贫困求学、乡村支教、乡村扶贫......</span>
            </div>

        </div>
    </div>
</div>
</template>
<script type="text/javascript">
	export default{
		data(){
			return{
				imgHuzhuplan1:'./static/huzhuplanmain.png'
			}
		}
	}
</script>
<style type="text/css">
	.huzhuplan_header {
  background: rgba(208, 2, 27, 0.9);
  box-shadow: 0 0 0 0 #b2b2b2;
  width: 15rem;
  height: 2.56rem;
}
.huzhuplan_header > span {
  font-family: PingFangSC-Medium;
  font-size: 0.72rem;
  color: #ffffff;
  letter-spacing: -0.0172rem;
  display: block;
  width: 100%;
  line-height: 2.56rem;
  text-align: center;
}
.huzhu_main {
  background: #d8d8d8;
  width: 15rem;
  height: 8.44rem;
}
.huzhu_main > img {
  display: block;
  height: auto;
  max-height: 100%;
}
.huzhu_master_1 {
  overflow: hidden;
  margin-top: 0.6rem;
}
.huzhu_master_1 > div {
  float: left;
}
.huzhu_master_1 > div:nth-child(1) {
  background: #44db5e;
  width: 2rem;
  height: 9.2rem;
  position: relative;
  margin-right: 0.48rem;
}
.huzhu_master_1 > div:nth-child(1) > span {
  font-family: PingFangSC-Semibold;
  font-size: 1.12rem;
  color: #ffffff;
  letter-spacing: 0.0452rem;
  line-height: 1.2rem;
  text-align: left;
  width: 1.08rem;
  height: 3.6rem;
  display: block;
  position: absolute;
  left: 0.44rem;
  top: 2.8rem;
}
.huzhu_master_1 > div:nth-child(2) {
  width: 12.52rem;
  height: 9.2rem;
}
.huzhu_master_1 > div:nth-child(2) > p {
  font-family: PingFangSC-Medium;
  font-size: 1.12rem;
  color: #333333;
  letter-spacing: 0;
  text-align: left;
  margin: 0.72rem 0;
}
.huzhu_master_1_span1 {
  font-family: PingFangSC-Regular;
  font-size: 0.96rem;
  color: #333333;
  letter-spacing: 0;
  text-align: left;
  display: block;
}
.huzhu_master_1_span2 {
  text-decoration: none;
  font-family: PingFangSC-Regular;
  font-size: 0.96rem;
  color: #333333;
  letter-spacing: 0;
  text-align: left;
  display: block;
  margin-top: 0.8rem;
}
.huzhu_master_1_span3 {
  text-decoration: none;
  font-family: PingFangSC-Regular;
  font-size: 0.96rem;
  color: #333333;
  letter-spacing: 0;
  text-align: left;
  display: block;
  margin-top: 0.8rem;
}
.huzhu_master_2 {
  overflow: hidden;
  margin-top: 0.6rem;
}
.huzhu_master_2 > div {
  float: left;
}
.huzhu_master_2 > div:nth-child(1) {
  background: #44db5e;
  width: 2rem;
  height: 12.12rem;
  position: relative;
  margin-right: 0.48rem;
}
.huzhu_master_2 > div:nth-child(1) > span {
  font-family: PingFangSC-Semibold;
  font-size: 1.12rem;
  color: #ffffff;
  letter-spacing: 0.0452rem;
  line-height: 1.2rem;
  text-align: left;
  width: 1.08rem;
  height: 3.6rem;
  display: block;
  position: absolute;
  left: 0.44rem;
  top: 4.28rem;
}
.huzhu_master_2 > div:nth-child(2) {
  width: 12.52rem;
  height: 12.12rem;
}
.huzhu_master_2 > div:nth-child(2) > p {
  font-family: PingFangSC-Medium;
  font-size: 1.12rem;
  color: #333333;
  letter-spacing: 0;
  text-align: left;
  margin: 0.72rem 0;
}
.huzhu_master_3 {
  overflow: hidden;
  margin-top: 0.6rem;
}
.huzhu_master_3 > div {
  float: left;
}
.huzhu_master_3 > div:nth-child(1) {
  background: #44db5e;
  width: 2rem;
  height: 17.6rem;
  position: relative;
  margin-right: 0.48rem;
}
.huzhu_master_3 > div:nth-child(1) > span {
  font-family: PingFangSC-Semibold;
  font-size: 1.12rem;
  color: #ffffff;
  letter-spacing: 0.0452rem;
  line-height: 1.2rem;
  text-align: left;
  width: 1.08rem;
  height: 3.6rem;
  display: block;
  position: absolute;
  left: 0.44rem;
  top: 5.36rem;
}
.huzhu_master_3 > div:nth-child(2) {
  width: 12.52rem;
  height: 17.6rem;
}
.huzhu_master_3 > div:nth-child(2) > p {
  font-family: PingFangSC-Medium;
  font-size: 1.12rem;
  color: #333333;
  letter-spacing: 0;
  text-align: left;
  margin: 0.72rem 0;
}

</style>