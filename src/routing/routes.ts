import { Route } from '@vaadin/router';

import '@/module/layout/bbva-layout/bbva-layout.view';
import '@/module/home/bbva-home/bbva-home.view';
import '@/module/game/bbva-game/bbva-game.view';

// Antes estaba con lazy loading, pero debido al requisito
// de que funcionase sin conexión, se descartó esa opción

export const ROUTES: Route[] = [
  {
    path: '/',
    component: 'bbva-layout',
    name: 'Memmory Cards',

    children: [
      {
        path: '',
        component: 'bbva-home',
      },
      {
        path: 'game',
        component: 'bbva-game',
      },
    ],
  },

  {
    path: '(.*)',
    redirect: '/',
  },
];
