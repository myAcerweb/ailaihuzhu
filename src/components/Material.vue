<template>
	<div id="material">
	<div class="pub_header">
    <div class="pub_back">
        <a >
            <img src="../assets/img/return.png">
        </a>
        <span>返回</span>
    </div>

    <span>电子协议确认</span>
</div>
	<div class="cont">
    <div class="zi">
        <p>求助材料提交方式</p>
        <span>您可以选择下列其中一种方式来完成申请。</span>
    </div>
    <div class="baox  marginTop">
        <ul>
            <li class="b_box">
                <input type="checkbox" name="" class="ipt">
                <a href="javascript:;">
                    <span>邮寄资料</span>
                    <img src="../assets/img/jt.png" alt="" class="s_img">
                </a>

                <div class="xiala">
                    <p>姓名</p>
                    <input type="text" placeholder="请输入您的姓名">
                    <p>电话</p>
                    <input type="text" placeholder="请输入您的电话">
                    <p>姓名</p>
                    <input type="text" placeholder="请输入您的地址">
                    <button>完成</button>
                </div>
                <div class="ccc"></div>
            </li>
            <li>
                <a href="javascript:;">
                    <span>下载表格</span>
                    <img src="../assets/img/jt.png" alt="" class="s_img">
                </a>
            </li>
            <li>
                <a href="javascript:;">
                    <span>在线填写</span>
                    <img src="../assets/img/jt.png" alt="" class="s_img">
                </a>
            </li>
        </ul>
    </div>
</div>
<div class="mask">
    <div class="tan">
        <div class="tit">邮寄地址</div>
        <div class="T_cont">
            <p>黄八月</p>
            <p>13917645969</p>
            <p>上海市静安区南京西路1024弄静安别墅3号楼1109室</p>
        </div>
        <div class="btn">
            <button>编辑</button>
            <button>确认</button>
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
	.marginTop {
  margin-top: 0.6rem;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.3);
  background: #fff;
}
.cont {
  background-color: #EDEDF2;
  width: 100%;
  height: auto;
  color: #333333;
}
.cont .zi {
  background: #fff;
  padding: 1.48rem 0.6rem 1.28rem;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.3);
}
.cont .zi p {
  font-size: 1.12rem;
  font-weight: 600;
  margin-bottom: 0.84rem;
}
.cont .zi span {
  font-size: 0.96rem;
  line-height: 1.6rem;
}
.cont .baox {
  width: 100%;
}
.cont .baox ul .b_box {
  position: relative;
}
.cont .baox ul .b_box .ccc {
  height: 22px;
  background-color: #EDEDF2;
  position: absolute;
  width: 15rem;
  left: 0;
  bottom: 0;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.3) inset;
  transition: All 0.4s ease-in-out;
  -webkit-transition: All 0.4s ease-in-out;
  -moz-transition: All 0.4s ease-in-out;
  -o-transition: All 0.4s ease-in-out;
  opacity: 0;
}
.cont .baox ul .b_box .ipt {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 3.2rem;
  opacity: 0;
}
.cont .baox ul .b_box .ipt:checked + a img {
  transform: rotate(90deg);
  -webkit-transform: rotate(90deg);
  -moz-transform: rotate(90deg);
  -o-transform: rotate(90deg);
  -ms-transform: rotate(90deg);
}
.cont .baox ul .b_box .ipt:checked + a {
  border: none;
}
.cont .baox ul .b_box .ipt:checked ~ .xiala {
  height: 19.08rem;
  padding-bottom: 2.88rem;
}
.cont .baox ul .b_box .ipt:checked ~ .ccc {
  opacity: 1;
}
.cont .baox ul .b_box .xiala {
  position: relative;
  height: 0;
  overflow: hidden;
  transition: All 0.4s ease-in-out;
  -webkit-transition: All 0.4s ease-in-out;
  -moz-transition: All 0.4s ease-in-out;
  -o-transition: All 0.4s ease-in-out;
}
.cont .baox ul .b_box .xiala p {
  font-size: 0.72rem;
  color: #666666;
  letter-spacing: -0.43px;
  line-height: 1.6rem;
  margin-top: 0.8rem;
}
.cont .baox ul .b_box .xiala input {
  font-size: 0.96rem;
  border-bottom: 1px solid rgba(151, 151, 151, 0.38);
  width: 100%;
  line-height: 1.8rem;
}
.cont .baox ul .b_box .xiala button {
  background-image: linear-gradient(-180deg, #e52334 0%, #9f031b 100%);
  border-radius: 8px;
  width: 13.8rem;
  height: 2rem;
  font-size: 0.96rem;
  color: #ffffff;
  letter-spacing: 1px;
  border: none;
  margin: 3.16rem 0 2rem;
}
.cont .baox ul li:last-child > a {
  border: none;
}
.cont .baox ul li {
  padding-left: 0.6rem;
}
.cont .baox ul li a {
  display: block;
  height: 3.2rem;
  line-height: 3.2rem;
  width: 100% ;
  color: #333;
  font-size: 0.96rem;
  border-bottom: 1px solid rgba(151, 151, 151, 0.38);
}
.cont .baox ul li img {
  vertical-align: top;
  height: 1.04rem;
  margin-top: 7.9%;
  transition: All 0.4s ease-in-out;
  -webkit-transition: All 0.4s ease-in-out;
  -moz-transition: All 0.4s ease-in-out;
  -o-transition: All 0.4s ease-in-out;
}
.cont .baox ul li .s_img,
.cont .baox ul li .z_txt {
  float: right;
}
.cont .baox ul li .s_img {
  margin-right: 0.68rem;
  margin-left: 0.32rem;
}
.cont .baox ul li .z_txt {
  font-size: 0.72rem;
  color: #666666;
  letter-spacing: -0.43px;
}
.cont .baox ul li .z_width {
  width: 4.56rem;
  display: block;
  line-height: 1rem;
  margin-top: 0.72rem;
}
.mask {
  display: none;
  background: rgba(0, 0, 0, 0.75);
  width: 100%;
  height: 100%;
  position: fixed;
  left: 0;
  top: 0;
}
.mask .tan {
  width: 95%;
  margin: 38% auto 0;
  background: #ffffff;
  box-shadow: 0 0 24px 0 rgba(0, 0, 0, 0.22), 0 24px 24px 0 rgba(0, 0, 0, 0.3);
  border-radius: 5px;
}
.mask .tan .btn {
  text-align: center;
  padding-bottom: 1.24rem;
}
.mask .tan .btn button {
  height: 2.04rem;
  width: 6rem;
  border: none;
  background-image: linear-gradient(-180deg, #f8a350 3%, #f76b1c 100%);
  border-radius: 8px;
  font-size: 0.88rem;
  color: #ffffff;
  letter-spacing: 0.92px;
}
.mask .tan .btn button:last-child {
  background-image: linear-gradient(-180deg, #e52334 0%, #9f031b 100%);
}
.mask .tan .tit {
  width: 100%;
  height: 3.12rem;
  background: #d0011b;
  border-radius: 2px;
  font-size: 0.96rem;
  color: #ffffff;
  letter-spacing: -0.58px;
  text-align: center;
  line-height: 3.12rem;
}
.mask .tan .T_cont {
  padding: 0 0.6rem;
}
.mask .tan .T_cont p {
  font-size: 0.96rem;
  color: #333333;
  margin-top: 0.8rem;
}
.mask .tan .T_cont p:last-child {
  margin-bottom: 0.8rem;
}

</style>