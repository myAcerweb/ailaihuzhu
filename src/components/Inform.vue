<template>
	<div id="inform">
		<div>
<div class="pub_header">

    <div onclick="window.history.go(-1);" class="pub_back">
        <a >
            <img src="../assets/img/return.png">
        </a>
        <span>返回</span>
    </div>

    <span>健康告知</span>
</div>

<div class="inform_title">
    <p class="inform_q" style="text-align:left;">全家防癌计划</p>
    <p class="inform_b">肺癌、肝癌、胃癌等各种癌症</p>
</div>
<div class="inform_content">
<div class="inform_word">
    为加入本计划，您需要查看申请人是否符合加入要求。若不符合以下要求，将不能加入计划。若您未如实告知其中任何一项情况，将来申请互助时，运营方将按规定拒绝您的申请。
</div>
    <hr>
    <div class="inform_word2">
        <p>一、过去三年内，未曾因疾病进行手术治疗，连续住院>15天，或服药>3个月。</p>
        <p>二、目前或既往未患有以下重大疾病：过去三年内，未曾因疾病进行手术治疗，连续住院>15天，或服药>3个月。</p>
        <p>三、目前或既往未患有以下重大疾病：过去三年内，未曾因疾病进行手术治疗，连续住院>15天，或服药>3个月</p>
    </div>
</div>
<div class="inform_footer">
    <div @click="informAlert" class="foot_left" style="background:#f6a623;line-height: 3.5rem;">部分不符合</div>
    <router-link tag="div" to="/eleAgree" style="background:#d0011b;height: 3.5rem">
    <p style="margin-top: 0.5rem">符合条件</p>
    <p>继续</p>
    </router-link>
</div>
</div>



<!--提示-->
<div id="inform_Prompt_alert" class="inform_Prompt" style="display:none">
    <div class="Prompt_content">
        <div class="Prompt_title">
            提示
        </div>
        <div class="Prompt_word">
            很抱歉，由于健康情况不符合加入条件，被保障人不能参与互助计划。<br>
            如所患疾病轻微（阑尾炎等），不确定是否可以加入，请咨询客服：
        </div>
        <div class="Prompt_number">400-837-234</div>
        <div class="Prompt_sub">
            <div>
                <img src="../assets/img/perfect_sub1.png" alt="">
            </div>
            <router-link tag="div" to="/mutual" >
                <img src="../assets/img/perfect_sub2.png" alt="">
            </router-link>
        </div>
    </div>

</div>
	</div>
</template>

<script type="text/javascript">
    export default{
        data(){
            return{

            }
        },
        methods:{
          informAlert(){
            inform_Prompt_alert.style.display="block";
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
.inform_title {
  background: #fafafa;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.3);
  width: 100%;
  height: 6rem;
}
.inform_q {
  font-family: PingFangSC-Medium;
  font-size: 1.12rem;
  color: #333333;
  width: 90%;
  margin: 0 auto;
  padding-top: 1.48rem;
  padding-left:1rem;
}
.inform_b {
  width: 90%;
  margin: 0.02rem auto;
  font-family: PingFangSC-Regular;
  font-size: 0.96rem;
  color: #333333;
}
.inform_content {
  width: 100%;
  height: 28rem;
  background: #fafafa;
  margin-top: 0.6rem;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.3);
}
.inform_word {
  width: 13.8rem;
  height: 8rem;
  font-family: PingFangSC-Regular;
  font-size: 0.96rem;
  color: #333333;
  margin: 0 auto;
  word-wrap: break-word;
}
.inform_word2 {
  width: 13.8rem;
  height: 20.8rem;
  font-family: PingFangSC-Regular;
  font-size: 0.96rem;
  color: #333333;
  margin: 0 auto;
  word-wrap: break-word;
}
.inform_word2 > p {
  margin-bottom: 1.6rem;
}
.inform_footer {
  width: 100%;
  height: 3.2rem;
  margin-top: 2rem;
}
.inform_footer > div {
  width: 50%;
  float: left;
  text-align: center;
  font-family: PingFangSC-Semibold;
  font-size: 0.96rem;
  color: #ffffff;
}
.inform_Prompt {
  width: 100%;
  height: 26.68rem;
  background: rgba(0, 0, 0, 0.75);
  padding-top: 3.56rem;
  position: fixed;
  left: 0;
  top: 0;
}
.Prompt_content {
  width: 13.8rem;
  height: 19.28rem;
  margin: 0 auto;
  background: #ffffff;
  box-shadow: 0 0 24px 0 rgba(0, 0, 0, 0.22), 0 24px 24px 0 rgba(0, 0, 0, 0.3);
  border-radius: 5px;
}
.Prompt_title {
  width: 100%;
  height: 3.12rem;
  border-radius: 0.08rem;
  background: #d0011b;
  font-family: PingFangSC-Semibold;
  font-size: 0.96rem;
  color: #ffffff;
  text-align: center;
  line-height: 3.12rem;
}
.Prompt_word {
  width: 12.6rem;
  height: 9.6rem;
  margin: 0.44rem auto;
  font-family: PingFangSC-Regular;
  font-size: 0.96rem;
  color: #333333;
  word-wrap: break-word;
  line-height: 1.6rem;
  text-align: justify;
}
.Prompt_number {
  width: 90%;
  margin: 0.4rem auto;
  font-family: PingFangSC-Regular;
  font-size: 28px;
  color: #d0011b;
  letter-spacing: 0;
  text-align: justify;
}
.Prompt_sub {
  width: 100%;
}
.Prompt_sub > div {
  width: 40%;
  float: left;
  margin: 0.4rem 0.68rem;
}
.Prompt_sub > div > img {
  max-width: 100%;
}

</style>