import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Home from '@/components/Home'
import Publicity from '@/components/Publicity'
import PublicityDetail from '@/components/PublicityDetail'
import PublicityDetailSm from '@/components/PublicityDetailSm'  //小额公示
import PublicityDetailBg from '@/components/PublicityDetailBg'  //大额公示
import PublicityDetailIfo from '@/components/PublicityDetailIfo'
import Invitation from '@/components/Invitation'                //特别邀请
import InvitationRule from '@/components/InvitationRule'      //个人展示
import Ailai from '@/components/Ailai'           //我的爱来
import Cheer from '@/components/Cheer'          //为爱加油弹窗
import Charge from '@/components/Charge'         //为爱加油站
import Paihang from '@/components/Paihang'        //圆梦爱来排行榜
import Gongyue from '@/components/Gongyue'        //会员公约
import HuzhuPlan from '@/components/HuzhuPlan'    //加入互助计划
import Apply from '@/components/Apply'            //互助申请
import Program from '@/components/Program'       //互助计划   全家抗癌计划详情
import Inform from '@/components/Inform'         //健康告知
import Material from '@/components/Material'      //电子协议   材料提交-线下邮寄1
import Mutual from '@/components/Mutual'          //加入互助计划
import ModifyInfo from '@/components/ModifyInfo'    //修改保障人信息
import Jilu from '@/components/Jilu'    //助人记录页面
import Myplan from '@/components/Myplan'  //我的互助计划
import Requirement from '@/components/Requirement'  //健康要求
import Joinplan from '@/components/Joinplan'  //加入计划-1
import JoinPlan2 from '@/components/JoinPlan2'  //加入计划-2
import EleAgree from '@/components/EleAgree'  //电子协议确认页面
import PunchClock from '@/components/PunchClock'  //打卡页面
import PunchClockJoin from '@/components/PunchClockJoin'  //打卡参加页面
import KuaijieCharge from '@/components/KuaijieCharge'  //快捷支付页面
import SupportCard from '@/components/SupportCard'  //支持的银行卡和信用卡
import Youji from '@/components/Youji'  //在线填写资料页面
import Question from '@/components/Question'  //常见问题页面
import Product from '@/components/Product'  //产品保险
import KnowAilai from '@/components/KnowAilai'  //了解爱来
import jiekouTest from '@/components/jiekouTest'  //接口测试页面
import payTest from '@/components/payTest'  //payTest页面
import ImproveInfo from '@/components/ImproveInfo'  //完善个人信息页面
import PublicityDetail1 from '@/components/PublicityDetail1'  //郑彦民
import PublicityDetail2 from '@/components/PublicityDetail2'  //赵峰
import PublicityDetailSm1 from '@/components/PublicityDetailSm1'  //郑彦民
import PublicityDetailSm2 from '@/components/PublicityDetailSm2'  //赵峰
import PublicityDetailBg1 from '@/components/PublicityDetailBg1'  //郑彦民
import PublicityDetailBg2 from '@/components/PublicityDetailBg2'  //赵峰




Vue.use(Router)

export default new Router({
  // scrollBehavior: () => ({ y: 0 }),
  
  // scrollBehavior (to, from, savedPosition) {
  //   return { x: 0, y: 0 }
  // },

  routes: [
    {
      path: '/hello',
      name: 'Hello',
      component: Hello
    },
    {
    	path:'/home',
    	component:Home
    },
    {
    	path:'/publicity',
    	component:Publicity
    },
    {
        path:'/publicityDetail',
        component:PublicityDetail
    },
    {
        path:'/publicityDetailIfo',
        component:PublicityDetailIfo
    },
    {
    	path:'/invitation',
    	component:Invitation
    },
    {
        path:'/invitationRule',
        component:InvitationRule
    },
    {
    	path:'/ailai',
    	component:Ailai
    },
    {
        path:'/cheer',
        component:Cheer
    },
    {
        path:'/charge',
        component:Charge
    },
    {
        path:'/paihang',
        component:Paihang
    },
    {
        path:'/gongyue',
        component:Gongyue
    },
    {
        path:'/huzhuPlan',
        component:HuzhuPlan
    },
    {
        path:'/apply',
        component:Apply
    },
    {
    	path:'*',
    	redirect:'/home'
    },
    {
        path:'/program',   //互助计划
        component:Program
    },
    {
        path:'/inform',   //健康告知
        component:Inform
    },
    {
        path:'/material',    //电子协议
        component:Material
    },
    {
        path:'/mutual',
        component:Mutual   //加入互助计划
    },
    {
        path:'/modifyInfo',
        component:ModifyInfo   //修改保障人信息
    },
    {
        path:'/publicityDetailSm',
        component:PublicityDetailSm  //小额公示
    },
    {
        path:'/jilu',
        component:Jilu  //记录页面
    },
    {
        path:'/myplan',
        component:Myplan   //我的互助计划
    },
    {
        path:'/requirement',
        component:Requirement   //健康要求
    },
    {
        path:'/joinplan',
        component:Joinplan   //加入计划-1
    },
    {
        path:'/joinPlan2',
        component:JoinPlan2   //加入计划-2
    },
    {
        path:'/publicityDetailBg',
        component:PublicityDetailBg     //大额公示
    },
    {
        path:'/eleAgree',
        component:EleAgree    //电子协议
    },
    {
        path:'/punchClock',
        component:PunchClock    //打卡页面
    },
    {
        path:'/punchClockJoin',
        component:PunchClockJoin   //打卡参加页面
    },
    {
        path:'/kuaijieCharge',
        component:KuaijieCharge     //快捷支付
    },
    {
        path:'/supportCard',
        component:SupportCard       //支持的银行卡
    },
    {
        path:'/youji',
        component:Youji         //在线填写资料
    },
    {
        path:'/question',
        component:Question      //常见问题页面
    },
    {
        path:'/product',
        component:Product       //产品保险
    },
    {
        path:'/knowAilai',
        component:KnowAilai         //了解爱来
    },
    {
        path:'/jiekouTest',
        component:jiekouTest        //接口测试用页面
    },
    {
        path:'/payTest',
        component:payTest        //payTest页面
    },
    {
        path:'/improveInfo',
        component:ImproveInfo     //完善个人信息页面
    },
    {
        path:'/publicityDetail1',
        component:PublicityDetail1    
    },
    {
        path:'/publicityDetail2',
        component:PublicityDetail2    
    },
    {
        path:'/publicityDetailSm1',
        component:PublicityDetailSm1     
    },
    {
        path:'/publicityDetailSm2',
        component:PublicityDetailSm2      //完善个人信息页面
    },
    {
        path:'/publicityDetailBg1',
        component:PublicityDetailBg1     //完善个人信息页面
    },
    
    {
        path:'/publicityDetailBg2',
        component:PublicityDetailBg2     //完善个人信息页面
    }


  ]
})
