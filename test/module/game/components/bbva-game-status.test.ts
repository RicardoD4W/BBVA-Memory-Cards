/* eslint-disable @typescript-eslint/no-unused-expressions */
import { expect, fixture, html } from '@open-wc/testing';
import '../../../../src/module/game/bbva-game/components/bbva-game-status/bbva-game-status.view';
import { BbvaGameStatusView } from '../../../../src/module/game/bbva-game/components/bbva-game-status/bbva-game-status.view';

describe('<bbva-game-status>', () => {
  it('se conecta correctamente al DOM', async () => {
    const el = await fixture(html`<bbva-game-status></bbva-game-status>`);
    expect(el).to.be.instanceOf(BbvaGameStatusView);
    expect(el.shadowRoot).not.to.be.null;
    expect(el.tagName.toLowerCase()).to.equal('bbva-game-status');
  });

  it('se muestra el mensaje de memorizar cuando el temporizador es mayor que 0', async () => {
    const el = await fixture(
      html`<bbva-game-status .timer=${5}></bbva-game-status>`,
    );

    const timerText = el.shadowRoot?.querySelector('.timer');
    expect(timerText?.textContent).to.equal('5s');
    const msg = el.shadowRoot?.querySelector('.timer-container');
    expect(msg?.textContent).to.include(
      'Memorize the cards, you gonna play in',
    );
  });

  it('se muestra el mensaje de perder cuando el número seleccionado es diferente al número aleatorio', async () => {
    const el = await fixture(
      html`<bbva-game-status
        .selectedCardNumber=${3}
        .randomNumber=${5}
      ></bbva-game-status>`,
    );

    const loserMsg = el.shadowRoot?.querySelector('.loser-msg');
    expect(loserMsg?.textContent).to.equal('You Lose!');
  });

  it('se muestra el mensaje de seleccionar número cuando el temporizador es 0 y el número seleccionado es 0', async () => {
    const el = await fixture(
      html`<bbva-game-status
        .timer=${0}
        .randomNumber=${7}
      ></bbva-game-status>`,
    );

    const timerText = el.shadowRoot?.querySelector('.timer');
    expect(timerText?.textContent).to.equal('7');
    const msg = el.shadowRoot?.querySelector('.timer-container');
    expect(msg?.textContent).to.include('Select the number');
  });

  it('se calcula correctamente el estado de memorizar cuando el temporizador es mayor que 0', async () => {
    const el = await fixture<BbvaGameStatusView>(
      html`<bbva-game-status .timer=${5}></bbva-game-status>`,
    );

    const isMemorizing = el['isMemorizing'];
    expect(isMemorizing).to.be.true;
  });

  it('se calcula correctament el estado de perder cuando el número seleccionado es diferente al número aleatorio', async () => {
    const el = await fixture<BbvaGameStatusView>(
      html`<bbva-game-status
        .selectedCardNumber=${3}
        .randomNumber=${5}
      ></bbva-game-status>`,
    );
    const hasLost = el['hasLost'];
    expect(hasLost).to.be.true;
  });

  it('se calcula correctamente el estado de perder cuando el número seleccionado es igual al número aleatorio', async () => {
    const el = await fixture<BbvaGameStatusView>(
      html`<bbva-game-status
        .selectedCardNumber=${5}
        .randomNumber=${5}
      ></bbva-game-status>`,
    );
    const hasLost = el['hasLost'];
    expect(hasLost).to.be.false;
  });
});
