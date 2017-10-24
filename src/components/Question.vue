<template>
	<div id="question">
		<div class="pub_header">
		    <div onclick="window.history.go(-1);" class="pub_back">
		        <a >
		            <img :src="imgQuereturn">
		            <!-- <img src="img/return.png"> -->
		        </a>
		        <span>返回</span>
		    </div>

		    <span>常见问题</span>
		</div>
		<div class="H_cont">
		    <ul>
		    	<li class="question_header">互助介绍</li>
		        <li>
		            <div  class="shuom"><span @click="fadeDown1">什么是爱来互助？ </span>
		            <img :src="imgGy">
		            <!-- <img src="img/jiant.png"/> -->
		            </div>
		            <div id="s_txt1" class="s_txt">
		              爱来互助是一个真实可靠的互助社群，在这里，一人患病，众人均摊，大家互帮互助。
		            </div>
		        </li>
		        <li>
		            <div class="shuom">
		              <span @click="fadeDown2">爱来互助是保险吗？</span>
		              <img :src="imgGy">
		            <!-- <img src="img/jiant.png"/> -->
		            </div>
		            <div id="s_txt2" class="s_txt">
		              爱来互助不是保险，而是会员之间互帮互助的公益行动。加入互助社群后，当互助事件发生时，其他会员向符合互助条件的会员进行单向赠予。会员预存金额不是保险费，不能预期获得确定的风险保障回报。


		            </div>
		        </li>
		        <li class="question_header">互助规则</li>
		        <li>
		            <div class="shuom">
		            <span @click="fadeDown3">若遇不幸怎么申请互？ </span>
		            <img :src="imgGy">
		            <!-- <img src="img/jiant.png"/> -->
		            </div>
		            <div id="s_txt3" class="s_txt">
		            可拨打客服电话400-000-0000申请互助金。处理流程如下： <br>
					（1）客服了解并登记你的申请； <br>
					（2）爱来互助委托第三方专业公估机构核实事件真实性； <br> 
					（3）爱来互助对事件进行全平台公示； <br>
					（4）若公示无异议，爱来互助将互助金划拨至申请人的个人账户。 <br>
					申请互助金的依据，以公众号或APP“我的爱来-我的互助计划凭证”中已加入的计划为准。



		            </div>
		        </li>
		        <li>
		            <div class="shuom">
		            <span @click="fadeDown4">什么是静默期？ </span>
		            <img :src="imgGy">
		            <!-- <img src="img/jiant.png"/> -->
		            </div>
		            <div id="s_txt4" class="s_txt">
		              为了保证绝大多数会员的权益，并尽可能把每个会员的互助支出降到最低，我们不允许有人带病加入计划。设置等待期，是为了保证每个会员都是以健康的状态加入到互助计划。
		            </div>
		        </li>
		        <li>
		            <div class="shuom">
		            <span @click="fadeDown5">如何扣费？</span>
		            <img :src="imgGy">
		            <!-- <img src="img/jiant.png"/> -->
		            </div>
		            <div id="s_txt5" class="s_txt">
		            每个加入计划的用户都有一个爱来账户，您是几元加入的，您账户里就会有几元钱，当有用户遭遇不幸需要帮助时，所有用户均摊互助金，均摊费用只会从您的爱来账户里扣除。
		            </div>
		        </li>
		        <li class="question_header">安全保障</li>
		        <li>
		            <div class="shuom">
		            <span @click="fadeDown6">我们参加互助的资金安全吗？ </span>
		            <img :src="imgGy">
		            <!-- <img src="img/jiant.png"/> -->
		            </div>
		            <div id="s_txt6" class="s_txt">
		            （1）会员账户余额归本人所有，只有发生互助时才会扣除相应金额。 <br>
					（2）我们只会扣除您在爱来互助的账户余额，无法动用您微信钱包或个人银行账户中的资金，请放心加入。


		            </div>
		        </li>
		        <li>
		            <div class="shuom">
		            <span @click="fadeDown7">互助事件是真实的吗？ </span>
		            <img :src="imgGy">
		            <!-- <img src="img/jiant.png"/> -->
		            </div>
		            <div id="s_txt7" class="s_txt">
		            （1）互助事件由第三方权威公估机构核实，专业调查保证事件真实。 <br>
					（2）互助事件全平台公示，公示期间所有会员均可提出异议，全员参与监督。 <br>
					（3）万一互助金拨款后发现有欺诈行为，爱来互助将义务代为追偿。 <br>

		            </div>
		        </li>
		        <li class="question_header">加入规则</li>
		        <li>
		            <div class="shuom">
		            <span @click="fadeDown8">50岁加入哪个计划？加入后延续多久？ </span>
		            <img :src="imgGy">
		            <!-- <img src="img/jiant.png"/> -->
		            </div>
		            <div id="s_txt8" class="s_txt">
		            请加入中青年抗癌计划。中青年抗癌计划的加入年龄为18-50周岁，包含18周岁和50周岁。加入后，年满51周岁时，会自动转入中老年抗癌计划，继续享有互助资格。

		            </div>
		        </li>
		        <li>
		            <div class="shuom">
		            <span @click="fadeDown9">我可以帮其他人加入吗？ </span>
		            <img :src="imgGy">
		            <!-- <img src="img/jiant.png"/> -->
		            </div>
		            <div id="s_txt9" class="s_txt">
		            可以的。加入时，您可以添加一个或多个会员，填写该会员的姓名、身份证号即可。

		            </div>
		        </li>
		        <li>
		            <div class="shuom">
		            <span @click="fadeDown10">小孩还没有身份证，怎么加入？ </span>
		            <img :src="imgGy">
		            <!-- <img src="img/jiant.png"/> -->
		            </div>
		            <div id="s_txt10" class="s_txt">
		            户口本上有小朋友的身份证号，您可以通过户口本查看。

		            </div>
		        </li>
		        <li>
		            <div class="shuom">
		            <span @click="fadeDown11">加入互助计划后还可以退出吗？ </span>
		            <img :src="imgGy">
		            <!-- <img src="img/jiant.png"/> -->
		            </div>
		            <div id="s_txt11" class="s_txt">
		            可以。您可以拨打客服电话400-000-0000申请，您的账户余额也会一并退还。但是退出后如果再次加入，将重新计算静默期。

		            </div>
		        </li>
		    </ul>
		</div>
	</div>
</template>
<script >
	export default{
		data(){
			return{
				imgQuereturn:'./static/return.png',
				imgGy:'./static/jiant.png'

			}
		},
		methods:{
		    fadeDown1(){
		      if(s_txt1.className=='s_txt'){
		        s_txt1.className='s_txt s_txt_active';
		      }else if(s_txt1.className=='s_txt s_txt_active'){
		        s_txt1.className='s_txt';
		      }
		    },
		    fadeDown2(){
		      if(s_txt2.className=='s_txt'){
		        s_txt2.className='s_txt s_txt_active';
		      }else if(s_txt2.className=='s_txt s_txt_active'){
		        s_txt2.className='s_txt';
		      }
		    },
		    fadeDown3(){
		      if(s_txt3.className=='s_txt'){
		        s_txt3.className='s_txt s_txt_active';
		      }else if(s_txt3.className=='s_txt s_txt_active'){
		        s_txt3.className='s_txt';
		      }
		    },
		    fadeDown4(){
		      if(s_txt4.className=='s_txt'){
		        s_txt4.className='s_txt s_txt_active';
		      }else if(s_txt4.className=='s_txt s_txt_active'){
		        s_txt4.className='s_txt';
		      }
		    },
		    fadeDown5(){
		      if(s_txt5.className=='s_txt'){
		        s_txt5.className='s_txt s_txt_active';
		      }else if(s_txt5.className=='s_txt s_txt_active'){
		        s_txt5.className='s_txt';
		      }
		    },
		    fadeDown6(){
		      if(s_txt6.className=='s_txt'){
		        s_txt6.className='s_txt s_txt_active';
		      }else if(s_txt6.className=='s_txt s_txt_active'){
		        s_txt6.className='s_txt';
		      }
		    },
		    fadeDown7(){
		      if(s_txt7.className=='s_txt'){
		        s_txt7.className='s_txt s_txt_active';
		      }else if(s_txt7.className=='s_txt s_txt_active'){
		        s_txt7.className='s_txt';
		      }
		    },
		    fadeDown8(){
		      if(s_txt8.className=='s_txt'){
		        s_txt8.className='s_txt s_txt_active';
		      }else if(s_txt8.className=='s_txt s_txt_active'){
		        s_txt8.className='s_txt';
		      }
		    },
		    fadeDown9(){
		      if(s_txt9.className=='s_txt'){
		        s_txt9.className='s_txt s_txt_active';
		      }else if(s_txt9.className=='s_txt s_txt_active'){
		        s_txt9.className='s_txt';
		      }
		    },
		    fadeDown10(){
		      if(s_txt10.className=='s_txt'){
		        s_txt10.className='s_txt s_txt_active';
		      }else if(s_txt10.className=='s_txt s_txt_active'){
		        s_txt10.className='s_txt';
		      }
		    },
		    fadeDown11(){
		      if(s_txt11.className=='s_txt'){
		        s_txt11.className='s_txt s_txt_active';
		      }else if(s_txt11.className=='s_txt s_txt_active'){
		        s_txt11.className='s_txt';
		      }
		    }
		}
	}
</script>
<style scoped>
	.question_header{
		font-size: 0.96rem;
		font-weight: bold;
		padding: 0.8rem 0;
		border-bottom: 1px solid rgba(151, 151, 151, 0.38);
   
	}
.down_list1>.answer{
		height: auto;
		overflow: hidden;
		padding:0.86rem 0;
	}
	.question_bold{
		font-weight: bold;
	}
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
.shuom>span{
	text-align: left;
}
	.H_tit {
  height: 3.2rem;
  text-align: center;
  line-height: 3.2rem;
  font-size: 1.12rem;
  border: 1px solid rgba(151, 151, 151, 0.38);
}
.H_cont {
  padding: 0 0 0 0.6rem;
}
.H_cont .shuom {
  height: 3.12rem;
  font-size: 0.96rem;
  border-bottom: 1px solid rgba(151, 151, 151, 0.38);
  line-height: 3.12rem;
  position: relative;
}
.H_cont .shuom span {
  display: block;
  height: 100%;
  width: 90%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.H_cont .shuom img {
  width: 8%;
  position: absolute;
  right: 0.4rem;
  top: 1rem;
}
.H_cont .s_txt {
  padding: 0 0.6rem 0 0;
  font-size: 0.72rem;
  border-bottom: 1px solid rgba(151, 151, 151, 0.38);
  line-height: 1.4rem;
  /*display: none;*/
  height: 0;
  overflow: hidden;
  opacity: 0;
}
.H_cont .s_txt_active{
  height: auto;
  opacity: 1;
  transition: all 2s;

}

</style>