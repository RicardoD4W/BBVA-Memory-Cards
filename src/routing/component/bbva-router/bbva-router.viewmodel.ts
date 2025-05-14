import { LitElement } from 'lit';
import { ROUTES } from '../../routes';
import { Router } from '@vaadin/router';

export class BbvaRouterViewModel extends LitElement {
  connectedCallback(): void {
    super.connectedCallback();
    const router = new Router(document.querySelector('#root'));
    router.setRoutes(ROUTES);
  }
}
