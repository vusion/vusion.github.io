import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);

import * as ProtoUI from 'proto-ui.vusion';
import 'proto-ui.vusion/src/base/index.css';

import GlobalLayout from './common/u-global-layout.vue';
import Article from './common/u-article.vue';
import Logo from './common/u-logo.vue';
import Library from './common/u-library.vue';
import './common/atom-one-light.css';
import './common/base.css';

const Components = Object.assign({}, ProtoUI, {
    GlobalLayout,
    Article,
    Logo,
    Library,
});

import { installComponents } from 'vusion-utils';

installComponents(Components, Vue);

import routes from './routes';
new Vue({
    router: new VueRouter({
        mode: 'history',
        routes,
        scrollBehavior: (to, from, savedPosition) => savedPosition || { x: 0, y: 0 },
    }),
}).$mount('#app');
