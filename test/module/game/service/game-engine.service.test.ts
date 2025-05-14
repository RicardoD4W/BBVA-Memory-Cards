/* eslint-disable @typescript-eslint/no-unused-expressions */
import { expect } from '@open-wc/testing';
import { GameEngineService } from '../../../../src/module/game/bbva-game/services/game-engine.service';

describe('GameEngineService', () => {
  let gameEngineService: GameEngineService;

  beforeEach(() => {
    gameEngineService = new GameEngineService();
  });

  it('se debe generar un array de números únicos de 9 elementos', () => {
    const numbers = gameEngineService.generateNumbers();
    expect(numbers.length).to.equal(9);
    expect(new Set(numbers).size).to.equal(9);
  });

  it('se debe seleccionar un número ganador de los números dados', () => {
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    const winningNumber = gameEngineService.selectWinningNumber(numbers);
    expect(numbers).to.include(winningNumber);
  });

  it('se debe devolver los puntos correctos para cada nivel de dificultad', () => {
    const lowPoints = gameEngineService.getPoints('low');
    const mediumPoints = gameEngineService.getPoints('medium');
    const highPoints = gameEngineService.getPoints('high');

    expect(lowPoints).to.equal(10);
    expect(mediumPoints).to.equal(20);
    expect(highPoints).to.equal(30);
  });

  it('se debe devolver el tiempo correcto para cada nivel de dificultad', () => {
    const lowTime = gameEngineService.getTime('low');
    const mediumTime = gameEngineService.getTime('medium');
    const highTime = gameEngineService.getTime('high');

    expect(lowTime).to.equal(10);
    expect(mediumTime).to.equal(5);
    expect(highTime).to.equal(2);
  });

  it('se debe aumentar los puntos correctamente para cada nivel de dificultad', () => {
    const initialPoints = gameEngineService.getTotalPoints('low');
    gameEngineService.increasePoints('low');
    expect(gameEngineService.getTotalPoints('low')).to.equal(
      initialPoints + 10,
    );

    const initialMediumPoints = gameEngineService.getTotalPoints('medium');
    gameEngineService.increasePoints('medium');
    expect(gameEngineService.getTotalPoints('medium')).to.equal(
      initialMediumPoints + 20,
    );

    const initialHighPoints = gameEngineService.getTotalPoints('high');
    gameEngineService.increasePoints('high');
    expect(gameEngineService.getTotalPoints('high')).to.equal(
      initialHighPoints + 30,
    );
  });

  it('se debe devolver true si el número seleccionado es igual al objetivo', () => {
    const selectedNumber = 5;
    const targetNumber = 5;
    const result = gameEngineService.isWinner(selectedNumber, targetNumber);
    expect(result).to.be.true;
  });

  it('se debe devolver false si el número seleccionado no es igual al objetivo', () => {
    const selectedNumber = 5;
    const targetNumber = 7;
    const result = gameEngineService.isWinner(selectedNumber, targetNumber);
    expect(result).to.be.false;
  });
});
