import { CSSResultGroup, CSSResultOrNative, TemplateResult, html } from 'lit';
import { BbvaLayoutTheme } from './css/bbva-layout.theme.css';
import { BbvaLayoutViewModel } from './bbva-layout.viewmodel';

export class BbvaLayoutView extends BbvaLayoutViewModel {
  protected static finalizeStyles(
    styles?: CSSResultGroup | undefined,
  ): CSSResultOrNative[] {
    return [...super.finalizeStyles(styles), BbvaLayoutTheme.cssBase];
  }

  public render(): TemplateResult {
    return html`<slot></slot>`;
  }
}

window.customElements.define('bbva-layout', BbvaLayoutView);

declare global {
  interface HTMLElementTagNameMap {
    'bbva-layout': BbvaLayoutView;
  }
}
