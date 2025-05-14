import { CSSResultGroup, CSSResultOrNative, TemplateResult, html } from 'lit';
import { BbvaGameStatusTheme } from './css/bbva-game-status.theme.css';
import { BbvaGameStatusViewModel } from './bbva-game-status.viewmodel';

export class BbvaGameStatusView extends BbvaGameStatusViewModel {
  protected static finalizeStyles(
    styles?: CSSResultGroup | undefined,
  ): CSSResultOrNative[] {
    return [...super.finalizeStyles(styles), BbvaGameStatusTheme.cssBase];
  }

  public render(): TemplateResult {
    if (this.isMemorizing) return this._renderMemorizeMsg();
    if (this.hasLost) return this._renderLoserMsg();
    return this._renderSelectNumberMsg();
  }

  private _renderMemorizeMsg() {
    return html`<p class="timer-container">
      Memorize the cards, you gonna play in
      <span class="timer">${this.timer}s</span>
    </p>`;
  }

  private _renderLoserMsg() {
    return html`<p class="loser-msg">You Lose!</p>`;
  }

  private _renderSelectNumberMsg() {
    return html`<p class="timer-container">
      Select the number
      <span class="timer">${this.randomNumber}</span>
    </p>`;
  }
}

window.customElements.define('bbva-game-status', BbvaGameStatusView);

declare global {
  interface HTMLElementTagNameMap {
    'bbva-game-status': BbvaGameStatusView;
  }
}
