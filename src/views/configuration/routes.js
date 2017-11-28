export default [
    { path: '', redirect: 'vusion-cli' },
    { path: 'vusion-cli', component: () => import('./vusion-cli.md') },
];
