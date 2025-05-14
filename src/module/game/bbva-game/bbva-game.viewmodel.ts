import { LitElement } from 'lit';
import { state } from 'lit/decorators.js';
// import { Router } from '@vaadin/router';

import { DifficultSelector } from './components/bbva-difficulty-selector/models/difficult.model';
import { DifficultChangedEvent } from './components/bbva-difficulty-selector/events/difficult-changed.event';
import { GameCardFlippedEvent } from './components/bbva-game-card/events/game-card-flipped.event';

import { checkNameValidity } from '../../../shared/utils/functions';
import { GameEngineService } from './services/game-engine.service';

export class BbvaGameViewModel extends LitElement {
  // game
  @state() protected isPlaying: boolean = false;
  @state() protected points: number = 0;
  @state() protected timer: number = 0;
  @state() protected difficultLevel: DifficultSelector = 'low';
  @state() protected pointsInLevels: Record<DifficultSelector, number> = {
    low: 0,
    medium: 0,
    high: 0,
  };

  // user
  protected username: string = '';

  // cards
  @state() protected isFlipped: boolean = false;
  @state() protected isFlippeable: boolean = false;
  @state() protected randomNumber: number = 0;
  @state() protected selectedCardNumber: number = 0;
  @state() protected cardNumbers: Set<number> = new Set();

  // internal
  private _countdown!: ReturnType<typeof setInterval>;
  private _animationAbortController = new AbortController();

  //services
  private readonly _gameEngineService = new GameEngineService();

  connectedCallback(): void {
    super.connectedCallback();

    const params = new URLSearchParams(window.location.search);
    const username = params.get('username');

    if (!username || !checkNameValidity(username)) {
      window.location.hash = '#/';
      return;
    }

    this.username = username;
  }

  protected handleDifficultChanged(e: DifficultChangedEvent) {
    this.difficultLevel = e.detail.level;
    this.points = this.pointsInLevels[this.difficultLevel];
  }

  protected handleBeginGame() {
    this._resetAnimationSignals();
    this._clearTimer();

    this.timer = this._gameEngineService.getTime(this.difficultLevel);
    this.cardNumbers = new Set(this._gameEngineService.generateNumbers());
    this.randomNumber = this._gameEngineService.selectWinningNumber(
      Array.from(this.cardNumbers),
    );

    this.selectedCardNumber = 0;
    this.isPlaying = true;
    this.isFlipped = false;

    this._initTimer();
  }

  protected handleStopGame() {
    this._resetAnimationSignals();
    this._clearTimer();

    this.isPlaying = false;
    this.selectedCardNumber = 0;
  }

  protected async handleSelectedCard(e: GameCardFlippedEvent) {
    this.isFlippeable = false;
    this.selectedCardNumber = e.detail;

    const isCorrect = this._gameEngineService.isWinner(
      this.selectedCardNumber,
      this.randomNumber,
    );

    if (isCorrect) {
      const points = this._gameEngineService.increasePoints(
        this.difficultLevel,
      );
      this.points += points;
      this.pointsInLevels[this.difficultLevel] += points;

      await this._winAnimation();
      if (!this.isPlaying) return;
      this.handleBeginGame();
    }

    if (!isCorrect) {
      if ('vibrate' in navigator) navigator.vibrate(200);
      await this._loseAnimation();
    }
  }

  private _initTimer() {
    this._countdown = setInterval(() => {
      this.timer = this.timer - 1;

      if (this.timer <= 0) {
        this.isFlippeable = true;
        this.isFlipped = true;
        this._clearTimer();
      }
    }, 1000);
  }

  private _clearTimer() {
    clearInterval(this._countdown);
  }

  private async _loseAnimation() {
    const signal = this._animationAbortController.signal;
    try {
      await this._abortableDelay(1000, signal);
      this.isFlipped = false;

      await this._abortableDelay(1000, signal);
    } catch (err) {
      console.warn('Animacion Cancelada: ', err);
    }
  }

  private async _winAnimation() {
    const signal = this._animationAbortController.signal;

    try {
      await this._abortableDelay(1000, signal);
      this.isFlipped = false;

      await this._abortableDelay(1000, signal);
      this.isFlipped = true;

      await this._abortableDelay(1000, signal);
    } catch (err) {
      console.warn('Animacion Cancelada: ', err);
    }
  }

  private _resetAnimationSignals() {
    this._animationAbortController.abort();
    this._animationAbortController = new AbortController();
  }

  private async _abortableDelay(
    ms: number,
    signal: AbortSignal,
  ): Promise<void> {
    return new Promise((resolve, reject) => {
      const timer = setTimeout(resolve, ms);
      signal.addEventListener('abort', () => {
        clearTimeout(timer);
        reject(new DOMException('Aborted', 'AbortError'));
      });
    });
  }
}
