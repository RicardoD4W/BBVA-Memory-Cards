import { LitElement } from 'lit';
import { property } from 'lit/decorators.js';
import { GameCardFlippedEvent } from './events/game-card-flipped.event';

export class BbvaGameCardViewModel extends LitElement {
  @property({ type: Boolean }) protected isFlipped: boolean = false;
  @property({ type: Boolean }) protected isPlaying: boolean = false;
  @property({ type: Boolean }) protected isFlippeable: boolean = false;
  @property({ type: Boolean }) protected isSelected: boolean = false;
  @property({ type: Boolean }) protected isWinner: boolean = false;
  @property({ type: Number }) protected cardNumber: number = 0;

  protected handleCardClick() {
    if (!this.isPlaying) return;
    if (!this.isFlippeable) return;

    this.isFlipped = false;
    this.dispatchEvent(new GameCardFlippedEvent(this.cardNumber));
  }
}
