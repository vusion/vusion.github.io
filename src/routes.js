import Vue from 'vue';
import Layout from './views/layout.vue';
import Index from './views/index.vue';
import Features from './views/index.md';

import Guides from './views/guides/index.vue';
import guidesRoutes from './views/guides/routes';
import Concepts from './views/concepts/index.vue';
import conceptsRoutes from './views/concepts/routes';
import Configuration from './views/configuration/index.vue';
import configurationRoutes from './views/configuration/routes';

import UIDesign from './views/ui-design/index.vue';
import uiDesignRoutes from './views/ui-design/routes';

import ProtoUI from './views/proto-ui/index.vue';
import protoUIRoutes from './views/proto-ui/routes';

import Libraries from './views/libraries.vue';

const Empty = Vue.extend({ template: '<div>待完善...</div>' });

export default [
    { path: '/', component: Layout, children: [
        { path: '', component: Index, redirect: '/guides' },
        // { path: 'features', component: Features },
        { path: 'guides', component: Guides, children: guidesRoutes },
        { path: 'concepts', component: Concepts, children: conceptsRoutes },
        { path: 'configuration', component: Configuration, children: configurationRoutes },
        { path: 'ui-design', component: UIDesign, children: uiDesignRoutes },
        { path: 'proto-ui', component: ProtoUI, children: protoUIRoutes },
        { path: 'libraries', component: Libraries },
        { path: 'examples', component: Empty },
    ] },
    { path: '*', redirect: '/guides' },
];
