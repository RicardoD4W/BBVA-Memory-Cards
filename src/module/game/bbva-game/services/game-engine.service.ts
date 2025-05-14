import { DifficultSelector } from '../components/bbva-difficulty-selector/models/difficult.model';

export class GameEngineService {
  private pointsInLevels: Record<DifficultSelector, number> = {
    low: 0,
    medium: 0,
    high: 0,
  };

  private difficultyToSeconds: Record<DifficultSelector, number> = {
    low: 10,
    medium: 5,
    high: 2,
  };

  private difficultyToPoints: Record<DifficultSelector, number> = {
    low: 10,
    medium: 20,
    high: 30,
  };

  generateNumbers(): number[] {
    const numbers = new Set<number>();
    while (numbers.size < 9) {
      numbers.add(Math.floor(Math.random() * 9 + 1));
    }
    return Array.from(numbers);
  }

  selectWinningNumber(numbers: number[]): number {
    return numbers[Math.floor(Math.random() * numbers.length)];
  }

  getPoints(level: DifficultSelector): number {
    return this.difficultyToPoints[level];
  }

  getTime(level: DifficultSelector): number {
    return this.difficultyToSeconds[level];
  }

  increasePoints(level: DifficultSelector): number {
    const points = this.getPoints(level);
    this.pointsInLevels[level] += points;
    return points;
  }

  getTotalPoints(level: DifficultSelector): number {
    return this.pointsInLevels[level];
  }

  isWinner(selected: number, target: number): boolean {
    return selected === target;
  }
}
