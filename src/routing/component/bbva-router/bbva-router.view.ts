import { CSSResultGroup, CSSResultOrNative, TemplateResult, html } from 'lit';
import { BbvaRouterTheme } from './css/bbva-router.theme.css';
import { BbvaRouterViewModel } from './bbva-router.viewmodel';

export class BbvaRouterView extends BbvaRouterViewModel {
  protected static finalizeStyles(
    styles?: CSSResultGroup | undefined,
  ): CSSResultOrNative[] {
    return [...super.finalizeStyles(styles), BbvaRouterTheme.cssBase];
  }

  public render(): TemplateResult {
    return html`<slot></slot>`;
  }
}

window.customElements.define('bbva-router', BbvaRouterView);

declare global {
  interface HTMLElementTagNameMap {
    'bbva-router': BbvaRouterView;
  }
}
