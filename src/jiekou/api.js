import axios from 'axios'
const API = 'https://www.ailaihuzhu.com/i/';

export const PAY = (cb) => {
    axios.post(API, {
		     cmd:'alhz_game_join',
		     token:localStorage.token,
		     money: 1
    }).then((res) => {
      cb(res)
    }).catch((err) => {
      console.log(err)
    })
}

export const wxpay = ({data}) => {    //  微信支付接口
        console.log(data)
				function onBridgeReady(){
				  	WeixinJSBridge.invoke(
                  'getBrandWCPayRequest', {
				           "appId": data.payinfo.appid[0],
				           "timeStamp": '' + data.payinfo.timeStamp + '',    
				           "nonceStr": data.payinfo.nonceStr[0],     
				           "package": 'prepay_id=' + data.payinfo.package[0],   
				           "signType":"MD5",              
				           "paySign": data.payinfo.paySign
				       },
				       function(res){   
								 console.log(res)  
				           if(res.err_msg == "get_brand_wcpay_request:ok" ) {
				           	console.log('ok',err);
				           };     // 使用以上方式判断前端返回,微信团队郑重提示：res.err_msg将在用户支付成功后返回    ok，但并不保证它绝对可靠。 
				           console.log(res);
				       }
				   );
				}
				if (typeof WeixinJSBridge == "undefined"){
				   if( document.addEventListener ){
				       document.addEventListener('WeixinJSBridgeReady', onBridgeReady, false);
				   }else if (document.attachEvent){
				       document.attachEvent('WeixinJSBridgeReady', onBridgeReady); 
				       document.attachEvent('onWeixinJSBridgeReady', onBridgeReady);
				   }
				}else{
				   onBridgeReady();
				}
	 }
		
export const GETMAINPAGE =  (code) => {   //  HOME 页面 获取主页信息
  return new Promise((resolve, reject) => {
	axios.post(API, {
	  cmd: 'alhz_home',
	  code: code
	}).then((res) => {
      resolve(res)
	}).catch((err) => {
	  reject(err)
	})
  })
}

// 圆梦充值列表
export const GETDREAM = () => {
  return new Promise((resolve, reject) => {
	  axios.post(API, {
		  cmd: 'alhz_askhelp_loadby'
	  }).then((res) => {
		resolve(res)
	  }).catch((err) => {
		reject(err)
	  })
  })
}


// 圆梦充值微信支付 
export const DONATIONSPAY = (ahpno = 0, money) => {
	if (isNaN(money) && parseFloat(money)) return false
	return new Promise((resolve, reject) => {
		axios.post(API, {
			cmd: 'alhz_donations_pay',
			token: localStorage.token,
			ahpno: ahpno,
			money: parseFloat(money)
		}).then((res) => {
			resolve(res)
		}).catch((err) => {
			reject(err)
		})
	})
}

//功德榜接口
export const DONATIONSFIRST = () => {
	return new Promise((resolve, reject) => {
		axios.post(API, {
			cmd: 'alhz_donations_first'
		}).then((res) => {
			resolve(res)
		}).catch((err) => {
			reject(err)
		})
	})
}