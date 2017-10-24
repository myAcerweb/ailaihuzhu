<template>
	<div id="jilu">
		<div class="t_tit">
		    <router-link tag="p" to="/ailai">
		    <img :src="imgJilureturn">
		    <!-- <img src="./img/jit.png" alt=""> -->
		    返回</router-link>
		    我的助人记录
		</div>
		<div class="content">
		    <div class="num">
		        <div>
		            <p>0</p>
		            <span>已帮助人数</span>
		        </div>
		        <div>
		            <p>139</p>
		            <span>已加入天数</span>
		        </div>
		    </div>
		    <dl class="ju_list marginTop">
		        <dt>
		            <span>参与计划</span>
		            <span>捐助金额</span>
		        </dt>
		        <dd>
		            <a href="jaavascript:;">
		                <p>郑和造船计划</p>
		                <p>¥<span>12322222.98</span></p>
		            </a>
		        </dd>
		        <dd>
		            <a href="jaavascript:;">
		                <p>李龙大病保障计划</p>
		                <p>¥<span>12322222.98</span></p>
		            </a>
		        </dd>
		        <dd>
		            <a href="jaavascript:;">
		                <p>全家防癌计划</p>
		                <p>¥<span>12322222.98</span></p>
		            </a>
		        </dd>
		    </dl>
		    <div class="lian">点击每一条记录都将转入该项目详情页</div>
		    <div class="pic">
		        <img :src="imgJiluwei">
		        <!-- <img src="./img/wei.png" alt=""> -->
		    </div>
		</div>
	</div>
</template>
<script type="text/javascript">
	export default{
		data(){
			return{
				imgJilureturn:'./static/return.png',
				imgJiluwei:'./static/wei.png'
			}
		},
    mounted(){
      this.$http({
        method:'POST',
            url:'https://www.ailaihuzhu.com/i/',
            data:{
              cmd:'alhz_donations_belong',
              token:localStorage.token,
              page:'1',
              ofpage:'5'
              
            },
            headers: {
                'Content-Type': 'application/json'
            }
      }).then(function(res){
        console.log('助人记录接口',res,localStorage.token);


      }).catch(function(err){
        console.log(err);
      })
    }
	}
</script>
<style type="text/css" scoped>
	.marginTop {
  margin-top: 0.6rem;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.3);
  background: #fff;
}
.t_tit {
  position: relative;
  height: 45 25rem;
  width: 100%;
  background: rgba(208, 2, 27, 0.9);
  box-shadow: 0 0 0 0 #b2b2b2;
  text-align: center;
  font-size: 0.68rem;
  color: #ffffff;
  letter-spacing: -0.43px;
  line-height: 1.8rem;
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
.content {
  background-color: #EDEDF2;
  width: 100%;
  height: auto;
  color: #333333;
}
.content .num {
  height: 6rem;
  width: 100%;
  background-image: linear-gradient(-180deg, #f5515f 0%, #9f031b 100%);
}
.content .num div {
  width: 50%;
  float: left;
  height: 100%;
  color: #ffffff;
  text-align: center;
}
.content .num div p {
  font-size: 1.92rem;
  line-height: 2.68rem;
  padding-top: 1.08rem;
}
.content .num div span {
  font-size: 0.96rem;
  letter-spacing: 0.97px;
}
.content .ju_list {
  width: 100%;
  overflow: hidden;
  background-color: #fff;
}
.content .ju_list dt {
  height: 2.88rem;
  line-height: 2.88rem;
  font-size: 0.96rem;
  font-weight: 600;
  padding: 0.72rem 0.6rem 0;
  overflow: hidden;
  border-bottom: 1px solid rgba(151, 151, 151, 0.38);
}
.content .ju_list dt span {
  float: left;
}
.content .ju_list dt span:nth-of-type(2) {
  float: right;
}
.content .ju_list dd {
  padding-left: 0.6rem;
  height: 3.08rem;
  line-height: 3.08rem;
}
.content .ju_list dd a {
  color: #333333;
  display: block;
  height: 100%;
  overflow: hidden;
  padding-right: 0.6rem;
  font-size: 0.88rem;
  border-bottom: 1px solid rgba(151, 151, 151, 0.38);
}
.content .ju_list dd a p {
  float: left;
}
.content .ju_list dd a p:nth-of-type(1) {
  width: 60%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.content .ju_list dd a p:nth-of-type(2) {
  float: right;
  font-size: 0.8rem;
}
.content .lian {
  height: 2.48rem;
  text-align: center;
  font-size: 0.72rem;
  line-height: 2.48rem;
  color: #d0011b;
  font-weight: 600;
}
.content .pic {
  width: 100%;
  height: 7rem;
}
.content .pic img {
  width: 100%;
  height: 100%;
}

</style>