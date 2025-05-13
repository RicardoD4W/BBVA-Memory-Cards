import { CSSResultGroup, CSSResultOrNative, TemplateResult, html } from 'lit';
import { BbvaButtonTheme } from './css/bbva-button.theme.css';
import { BbvaButtonViewModel } from './bbva-button.viewmodel';

export class BbvaButtonView extends BbvaButtonViewModel {
  protected static finalizeStyles(
    styles?: CSSResultGroup | undefined,
  ): CSSResultOrNative[] {
    return [...super.finalizeStyles(styles), BbvaButtonTheme.cssBase];
  }

  public render(): TemplateResult {
    return html` <button type="submit" name="submit" id="submit">
      <slot></slot>
    </button>`;
  }
}

window.customElements.define('bbva-button', BbvaButtonView);

declare global {
  interface HTMLElementTagNameMap {
    'bbva-button': BbvaButtonView;
  }
}
