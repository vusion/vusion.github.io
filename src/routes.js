import Vue from 'vue';
import Index from './views/index.vue';
import Home from './views/home.vue';
import Features from './views/index.md';

import Guides from './views/guides/index.vue';
import guidesRoutes from './views/guides/routes';
import Concepts from './views/concepts/index.vue';
import conceptsRoutes from './views/concepts/routes';
import API from './views/api/index.vue';
import apiRoutes from './views/api/routes';

import Libraries from './views/libraries.vue';
import Templates from './views/templates.vue';

const Empty = Vue.extend({ template: '<div>待完善...</div>' });

export default [
    { path: '/', component: Index, children: [
        { path: '', component: Home, redirect: '/guides' },
        // { path: 'features', component: Features },
        { path: 'guides', component: Guides, children: guidesRoutes },
        { path: 'concepts', component: Concepts, children: conceptsRoutes },
        { path: 'api', component: API, children: apiRoutes },
        { path: 'libraries', component: Libraries },
        { path: 'templates', component: Templates },
        { path: 'examples', component: Empty },
    ] },
    { path: '*', redirect: '/guides' },
];
