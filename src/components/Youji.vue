<template>
	<div id="youji">
		<div class="t_tit">
		    <p onclick="window.history.go(-1);">
		    <img :src="imgYJreturn">
		    <!-- <img src="./img/jit.png" alt=""> -->
		    返回</p>
		    电子协议确认
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
		                    <img :src="imgYJjt" class="s_img">
		                    <!-- <img src="./img/jt.png" alt="" class="s_img"> -->
		                </a>

		                <div class="xiala y_xia">
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
		                    <img :src="imgYJjt" class="s_img">
		                    <!-- <img src="./img/jt.png" alt="" class="s_img"> -->
		                </a>
		            </li>
		            <li class="b_box b_wrap">
		                <input type="checkbox" name="" class="ipt">
		                <a href="javascript:;">
		                    <span>在线填写</span>
		                    <img :src="imgYJjt" class="s_img">
		                    <!-- <img src="./img/jt.png" alt="" class="s_img"> -->
		                </a>
		                <div class="lala">
		                    <div class="shuom">
		                        <div class="xian">
		                            <p>爱来互助求助材料提交</p>
		                            <span>请按照提示要求，完整填写您的个人信息，确保 <span>各项信息的真实性和一致性。</span></span>
		                        </div>
		                    </div>
		                    <div class="xinx">
		                        <div class="t_t">申请人个人信息</div>
		                        <div class="X_cont">
		                                <ul>
		                                    <li class="qing">
		                                        <p class="s_p">姓名</p>
		                                        <input type="text" placeholder="请输入姓名">
		                                    </li>
		                                    <li class="sex">
		                                        <p class="s_p">性别</p>
		                                        <span><input type="radio" name="sex">&nbsp;&nbsp;男&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input type="radio" name="sex">&nbsp;&nbsp;女</span>
		                                    </li>
		                                    <li class="qing">
		                                        <p class="s_p">民族</p>
		                                        <input type="text" placeholder="请输入民族">
		                                    </li>
		                                    <li class="qing">
		                                        <p class="s_p">出生日期</p>
		                                        <input id="demo1" type="text" readonly="" name="input_date" placeholder="选择出生年月" data-lcalendar="1900-01-1,2017-12-31" />
		                                    </li>
		                                    <li class="qing">
		                                        <p class="s_p">职业</p>
		                                        <input type="text" placeholder="请输入职业">
		                                    </li>

		                                    <li class="dizhi">
		                                        <p class="s_p">籍贯</p>
		                                        <div >
		                                            <input type="text" name="" >省(市)<input type="text" name="" >市(县)<input type="text" name="" >镇(乡、社区)<input type="text" name="" >(街道)
		                                        </div>
		                                    </li>
		                                    <li class="qing">
		                                        <p class="s_p">现住址</p>
		                                        <input type="text" placeholder="输入现住地址">
		                                    </li>
		                                    <li class="qing">
		                                        <p class="s_p">证件号码</p>
		                                        <input type="text" placeholder="请输入证件号码">
		                                    </li>
		                                    <li class="qing">
		                                        <p class="s_p">联系电话（座机）</p>
		                                        <input type="text" placeholder="请输入电话号码">
		                                    </li>
		                                    <li class="qing">
		                                        <p class="s_p">手机</p>
		                                        <input type="text" placeholder="请输入您的手机号码">
		                                    </li>
		                                    <li class="qing">
		                                        <p class="s_p">开户人</p>
		                                        <input type="text" placeholder="请开户人姓名">
		                                    </li>
		                                    <li class="qing">
		                                        <p class="s_p">开户银行</p>
		                                        <input type="text" placeholder="请输入开户银行">
		                                    </li>
		                                    <li class="qing">
		                                        <p class="s_p">银行卡账号</p>
		                                        <input type="text" placeholder="请输入银行卡账号">
		                                    </li>
		                                </ul>
		                                <div class="s_btn">
		                                    <button>保存信息</button>
		                                </div>
		                        </div>
		                    </div>
		                    <div class="xinx">
		                        <div class="t_t">申请人个人信息</div>
		                        <div class="X_cont">
		                            <ul>
		                                <li class="qing">
		                                    <p class="s_p">姓名</p>
		                                    <input type="text" placeholder="请输入姓名">
		                                </li>
		                                <li class="ren">
		                                    <p class="s_p">姓名</p>
		                                    <div>
		                                        <label><input type="radio" name="ren"> 本人</label>
		                                        <label><input type="radio" name="ren"> 监护人</label>
		                                        <label><input type="radio" name="ren"> 法定继承人</label>
		                                    </div>
		                                    <label class="la"><input type="radio" name="ren"> 其他</label>
		                                    <input type="text" name="ren" class="i_ipt">
		                                </li>
		                                <li class="s_yn">
		                                    <p class="s_p">是否有社保、新农合或其他投保情况</p>
		                                    <p class="shebao"><input type="radio" name="shebao"> 无</p>
		                                    <p class="shebao"><input type="radio" name="shebao"> 有 <input type="text" ></p>
		                                </li>
		                                <li class="s_yn">
		                                    <p class="s_p">是否有其他报销途径或其他互助平台</p>
		                                    <p class="shebao"><input type="radio" name="baoxiao"> 无</p>
		                                    <p class="shebao"><input type="radio" name="baoxiao"> 有 <input type="text" ></p>
		                                </li>
		                                <li class="s_yn">
		                                    <p class="s_p">是否正在申请理赔或互助</p>
		                                    <p class="shebao"><input type="radio" name="shenqing"> 无</p>
		                                    <p class="shebao"><input type="radio" name="shenqing"> 有 <input type="text" ></p>
		                                    <p class="shebao"><input type="radio" name="shenqing"> 曾经</p>
		                                </li>
		                                <li class="qing">
		                                    <p class="s_p">所属社区街道办事处电话</p>
		                                    <input type="text" placeholder="请输入办事处电话">
		                                </li>
		                                <li class="qing">
		                                    <p class="s_p">所属派出所电话</p>
		                                    <input type="text" placeholder="请输入派出所">
		                                </li>
		                            </ul>
		                            <div class="s_btn">
		                                <button>保存信息</button>
		                            </div>
		                        </div>
		                    </div>
		                    <div class="xinx">
		                        <div class="t_t">求助原因</div>
		                        <div class="X_cont">
		                            <ul>
		                                <li class="t_txts">
		                                    <p class="s_p">事件经过事件、地点</p>
		                                    <textarea class="textarea"  placeholder="描述不少于200字"></textarea>
		                                </li>
		                                <li class="t_txts">
		                                    <p class="s_p">发生原因</p>
		                                    <textarea class="textarea"  placeholder="描述不少于200字"></textarea>
		                                </li>
		                                <li class="t_txts">
		                                    <p class="s_p">详细情况</p>
		                                    <textarea class="textarea"  placeholder="描述不少于200字"></textarea>
		                                </li>
		                                <li class="t_txts">
		                                    <p class="s_p">求助金额</p>
		                                    <textarea class="textarea"  placeholder="人民币金额（元）"></textarea>
		                                </li>
		                            </ul>
		                            <div class="s_btn">
		                                <button>保存信息</button>
		                            </div>
		                        </div>
		                    </div>
		                    <div class="xinx">
		                        <div class="t_t">辅助证明材料提交</div>
		                        <div class="X_cont jia">
		                           <ul>
		                               <li class="sh_li">
		                                   <div class="tits">求助者近照</div>
		                                   <p class="s_pp">2寸近照，清晰度高，jpg格式，不能大于1MB.</p>
		                                   <div class="container">
		                                       <ul class="z_photo">
		                                           <li class="z_file">
		                                               <input type="file" name="file" value="" />
		                                           </li>
		                                       </ul>
		                                       <div class="txt">
		                                           点击图标，上传材料
		                                       </div>
		                                   </div>
		                               </li>
		                               <li class="sh_li">
		                                   <div class="tits">文字材料</div>
		                                   <p class="s_pp">高扫描件，jpg格式，每份不能大于3MB.</p>
		                                   <div class="container">
		                                       <ul class="z_photo">
		                                           <li class="z_file">
		                                               <input type="file" name="file" value="" />
		                                           </li>
		                                       </ul>
		                                       <div class="txt">
		                                           点击图标，上传材料
		                                       </div>
		                                   </div>
		                               </li>
		                               <li class="sh_li">
		                                   <div class="tits">扫描件</div>
		                                   <p class="s_pp">医院或保险单等文件扫描，每份保持高清，jpg格式，不能大于3MB。</p>
		                                   <div class="container">
		                                       <ul class="z_photo">
		                                           <li class="z_file">
		                                               <input type="file" name="file" value="" />
		                                           </li>
		                                       </ul>
		                                       <div class="txt">
		                                           点击图标，上传扫描件
		                                       </div>
		                                   </div>
		                               </li>
		                               <li class="sh_li">
		                                   <div class="tits"><span class="red">*</span>  音频文件</div>
		                                   <p class="s_pp">音频证明文件，通用mp3格式，每份时长5分钟，清晰。</p>
		                                   <div class="container">
		                                       <ul class="z_photo">
		                                           <li class="z_file">
		                                               <input type="file" name="file" value="" />
		                                           </li>
		                                       </ul>
		                                       <div class="txt">
		                                           点击图标，上传音频文件
		                                       </div>
		                                   </div>
		                               </li>
		                               <li class="sh_li">
		                                   <div class="tits"><span class="red">*</span>  视频文件</div>
		                                   <p class="s_pp">视频证明文件，通用MP4格式，图像和语音清晰。</p>
		                                   <div class="container">
		                                       <ul class="z_photo">
		                                           <li class="z_file">
		                                               <input type="file" name="file" value="" />
		                                           </li>
		                                       </ul>
		                                       <div class="txt">
		                                           点击图标，上传视频
		                                       </div>
		                                   </div>
		                               </li>
		                           </ul>
		                            <div class="s_btn">
		                                <button>保存信息</button>
		                            </div>
		                            <div class="btnss">
		                                <button>提交材料</button>
		                            </div>
		                        </div>
		                    </div>
		                </div>
		            </li>
		        </ul>
		    </div>
		</div>


		<!-- 弹出框 -->
		<div class="mask s_mask z_mask" >
		    <div class="tan">
		        <div class="tit">提交成功</div>
		        <div class="T_cont">
		            <img :src="imgYJjt">
		            <!-- <img src="./img/pdf.png" alt=""> -->
		            <p>爱来互助-求助材料表格</p>
		         </div>
		        <div class="btn">
		            <button>下载</button>
		        </div>
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


		<div class="mask s_mask" >
		    <div class="tan">
		        <div class="tit">提交成功</div>
		        <div class="T_cont">
		            <p>我们的客服人员会在24小时内联系您，进行确认。</p>
		            <p>给您提供帮助是我们"爱来互助"的使命，我们会尽快将您的情况和请求公示给所有爱来家人，请大家一起来帮助你，无论什么情况我们都会和你同在，还请耐心等候。</p>
		        </div>
		        <div class="btn">
		            <button>确认</button>
		        </div>
		    </div>
		</div>
	</div>
</template>
<script >
	export default{
		data(){
			return{
				imgYJreturn:'./static/return.png',
				imgYJjt:'./static/jt.png'
			}
		},
		mounted(){
			var calendar = new lCalendar();
		    calendar.init({
		        'trigger': '#demo1',
		        'type': 'date'
		    });

		    var autoTextarea = function (elem, extra, maxHeight) {
		        extra = extra || 0;
		        var isFirefox = !!document.getBoxObjectFor || 'mozInnerScreenX' in window,
		                isOpera = !!window.opera && !!window.opera.toString().indexOf('Opera'),
		                addEvent = function (type, callback) {
		                    elem.addEventListener ?
		                            elem.addEventListener(type, callback, false) :
		                            elem.attachEvent('on' + type, callback);
		                },
		                getStyle = elem.currentStyle ? function (name) {
		                    var val = elem.currentStyle[name];

		                    if (name === 'height' && val.search(/px/i) !== 1) {
		                        var rect = elem.getBoundingClientRect();
		                        return rect.bottom - rect.top -
		                                parseFloat(getStyle('paddingTop')) -
		                                parseFloat(getStyle('paddingBottom')) + 'px';
		                    };

		                    return val;
		                } : function (name) {
		                    return getComputedStyle(elem, null)[name];
		                },
		                minHeight = parseFloat(getStyle('height'));

		        elem.style.resize = 'none';

		        var change = function () {
		            var scrollTop, height,
		                    padding = 0,
		                    style = elem.style;

		            if (elem._length === elem.value.length) return;
		            elem._length = elem.value.length;

		            if (!isFirefox && !isOpera) {
		                padding = parseInt(getStyle('paddingTop')) + parseInt(getStyle('paddingBottom'));
		            };
		            scrollTop = document.body.scrollTop || document.documentElement.scrollTop;

		            elem.style.height = minHeight + 'px';
		            if (elem.scrollHeight > minHeight) {
		                if (maxHeight && elem.scrollHeight > maxHeight) {
		                    height = maxHeight - padding;
		                    style.overflowY = 'auto';
		                } else {
		                    height = elem.scrollHeight - padding;
		                    style.overflowY = 'hidden';
		                };
		                style.height = height + extra + 'px';
		                scrollTop += parseInt(style.height) - elem.currHeight;
		                document.body.scrollTop = scrollTop;
		                document.documentElement.scrollTop = scrollTop;
		                elem.currHeight = parseInt(style.height);
		            };
		        };

		        addEvent('propertychange', change);
		        addEvent('input', change);
		        addEvent('focus', change);
		        change();
		    };
		    var text  = document.getElementsByClassName("textarea");
		    for(var i =0;i<text.length;i++)
		    {
		        autoTextarea(text[i]);
		    }
		}
	}
</script>
<style scoped>
	/*插件样式*/
	.gearDate,
.gearDatetime,
.gearTime {
	font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
	font-size: 10px;
	background-color: rgba(0, 0, 0, 0.2);
	display: block;
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	z-index: 9900;
	overflow: hidden;
	-webkit-animation-fill-mode: both;
	animation-fill-mode: both
}

.date_ctrl {
	vertical-align: middle;
	background-color: white;
	color: #363837;
	margin: 0;
	height: auto;
	width: 100%;
	position: absolute;
	left: 0;
	bottom: 0;
	z-index: 9901;
	overflow: hidden;
	-webkit-transform: translate3d(0, 0, 0);
	transform: translate3d(0, 0, 0)
}

.slideInUp {
	animation: slideInUp .3s ease-in;
	-webkit-animation: slideInUp .3s ease-in
}

@-webkit-keyframes slideInUp {
	from {
		-webkit-transform: translate3d(0, 100%, 0);
		transform: translate3d(0, 100%, 0)
	}
	to {
		-webkit-transform: translate3d(0, 0, 0);
		transform: translate3d(0, 0, 0)
	}
}

.date_roll,
.datetime_roll,
.time_roll {
	display: -webkit-box;
	width: 100%;
	height: auto;
	overflow: hidden;
	font-weight: bold;
	background-color: transparent;
	-webkit-mask: -webkit-gradient(linear, 0% 50%, 0% 100%, from(#debb47), to(rgba(36, 142, 36, 0)));
	-webkit-mask: -webkit-linear-gradient(top, #debb47 50%, rgba(36, 142, 36, 0))
}

.date_roll>div,
.datetime_roll>div,
.time_roll>div {
	font-size: 2.3em;
	height: 6em;
	float: left;
	background-color: transparent;
	position: relative;
	overflow: hidden;
	-webkit-box-flex: 4
}

.date_roll_mask {
	-webkit-mask: -webkit-gradient(linear, 0% 40%, 0% 0%, from(#debb47), to(rgba(36, 142, 36, 0)));
	-webkit-mask: -webkit-linear-gradient(bottom, #debb47 50%, rgba(36, 142, 36, 0));
	padding: 0 0 3em 0
}

.date_roll>div:nth-child(2) {
	-webkit-box-flex: 2
}

.date_roll>div:nth-child(1),
.datetime_roll>div:nth-child(1) {
	-webkit-box-flex: 4
}

.datetime_roll>div:first-child {
	-webkit-box-flex: 6
}

.datetime_roll>div:last-child {
	-webkit-box-flex: 6
}

.date_grid {
	position: relative;
	top: 2em;
	width: 100%;
	height: 2em;
	margin: 0;
	box-sizing: border-box;
	z-index: 0;
	border-top: 1px solid #e6e6e6;
	border-bottom: 1px solid #e6e6e6
}

.date_grid>div {
	color: #000;
	position: absolute;
	right: 0;
	top: 0;
	font-size: .8em;
	line-height: 2.5em
}

.date_roll>div:nth-child(3) .date_grid>div {
	left: 42%
}

.datetime_roll>div .date_grid>div {
	right: 0
}

.datetime_roll>div:first-child .date_grid>div {
	left: auto;
	right: 0%
}

.datetime_roll>div:last-child .date_grid>div {
	left: 50%
}

.time_roll>div:nth-child(1) .date_grid>div {
	right: 0.5em;
	/*border: 1px solid red;*/
}
.time_roll>div .date_grid{
	/*border: 1px solid black;*/
} 
.time_roll>div .date_grid>div {
	right:1em;
	/*border: 1px solid blue;*/
}

.date_btn {
	color: #000;
	font-size: 1.6em;
	line-height: 1em;
	text-align: center;
	padding: .8em 1em;
	cursor: pointer
}

.date_btn_box {
	display: -webkit-box;
	-webkit-box-pack: justify;
	-webkit-box-align: stretch
}

.gear {
	float: left;
	position: absolute;
	z-index: 9902;
	width: 5.5em;
	margin-top: -6em
}

.date_roll>div .gear {
	width: 100%
}

.date_roll>div:nth-child(1) .gear {
	text-indent: 20%
}

.date_roll>div:nth-child(2) .gear {
	text-indent: -20%
}

.date_roll>div:nth-child(3) .gear {
	text-indent: -55%
}

.datetime_roll>div .gear {
	width: 100%;
	text-indent: -25%
}

.datetime_roll>div:first-child .gear {
	text-indent: -10%
}

.datetime_roll>div:last-child .gear {
	text-indent: -50%
}

.time_roll>div .gear {
	width: 100%;
	/*text-indent: -70%;*/
	text-align: center;
}

.time_roll>div:nth-child(1) .gear {
	width: 100%;
	text-indent: 10%
}

.tooth {
	height: 2em;
	line-height: 2em;
	text-align: center
}



/*自定义样式*/
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
  height: 0;
  background-color: #EDEDF2;
  position: absolute;
  width: 15rem;
  left: 0;
  bottom: 0;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.3) inset;
  transition: All 0.2s ease-in-out;
  -webkit-transition: All 0.2s ease-in-out;
  -moz-transition: All 0.2s ease-in-out;
  -o-transition: All 0.2s ease-in-out;
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
  font-weight: 600;
}
.cont .baox ul .b_box .ipt:checked ~ .xiala,
.cont .baox ul .b_box .ipt:checked ~ .lala {
  height: auto;
  padding-bottom: 2.88rem;
}
.cont .baox ul .b_box .ipt:checked ~ .ccc {
  opacity: 1;
  height: 0.88rem;
}
.cont .baox ul .b_box .lala {
  position: relative;
  height: 0;
  overflow: hidden;
  transition: All 0.2s ease-in-out;
  -webkit-transition: All 0.2s ease-in-out;
  -moz-transition: All 0.2s ease-in-out;
  -o-transition: All 0.2s ease-in-out;
}
.cont .baox ul .b_box .xiala {
  position: relative;
  height: 0;
  overflow: hidden;
  transition: All 0.2s ease-in-out;
  -webkit-transition: All 0.2s ease-in-out;
  -moz-transition: All 0.2s ease-in-out;
  -o-transition: All 0.2s ease-in-out;
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
  border-bottom: 2px solid rgba(151, 151, 151, 0.3);
  width: 100%;
  line-height: 1.8rem;
}
.cont .baox ul .b_box .xiala input:focus {
  border-bottom: 2px solid #7ed321;
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
.cont .baox ul .b_wrap {
  padding: 0;
}
.cont .baox ul .b_wrap a span {
  padding-left: 0.6rem;
}
.cont .baox ul .b_wrap .lala {
  padding-bottom: 0 !important;
}
.cont .baox ul .b_wrap .lala .shuom {
  padding: 0 0.6rem;
  margin-top: 1.2rem;
}
.cont .baox ul .b_wrap .lala .shuom .xian {
  padding: 1.84rem 0.96rem 0.96rem;
  border: 2px solid #f84646;
  position: relative;
}
.cont .baox ul .b_wrap .lala .shuom .xian p {
  position: absolute;
  height: 1.6rem;
  background: #f84646;
  font-size: 0.96rem;
  color: #ffffff;
  text-align: center;
  padding: 0 0.8rem;
  top: -0.8rem;
  margin-left: 2.5%;
  line-height: 1.6rem;
}
.cont .baox ul .b_wrap .lala .shuom .xian > span {
  font-size: 0.96rem;
  letter-spacing: -0.98px;
}
.cont .baox ul .b_wrap .lala .shuom .xian > span span {
  color: #f84646;
}
.cont .baox ul .b_wrap .lala .xinx {
  width: 100%;
  margin-top: 2.48rem;
}
.cont .baox ul .b_wrap .lala .xinx .t_t {
  background: #f84646;
  height: 2.2rem;
  font-size: 1.12rem;
  color: #ffffff;
  text-align: center;
  line-height: 2.2rem;
}
.cont .baox ul .b_wrap .lala .xinx .X_cont {
  height: auto;
  width: 100%;
}
.cont .baox ul .b_wrap .lala .xinx .X_cont .t_txts .textarea {
  min-height: 1.8rem;
  width: 93%;
  height: 1.8rem;
  font-size: 1rem;
  line-height: 1.8rem;
  padding: 0 2% ;
  border: 0;
  border-bottom: 1px solid rgba(151, 151, 151, 0.3);
}
.cont .baox ul .b_wrap .lala .xinx .X_cont .textarea:focus {
  border: 0;
}
.cont .baox ul .b_wrap .lala .xinx .X_cont .ren {
  font-size: 0.96rem;
  color: #333333;
  border-bottom: 2px solid rgba(151, 151, 151, 0.3);
  padding-bottom: 0.6rem;
}
.cont .baox ul .b_wrap .lala .xinx .X_cont .ren div {
  overflow: hidden;
}
.cont .baox ul .b_wrap .lala .xinx .X_cont .ren div label {
  width: 50%;
  display: block;
  float: left;
  height: 2.2rem;
}
.cont .baox ul .b_wrap .lala .xinx .X_cont .ren div label input {
  vertical-align: middle;
  width: 1.2rem;
  height: 1.2rem;
}
.cont .baox ul .b_wrap .lala .xinx .X_cont .ren label.la input {
  vertical-align: middle;
  width: 1.2rem;
  height: 1.2rem;
}
.cont .baox ul .b_wrap .lala .xinx .X_cont .ren .i_ipt {
  border-bottom: 2px solid rgba(151, 151, 151, 0.3);
  font-size: 0.96rem;
  color: #333333;
  width: 70%;
}
.cont .baox ul .b_wrap .lala .xinx .X_cont .s_yn {
  border-bottom: 2px solid rgba(151, 151, 151, 0.3);
}
.cont .baox ul .b_wrap .lala .xinx .X_cont .s_yn .shebao {
  width: 100%;
  font-size: 0.96rem;
  letter-spacing: -0.57px;
  height: 2.2rem;
}
.cont .baox ul .b_wrap .lala .xinx .X_cont .s_yn .shebao input {
  width: 1.2rem;
  height: 1.2rem;
  vertical-align: middle;
}
.cont .baox ul .b_wrap .lala .xinx .X_cont .s_yn .shebao input[type="text"] {
  width: 77%;
  border-bottom: 2px solid rgba(151, 151, 151, 0.3);
  font-size: 0.96rem;
}
.cont .baox ul .b_wrap .lala .xinx .X_cont .sex {
  font-size: 0.96rem;
  color: #333333;
  border-bottom: 2px solid rgba(151, 151, 151, 0.3);
  padding-bottom: 0.2rem;
}
.cont .baox ul .b_wrap .lala .xinx .X_cont .sex input {
  width: 1.2rem;
  height: 1.2rem;
  vertical-align: middle;
}
.cont .baox ul .b_wrap .lala .xinx .X_cont .s_p {
  font-size: 0.72rem;
  color: #222;
  letter-spacing: -0.43px;
  line-height: 1.6rem;
  margin-top: 0.8rem;
}
.cont .baox ul .b_wrap .lala .xinx .X_cont .qing input {
  font-size: 0.96rem;
  border-bottom: 2px solid rgba(151, 151, 151, 0.3);
  width: 100%;
  line-height: 1.8rem;
}
.cont .baox ul .b_wrap .lala .xinx .X_cont .qing input:focus {
  border-bottom: 2px solid #7ed321;
}
.cont .baox ul .b_wrap .lala .xinx .X_cont .dizhi {
  padding-right: 0.6rem;
  font-size: 0.96rem;
}
.cont .baox ul .b_wrap .lala .xinx .X_cont .dizhi input {
  border-bottom: 2px solid rgba(151, 151, 151, 0.3);
  line-height: 2rem;
  font-size: 0.96rem;
}
.cont .baox ul .b_wrap .lala .xinx .X_cont .dizhi input:focus {
  border-bottom: 2px solid #7ed321;
}
.cont .baox ul .b_wrap .lala .xinx .X_cont .dizhi input:nth-of-type(1) {
  width: 4.32rem;
}
.cont .baox ul .b_wrap .lala .xinx .X_cont .dizhi input:nth-of-type(2) {
  width: 4.32rem;
}
.cont .baox ul .b_wrap .lala .xinx .X_cont .dizhi input:nth-of-type(3) {
  width: 8.32rem;
}
.cont .baox ul .b_wrap .lala .xinx .X_cont .dizhi input:nth-of-type(4) {
  width: 11.2rem;
}
.cont .baox ul .b_wrap .lala .xinx .X_cont .s_btn {
  height: 2rem;
  padding-right: 0.6rem;
  margin-top: 1.56rem;
}
.cont .baox ul .b_wrap .lala .xinx .X_cont .s_btn button {
  height: 2rem;
  background-image: linear-gradient(-180deg, #e52334 0%, #9f031b 100%);
  border-radius: 8px;
  width: 6rem;
  color: #fff;
  border: none;
  font-size: 0.88rem;
  float: right;
}
.cont .baox ul .b_wrap .lala .jia {
  width: auto !important;
}
.cont .baox ul .b_wrap .lala .jia ul {
  padding-left: 0.6rem;
}
.cont .baox ul .b_wrap .lala .jia > ul li {
  padding: 0;
  border-bottom: 2px solid rgba(151, 151, 151, 0.38);
  padding-bottom: 1.2rem;
  padding-right: 0.6rem;
}
.cont .baox ul .b_wrap .lala .jia > ul li .txt {
  font-size: 0.72rem;
  color: #666666;
  letter-spacing: -0.43px;
}
.cont .baox ul .b_wrap .lala .jia .tits {
  font-size: 1.12rem;
  margin: 1.4rem 0 0.52rem;
  font-weight: 600;
}
.cont .baox ul .b_wrap .lala .jia .tits .red {
  color: #f84646;
  display: inline-block;
  vertical-align: middle;
}
.cont .baox ul .b_wrap .lala .jia .s_pp {
  font-size: 0.72rem;
  letter-spacing: -0.43px;
}
.cont .baox ul .b_wrap .lala .s_btn {
  padding-bottom: 0.8rem;
}
.cont .baox ul .b_wrap .lala .btnss {
  background-color: #EDEDF2;
  height: 2rem;
  padding: 3.6rem 0.6rem;
}
.cont .baox ul .b_wrap .lala .btnss button {
  height: 100%;
  width: 100%;
  background-image: linear-gradient(-180deg, #e52334 0%, #9f031b 100%);
  border-radius: 8px;
  font-size: 0.96rem;
  color: #ffffff;
  letter-spacing: 1px;
  border: none;
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
.container {
  width: 100%;
  height: 100%;
  overflow: hidden;
  clear: both;
  /*遮罩层*/
}
.container .z_photo {
  width: 100%;
  height: auto;
  overflow: hidden;
  margin: 0.4rem 0;
}
.container .z_photo img {
  width: 100%;
  height: 100%;
}
.container .z_addImg {
  float: left;
  width: 32%;
  height: 3.64rem;
  margin: 0 .5% 1.6%;
}
.container .z_addImg img {
  width: 100% !important;
  height: 100% !important;
  margin: 0 !important;
  padding: 0 !important;
}
.container .z_file {
  float: left;
  width: 32%;
  height: 3.56rem;
  
  background: url("../../static/jia.png") no-repeat center center;
  background-size: 46%;
  border: 1px solid #ccc;
  margin: 0 .5% 1.6%;
}
.container .z_file input::-webkit-file-upload-button {
  width: 100%;
  height: 100%;
  border: none;
  outline: 0;
  opacity: 0;
}
.container .z_file input#file {
  display: block;
  border: 0;
  width: 100%;
  height: 100%;
  vertical-align: middle;
}
.container .z_mask {
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
  display: none;
}
.container .z_alert {
  width: 3rem;
  height: 2rem;
  border-radius: .2rem;
  background: #fff;
  font-size: .24rem;
  text-align: center;
  position: absolute;
  left: 50%;
  top: 50%;
  margin-left: -1.5rem;
  margin-top: -2rem;
}
.container .z_alert p:nth-child(1) {
  line-height: 1.5rem;
}
.container .z_alert p:nth-child(2) span {
  display: inline-block;
  width: 49%;
  height: .5rem;
  line-height: .5rem;
  float: left;
  border-top: 1px solid #ddd;
}
.container .z_cancel {
  border-right: 1px solid #ddd;
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
.s_mask .T_cont {
  margin: 1rem;
}
.s_mask p {
  font-size: 0.72rem !important;
  color: #666666;
  letter-spacing: -0.44px;
  margin: 0 !important;
  padding: 0 !important;
  line-height: 1rem;
}
.s_mask button {
  width: 96% !important;
}
::-webkit-input-placeholder {
  color: #ccc;
}
:-moz-placeholder {
  /* Mozilla Firefox 4 to 18 */
  color: #ccc;
}
::-moz-placeholder {
  /* Mozilla Firefox 19+ */
  color: #ccc;
}
:-ms-input-placeholder {
  /* Internet Explorer 10+ */
  color: #ccc;
}

</style>