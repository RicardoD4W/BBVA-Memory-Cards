import { CSSResultGroup, CSSResultOrNative, TemplateResult, html } from 'lit';
import { BbvaHomeTheme } from './css/bbva-home.theme.css';
import { BbvaHomeViewModel } from './bbva-home.viewmodel';

import '../../../shared/components/bbva-button/bbva-button.view';
import { ref } from 'lit/directives/ref.js';

export class BbvaHomeView extends BbvaHomeViewModel {
  protected static finalizeStyles(
    styles?: CSSResultGroup | undefined,
  ): CSSResultOrNative[] {
    return [...super.finalizeStyles(styles), BbvaHomeTheme.cssBase];
  }

  public render(): TemplateResult {
    return html`
      <div class="main-container">
        <form
          @submit=${this.handleSubmitForm}
          class="login-form"
          ${ref(this.formRef)}
        >
          <label class="wave-group">
            <input
              class="input"
              type="text"
              required
              name="username"
              id="username"
              autocomplete="off"
              @input=${this.clearValidities}
            />
            <span class="bar"></span>
            <label class="label">
              <span class="label-char" style="--i: 0">N</span>
              <span class="label-char" style="--i: 1">a</span>
              <span class="label-char" style="--i: 2">m</span>
              <span class="label-char" style="--i: 3">e</span>
            </label>
          </label>

          <bbva-button @click=${this.handleSubmitButtonForm}>Join</bbva-button>
        </form>
      </div>
    `;
  }
}

window.customElements.define('bbva-home', BbvaHomeView);

declare global {
  interface HTMLElementTagNameMap {
    'bbva-home': BbvaHomeView;
  }
}
