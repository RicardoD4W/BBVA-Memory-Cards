import { CSSResult, CSSResultOrNative, css } from 'lit';

export class BbvaGameStatusTheme {
  static cssBase: CSSResult = css`
    :host {
      display: block;
    }

    .timer-container {
      margin: 0;

      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      & .timer {
        font-weight: 700;
        font-size: larger;
      }
    }

    .loser-msg {
      margin: 0;
      font-size: xx-large;
      font-weight: 700;
    }
  `;

  static BbvaGameStatusTheme: CSSResultOrNative[] = [
    BbvaGameStatusTheme.cssBase,
  ];
}
