<template>
  <div id="publicity">
    <div class="pub_contain">
        <div class="pub_contain_text">
            1、为保护受助者个人隐私，公示结束后将隐藏个人信息；
            <br/>
            2、没有加入爱来互助的用户无法查阅求助者个人信息。
        </div>
        <div class="pub_search">
            <img :src="imgSearch">
            <!-- <img src="img/search.png" alt=""/> -->
            <input type="text" placeholder="姓名、省份、性别、病类"/>
            <span>搜索</span>
        </div>
        <div class="pub_list">
            <div class="pub_list_user">
                <div>
                    <img :src="imgPub1">
                    <!-- <img src="img/pub_1.png" /> -->
                </div>
                <div>
                    <p>邹辉</p>
                    <span>男，76岁</span>
                </div>
            </div>
            <div class="pub_list_text">
                会员邹辉2017年4月因头晕无力、贫血，经过胃镜检查，病理提示胃窦腺体异型增生癌变。
            </div>
            <div class="pub_list_pro">
                <span style="width: 52%;"></span>
            </div>
            <div class="pub_list_pro_text">
                <p>求助20万，已完成52.2%</p>
                <span>127人已捐助</span>
            </div>
            <div class="pub_list_btn">
                <button>马上捐助</button>
            </div>
        </div>
        <div class="pub_list">
            <div class="pub_list_user">
                <div>
                    <img :src="imgPub2">
                    <!-- <img src="img/2.jpg" /> -->
                </div>
                <div>
                    <p>郑彦民</p>
                    <span>男，15岁</span>
                </div>
            </div>
            <div class="pub_list_text">
                会互助会员郑彦民2017年6月1日下午16点左右在河边玩耍，洗手时不慎失足落水。
            </div>
            <div class="pub_list_pro">
                <span style="width: 20%;"></span>
            </div>
            <div class="pub_list_pro_text">
                <p>求助10万，已完成20%</p>
                <span>105人已捐助</span>
            </div>
            <div class="pub_list_btn">
                <router-link tag="button" to="/publicityDetail1">马上捐助</router-link>
            </div>
        </div>
        <div class="pub_list">
            <div class="pub_list_user">
                <div>
                    <img :src="imgPub3">
                    <!-- <img src="img/3.jpg" /> -->
                </div>
                <div>
                    <p>赵峰</p>
                    <span>男，86岁</span>
                </div>
            </div>
            <div class="pub_list_text">
                会员赵峰2017年5月因无诱因呕吐伴头疼，山西省人民医院确诊为脑胶质瘤。
            </div>
            <div class="pub_list_pro">
                <span style="width: 60%;"></span>
            </div>
            <div class="pub_list_pro_text">
                <p>求助20万，已完成60%</p>
                <span>1096人已捐助</span>
            </div>
            <div class="pub_list_btn">
                <router-link tag="button" to='/publicityDetail2'>马上捐助</router-link>
            </div>
        </div>
    </div>
  </div>
</template>
<script type="text/javascript">
  export default{
    data(){
      return{
        imgSearch:'./static/search.png',
        imgPub1:'./static/pub_1.png',
        imgPub2:'./static/2.jpg',
        imgPub3:'./static/3.jpg'
      }
    }
  }
</script>
<style type="text/css" scoped>
  .pub_contain {
  min-height: 4rem;
  background: #efeff4;
  width: 100%;
  padding-bottom: 0.8rem;
}
.pub_contain_text {
  width: 92%;
  padding: 4%;
  font-family: PingFangSC-Regular;
  font-size: 0.72rem;
  color: #666666;
  letter-spacing: -0.0172rem;
  text-align: left;
}
.pub_search {
  width: 92%;
  padding: 0 4%;
  background: rgba(208, 2, 27, 0.75);
  height: 3.2rem;
  overflow: hidden;
}
.pub_search > img {
  width: 1.2rem;
  height: 1.2rem;
  margin: 1rem 4% 1rem 0;
  float: left;
}
.pub_search > input {
  background: rgba(255, 255, 255, 0.2);
  border-radius: 0.8rem;
  width: 8.52rem;
  height: 2rem;
  float: left;
  margin: 0.6rem 0;
  outline: none;
  font-family: PingFangSC-Regular;
  font-size: 0.72rem;
  color: #ffffff;
  letter-spacing: -0.0172rem;
  text-align: left;
  border: 0;
  padding-left: 0.6rem;
}
.pub_search > span {
  float: right;
  font-family: PingFangSC-Regular;
  font-size: 0.96rem;
  color: #ffffff;
  letter-spacing: -0.0232rem;
  line-height: 3.2rem;
  text-align: left;
}
.pub_list {
  width: 92%;
  padding: 4%;
  margin-bottom: 0.8rem;
  background: #fafafa;
  box-shadow: 0 0.04rem 0.08rem 0 rgba(0, 0, 0, 0.3);
}
.pub_list_user {
  overflow: hidden;
  margin-bottom: 0.6rem;
}
.pub_list_user > div:nth-child(1) {
  float: left;
  width: 3.2rem;
  height: 3.2rem;
}
.pub_list_user > div:nth-child(1) > img {
  width: 100%;
}
.pub_list_user > div:nth-child(2) {
  float: left;
  height: 3.2rem;
  margin-left: 0.6rem;
}
.pub_list_user > div:nth-child(2) > p {
  margin: 0;
  font-family: PingFangSC-Medium;
  font-size: 0.96rem;
  color: #333333;
  letter-spacing: -0.0232rem;
  text-align: left;
}
.pub_list_user > div:nth-child(2) > span {
  font-family: PingFangSC-Regular;
  font-size: 0.96rem;
  color: #333333;
  letter-spacing: -0.0232rem;
  line-height: 0.96rem;
  text-align: left;
  margin-top: 0.8rem;
  display: block;
}
.pub_list_text {
  font-family: PingFangSC-Regular;
  font-size: 0.72rem;
  color: #666666;
  letter-spacing: -0.0172rem;
  text-align: left;
  margin-bottom: 0.6rem;
}
.pub_list_pro {
  background: #f3ffe6;
  border: 0.04rem solid #46b898;
  box-shadow: inset 0 -0.04rem 0.12rem 0 rgba(255, 255, 255, 0.5), inset 0 0.04rem 0.2rem 0 rgba(109, 195, 98, 0.5);
  border-radius: 2.64rem;
  width: 100%;
  height: 1rem;
}
.pub_list_pro > span {
  background-image: linear-gradient(-180deg, #c6f770 0%, #71c84e 100%);
  box-shadow: inset 0 -0.04rem 0.12rem 0 rgba(35, 119, 23, 0.5), inset 0 0.04rem 0.12rem 0 rgba(229, 255, 226, 0.6);
  border-radius: 0.56rem;
  width: 11.64rem;
  height: 1rem;
  display: block;
}
.pub_list_pro_text {
  width: 100%;
}
.pub_list_pro_text > p {
  font-family: PingFangSC-Regular;
  font-size: 0.72rem;
  color: #d2192f;
  letter-spacing: -0.0172rem;
  text-align: center;
  margin-bottom: 0;
}
.pub_list_pro_text > span {
  font-family: PingFangSC-Regular;
  font-size: 0.72rem;
  color: #999999;
  letter-spacing: -0.0172rem;
  text-align: center;
  display: block;
  width: 100%;
}
.pub_list_btn {
  width: 100%;
  margin-top: 0.6rem;
}
.pub_list_btn > button {
  width: 100%;
  background-image: linear-gradient(-180deg, #e52334 0%, #9f031b 100%);
  border-radius: 0.32rem;
  height: 2.04rem;
  font-family: PingFangSC-Semibold;
  font-size: 0.96rem;
  color: #ffffff;
  letter-spacing: 0.04rem;
  text-align: center;
}

</style>