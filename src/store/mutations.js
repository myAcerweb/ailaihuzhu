// import  getters from './getters'


const state={
	footer:true,
	homeInfo:{}
};

const mutations={
	hideFooter(state){
		state.footer=false;
	},
	showFooter(state){
		state.footer=true;
	}
	// openid(state,res){
	// 	console.log(res);
	// 	state.homeInfo = res.data;
	// }
};

const getters={
		footerShow:(state)=>{
			return state.footer;
		}
		// getHomeInfo:(state)=>{
		// 	return state.homeInfo
		// }
}

export default{
	state,
	mutations,
	getters
}