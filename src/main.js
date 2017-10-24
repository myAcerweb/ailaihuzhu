// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
//vuex
import store from './store/index.js'
//引入mintui
import Mint from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(Mint);
// import { Tabbar, TabItem } from 'mint-ui';
// import { DatetimePicker } from 'mint-ui';
// import 'mint-ui/lib/datetime-picker/style.css'
// import 'mint-ui/lib/tabbar/style.css'
// import 'mint-ui/lib/tab-item/style.css'
// Vue.component(Tabbar.name, Tabbar);
// Vue.component(TabItem.name, TabItem);
// Vue.component(DatetimePicker.name, DatetimePicker);




//axios的一些配置，比如发送请求显示loading，请求回来loading消失之类的
//
axios.interceptors.request.use(function (config) {  //配置发送请求的信息
  //stores.dispatch('showLoading') //vuex控制loading组件的出现和消失 
  return config;
}, function (error) {
  return Promise.reject(error);
});

axios.interceptors.response.use(function (response) { //配置请求回来的信息
  //stores.dispatch('hideLoading')
  return response;
}, function (error) {

  return Promise.reject(error);
});

/*axios.defaults.baseURL = (process.env.NODE_ENV !=='production' ? config.dev.httpUrl:config.build.httpUrl);
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';*/
//axios.defaults.baseURL='http://localhost:8082/';
Vue.prototype.$http = axios  ;//其他页面在使用axios的时候直接  this.$http就可以了

Vue.config.productionTip = false
require ('./assets/css/base.css');
require ('./assets/css/home.css');
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store:store,
  template: '<App/>',
  components: { App }
})
