import { LitElement } from 'lit';
import { property } from 'lit/decorators.js';

export class BbvaUserAvatarViewModel extends LitElement {
  @property({ type: String }) protected username: string = '';
}
