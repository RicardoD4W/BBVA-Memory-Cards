import { CSSResultGroup, CSSResultOrNative, TemplateResult, html } from 'lit';
import { BbvaUserAvatarTheme } from './css/bbva-user-avatar.theme.css';
import { BbvaUserAvatarViewModel } from './bbva-user-avatar.viewmodel';

export class BbvaUserAvatarView extends BbvaUserAvatarViewModel {
  protected static finalizeStyles(
    styles?: CSSResultGroup | undefined,
  ): CSSResultOrNative[] {
    return [...super.finalizeStyles(styles), BbvaUserAvatarTheme.cssBase];
  }

  public render(): TemplateResult {
    return html` <p class="username">${this.username}</p>`;
  }
}

window.customElements.define('bbva-user-avatar', BbvaUserAvatarView);

declare global {
  interface HTMLElementTagNameMap {
    'bbva-user-avatar': BbvaUserAvatarView;
  }
}
