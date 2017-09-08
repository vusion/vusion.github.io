import Vue from 'vue';
import Layout from './views/layout.vue';
import Index from './views/index.vue';
import Concepts from './views/concepts.vue';
import Guides from './views/guides.vue';
import Documentation from './views/documentation.vue';
import Libraries from './views/libraries.vue';

const Empty = Vue.extend({ template: '<div>待完善...</div>' });

export default [
    { path: '/', component: Layout, children: [
        { path: '', component: Index, redirect: '/libraries' },
        { path: 'concepts', component: Concepts },
        { path: 'guides', component: Guides, children: [
            { path: 'installation', component: () => import('./views/guides/installation.md') },
        ] },
        { path: 'documentation', component: Documentation },
        { path: 'libraries', component: Libraries },
    ] },
    { path: '*', redirect: '/libraries' },
];
