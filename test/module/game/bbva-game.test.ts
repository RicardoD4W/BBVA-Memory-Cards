/* eslint-disable @typescript-eslint/no-unused-expressions */

import { expect, html, fixture } from '@open-wc/testing';
import { BbvaGameView } from '../../../src/module/game/bbva-game/bbva-game.view';
import '../../../src/module/game/bbva-game/bbva-game.view';
import { GameEngineService } from '../../../src/module/game/bbva-game/services/game-engine.service';
import { DifficultChangedEvent } from '../../../src/module/game/bbva-game/components/bbva-difficulty-selector/events/difficult-changed.event';
import { GameCardFlippedEvent } from '../../../src/module/game/bbva-game/components/bbva-game-card/events/game-card-flipped.event';

describe('BbvaGameView', () => {
  let gameEngineService: GameEngineService;

  beforeEach(() => {
    gameEngineService = new GameEngineService();
    gameEngineService.generateNumbers = () => [1, 2, 3, 4, 5, 6, 7, 8, 9];
    gameEngineService.selectWinningNumber = () => 5;
  });

  it('se conecta correctamente al DOM', async () => {
    const el = await fixture(html`<bbva-game></bbva-game>`);

    expect(el).dom.to.equal(`<bbva-game></bbva-game>`);
    expect(el).to.be.instanceOf(BbvaGameView);
    expect(el.tagName.toLowerCase()).to.equal('bbva-game');
  });

  it('se debe empezar el juego', async () => {
    const el = await fixture<BbvaGameView>(
      html`<bbva-game ?isPlaying=${true}></bbva-game>`,
    );

    el['handleSelectedCard'](new GameCardFlippedEvent(3));
  });

  it('se debe mostrar el mensaje introductorio si no está jugando', async () => {
    const el = await fixture<BbvaGameView>(html`<bbva-game></bbva-game>`);
    expect(el.shadowRoot?.querySelector('.introductory-msg')).to.exist;

    const text = el.shadowRoot
      ?.querySelector('.introductory-msg')
      ?.textContent?.trim()
      .replace('\n', '')
      .replace('               ', '');

    expect(text).to.be.equal(
      "Select the 'Level' and click the 'Play' button to start a new game",
    );
  });

  it('se debe iniciar un juego y mostrar los números de las cartas cuando el nivel de dificultad está establecido', async () => {
    const el = await fixture<BbvaGameView>(html`<bbva-game></bbva-game>`);
    el['handleDifficultChanged'](
      new DifficultChangedEvent({ level: 'medium' }),
    );

    el['handleBeginGame']();

    expect(el['isPlaying']).to.be.true;
    expect(el['timer']).to.equal(el['_gameEngineService'].getTime('medium'));
    expect(el['cardNumbers'].size).to.equal(9);
  });

  it('se debe actualizar la puntuación cuando se selecciona una carta correcta', async () => {
    const el = await fixture<BbvaGameView>(html`<bbva-game></bbva-game>`);

    el['randomNumber'] = 5;
    el['selectedCardNumber'] = 5;
    el['handleSelectedCard'](new GameCardFlippedEvent(5));

    expect(el['points']).to.equal(gameEngineService.getPoints('low'));
  });

  it('se debe llamar a handleBeginGame si la carta es correcta', async () => {
    const el = await fixture<BbvaGameView>(html`<bbva-game></bbva-game>`);

    el['randomNumber'] = 7;
    el['difficultLevel'] = 'medium';
    el['isPlaying'] = true;
    el['cardNumbers'] = new Set([1, 7, 9]);

    el['_gameEngineService'].isWinner = (selected, random) =>
      selected === random;
    el['_gameEngineService'].increasePoints = () => 5;

    let winAnimationCalled = false;
    el['_winAnimation'] = async () => {
      winAnimationCalled = true;
    };

    let handleBeginCalled = false;
    el['handleBeginGame'] = () => {
      handleBeginCalled = true;
    };

    await el['handleSelectedCard'](new GameCardFlippedEvent(7));

    expect(winAnimationCalled).to.be.true;
    expect(handleBeginCalled).to.be.true;
    expect(el['points']).to.equal(5);
    expect(el['pointsInLevels']['medium']).to.equal(5);
  });

  it('se debe cambiar a "Stop" cuando el juego está en progreso', async () => {
    const el = await fixture<BbvaGameView>(
      html`<bbva-game .isPlaying="${true}"></bbva-game>`,
    );

    el['handleStopGame']();

    const button = el.shadowRoot?.querySelector('bbva-button');
    expect(button?.textContent?.trim()).to.equal('Stop');
  });

  it('se debe activar la animación de ganar cuando el jugador selecciona el número correcto', async () => {
    const el = await fixture<BbvaGameView>(html`<bbva-game></bbva-game>`);

    el['handleDifficultChanged'](
      new DifficultChangedEvent({ level: 'medium' }),
    );
    el['handleBeginGame']();
    el['randomNumber'] = 5;
    el['handleSelectedCard'](new GameCardFlippedEvent(5));

    expect(el['isFlipped']).to.be.false;
  });

  it('se debe activar isFlippeable y isFlipped cuando el timer llega a 0', async () => {
    const el = await fixture<BbvaGameView>(html`<bbva-game></bbva-game>`);
    el['timer'] = 1;
    el['_initTimer']();

    await new Promise((resolve) => setTimeout(resolve, 1100));

    expect(el['isFlippeable']).to.be.true;
    expect(el['isFlipped']).to.be.true;
    expect(el['timer']).to.be.at.most(0);
  });

  it('se debe activar la animación de perder cuando el jugador selecciona el número incorrecto', async () => {
    const el = await fixture<BbvaGameView>(html`<bbva-game></bbva-game>`);

    el['handleBeginGame']();

    const gameCardFlippedEvent: GameCardFlippedEvent = new CustomEvent(
      'game-card:flipped',
      {
        detail: 3,
      },
    );

    el['handleSelectedCard'](gameCardFlippedEvent);
    el.dispatchEvent(gameCardFlippedEvent);

    expect(el['isFlipped']).to.be.false;
  });
});
