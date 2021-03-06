import * as Vue from 'vue';
import * as VueRouter from 'vue-router';

import App from './App.vue';
import Customers from './pages/Customers.vue';
import Orders from './pages/Orders.vue';


Vue.use(VueRouter);

const routes = [ {
    path: '/',
    name: 'app',
    component: App,
    children: [
        {
            path: 'customers',
            name: 'customers',
            component: Customers,
        }, {
            path: 'orders',
            name: 'orders',
            component: Orders,
        }, {
            path: '*',
            redirect: 'customers',
        },
    ],
}];

const router = new VueRouter({
    mode: 'hash',
    routes,
});

export default router;