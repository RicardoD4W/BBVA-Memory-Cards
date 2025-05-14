import { LitElement } from 'lit';
import { property } from 'lit/decorators.js';

export class BbvaGameHeaderViewModel extends LitElement {
  @property({ type: String }) username = '';
  @property({ type: Boolean }) isDisabled = false;
  @property({ type: Number }) points = 0;
}
