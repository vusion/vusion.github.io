export default [
    { path: '', redirect: 'cli' },
    { path: 'cli', component: () => import('./cli.md') },
    { path: 'config', component: () => import('./config.md') },
];
