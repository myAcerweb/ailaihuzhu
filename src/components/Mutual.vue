<template>
	<div class="mutual">
  <router-link to="/home">
		<div class="t_tit">
    <p onclick="window.history.go(-1);"><img src="../assets/img/return.png" alt="">返回</p>
    加入互助计划
</div>
</router-link>
<div class="cont">
    <div class="banner">
        <img src="../assets/img/ban.png" alt="">
    </div>
    <ul class="j_list">
    <router-link to="/program">
        <li class="marginTop listLi" id="ab" >
            <a href="#ab" ></a>
            <div class="left"><p>给全家</p></div>
            <div class="right">
                <div class="j_tit"><p>全家防癌互助计划</p></div>
                <div class="j_con">
                    <p>一份投入，保障全家，防癌抗癌，美满无忧。</p>
                    <p>最高10万元健康保障。</p>
                </div>
            </div>
        </li>
        </router-link>
        <li class="marginTop listLi" id="bc">
            <a href="#bc" ></a>
            <div class="left"><p>给父母</p></div>
            <div class="right">
                <div class="j_tit">
                    <p>中老年大病互助计划</p>
                    <p>空巢老人鹊桥计划</p>
                </div>
                <div class="j_con">
                    <p>一份心意，免除儿女的后顾之忧，让绝症不再可怕。</p>
                    <p>最高10万元健康保障。</p>
                </div>
            </div>
        </li>
        <li class="marginTop listLi" id="cd" >
            <a href="#cd" ></a>
            <div class="left"><p>给爱人</p></div>
            <div class="right">
                <div class="j_tit">
                    <p>中青年大病互助计划</p>
                    <p>不孕不育领养互助计划</p>
                </div>
                <div class="j_con">
                    <p>保障意外绝症，夫妻一起抵御各种癌症的侵袭，永浴爱河。</p>
                    <p>最高10万元健康保障。</p>
                </div>
            </div>
        </li>
        <li class="marginTop listLi" id="de" >
            <a href="#de"></a>
            <div class="left"><p>给孩子</p></div>
            <div class="right">
                <div class="j_tit">
                    <p>少儿阳光关爱计划</p>
                    <p>儿童先天疾病互助计划</p>
                </div>
                <div class="j_con">
                    <p>保障白血病、癌症等50种大病，让祖国的花骨朵肆意盛开。。</p>
                    <p>最高10万元健康保障。</p>
                </div>
            </div>
        </li>
        <li class="marginTop listLi" id="5" >
            <div class="left"><p>给自己</p></div>
            <div class="right">
                <div class="j_tit">
                    <p>中青年抗癌互助计划</p>
                    <p>亚健康旅居修养计划</p>
                </div>
                <div class="j_con">
                    <p>保障意外绝症，帮你一起抵御各种癌症的侵袭。</p>
                    <p>最高10万元健康保障。</p>
                </div>
            </div>
        </li>
        <li class="marginTop listLi" id="6" >
            <div class="left"><p>给亲朋</p></div>
            <div class="right">
                <div class="j_tit">
                    <p>大病健康互助计划</p>
                </div>
                <div class="j_con">
                    <p>保障白血病、癌症等50种大病，让亲情友情延续终生。</p>
                    <p>最高10万元健康保障。</p>
                </div>
            </div>
        </li>
        <li class="marginTop listLi" id="7" >
            <div class="left">
              <p>给陌生人</p>
            </div>
            <div class="right">
                <div class="j_tit">
                    <p>爱心帮扶计划</p>
                </div>
                <div class="j_con">
                    <p>虽然我们可能不熟，但是TA的事迹和精神却感染了，</p>
                    <p>假如援助一点爱心可以使TA重新站起来，那我们为何不做呢？</p>
                    <p>创业失败、发明经费不济、贫困求学、乡村支教、乡村扶贫......</p>
                </div>
            </div>
        </li>
    </ul>
</div>
	</div>
</template>
<script type="text/javascript">
 export default {
   data () {
       return  {}
   },
  beforeRouteEnter (to, from, next) {
     next(vm => {
       setTimeout(function () {
        var top = this.$el.querySelector(this.$route.hash)
         console.log(top)
         document.body.scrollTop = top.offsetTop
       }.bind(vm), 500)
     })
   }
}
</script>
<style type="text/css">
	.marginTop {
  margin-top: 0.6rem;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.3);
  background: #fff;
}
.t_tit {
  position: relative;
  height: 40 25rem;
  width: 100%;
  background: rgba(208, 2, 27, 0.9);
  box-shadow: 0 0 0 0 #b2b2b2;
  text-align: center;
  font-size: 0.72rem;
  color: #ffffff;
  letter-spacing: -0.43px;
  line-height: 1.6rem;
}
.t_tit p {
  position: absolute;
  left: 0;
  top: 0;
  padding-left: 0.6rem;
}
.t_tit p img {
  vertical-align: middle;
  height: 0.88rem;
  margin-top: -0.2rem;
  margin-right: 0.16rem;
}
.cont {
  background-color: #EDEDF2;
  width: 100%;
  height: auto;
  color: #333333;
}
.cont .banner {
  height: 8.44rem;
  width: 100%;
}
.cont .banner img {
  height: 100%;
  width: 100%;
}
.cont .j_list {
  width: 100%;
}
.cont .j_list li {
  width: 100%;
  overflow: hidden;
  position: relative;
}
.cont .j_list li .left {
  width: 2rem;
  float: left;
  text-align: center;
  font-size: 1.12rem;
  color: #fff;
  background: #44db5e;
  display: table;
}
.cont .j_list li .left p {
  display: table-cell;
  vertical-align: middle;
}
.cont .j_list li .right {
  width: 12.52rem;
  padding-left: 0.48rem;
  float: left;
}
.cont .j_list li .right .j_tit {
  font-size: 1.12rem;
  border-bottom: 1px solid rgba(151, 151, 151, 0.38);
  font-weight: 600;
  padding: 0.6rem 0 0.4rem;
}
.cont .j_list li .right .j_tit p {
  padding-right: 0.48rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.cont .j_list li .right .j_con {
  font-size: 0.96rem;
  padding-right: 0.48rem;
}
.cont .j_list li .right .j_con p {
  margin-top: 0.36rem;
  margin-bottom: 0.88rem;
}
.cont .j_list li:nth-of-type(2) .left {
  background: #54c7fc;
}
.cont .j_list li:nth-of-type(3) .left {
  background: #ffcd00;
}
.cont .j_list li:nth-of-type(4) .left {
  background: #ff9600;
}
.cont .j_list li:nth-of-type(5) .left {
  background: #fe2851;
}
.cont .j_list li:nth-of-type(6) .left {
  background: #0076ff;
}
.cont .j_list li:nth-of-type(7) .left {
  background: #fe3824;
}

</style>
