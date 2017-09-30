export default [
    { path: '', redirect: 'concepts/introduction' },
    { path: 'concepts/introduction', component: () => import('./concepts/introduction.md') },
    { path: 'concepts/technical-selection', component: () => import('./concepts/technical-selection.md') },
    { path: 'concepts/modularity', component: () => import('./concepts/modularity.md') },
    { path: 'concepts/component-based', component: () => import('./concepts/component-based.md') },
];
