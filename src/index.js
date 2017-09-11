import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);

import * as CloudUI from 'cloud-ui.vusion';
import GlobalLayout from './common/u-global-layout.vue';
import Article from './common/u-article.vue';
import NavbarItem from './common/u-navbar-item.vue';
import ThemeSelect from './common/u-theme-select.vue';
import ThemeSelectItem from './common/u-theme-select-item.vue';
import Logo from './common/u-logo.vue';
import Library from './common/u-library.vue';
import './common/atom-one-light.css';
import './common/base.css';

const Components = Object.assign({}, CloudUI, {
    GlobalLayout,
    Article,
    NavbarItem,
    ThemeSelect,
    ThemeSelectItem,
    Logo,
    Library,
});
delete Components.default;

Object.keys(Components).forEach((key) => Components[key].name && Vue.component(Components[key].name, Components[key]));

import routes from './routes';
new Vue({
    router: new VueRouter({
        mode: 'history',
        routes,
        scrollBehavior: (to, from, savedPosition) => savedPosition || { x: 0, y: 0 },
    }),
}).$mount('#app');
