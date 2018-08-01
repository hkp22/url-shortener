import NotFound from '../components/NotFound';

export default [
  {
    path: '*',
    component: NotFound
  },
  {
    path: '/not-found',
    name: 'notfound',
    component: NotFound
  }
];
