<template>
	<div>
		<h3>接口测试页面</h3>
		<router-link tag='button' to='/payTest'>调制payTest页面</router-link>
		<button @click='wxpay'>微信支付</button>
	</div>
</template>
<script type="text/javascript">
	export default{
		data(){
			return{

			}
		},
		methods:{

			
		},
		mounted(){

			
			


			//接口测试10
			// this.$http({
			// 	method:'POST',
		 //        url:'https://www.ailaihuzhu.com/i/',
		 //        data:{
		 //          cmd:'alhz_signin',
		 //          token:localStorage.token,
		 //          openid:'11111'
		 //        },
		 //        headers: {
		 //            'Content-Type': 'application/json'
		 //        }
			// }).then(function(res){
			// 	console.log('接口10',res);

			// }).catch(function(err){
			// 	console.log(err);
			// }),


			//接口测试11
			// this.$http({
			// 	method:'POST',
		 //        url:'https://www.ailaihuzhu.com/i/',
		 //        data:{
		 //          cmd:'alhz_player_account',
		 //          token:localStorage.token,
		 //          openid:'11111'
		 //        },
		 //        headers: {
		 //            'Content-Type': 'application/json'
		 //        }
			// }).then(function(res){
			// 	console.log('接口11',res);

			// }).catch(function(err){
			// 	console.log(err);
			// }),


			//接口测试12
			// this.$http({
			// 	method:'POST',
		 //        url:'https://www.ailaihuzhu.com/i/',
		 //        data:{
		 //          cmd:'alhz_player_account',
		 //          token:localStorage.token,
		 //          page:1,
		 //          ofpage:3
		 //        },
		 //        headers: {
		 //            'Content-Type': 'application/json'
		 //        }
			// }).then(function(res){
			// 	console.log('接口12',res);

			// }).catch(function(err){
			// 	console.log(err);
			// })

			//1注册接口测试
			// this.$http({
			// 	method:'POST',
		 //        url:'https://www.ailaihuzhu.com/i/',
		 //        data:{
		 //          cmd:'alhz_login',
		 //          token:localStorage.token,
		 //          openid:'11111'
		 //        },
		 //        headers: {
		 //            'Content-Type': 'application/json'
		 //        }
			// }).then(function(res){
			// 	console.log('注册接口',res);

			// }).catch(function(err){
			// 	console.log(err);
			// }),

			//2读取用户的详细信息接口测试
			// this.$http({
			// 	method:'POST',
		 //        url:'https://www.ailaihuzhu.com/i/',
		 //        data:{
		 //          cmd:'alhz_player_acquit',
		 //          token:localStorage.token,
		 //          openid:'11111'
		 //        },
		 //        headers: {
		 //            'Content-Type': 'application/json'
		 //        }
			// }).then(function(res){
			// 	console.log('读取用户详细信息接口',res);

			// }).catch(function(err){
			// 	console.log(err);
			// }),

			//3完善用户的详细信息接口测试
			// this.$http({
			// 	method:'POST',
		 //        url:'https://www.ailaihuzhu.com/i/',
		 //        data:{
		 //          cmd:'alhz_player_perfect',
		 //          token:localStorage.token,
		 //          openid:'11111',
		 //          fullname:"fullname",
		 //          mobile:"mobile",
		 //          idcard:"idcard"

		 //        },
		 //        headers: {
		 //            'Content-Type': 'application/json'
		 //        }
			// }).then(function(res){
			// 	console.log('完善用户详细信息接口',res);

			// }).catch(function(err){
			// 	console.log(err);
			// }),

			//4完善用户的详细信息接口测试
			// this.$http({
			// 	method:'POST',
		 //        url:'https://www.ailaihuzhu.com/i/',
		 //        data:{
		 //          cmd:'alhz_player_punch',
		 //          token:localStorage.token,
		 //          openid:'11111'
		          

		 //        },
		 //        headers: {
		 //            'Content-Type': 'application/json'
		 //        }
			// }).then(function(res){
			// 	console.log('早起打卡接口',res);

			// }).catch(function(err){
			// 	console.log(err);
			// })
		}
	}
</script>