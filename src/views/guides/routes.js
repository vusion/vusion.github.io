export default [
    { path: '', redirect: 'introduction' },
    { path: 'introduction', component: () => import('./introduction.md') },
    { path: 'installation', component: () => import('./installation.md') },
    { path: 'quickstart', component: () => import('./quickstart.md') },
];
