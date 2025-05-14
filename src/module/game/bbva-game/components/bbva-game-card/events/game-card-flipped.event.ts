export class GameCardFlippedEvent extends CustomEvent<number> {
  constructor(detail: number) {
    super('game-card:flipped', {
      bubbles: true,
      composed: true,
      detail,
    });
  }
}
