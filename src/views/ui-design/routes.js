export default [
    { path: '', redirect: 'form' },
    { path: 'form', component: () => import('./form.md') },
];
