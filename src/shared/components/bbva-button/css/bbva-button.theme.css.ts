import { CSSResult, CSSResultOrNative, css } from 'lit';

export class BbvaButtonTheme {
  static cssBase: CSSResult = css`
    :host {
      display: block;
    }

    [name='submit'] {
      width: 5rem;
      padding: 0.5rem 0.75rem;
      cursor: pointer;

      background-color: var(--theme-color);
      color: var(--background-color);

      border-radius: 0.25rem;
      border: none;
    }

    [disabled] {
      opacity: 0.5;
    }
  `;

  static BbvaButtonTheme: CSSResultOrNative[] = [BbvaButtonTheme.cssBase];
}
