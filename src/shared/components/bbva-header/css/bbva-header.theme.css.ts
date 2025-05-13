import { CSSResult, CSSResultOrNative, css } from 'lit';

export class BbvaHeaderTheme {
  static cssBase: CSSResult = css`
    :host {
      display: block;
      height: 100%;
    }

    h1 {
      margin: 0;
      cursor: pointer;
    }

    hgroup {
      display: flex;
      justify-content: center;
      align-items: center;

      height: 100%;
      background-color: var(--theme-color);
      color: var(--background-color);
    }
  `;

  static BbvaHeaderTheme: CSSResultOrNative[] = [BbvaHeaderTheme.cssBase];
}
