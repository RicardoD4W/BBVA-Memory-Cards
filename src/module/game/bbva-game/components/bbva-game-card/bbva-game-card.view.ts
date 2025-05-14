import { CSSResultGroup, CSSResultOrNative, TemplateResult, html } from 'lit';
import { BbvaGameCardTheme } from './css/bbva-game-card.theme.css';
import { BbvaGameCardViewModel } from './bbva-game-card.viewmodel';
import { classMap } from 'lit/directives/class-map.js';

export class BbvaGameCardView extends BbvaGameCardViewModel {
  protected static finalizeStyles(
    styles?: CSSResultGroup | undefined,
  ): CSSResultOrNative[] {
    return [...super.finalizeStyles(styles), BbvaGameCardTheme.cssBase];
  }

  public render(): TemplateResult {
    return html` <div class="game-card" @click=${this.handleCardClick}>
      <div
        class=${classMap({
          'card-inner': true,
          flipped: this.isFlipped,
        })}
      >
        <div
          class=${classMap({
            'card-front': true,
            winner: this.isSelected && this.isWinner,
            loser: this.isSelected && !this.isWinner,
          })}
        >
          <span> ${this.cardNumber} </span>
        </div>
        <div class="card-back"></div>
      </div>
    </div>`;
  }
}

window.customElements.define('bbva-game-card', BbvaGameCardView);

declare global {
  interface HTMLElementTagNameMap {
    'bbva-game-card': BbvaGameCardView;
  }
}
