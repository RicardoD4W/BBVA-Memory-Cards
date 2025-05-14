import { CSSResultGroup, CSSResultOrNative, TemplateResult, html } from 'lit';
import { BbvaDifficultySelectorTheme } from './css/bbva-difficulty-selector.theme.css';
import { BbvaDifficultySelectorViewModel } from './bbva-difficulty-selector.viewmodel';

export class BbvaDifficultySelectorView extends BbvaDifficultySelectorViewModel {
  protected static finalizeStyles(
    styles?: CSSResultGroup | undefined,
  ): CSSResultOrNative[] {
    return [
      ...super.finalizeStyles(styles),
      BbvaDifficultySelectorTheme.cssBase,
    ];
  }

  public render(): TemplateResult {
    return html`
      <label>
        Level:
        <select
          class="capitalize"
          id="difficulty"
          name="difficulty"
          ?disabled=${this.isDisabled}
          @change=${this.handleDifficultyChange}
        >
          ${this._renderOptions()}
        </select>
      </label>
    `;
  }

  private _renderOptions(): TemplateResult[] {
    return this.difficulties.map(
      (level) =>
        html`<option value=${level} ?selected=${level === 'low'}>
          ${level}
        </option>`,
    );
  }
}

window.customElements.define(
  'bbva-difficulty-selector',
  BbvaDifficultySelectorView,
);

declare global {
  interface HTMLElementTagNameMap {
    'bbva-difficulty-selector': BbvaDifficultySelectorView;
  }
}
