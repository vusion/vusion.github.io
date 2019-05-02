import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);

import 'vusion-ui.vusion/src/base/base.css';
import * as VusionUI from 'vusion-ui.vusion';

import Article from './common/u-article.vue';
import Library from './common/u-library.vue';
import Example from './common/u-example.vue';
import Template from './common/u-template.vue';
import './base/base.css';

const UILibrary = Object.assign({}, VusionUI, {
    // GlobalLayout,
    Article,
    Library,
    Example,
    Template,
});

import { install } from 'vusion-utils';

install(UILibrary, Vue);

import routes from './routes';
new Vue({
    router: new VueRouter({
        mode: history.pushState ? 'history' : 'hash',
        routes,
        scrollBehavior: (to, from, savedPosition) => savedPosition || { x: 0, y: 0 },
    }),
}).$mount('#app');
