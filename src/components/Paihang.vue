<template>
	<div id="paihang">
		<div class="pub_header">
		    <div onclick="window.history.go(-1);" class="pub_back">
		        <a >
		            <img :src="imgPaihangreturn">
		            <!-- <img src="img/return.png"> -->
		        </a>
		        <span>返回</span>
		    </div>

		    <span>排行榜</span>
		</div>
		<div class="mainBox">
		    <div class="firstBox">
		        <div class="menuBox">
		            <ul>
		                <li class="liactive">爱心榜</li>
		                <li >分享榜</li>
		                <li >评论榜</li>
		            </ul>
		        </div>
		        <div class="contentBox">
		            <ul class="s_list">
		                <li class="s_num">
		                    <div class="s_tir">
		                    	 <img :src="imgPaihangs_tu">
		                        <!-- <img src="./img/s_tu.png" alt=""> -->
		                        <p>爱心人气王：<span>邹辉</span></p>
		                    </div>
		                    <ul class="s_rlist">
		                        <li>
		                            <div class="s_nmb">1</div>
		                            <div class="s_img">
		                                 <img :src="imgPaihangs_tu">
		                                <!-- <img src="./img/s_tu.png" alt=""> -->
		                            </div>
		                            <div class="s_center">
		                                <p class="name"><span>邹辉</span> <span>936</span></p>
		                                <!-- <p class="wei"><span>上海</span><span>顾村公园</span></p> -->
		                            </div>
		                            <div class="zan">
		                                <img :src="imgPaihangs_zan">
		                                <!-- <img src="./img/s_zan.png" alt=""> -->
		                                <p>992</p>
		                            </div>
		                        </li>
		                        <li>
		                            <div class="s_nmb">2</div>
		                            <div class="s_img">
		                                 <img :src="imgPaihangs_tu">
		                                <!-- <img src="./img/s_tu.png" alt=""> -->
		                            </div>
		                            <div class="s_center">
		                                <p class="name"><span>黄八月</span> <span>902</span></p>
		                                <!-- <p class="wei"><span>上海</span><span>顾村公园</span></p> -->
		                            </div>
		                            <div class="zan">
		                                <img :src="imgPaihangs_zan">
		                                <!-- <img src="./img/s_zan.png" alt=""> -->
		                                <p>953</p>
		                            </div>
		                        </li>
		                        <li>
		                            <div class="s_nmb">3</div>
		                            <div class="s_img">
		                                 <img :src="imgPaihangs_tu">
		                                <!-- <img src="./img/s_tu.png" alt=""> -->
		                            </div>
		                            <div class="s_center">
		                                <p class="name"><span>清风明月</span> <span>875</span></p>
		                                <!-- <p class="wei"><span>上海</span><span>顾村公园</span></p> -->
		                            </div>
		                            <div class="zan">
		                                <img :src="imgPaihangs_zan">
		                                <!-- <img src="./img/s_zan.png" alt=""> -->
		                                <p>890</p>
		                            </div>
		                        </li>
		                        <li>
		                            <div class="s_nmb">4</div>
		                            <div class="s_img">
		                                 <img :src="imgPaihangs_tu">
		                                <!-- <img src="./img/s_tu.png" alt=""> -->
		                            </div>
		                            <div class="s_center">
		                                <p class="name"><span>夕阳美</span> <span>853</span></p>
		                                <!-- <p class="wei"><span>上海</span><span>顾村公园</span></p> -->
		                            </div>
		                            <div class="zan">
		                                <img :src="imgPaihangs_zan">
		                                <!-- <img src="./img/s_zan.png" alt=""> -->
		                                <p>851</p>
		                            </div>
		                        </li>
		                        <li>
		                            <div class="s_nmb">5</div>
		                            <div class="s_img">
		                                 <img :src="imgPaihangs_tu">
		                                <!-- <img src="./img/s_tu.png" alt=""> -->
		                            </div>
		                            <div class="s_center">
		                                <p class="name"><span>一壶茶</span> <span>799</span></p>
		                                <!-- <p class="wei"><span>上海</span><span>顾村公园</span></p> -->
		                            </div>
		                            <div class="zan">
		                                <img :src="imgPaihangs_zan">
		                                <!-- <img src="./img/s_zan.png" alt=""> -->
		                                <p>681</p>
		                            </div>
		                        </li>
		                        <li>
		                            <div class="s_nmb">6</div>
		                            <div class="s_img">
		                                 <img :src="imgPaihangs_tu">
		                                <!-- <img src="./img/s_tu.png" alt=""> -->
		                            </div>
		                            <div class="s_center">
		                                <p class="name"><span>山茶花</span> <span>667</span></p>
		                                <!-- <p class="wei"><span>上海</span><span>顾村公园</span></p> -->
		                            </div>
		                            <div class="zan">
		                                <img :src="imgPaihangs_zan">
		                                <!-- <img src="./img/s_zan.png" alt=""> -->
		                                <p>520</p>
		                            </div>
		                        </li>
		                        <li>
		                            <div class="s_nmb">7</div>
		                            <div class="s_img">
		                                 <img :src="imgPaihangs_tu">
		                                <!-- <img src="./img/s_tu.png" alt=""> -->
		                            </div>
		                            <div class="s_center">
		                                <p class="name"><span>水果店</span> <span>653</span></p>
		                                <!-- <p class="wei"><span>上海</span><span>顾村公园</span></p> -->
		                            </div>
		                            <div class="zan">
		                                <img :src="imgPaihangs_zan">
		                                <!-- <img src="./img/s_zan.png" alt=""> -->
		                                <p>459</p>
		                            </div>
		                        </li>
		                        <li>
		                            <div class="s_nmb">8</div>
		                            <div class="s_img">
		                                 <img :src="imgPaihangs_tu">
		                                <!-- <img src="./img/s_tu.png" alt=""> -->
		                            </div>
		                            <div class="s_center">
		                                <p class="name"><span>柴主爷爷</span> <span>621</span></p>
		                                <!-- <p class="wei"><span>上海</span><span>顾村公园</span></p> -->
		                            </div>
		                            <div class="zan">
		                                <img :src="imgPaihangs_zan">
		                                <!-- <img src="./img/s_zan.png" alt=""> -->
		                                <p>468</p>
		                            </div>
		                        </li>
		                        <li>
		                            <div class="s_nmb">9</div>
		                            <div class="s_img">
		                                 <img :src="imgPaihangs_tu">
		                                <!-- <img src="./img/s_tu.png" alt=""> -->
		                            </div>
		                            <div class="s_center">
		                                <p class="name"><span>街道办</span> <span>598</span></p>
		                                <!-- <p class="wei"><span>上海</span><span>顾村公园</span></p> -->
		                            </div>
		                            <div class="zan">
		                                <img :src="imgPaihangs_zan">
		                                <!-- <img src="./img/s_zan.png" alt=""> -->
		                                <p>423</p>
		                            </div>
		                        </li>
		                        <li>
		                            <div class="s_nmb">10</div>
		                            <div class="s_img">
		                                 <img :src="imgPaihangs_tu">
		                                <!-- <img src="./img/s_tu.png" alt=""> -->
		                            </div>
		                            <div class="s_center">
		                                <p class="name"><span>九月美</span> <span>445</span></p>
		                                <!-- <p class="wei"><span>上海</span><span>顾村公园</span></p> -->
		                            </div>
		                            <div class="zan">
		                                <img :src="imgPaihangs_zan">
		                                <!-- <img src="./img/s_zan.png" alt=""> -->
		                                <p>128</p>
		                            </div>
		                        </li>
		                    </ul>

		                </li>
		                <li class="s_num">
		                    <div class="s_tir">
		                    	 <img :src="imgPaihangs_tu1">
		                        <!-- <img src="./img/s_tu.png" alt=""> -->
		                        <p>分享人气王：<span>郑彦民</span></p>
		                    </div>
		                    <ul class="s_rlist">
		                        <li>
		                            <div class="s_nmb">1</div>
		                            <div class="s_img">
		                                 <img :src="imgPaihangs_tu">
		                                <!-- <img src="./img/s_tu.png" alt=""> -->
		                            </div>
		                            <div class="s_center">
		                                <p class="name"><span>郑彦民</span> <span>912</span></p>
		                                <!-- <p class="wei"><span>上海</span><span>顾村公园</span></p> -->
		                            </div>
		                            <div class="zan">
		                                <img :src="imgPaihangs_zan">
		                                <!-- <img src="./img/s_zan.png" alt=""> -->
		                                <p>989</p>
		                            </div>
		                        </li>
		                        <li>
		                            <div class="s_nmb">2</div>
		                            <div class="s_img">
		                                <img :src="imgPaihangs_tu">
		                                <!-- <img src="./img/s_tu.png" alt=""> -->
		                            </div>
		                            <div class="s_center">
		                                <p class="name"><span>九月美</span> <span>856</span></p>
		                                <!-- <p class="wei"><span>上海</span><span>顾村公园</span></p> -->
		                            </div>
		                            <div class="zan">
		                                <img :src="imgPaihangs_zan">
		                                <!-- <img src="./img/s_zan.png" alt=""> -->
		                                <p>895</p>
		                            </div>
		                        </li>
		                        <li>
		                            <div class="s_nmb">3</div>
		                            <div class="s_img">
		                                <img :src="imgPaihangs_tu">
		                                <!-- <img src="./img/s_tu.png" alt=""> -->
		                            </div>
		                            <div class="s_center">
		                                <p class="name"><span>山楂花</span> <span>845</span></p>
		                                <!-- <p class="wei"><span>上海</span><span>顾村公园</span></p> -->
		                            </div>
		                            <div class="zan">
		                                <img :src="imgPaihangs_zan">
		                                <!-- <img src="./img/s_zan.png" alt=""> -->
		                                <p>853</p>
		                            </div>
		                        </li>
		                        <li>
		                            <div class="s_nmb">4</div>
		                            <div class="s_img">
		                                <img :src="imgPaihangs_tu">
		                                <!-- <img src="./img/s_tu.png" alt=""> -->
		                            </div>
		                            <div class="s_center">
		                                <p class="name"><span>柴主爷爷</span> <span>812</span></p>
		                                <!-- <p class="wei"><span>上海</span><span>顾村公园</span></p> -->
		                            </div>
		                            <div class="zan">
		                                <img :src="imgPaihangs_zan">
		                                <!-- <img src="./img/s_zan.png" alt=""> -->
		                                <p>798</p>
		                            </div>
		                        </li>
		                        <li>
		                            <div class="s_nmb">5</div>
		                            <div class="s_img">
		                                <img :src="imgPaihangs_tu">
		                                <!-- <img src="./img/s_tu.png" alt=""> -->
		                            </div>
		                            <div class="s_center">
		                                <p class="name"><span>水果店</span> <span>789</span></p>
		                                <!-- <p class="wei"><span>上海</span><span>顾村公园</span></p> -->
		                            </div>
		                            <div class="zan">
		                                <img :src="imgPaihangs_zan">
		                                <!-- <img src="./img/s_zan.png" alt=""> -->
		                                <p>656</p>
		                            </div>
		                        </li>
		                        <li>
		                            <div class="s_nmb">6</div>
		                            <div class="s_img">
		                                <img :src="imgPaihangs_tu">
		                                <!-- <img src="./img/s_tu.png" alt=""> -->
		                            </div>
		                            <div class="s_center">
		                                <p class="name"><span>海洋</span> <span>936</span></p>
		                                <!-- <p class="wei"><span>上海</span><span>顾村公园</span></p> -->
		                            </div>
		                            <div class="zan">
		                                <img :src="imgPaihangs_zan">
		                                <!-- <img src="./img/s_zan.png" alt=""> -->
		                                <p>999</p>
		                            </div>
		                        </li>
		                        <li>
		                            <div class="s_nmb">7</div>
		                            <div class="s_img">
		                                <img :src="imgPaihangs_tu">
		                                <!-- <img src="./img/s_tu.png" alt=""> -->
		                            </div>
		                            <div class="s_center">
		                                <p class="name"><span>一壶茶</span> <span>936</span></p>
		                                <!-- <p class="wei"><span>上海</span><span>顾村公园</span></p> -->
		                            </div>
		                            <div class="zan">
		                                <img :src="imgPaihangs_zan">
		                                <!-- <img src="./img/s_zan.png" alt=""> -->
		                                <p>999</p>
		                            </div>
		                        </li>
		                        <li>
		                            <div class="s_nmb">8</div>
		                            <div class="s_img">
		                                <img :src="imgPaihangs_tu">
		                                <!-- <img src="./img/s_tu.png" alt=""> -->
		                            </div>
		                            <div class="s_center">
		                                <p class="name"><span>夕阳美</span> <span>936</span></p>
		                                <!-- <p class="wei"><span>上海</span><span>顾村公园</span></p> -->
		                            </div>
		                            <div class="zan">
		                                <img :src="imgPaihangs_zan">
		                                <!-- <img src="./img/s_zan.png" alt=""> -->
		                                <p>999</p>
		                            </div>
		                        </li>
		                        <li>
		                            <div class="s_nmb">9</div>
		                            <div class="s_img">
		                                <img :src="imgPaihangs_tu">
		                                <!-- <img src="./img/s_tu.png" alt=""> -->
		                            </div>
		                            <div class="s_center">
		                                <p class="name"><span>清风明月</span> <span>936</span></p>
		                                <!-- <p class="wei"><span>上海</span><span>顾村公园</span></p> -->
		                            </div>
		                            <div class="zan">
		                                <img :src="imgPaihangs_zan">
		                                <!-- <img src="./img/s_zan.png" alt=""> -->
		                                <p>999</p>
		                            </div>
		                        </li>
		                        <li>
		                            <div class="s_nmb">10</div>
		                            <div class="s_img">
		                                <img :src="imgPaihangs_tu">
		                                <!-- <img src="./img/s_tu.png" alt=""> -->
		                            </div>
		                            <div class="s_center">
		                                <p class="name"><span>水果店</span> <span>936</span></p>
		                                <!-- <p class="wei"><span>上海</span><span>顾村公园</span></p> -->
		                            </div>
		                            <div class="zan">
		                                <img :src="imgPaihangs_zan">
		                                <!-- <img src="./img/s_zan.png" alt=""> -->
		                                <p>999</p>
		                            </div>
		                        </li>
		                    </ul>

		                </li>
		                <li class="s_num">
		                    <div class="s_tir">
		                        <img :src="imgPaihangs_tu2">
		                        <!-- <img src="./img/s_tu.png" alt=""> -->
		                        <p>评论人气王：<span>赵峰</span></p>
		                    </div>
		                    <ul class="s_rlist">
		                        <li>
		                            <div class="s_nmb">1</div>
		                            <div class="s_img">
		                                <img :src="imgPaihangs_tu">
		                                <!-- <img src="./img/s_tu.png" alt=""> -->
		                            </div>
		                            <div class="s_center">
		                                <p class="name"><span>赵峰</span> <span>936</span></p>
		                                <!-- <p class="wei"><span>上海</span><span>顾村公园</span></p> -->
		                            </div>
		                            <div class="zan">
		                                <img :src="imgPaihangs_zan">
		                                <!-- <img src="./img/s_zan.png" alt=""> -->
		                                <p>999</p>
		                            </div>
		                        </li>
		                        <li>
		                            <div class="s_nmb">2</div>
		                            <div class="s_img">
		                                <img :src="imgPaihangs_tu">
		                                <!-- <img src="./img/s_tu.png" alt=""> -->
		                            </div>
		                            <div class="s_center">
		                                <p class="name"><span>街道办</span> <span>936</span></p>
		                                <!-- <p class="wei"><span>上海</span><span>顾村公园</span></p> -->
		                            </div>
		                            <div class="zan">
		                                <img :src="imgPaihangs_zan">
		                                <!-- <img src="./img/s_zan.png" alt=""> -->
		                                <p>999</p>
		                            </div>
		                        </li>
		                        <li>
		                            <div class="s_nmb">3</div>
		                            <div class="s_img">
		                                <img :src="imgPaihangs_tu">
		                                <!-- <img src="./img/s_tu.png" alt=""> -->
		                            </div>
		                            <div class="s_center">
		                                <p class="name"><span>水果店</span> <span>936</span></p>
		                                <!-- <p class="wei"><span>上海</span><span>顾村公园</span></p> -->
		                            </div>
		                            <div class="zan">
		                                <img :src="imgPaihangs_zan">
		                                <!-- <img src="./img/s_zan.png" alt=""> -->
		                                <p>999</p>
		                            </div>
		                        </li>
		                        <li>
		                            <div class="s_nmb">4</div>
		                            <div class="s_img">
		                                <img :src="imgPaihangs_tu">
		                                <!-- <img src="./img/s_tu.png" alt=""> -->
		                            </div>
		                            <div class="s_center">
		                                <p class="name"><span>海洋</span> <span>936</span></p>
		                                <!-- <p class="wei"><span>上海</span><span>顾村公园</span></p> -->
		                            </div>
		                            <div class="zan">
		                                <img :src="imgPaihangs_zan">
		                                <!-- <img src="./img/s_zan.png" alt=""> -->
		                                <p>999</p>
		                            </div>
		                        </li>
		                        <li>
		                            <div class="s_nmb">5</div>
		                            <div class="s_img">
		                                <img :src="imgPaihangs_tu">
		                                <!-- <img src="./img/s_tu.png" alt=""> -->
		                            </div>
		                            <div class="s_center">
		                                <p class="name"><span>山茶花</span> <span>936</span></p>
		                                <!-- <p class="wei"><span>上海</span><span>顾村公园</span></p> -->
		                            </div>
		                            <div class="zan">
		                                <img :src="imgPaihangs_zan">
		                                <!-- <img src="./img/s_zan.png" alt=""> -->
		                                <p>999</p>
		                            </div>
		                        </li>
		                        <li>
		                            <div class="s_nmb">6</div>
		                            <div class="s_img">
		                                <img :src="imgPaihangs_tu">
		                                <!-- <img src="./img/s_tu.png" alt=""> -->
		                            </div>
		                            <div class="s_center">
		                                <p class="name"><span>一壶清茶</span> <span>936</span></p>
		                                <!-- <p class="wei"><span>上海</span><span>顾村公园</span></p> -->
		                            </div>
		                            <div class="zan">
		                                <img :src="imgPaihangs_zan">
		                                <!-- <img src="./img/s_zan.png" alt=""> -->
		                                <p>999</p>
		                            </div>
		                        </li>
		                        <li>
		                            <div class="s_nmb">7</div>
		                            <div class="s_img">
		                                <img :src="imgPaihangs_tu">
		                                <!-- <img src="./img/s_tu.png" alt=""> -->
		                            </div>
		                            <div class="s_center">
		                                <p class="name"><span>夕阳美</span> <span>936</span></p>
		                                <!-- <p class="wei"><span>上海</span><span>顾村公园</span></p> -->
		                            </div>
		                            <div class="zan">
		                                <img :src="imgPaihangs_zan">
		                                <!-- <img src="./img/s_zan.png" alt=""> -->
		                                <p>999</p>
		                            </div>
		                        </li>
		                        <li>
		                            <div class="s_nmb">8</div>
		                            <div class="s_img">
		                                <img :src="imgPaihangs_tu">
		                                <!-- <img src="./img/s_tu.png" alt=""> -->
		                            </div>
		                            <div class="s_center">
		                                <p class="name"><span>清风明月</span> <span>936</span></p>
		                                <!-- <p class="wei"><span>上海</span><span>顾村公园</span></p> -->
		                            </div>
		                            <div class="zan">
		                               <img :src="imgPaihangs_zan">
		                                <!-- <img src="./img/s_zan.png" alt=""> -->
		                                <p>999</p>
		                            </div>
		                        </li>
		                        <li>
		                            <div class="s_nmb">9</div>
		                            <div class="s_img">
		                                <img :src="imgPaihangs_tu">
		                                <!-- <img src="./img/s_tu.png" alt=""> -->
		                            </div>
		                            <div class="s_center">
		                                <p class="name"><span>柴主爷爷</span> <span>936</span></p>
		                                <!-- <p class="wei"><span>上海</span><span>顾村公园</span></p> -->
		                            </div>
		                            <div class="zan">
		                                <img :src="imgPaihangs_zan">
		                                <!-- <img src="./img/s_zan.png" alt=""> -->
		                                <p>999</p>
		                            </div>
		                        </li>
		                        <li>
		                            <div class="s_nmb">10</div>
		                            <div class="s_img">
		                                <img :src="imgPaihangs_tu">
		                                <!-- <img src="./img/s_tu.png" alt=""> -->
		                            </div>
		                            <div class="s_center">
		                                <p class="name"><span>九月美</span> <span>936</span></p>
		                                <!-- <p class="wei"><span>上海</span><span>顾村公园</span></p> -->
		                            </div>
		                            <div class="zan">
		                                <img :src="imgPaihangs_zan">
		                                <!-- <img src="./img/s_zan.png" alt=""> -->
		                                <p>999</p>
		                            </div>
		                        </li>
		                    </ul>

		                </li>
		            </ul>
		        </div>
		    </div>
    	</div>
	</div>
</template>
<script>
export default{
	data(){
		return{
			imgPaihangs_zan:'./static/s_zan.png',
			imgPaihangs_tu:'./static/s_tu.png',
			imgPaihangs_tu1:'./static/s_tu1.jpg',
			imgPaihangs_tu2:'./static/s_tu2.jpg',
			imgPaihangreturn:'./static/return.png'
		}
	},
	mounted(){
		(function(win,tcf){
			var doc    		= win.document;
			var docEl  		= doc.documentElement;
			var metaEl 		= doc.querySelector('meta[name="viewport"]');
			var dpr    		= 0;
			var scale  		= 0;
			var handler	 	= null;

			var flexible = tcf.flexible || (tcf.flexible = {});

			// if (metaEl) {
			// 	console.warn('将根据已有的meta标签来设置缩放比例');
			// 	var match = metaEl.getAttribute('content').match(/initial\-scale=([\d\.]+)/);
			// 	if (match){
			// 		scale = parseFloat(match[1]);
			// 		dpr = parseInt(1 / scale);
			// 	}
			// }

			if (!dpr && !scale) {
				var isAndroid 		 = win.navigator.appVersion.match(/android/gi);
				var isIPhone 		 = win.navigator.appVersion.match(/iphone/gi);
				var isliebao 		 = win.navigator.appVersion.match(/LieBaoFast/gi);
				var devicePixelRatio = Math.floor(win.devicePixelRatio)||1;
				if (isIPhone) {
					if (devicePixelRatio >= 3 && (!dpr || dpr >= 3)) {
						dpr = 3;
					} else if (devicePixelRatio >= 2 && (!dpr || dpr >= 2)){
						dpr = 2;
					} else {
						dpr = 1;
					}

					doc.body.classList.add('iphone');

				}else if(isliebao){
					dpr = 1;
					doc.body.classList.add('liebao');
				} else {

					dpr = devicePixelRatio;
					doc.body.classList.add('android');
				}
				scale = 1 / dpr;
			}

			docEl.setAttribute('data-dpr', dpr);

			if (!metaEl) {

				metaEl = doc.createElement('meta');
				metaEl.setAttribute('name', 'viewport');
				metaEl.setAttribute('content', 'initial-scale=' + scale + ', maximum-scale=' + scale + ', minimum-scale=' + scale + ',user-scalable=no');
				if (docEl.firstElementChild) {
					docEl.firstElementChild.appendChild(metaEl);
				} else {
					var wrap = doc.createElement('div');
					wrap.appendChild(metaEl);
					doc.write(wrap.innerHTML);
				}
			}

			var setFontSize = function(){
				var width = docEl.getBoundingClientRect().width||innerWidth;

				var rem = width / 10;
				docEl.style.fontSize =  rem+'px';
				flexible.width = width;
				flexible.rem = win.rem = rem;
			};

			['resize','orientationchange'].forEach(function(item){
				win.addEventListener(item, function(e) {
					clearTimeout(handler);
					handler = setTimeout(setFontSize, 300);
				}, false);
			})

			win.addEventListener('pageshow', function(e) {
				if (e.persisted) {
					clearTimeout(handler);
					handler = setTimeout(setFontSize, 300);
				}
			}, false);

			if (doc.readyState === 'complete') {
				doc.body.style.fontSize = 12 * dpr + 'px';
			} else {
				doc.addEventListener('DOMContentLoaded', function(e) {
					doc.body.style.fontSize = 12 * dpr + 'px';
				}, false);
			}


			setFontSize();

			flexible.dpr = win.dpr = dpr;
			flexible.setFontSize = setFontSize;
			flexible.rem2px = function(d) {
				var val = parseFloat(d) * this.rem;
				if (typeof d === 'string' && d.match(/rem$/)) {
					val += 'px';
				}
				return val;
			}
			flexible.px2rem = function(d) {
				var val = parseFloat(d) / this.rem;
				if (typeof d === 'string' && d.match(/px$/)) {
					val += 'rem';
				}
				return val;
			}

		}(window,window['tcf'] || (window['tcf'] = {})));






		var getBox = function(className){
	        return document.querySelector("." + className)
	    };
	    var fistBoxController = (function(){
	        var firstBox = getBox("firstBox");
	        console.log(firstBox);
	        var liList = document.querySelectorAll(".menuBox li");
	        var ul = document.querySelector(".contentBox ul");
	        var controller = {
	            muneController : function(){

	                for(var i = 0; i < liList.length; i++){

	                    liList[i].addEventListener("touchstart",function(event,n){
	                        return function(){
	                            console.log(n);
	                            for(var j = 0; j < liList.length; j++){
	                                liList[j].classList.remove("liactive");

	                            }
	                            this.classList.add("liactive");
	                            ul.style.left = "-" + n * 100 + "%";
	                        }

	                    }(event,i))
	                }
	            }(),
	            contentCtroller : function(){
	                var contentBox = document.querySelector(".contentBox");

	                ul.style.left = "0%";
	                //console.log(ul);
	                //console.log(contentBox);
	                var startX,disX;
	                contentBox.addEventListener("touchstart",function(event){
	                    //console.log(event.touches[0]);
	                    console.log(event);
	                    var touche = event.touches[0];
	                    startX = touche.clientX;

	                })
	                contentBox.addEventListener("touchend",function(event){
	                    //console.log(event.changedTouches[0]);
	                    var touche = event.changedTouches[0];
	                    disX = touche.clientX - startX;
	                    var leftNum = parseInt(ul.style.left);
	                    if(disX > 0 && disX > 100){
	                        //console.log(leftNum)
	                        if(leftNum <= -100){
	                            ul.style.left = leftNum + 100 + "%";
	                            var left = (~ parseInt(ul.style.left) + 1) / 100;
	                            //console.log(left)
	                            menuController(left);
	                        }
	                    }else if(disX < 0 && disX < -100){
	                        //console.log(leftNum);
	                        if(leftNum >= -100){
	                            ul.style.left = leftNum - 100 + "%";
	                            var left = (~ parseInt(ul.style.left) + 1) / 100;
	                            //console.log(left);
	                            menuController(left);
	                        }
	                    }
	                })
	                contentBox.addEventListener("touchmove",function(event){
	                    event.stopPropagation()
	                });

	                function menuController(order){
	                    for(var i = 0; i < liList.length; i++){
	                        liList[i].classList.remove("liactive");
	                    }
	                    liList[order].classList.add("liactive");
	                }
	            }()
	        }


	    }());



	    (function () {
            window.addEventListener("orientation" in window ? "deviceorientation" : "resize", setSize);
            setSize();
            function setSize() {
                var html = document.documentElement;
                var hWidth = html.getBoundingClientRect().width;
                html.style.fontSize = hWidth / 15 + "px";//根据不同的屏幕宽度重置html的字体大小
            }
        })()
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
	.mainBox {
  width: 100%;
}
.firstBox {
  position: relative;
}
.menuBox ul {
  width: 100%;
  height: 2.52rem;
  box-shadow: 0 1px 5px #ccc;
}
.menuBox ul li {
  width: 33.333%;
  height: 2.48rem;
  text-align: center;
  font-size: 0.96rem;
  border-bottom: 1px solid #ccc;
  float: left;
  color: #333333;
  letter-spacing: -0.58px;
  line-height: 2.48rem;
}
.menuBox ul li.liactive {
  height: 2.44rem;
  border-bottom: 3px solid #d0011b;
}
.contentBox {
	overflow: hidden;
  margin-top: 0.6rem;
  width: 100%;
  background-color: #fff;
  position: relative;
  min-height: 1330px;
}
.contentBox .s_list {
  overflow: hidden;
  width: 300%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  left: 0;
  top: 0;
  transition: all 0.5s ease;
}
.contentBox .s_list .s_num {
  width: 100%;
  
}
.contentBox .s_list .s_num .s_tir {
  text-align: center;
  font-size: 0.96rem;
  color: #fff;
  width: 100%;
}
.contentBox .s_list .s_num .s_tir p {
  width: 100%;
  overflow: hidden;
}
.contentBox .s_list .s_num .s_tir p span {
  display: inline-block;
  max-width: 6rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  vertical-align: bottom;
}
.contentBox .s_list .s_num .s_tir img {
  height: 4.4rem;
  width: 4.4rem;
  border: 3px solid #fff;
  border-radius: 50%;
  margin-top: 0.96rem;
}	
.contentBox .s_list .s_num .s_tir {
  height: 8.44rem;
  background: url("../../static/banners.png") no-repeat center center;
  -webkit-background-size: cover;
  background-size: cover;
}
.contentBox .s_list .s_num .s_rlist {
  overflow: hidden;
  padding-left: 0.64rem;
}
.contentBox .s_list .s_num .s_rlist li {
  overflow: hidden;
  height: 4.36rem;
  border-bottom: 1px solid rgba(151, 151, 151, 0.38);
  position: relative;
}
.contentBox .s_list .s_num .s_rlist li div {
  float: left;
}
.contentBox .s_list .s_num .s_rlist li .zan {
  position: absolute;
  right: 0.8rem;
  top: 1.3rem;
  text-align: center;
  color: #d0011b;
  width: 1.24rem;
  height: 2rem;
}
.contentBox .s_list .s_num .s_rlist li .zan img {
  width: 0.8rem;
  display: block;
  margin: 0 0.22rem 0.12rem 0.22rem;
}
.contentBox .s_list .s_num .s_rlist li .zan p{
  font-size: 0.6rem;
  width: 100%;
  text-align: center;
}
.contentBox .s_list .s_num .s_rlist li .s_nmb {
  font-size: 1.44rem;
  color: #f6a623;
  line-height: 4.44rem;
}
.contentBox .s_list .s_num .s_rlist li .s_img {
  width: 2.4rem;
  height: 100%;
  padding-left: 0.6rem;
}
.contentBox .s_list .s_num .s_rlist li .s_img img {
  width: 2.4rem;
  height: 2.4rem;
  text-align: right;
  border-radius: 50%;
  overflow: hidden;
  margin-top: 1.08rem;
}
.contentBox .s_list .s_num .s_rlist li .s_center {
  height: 100%;
  margin-left: 0.8rem;
}
.contentBox .s_list .s_num .s_rlist li .s_center .wei {
  width: 100%;
  font-size: 0.72rem;
  background: url("../../static/s_ding.png") no-repeat 0 25%;
  -webkit-background-size: 7%;
  background-size: 7%;
  margin-top: 0.12rem;
}
.contentBox .s_list .s_num .s_rlist li .s_center .wei span {
  margin-left: 7%;
  display: inline-block;
  max-width: 3.6rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.contentBox .s_list .s_num .s_rlist li .s_center .name {
  font-size: 0.96rem;
  /*margin-top: 1.12rem;*/
  overflow: hidden;
}
.contentBox .s_list .s_num .s_rlist li .s_center .name span {
  display: block;
  float: left;
}
.contentBox .s_list .s_num .s_rlist li .s_center .name span:nth-of-type(1) {
  display: block;
  width: 4rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  /*margin-right: 0.8rem;*/
  height: 100%;
  line-height: 4.36rem;
}
.contentBox .s_list .s_num .s_rlist li .s_center .name span:nth-of-type(2) {
  display: block;
  width: 3.2rem;
  font-size: 1.5rem;
  color: red;
  line-height: 4.36rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  height: 100%;
}
.contentBox .s_list .s_num .s_rlist li:nth-of-type(1) .s_img {
  background: url("../../static/s_jin.png") no-repeat 18% 18%;
  background-size: 35%;
}
.contentBox .s_list .s_num .s_rlist li:nth-of-type(1) .s_nmb {
  color: #d0011b;
}
.contentBox .s_list .s_num .s_rlist li:nth-of-type(2) .s_img {
  background: url("../../static/s_yin.png") no-repeat 18% 18%;
 /* background: url("../img/s_yin.png") no-repeat 18% 18%;*/
  background-size: 35%;
}
.contentBox .s_list .s_num .s_rlist li:nth-of-type(2) .s_nmb {
  color: #d0011b;
}
.contentBox .s_list .s_num .s_rlist li:nth-of-type(3) .s_img {
  
  background: url('../../static/s_tong.png') no-repeat 18% 18%;
  background-size: 35%;
}
.contentBox .s_list .s_num .s_rlist li:nth-of-type(3) .s_nmb {
  color: #d0011b;
}

</style>