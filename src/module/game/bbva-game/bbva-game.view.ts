import { CSSResultGroup, CSSResultOrNative, TemplateResult, html } from 'lit';
import { repeat } from 'lit/directives/repeat.js';
import { when } from 'lit/directives/when.js';

import { BbvaGameTheme } from './css/bbva-game.theme.css';
import { BbvaGameViewModel } from './bbva-game.viewmodel';

import '../../../shared/components/bbva-button/bbva-button.view';
import '../../../module/game/bbva-game/components/bbva-user-avatar/bbva-user-avatar.view';
import '../../../module/game/bbva-game/components/bbva-difficulty-selector/bbva-difficulty-selector.view';
import '../../../module/game/bbva-game/components/bbva-game-card/bbva-game-card.view';
import '../../../module/game/bbva-game/components/bbva-game-header/bbva-game-header.view';
import '../../../module/game/bbva-game/components/bbva-game-status/bbva-game-status.view';

export class BbvaGameView extends BbvaGameViewModel {
  protected static finalizeStyles(
    styles?: CSSResultGroup | undefined,
  ): CSSResultOrNative[] {
    return [...super.finalizeStyles(styles), BbvaGameTheme.cssBase];
  }

  public render(): TemplateResult {
    return html`
      <div
        class="game-container"
        @difficult:changed=${this.handleDifficultChanged}
        @game-card:flipped=${this.handleSelectedCard}
      >
        ${this._renderHeader()}

        <div class="game-board">
          <section class="game-points">Points: ${this.points}</section>
          ${when(
            this.isPlaying,
            () => this._renderCards(),
            () =>
              html`<p class="introductory-msg">
                Select the 'Level' and click the 'Play' button to start a new
                game
              </p>`,
          )}
          ${this._renderPlayButton()}
        </div>
      </div>
    `;
  }

  private _renderHeader() {
    return html`
      <bbva-game-header
        .username=${this.username}
        ?isDisabled=${this.isPlaying}
      ></bbva-game-header>
    `;
  }

  private _renderCards() {
    return html`
      <bbva-game-status
        .timer=${this.timer}
        .selectedCardNumber=${this.selectedCardNumber}
        .randomNumber=${this.randomNumber}
      ></bbva-game-status>

      <section class="game-cards">
        ${repeat(
          this.cardNumbers,
          // No se trackea una key para que cuando se regeneren los numeros
          // no haga animaciones para auto-ordenarse
          () => null,
          (number) =>
            html`<bbva-game-card
              .isFlipped=${this.isFlipped}
              .isFlippeable=${this.isFlippeable}
              .isPlaying=${this.isPlaying}
              .isSelected=${this.selectedCardNumber === number}
              .isWinner=${this.selectedCardNumber === this.randomNumber}
              .cardNumber=${number}
            ></bbva-game-card>`,
        )}
      </section>
    `;
  }

  private _renderPlayButton() {
    return html` <bbva-button
      @click=${this.isPlaying ? this.handleStopGame : this.handleBeginGame}
    >
      ${this.isPlaying ? 'Stop' : 'Play'}
    </bbva-button>`;
  }
}

window.customElements.define('bbva-game', BbvaGameView);

declare global {
  interface HTMLElementTagNameMap {
    'bbva-game': BbvaGameView;
  }
}
