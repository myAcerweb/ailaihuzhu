<template>
	<div id="requirement">
		<div class="pub_header">
    <div onclick="window.history.go(-1);" class="pub_back">
        <a >
            <img :src="imgRequirementreturn">
        </a>
        <span>返回</span>
    </div>
    
    <span>健康要求</span>
</div>
<div class="re_content">
    <p>一、过去三年内，未曾因疾病进行手术治疗，或连续住院>15天，或服药>3个月；</p>
    <p>二、目前或既往未患有以下重大疾病：<br>
        肿瘤（包括恶性肿瘤、脑部肿瘤、白血病，但已经确诊为良性息肉、囊肿、结节和赘生物且已治愈的除外）、病理学描述为癌前病变的肿瘤、心脑血管疾病、冠心病、心肌病、主动脉疾病、肝硬化，急/慢性肾炎、慢性阻塞性肺疾病、支气管哮喘（重度或重度以上）、糖尿病、癫痫、特定传染病（鼠疫、霍乱、病毒性肝炎、痢疾、艾滋病、梅毒、流行性出血病、狂犬病、炭疽、黑热病、疟疾、登革热、人感染高致病禽流感、传染性非典型肺炎、甲型H1N1流感、MERS和埃博拉出血热）、再生障碍性贫血、精神科疾病（含癫痫）、智力发育不全，先天性疾病或者遗传性疾病、智力发育不全以及身体残障（含严重3度烧伤）等；</p>
    <p>
      三、过去六个月内，未曾出现下列不明原因的症状或不适：<br>
      体重减轻超过5公斤(非健身或减肥原因)、不明原因的出血点或瘀块、反复鼻或牙龈出血，身体出现肿块、包块、结节、咯血、呕血、便血、血尿、淋巴结肿大，经检查显示需要进一步的检查、治疗或随访。
    </p>
</div>
	</div>
</template>
<script type="text/javascript">
	export default{
		data(){
			return{
				imgRequirementreturn:'./static/return.png'
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
.re_content {
  width: 13.84rem;
  /*height: 27.2rem;*/
  font-family: PingFangSC-Regular;
  font-size: 0.96rem;
  color: #333333;
  word-wrap: break-word;
  margin: 0 auto;
}
.re_content > p {
  margin-top: 0.8rem;
}

</style>