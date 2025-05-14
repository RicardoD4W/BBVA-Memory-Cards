/* eslint-disable @typescript-eslint/no-unused-expressions */
import { expect, fixture, html } from '@open-wc/testing';
import '../../../../src/module/game/bbva-game/components/bbva-game-header/bbva-game-header.view';
import { BbvaGameHeaderView } from '../../../../src/module/game/bbva-game/components/bbva-game-header/bbva-game-header.view';

describe('<bbva-game-header>', () => {
  it('se conecta correctamente al DOM', async () => {
    const el = await fixture(html`<bbva-game-header></bbva-game-header>`);

    expect(el).dom.to.equal(`<bbva-game-header></bbva-game-header>`);
    expect(el).to.be.instanceOf(BbvaGameHeaderView);
    expect(el.tagName.toLowerCase()).to.equal('bbva-game-header');
  });

  it('se muestra el avatar del usuario con el nombre de usuario', async () => {
    const el = await fixture<BbvaGameHeaderView>(
      html`<bbva-game-header username="juan"></bbva-game-header>`,
    );

    const avatar = el.shadowRoot?.querySelector('bbva-user-avatar');
    expect(avatar).not.to.be.null;
    expect(avatar!['username']).to.equal('juan');
  });

  it('se deshabilitada el selector de dificultad cuando isDisabled es true', async () => {
    const el = await fixture(
      html`<bbva-game-header ?isDisabled=${true}></bbva-game-header>`,
    );

    const difficultySelector = el.shadowRoot?.querySelector(
      'bbva-difficulty-selector',
    );
    expect(difficultySelector).not.to.be.null;
    expect(difficultySelector?.hasAttribute('isDisabled')).to.be.true;
  });

  it('se habilita el selector de dificultad cuando isDisabled es false', async () => {
    const el = await fixture(
      html`<bbva-game-header .isDisabled=${false}></bbva-game-header>`,
    );

    const difficultySelector = el.shadowRoot?.querySelector(
      'bbva-difficulty-selector',
    );
    expect(difficultySelector).not.to.be.null;
    expect(difficultySelector?.hasAttribute('isDisabled')).to.be.false;
  });
});
