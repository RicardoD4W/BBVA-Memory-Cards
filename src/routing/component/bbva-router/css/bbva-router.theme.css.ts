import { CSSResult, CSSResultOrNative, css } from 'lit';

export class BbvaRouterTheme {
  static cssBase: CSSResult = css`
    :host {
      display: block;
    }
  `;

  static BbvaRouterTheme: CSSResultOrNative[] = [BbvaRouterTheme.cssBase];
}
