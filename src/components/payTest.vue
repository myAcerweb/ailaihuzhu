<template>
	<div>
		<h3>payTest页面</h3>
		{{errr}}
	</div>
</template>
<script type="text/javascript">
	export default{
		data(){
			return{
				errr:''
			}
		},
		mounted(){
			//接口14
				var _this=this;
				this.$http({
					method:'POST',
			        url:'https://www.ailaihuzhu.com/i/',
			        data:{
			          cmd:'alhz_game_punch',
			          token:localStorage.token,
			          money:1.0
			        },
			        headers: {
			            'Content-Type': 'application/json'
			        }
				}).then(function(res){
					console.log('接口14',res);
					_this.errr=res.data.err;
				}).catch(function(err){
					console.log(err);
				})
		}
	}
</script>