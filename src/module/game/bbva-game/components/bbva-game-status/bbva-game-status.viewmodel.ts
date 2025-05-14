import { LitElement } from 'lit';
import { property } from 'lit/decorators.js';

export class BbvaGameStatusViewModel extends LitElement {
  @property({ type: Number }) timer = 0;
  @property({ type: Number }) selectedCardNumber = 0;
  @property({ type: Number }) randomNumber = 0;

  protected get isMemorizing(): boolean {
    return this.timer > 0;
  }

  protected get hasLost(): boolean {
    return (
      this.selectedCardNumber > 0 &&
      this.selectedCardNumber !== this.randomNumber
    );
  }
}
