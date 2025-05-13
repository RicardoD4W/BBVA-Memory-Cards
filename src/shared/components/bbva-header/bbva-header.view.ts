import { CSSResultGroup, CSSResultOrNative, TemplateResult, html } from 'lit';
import { BbvaHeaderTheme } from './css/bbva-header.theme.css';
import { BbvaHeaderViewModel } from './bbva-header.viewmodel';

export class BbvaHeaderView extends BbvaHeaderViewModel {
  protected static finalizeStyles(
    styles?: CSSResultGroup | undefined,
  ): CSSResultOrNative[] {
    return [...super.finalizeStyles(styles), BbvaHeaderTheme.cssBase];
  }

  public render(): TemplateResult {
    return html`
      <hgroup>
        <h1 @click=${this.goHome}>Memory Cards</h1>
      </hgroup>
    `;
  }
}

window.customElements.define('bbva-header', BbvaHeaderView);

declare global {
  interface HTMLElementTagNameMap {
    'bbva-header': BbvaHeaderView;
  }
}
