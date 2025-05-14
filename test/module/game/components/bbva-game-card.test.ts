/* eslint-disable @typescript-eslint/no-unused-expressions */
import { expect, fixture, html } from '@open-wc/testing';
import '../../../../src/module/game/bbva-game/components/bbva-game-card/bbva-game-card.view';
import { BbvaGameCardView } from '../../../../src/module/game/bbva-game/components/bbva-game-card/bbva-game-card.view';

describe('<bbva-game-card>', () => {
  it('se conecta correctamente al DOM', async () => {
    const el = await fixture(html`<bbva-game-card></bbva-game-card>`);

    expect(el).dom.to.equal(`<bbva-game-card></bbva-game-card>`);
    expect(el).to.be.instanceOf(BbvaGameCardView);
    expect(el.tagName.toLowerCase()).to.equal('bbva-game-card');
  });

  it('se muestra el número de la carta', async () => {
    const el = await fixture(
      html`<bbva-game-card cardNumber="7"></bbva-game-card>`,
    );

    const span = el.shadowRoot?.querySelector('.card-front span');
    expect(span?.textContent?.trim()).to.equal('7');
  });

  it('tiene la clase "flipped" cuando isFlipped es true', async () => {
    const el = await fixture(
      html`<bbva-game-card ?isFlipped=${true}></bbva-game-card>`,
    );

    const cardInner = el.shadowRoot?.querySelector('.card-inner');
    expect(cardInner?.classList.contains('flipped')).to.be.true;
  });

  it('tiene la clase "winner" cuando isSelected e isWinner son true', async () => {
    const el = await fixture(
      html`<bbva-game-card
        ?isSelected=${true}
        ?isWinner=${true}
      ></bbva-game-card>`,
    );

    const front = el.shadowRoot?.querySelector('.card-front');
    expect(front?.classList.contains('winner')).to.be.true;
    expect(front?.classList.contains('loser')).to.be.false;
  });

  it('tiene la clase "loser" cuando isSelected es true y isWinner es false', async () => {
    const el = await fixture(
      html`<bbva-game-card
        ?isSelected=${true}
        ?isWinner=${false}
      ></bbva-game-card>`,
    );

    const front = el.shadowRoot?.querySelector('.card-front');
    expect(front?.classList.contains('loser')).to.be.true;
    expect(front?.classList.contains('winner')).to.be.false;
  });

  it('no se emite evento si isPlaying es false', async () => {
    const el = await fixture<BbvaGameCardView>(
      html`<bbva-game-card
        ?isPlaying=${false}
        ?isFlippeable=${true}
        .cardNumber=${5}
      ></bbva-game-card>`,
    );

    let eventTriggered = false;

    el.addEventListener('game-card:flipped', () => {
      eventTriggered = true;
    });

    const target = el.shadowRoot?.querySelector('.game-card');
    target?.dispatchEvent(
      new MouseEvent('click', { bubbles: true, composed: true }),
    );

    await el.updateComplete;

    expect(eventTriggered).to.be.false;
  });

  it('no emite evento si isFlippeable es false', async () => {
    const el = await fixture<BbvaGameCardView>(
      html`<bbva-game-card
        ?isPlaying=${true}
        ?isFlippeable=${false}
        .cardNumber=${3}
      ></bbva-game-card>`,
    );

    let eventTriggered = false;

    el.addEventListener('game-card:flipped', () => {
      eventTriggered = true;
    });

    const target = el.shadowRoot?.querySelector('.game-card');
    target?.dispatchEvent(
      new MouseEvent('click', { bubbles: true, composed: true }),
    );

    await el.updateComplete;

    expect(eventTriggered).to.be.false;
  });

  it('emite "game-card:flipped" con el número de carta si isPlaying e isFlippeable son true', async () => {
    const el = await fixture<BbvaGameCardView>(
      html`<bbva-game-card
        ?isPlaying=${true}
        ?isFlippeable=${true}
        .cardNumber=${9}
      ></bbva-game-card>`,
    );

    let receivedDetail: number | null = null;

    el.addEventListener('game-card:flipped', (e: Event) => {
      const event = e as CustomEvent<number>;
      receivedDetail = event.detail;
    });

    const target = el.shadowRoot?.querySelector('.game-card');
    target?.dispatchEvent(
      new MouseEvent('click', { bubbles: true, composed: true }),
    );

    await el.updateComplete;

    expect(receivedDetail).to.equal(9);
  });
});
