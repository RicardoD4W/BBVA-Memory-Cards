import { CSSResult, CSSResultOrNative, css } from 'lit';

export class BbvaDifficultySelectorTheme {
  static cssBase: CSSResult = css`
    :host {
      display: block;
    }

    .capitalize {
      text-transform: capitalize;
    }
  `;

  static BbvaDifficultySelectorTheme: CSSResultOrNative[] = [
    BbvaDifficultySelectorTheme.cssBase,
  ];
}
