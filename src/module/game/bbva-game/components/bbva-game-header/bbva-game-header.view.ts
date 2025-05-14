import { CSSResultGroup, CSSResultOrNative, TemplateResult, html } from 'lit';
import { BbvaGameHeaderTheme } from './css/bbva-game-header.theme.css';
import { BbvaGameHeaderViewModel } from './bbva-game-header.viewmodel';

export class BbvaGameHeaderView extends BbvaGameHeaderViewModel {
  protected static finalizeStyles(
    styles?: CSSResultGroup | undefined,
  ): CSSResultOrNative[] {
    return [...super.finalizeStyles(styles), BbvaGameHeaderTheme.cssBase];
  }

  public render(): TemplateResult {
    return html` <div class="user-info">
      <bbva-user-avatar .username=${this.username}></bbva-user-avatar>
      <bbva-difficulty-selector
        ?isDisabled=${this.isDisabled}
      ></bbva-difficulty-selector>
    </div>`;
  }
}

window.customElements.define('bbva-game-header', BbvaGameHeaderView);

declare global {
  interface HTMLElementTagNameMap {
    'bbva-game-header': BbvaGameHeaderView;
  }
}
