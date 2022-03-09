// /**
//  * First we will load all of this project's JavaScript dependencies which
//  * includes Vue and other libraries. It is a great starting point when
//  * building robust, powerful web applications using Vue and Laravel.
//  */

// require('./settings/bootstrap');

// window.Vue = require('vue').default;

// import Vue from 'vue'
// import Router from './settings/router'
// import Vuetify from './plugins/vuetify'
// import Store from './store/store'

// Vue.config.productionTip = false

// Vue.component('App', require('./App.vue').default);

// const app = new Vue({
//     vuetify: Vuetify,
//     router: Router,
//     store: Store,
//     el: '#app',
// });


// =========================================================
// * Vuetify Material Dashboard - v2.1.0
// =========================================================
//
// * Product Page: https://www.creative-tim.com/product/vuetify-material-dashboard
// * Copyright 2019 Creative Tim (https://www.creative-tim.com)
//
// * Coded by Creative Tim
//
// =========================================================
//
// * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './plugins/base'
import './plugins/chartist'
import './plugins/vee-validate'
import vuetify from './plugins/vuetify'
import i18n from './i18n'

Vue.config.productionTip = false

new Vue({
    router,
    store,
    vuetify,
    i18n,
    render: h => h(App),
}).$mount('#app')
