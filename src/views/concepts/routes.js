export default [
    { path: '', redirect: 'technical-selection' },
    { path: 'introduction', component: () => import('./introduction.md') },
    { path: 'technical-selection', component: () => import('./technical-selection.md') },
    { path: 'modularity', component: () => import('./modularity.md') },
    { path: 'component-based', component: () => import('./component-based.md') },
    { path: 'library', component: () => import('./library.md') },
];
