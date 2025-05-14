export class RouterNavigateEvent extends CustomEvent<{ to: string }> {
  constructor(detail: { to: string }) {
    super('router:navigate', {
      bubbles: true,
      composed: true,
      detail,
    });
  }
}
