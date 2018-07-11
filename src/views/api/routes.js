export default [
    { path: '', redirect: 'cli' },
    { path: 'cli', component: () => import(/* webpackChunkName: 'api' */ './cli.md') },
    { path: 'config', component: () => import(/* webpackChunkName: 'api' */ './config.md') },
];
