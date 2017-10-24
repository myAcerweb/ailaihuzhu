<template>
	<div id="footer">
		<mt-tabbar fixed v-model="selected">
	        <mt-tab-item id="tab1" to="/home">
	          <img id="tabbar1" slot="icon" :src="img1">
	          互助计划
	        </mt-tab-item>
	        <mt-tab-item  id="tab2" to="/publicity">
	          <img id="tabbar2" slot="icon" :src="img2">
	          互助公示
	        </mt-tab-item>
	        <mt-tab-item id="tab3">
	          <img id="tabbar3" slot="icon" :src="img3">
	          特别邀请
	        </mt-tab-item>
	        <mt-tab-item id="tab4">
	          <img id="tabbar4" slot="icon" :src="img4">
	          我的爱来
	        </mt-tab-item>
	    </mt-tabbar>
	</div>
</template>
<script type="text/javascript">
	import {mapGetters,mapActions} from 'vuex'
	// img1= require('/src/assets/img/tabbar1.png');
	export default{
		data(){
			return{
				selected:'tab1',
				img1:'./static/tabbar11.png',
				img2:'./static/tabbar2.png',
				img3:'./static/tabbar3.png',
				img4:'./static/tabbar4.png'
		
			}
		},
		watch:{
			
			selected:function(val,oldVal){
				if(val=="tab1"){
					this.$router.push('home');
					this.img1='./static/tabbar11.png';
					this.img3='./static/tabbar3.png';
					this.img4='./static/tabbar4.png';
					this.img2='./static/tabbar2.png';	
				}else if(val=="tab2"){
					this.$router.push('publicity');
					this.img1='./static/tabbar1.png';
					this.img3='./static/tabbar3.png';
					this.img4='./static/tabbar4.png';
					this.img2='./static/tabbar22.png';
					
				}else if(val=='tab3'){
					this.$router.push('invitation');
					
					this.img1='./static/tabbar1.png';
					this.img3='./static/tabbar33.png';
					this.img4='./static/tabbar4.png';
					this.img2='./static/tabbar2.png';
				}else if(val=="tab4"){
					this.$router.push('ailai');
					
					this.img1='./static/tabbar1.png';
					this.img3='./static/tabbar3.png';
					this.img4='./static/tabbar44.png';
					this.img2='./static/tabbar2.png';
				}
				
			},
			$route(to,from){
				if(to.path=='/home'){
					this.selected='tab1';
					this.img1='./static/tabbar11.png';
					this.img3='./static/tabbar3.png';
					this.img4='./static/tabbar4.png';
					this.img2='./static/tabbar2.png';
				}else if(to.path=='/publicity'){
					this.selected='tab2';
					this.img1='./static/tabbar1.png';
					this.img3='./static/tabbar3.png';
					this.img4='./static/tabbar4.png';
					this.img2='./static/tabbar22.png';
				}else if(to.path=='/invitation'){
					this.selected='tab3';
					this.img1='./static/tabbar1.png';
					this.img3='./static/tabbar33.png';
					this.img4='./static/tabbar4.png';
					this.img2='./static/tabbar2.png';
				}else if(to.path=='/ailai'){
					this.selected='tab4';
					this.img1='./static/tabbar1.png';
					this.img3='./static/tabbar3.png';
					this.img4='./static/tabbar44.png';
					this.img2='./static/tabbar2.png';
				}
			}
		}
	}
</script>
<style type="text/css" scoped>
	.footer{
		position: fixed;
		left: 0;
		bottom: 0;
	}
	.mint-tabbar > .mint-tab-item.is-selected{
		background-color: transparent;
	}
	.mint-tabbar > .mint-tab-item.is-selected{
		color: red;
	}
</style>