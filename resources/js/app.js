import Vue from 'vue'
import App from './App.vue'
import router from './routes/router'
import store from './store/store'
import './plugins/base'
import './plugins/chartist'
import './plugins/vee-validate'
import './plugins/bootstrap'
import vuetify from './plugins/vuetify'
import i18n from './plugins/i18n'


Vue.config.productionTip = false

new Vue({
    router,
    store,
    vuetify,
    i18n,
    render: h => h(App),
}).$mount('#app')
