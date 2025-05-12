import { CSSResult, CSSResultOrNative, css } from 'lit';

export class BbvaLayoutTheme {
  static cssBase: CSSResult = css`
    :host {
      display: block;
    }
  `;

  static BbvaLayoutTheme: CSSResultOrNative[] = [BbvaLayoutTheme.cssBase];
}
