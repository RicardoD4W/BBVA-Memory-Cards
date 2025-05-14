import { LitElement } from 'lit';
import { DifficultSelector } from './models/difficult.model';
import { DifficultChangedEvent } from './events/difficult-changed.event';
import { property } from 'lit/decorators.js';

export class BbvaDifficultySelectorViewModel extends LitElement {
  @property({ type: Boolean }) isDisabled: boolean = false;
  protected difficulties: DifficultSelector[] = ['low', 'medium', 'high'];

  protected handleDifficultyChange(e: Event) {
    const select = e.target as HTMLSelectElement;
    if (!select) return;

    const level = select.value as DifficultSelector;

    this.dispatchEvent(new DifficultChangedEvent({ level }));
  }
}
