import { LitElement } from 'lit';
import { ROUTES } from '../../routes';
import { Router } from '@vaadin/router';

export class BbvaRouterViewModel extends LitElement {
  connectedCallback(): void {
    super.connectedCallback();
    const router = new Router(document.querySelector('#root'));
    router.setRoutes(ROUTES);

    window.addEventListener('hashchange', () => {
      const path = window.location.hash.slice(1);
      Router.go(path);
    });

    window.addEventListener('load', () => {
      const hashPath = window.location.hash.slice(1);
      if (hashPath) {
        Router.go(hashPath);
      }
    });
  }
}
