import Vue from 'vue'
import Router from 'vue-router'

//pages
import Search from '../../pages/search'


//uses
Vue.use(Router)


export default new Router({
    mode: 'history',
    routes : [
        {
            path: '/',
            name: 'search',
            component: Search
        }
    ]
});