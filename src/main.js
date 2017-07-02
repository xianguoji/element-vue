// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-default/index.css';
import Vuex from 'vuex';
Vue.use(Vuex);

const  vuex_store = new Vuex.Store({
  state:{
    user_name:"",
    activeData:[
      {
        date1: '2016-05-03',
        name: '王小虎',
        region: '上海市普陀区金沙江路'
      }, {
        date1: '2016-05-02',
        name: '王小明',
        region: '上海市普陀区金沙江路'
      }, {
        date1: '2016-05-04',
        name: '王大虎',
        region: '上海市普陀区金沙江路'
      }, {
        date1: '2016-05-01',
        name: '王小',
        region: '上海市普陀区金沙江路'
      }, {
        date1: '2016-05-08',
        name: '王小二',
        region: '上海市普陀区金沙江路'
      }, {
        date1: '2016-05-06',
        name: '小虎',
        region: '上海市普陀区金沙江路'
      }, {
        date1: '2016-05-07',
        name: '王一虎',
        region: '上海市普陀区金沙江路'
      }
    ],
    users:[
      {
        date1: '2016-05-01',
        name: '王小',
        region: '上海市普陀区金沙江路'
      }, {
        date1: '2016-05-08',
        name: '王小二',
        region: '上海市普陀区金沙江路'
      }, {
        date1: '2016-05-06',
        name: '小虎',
        region: '上海市普陀区金沙江路'
      }, {
        date1: '2016-05-07',
        name: '王一虎',
        region: '上海市普陀区金沙江路'
      }
    ]
  }
  //mutations:{
  //  showUserName(state){
  //    alert(state.user_name);
  //  }
  //}
});

Vue.config.productionTip = false;
Vue.use(ElementUI);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store:vuex_store, //注入到vue
  template: '<App/>',
  components: { App }
})
