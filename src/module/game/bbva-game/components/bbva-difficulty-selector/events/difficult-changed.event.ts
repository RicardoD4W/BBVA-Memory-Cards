import { DifficultChangedModel } from '../models/difficult-changed.model';

export class DifficultChangedEvent extends CustomEvent<DifficultChangedModel> {
  constructor(detail: DifficultChangedModel) {
    super('difficult:changed', {
      bubbles: true,
      composed: true,
      detail,
    });
  }
}
