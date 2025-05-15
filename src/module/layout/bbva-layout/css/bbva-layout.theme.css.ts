import { CSSResult, CSSResultOrNative, css } from 'lit';

export class BbvaLayoutTheme {
  static cssBase: CSSResult = css`
    :host {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      height: 100dvh;
      overflow: hidden;
    }

    header {
      height: 8%;
    }

    main {
      height: 90%;
    }
  `;

  static BbvaLayoutTheme: CSSResultOrNative[] = [BbvaLayoutTheme.cssBase];
}
