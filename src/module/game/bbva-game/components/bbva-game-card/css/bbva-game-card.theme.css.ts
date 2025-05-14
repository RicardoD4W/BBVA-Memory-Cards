import { CSSResult, CSSResultOrNative, css } from 'lit';

export class BbvaGameCardTheme {
  static cssBase: CSSResult = css`
    :host {
      display: block;

      --card-color: #002b5c;
      --background-color-card: #fff;
    }

    .game-card {
      width: 90px;
      height: 130px;
      cursor: pointer;

      display: flex;
      justify-content: center;
      align-items: center;

      perspective: 1000px;
    }

    .card-inner {
      width: 100%;
      height: 100%;
      transition: transform 0.6s;
      transform-style: preserve-3d;
      position: relative;
      user-select: none;
    }

    .flipped {
      transform: rotateY(180deg);
    }

    .card-front,
    .card-back {
      position: absolute;
      width: 100%;
      height: 100%;
      backface-visibility: hidden;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 5px;
      font-size: 1.2rem;
    }

    .card-front {
      background: var(--background-color-card);
      border: 2px solid var(--card-color);

      font-size: xx-large;
    }

    .card-back {
      background-color: var(--card-color);

      background-image:
        repeating-linear-gradient(45deg, white 0 0, transparent 3px 12px),
        repeating-linear-gradient(-45deg, white 0 0, transparent 3px 12px);
      background-position:
        0 0,
        0 0;

      color: white;
      transform: rotateY(180deg);

      border: 4px solid var(--card-color);
      box-shadow: inset 0 0 0 2px var(--background-color);

      box-sizing: border-box;
    }

    .winner {
      --background-color-card: #60b460;
    }
    .loser {
      --background-color-card: #c05656;
    }
  `;

  static BbvaGameCardTheme: CSSResultOrNative[] = [BbvaGameCardTheme.cssBase];
}
