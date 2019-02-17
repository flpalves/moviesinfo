import Vue from 'vue';
import App from './App.vue';
import router from './assets/router';
import SuiVue from 'semantic-ui-vue';
import axios from 'axios';
import store from './store/store';

import 'semantic-ui-css/semantic.min.css';




//uses
Vue.use(SuiVue);

Vue.prototype.$http = axios

Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App),
}).$mount('#app')
