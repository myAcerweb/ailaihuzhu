window.onload = function () {
	(function(win,tcf){
		var doc    		= win.document;
		var docEl  		= doc.documentElement;
		var metaEl 		= doc.querySelector('meta[name="viewport"]');
		var dpr    		= 0;
		var scale  		= 0;
		var handler	 	= null;

		var flexible = tcf.flexible || (tcf.flexible = {});

		if (metaEl) {
			console.warn('将根据已有的meta标签来设置缩放比例');
			var match = metaEl.getAttribute('content').match(/initial\-scale=([\d\.]+)/);
			if (match){
				scale = parseFloat(match[1]);
				dpr = parseInt(1 / scale);
			}
		}

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

	}(window,window['tcf'] || (window['tcf'] = {})))
};

