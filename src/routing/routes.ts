import { Route } from '@vaadin/router';

export const ROUTES: Route[] = [
  {
    path: '/',
    component: 'bbva-layout',
    name: 'Memmory Cards',
    action: async () => {
      await import('@/module/layout/bbva-layout/bbva-layout.view');
    },
  },
];
