import axios from 'axios'

var API = 'http://www.ailaihuzhu.com/i/';
var data='';
export const test= (cb) =>{
	axios({
		method:'POST',
		url:API,
		data:{
			cmd: 'alhz_askhelp_acquit',
			// name:'bc',
			// phone:'123',
			// idcard:'1234',
			// openid:'111',
			// type:1,
			id:'1',
			// sex:1,
			// openid:'1',
			// planid:'1',
			// relation:'1',
			// money:1,
			// project:'1',
			// resume:'1',
			// materials:'1',
			// planid:'1'
	
		},
		headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        }
	}).then(function(res){
		// typeos cb=='function'&&cb(res);
		typeof cb == "function" && cb(res);
	}).catch(function(err){
		console.log(err);
	})
	
	// axios.post(api,{

	// }).then(function(res){
 //        typeof cb == "function" && cb(res);

	// }).catch(function(err){
	// 	console.log(err);
	// })
}

