import { Router } from '@vaadin/router';
import { LitElement } from 'lit';

export class BbvaHeaderViewModel extends LitElement {
  protected goHome() {
    Router.go('/');
  }
}
