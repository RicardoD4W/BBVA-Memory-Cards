import { CSSResultGroup, CSSResultOrNative, TemplateResult, html } from 'lit';
import { BbvaLayoutTheme } from './css/bbva-layout.theme.css';
import { BbvaLayoutViewModel } from './bbva-layout.viewmodel';

import '@/shared/components/bbva-header/bbva-header.view';

export class BbvaLayoutView extends BbvaLayoutViewModel {
  protected static finalizeStyles(
    styles?: CSSResultGroup | undefined,
  ): CSSResultOrNative[] {
    return [...super.finalizeStyles(styles), BbvaLayoutTheme.cssBase];
  }

  public render(): TemplateResult {
    return html`
      <header>
        <bbva-header></bbva-header>
      </header>

      <main>
        <slot></slot>
      </main>

      <footer></footer>
    `;
  }
}

window.customElements.define('bbva-layout', BbvaLayoutView);

declare global {
  interface HTMLElementTagNameMap {
    'bbva-layout': BbvaLayoutView;
  }
}
