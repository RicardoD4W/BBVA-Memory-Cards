import { CSSResult, CSSResultOrNative, css } from 'lit';

export class BbvaUserAvatarTheme {
  static cssBase: CSSResult = css`
    :host {
      display: block;
    }

    .username {
      margin: 0;

      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      text-transform: capitalize;
    }
  `;

  static BbvaUserAvatarTheme: CSSResultOrNative[] = [
    BbvaUserAvatarTheme.cssBase,
  ];
}
