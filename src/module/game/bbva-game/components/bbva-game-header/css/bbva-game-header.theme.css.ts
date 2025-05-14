import { CSSResult, CSSResultOrNative, css } from 'lit';

export class BbvaGameHeaderTheme {
  static cssBase: CSSResult = css`
    :host {
      display: block;
    }

    .user-info {
      display: flex;
      justify-content: space-between;
      margin: 0.5rem;
      gap: 0.25rem;

      & bbva-user-avatar {
        width: 60%;
      }

      & bbva-difficulty-selector {
        width: 40%;
        text-align: right;
      }
    }
  `;

  static BbvaGameHeaderTheme: CSSResultOrNative[] = [
    BbvaGameHeaderTheme.cssBase,
  ];
}
