import { LitElement } from 'lit';
import { RouterNavigateEvent } from '../../../routing/component/bbva-router/events/router-navigate.event';

export class BbvaHeaderViewModel extends LitElement {
  protected goHome() {
    this.dispatchEvent(new RouterNavigateEvent({ to: '/' }));
  }
}
