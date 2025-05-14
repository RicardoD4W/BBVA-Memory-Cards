import { CSSResult, CSSResultOrNative, css } from 'lit';

export class BbvaGameTheme {
  static cssBase: CSSResult = css`
    :host {
      display: block;
      height: 100%;
    }

    .game-container {
      display: flex;
      flex-direction: column;
      height: 100%;
      width: 100%;
    }

    .game-container {
      & .game-board {
        flex: 1;
        padding: 0.5rem;
        margin-top: 0.5rem;

        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;

        & .game-points {
          font-weight: 700;
        }

        & .game-cards {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          grid-template-rows: repeat(3, 1fr);
          grid-gap: 0.5rem;
        }
      }
    }

    .introductory-msg {
      text-align: center;
      margin-inline: 1rem;
    }
  `;

  static BbvaGameTheme: CSSResultOrNative[] = [BbvaGameTheme.cssBase];
}
