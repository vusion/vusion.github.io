import Vue from 'vue';
import Layout from './views/layout.vue';
import Index from './views/index.vue';
import Features from './views/index.md';
import Guides from './views/guides.vue';
import Documentation from './views/documentation.vue';
import Libraries from './views/libraries.vue';

const Empty = Vue.extend({ template: '<div>待完善...</div>' });

export default [
    { path: '/', component: Layout, children: [
        { path: '', component: Index, redirect: '/documentation' },
        { path: 'features', component: Features },
        { path: 'guides', component: Guides, children: [
            { path: 'installation', component: () => import('./views/guides/installation.md') },
        ] },
        { path: 'documentation', component: Documentation, children: [
            { path: '', redirect: '/documentation/vusion/introduction' },
            { path: 'vusion/introduction', component: () => import('./views/documentation/vusion/introduction.md') },
        ] },
        { path: 'libraries', component: Libraries },
        { path: 'examples', component: Empty },
    ] },
    { path: '*', redirect: '/documentation' },
];
