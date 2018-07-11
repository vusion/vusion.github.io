export default [
    { path: '', redirect: 'form' },
    { path: 'form', component: () => import(/* webpackChunkName: 'ui-design' */ './form.md') },
    { path: 'popper', component: () => import(/* webpackChunkName: 'ui-design' */ './popper.md') },
];
