<template>
  <div id="app">
    <transition name="fade">
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </transition>
    
    
    <MyFooter  v-show="footerShow"></MyFooter>
  </div>
</template>

<script>
import MyFooter from './components/Footer.vue'
import {mapGetters,mapActions} from 'vuex'
import { GETMAINPAGE } from './jiekou/api.js'
export default {
  name: 'app',
  components:{
    MyFooter
  },
  computed:mapGetters([
    'footerShow'
  ]),
  created(){
    
    var code=window.location.search.split('#')[0].split('&')[0].split('=')[1];
    var _this=this;
    if(code) {  
        GETMAINPAGE(code).then((res) => {
          console.log(res);
           localStorage.banners = JSON.stringify(res.data.banners)
           localStorage.token= res.data.token;
           localStorage.marquee=res.data.marquee;
           localStorage.players=res.data.players;
           localStorage.headimgurl = res.data.headimgurl
           localStorage.nickname = res.data.nickname
        }).catch(function(err){console.log(err);})
        } else {
          window.location.href='https://open.weixin.qq.com/connect/oauth2/authorize?appid=wxe88b33f9edd5cc7f&redirect_uri=https%3a%2f%2fwww.ailaihuzhu.com%2fwxp&response_type=code&scope=snsapi_base&state=123#wechat_redirect';
        }
        
  }, 
  watch:{
   
    $route(to,from){//当路由发生变化，触发此函数

      if(to.path=='/home' || to.path=='/publicity' || to.path=='/invitation' || to.path=='/ailai'){
        this.$store.dispatch('showFooter');
      }else{
        
        this.$store.dispatch('hideFooter');
      }
    }
  }
}
</script>

<style>
.fade-enter-active, .fade-leave-active {
   transition: all .4s cubic-bezier(0, 1.2, 1, 0.5);
    opacity: .7;
    transform: translate3d(0, 4em, 0);
  }
  .fade-enter, .fade-leave-active {
    opacity: .3;
    transform: translate3d(0, 4em, 0);
  }
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /*text-align: center;*/
  color: #2c3e50;
  /*margin-top: 60px;*/
  margin-bottom: 55px;
}
</style>
