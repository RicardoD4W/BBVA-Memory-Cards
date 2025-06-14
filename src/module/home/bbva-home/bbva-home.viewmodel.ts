import { checkNameValidity } from '../../../shared/utils/functions';
import { LitElement } from 'lit';
import { createRef } from 'lit/directives/ref.js';
import { RouterNavigateEvent } from '../../../routing/component/bbva-router/events/router-navigate.event';

export class BbvaHomeViewModel extends LitElement {
  protected formRef = createRef();

  protected handleSubmitForm(e: SubmitEvent) {
    e.preventDefault();

    const formEvent = this.formRef.value as HTMLFormElement;
    if (!formEvent) return;

    const formData = new FormData(formEvent);
    const name = formData.get('username')?.toString().trim();
    const input = formEvent.elements.namedItem('username') as HTMLInputElement;

    if (!name) return;
    if (!input) return;

    if (!checkNameValidity(name)) {
      input.setCustomValidity('Enter a valid name');
      input.reportValidity();
      input.value = '';
      return;
    }

    this.dispatchEvent(
      new RouterNavigateEvent({ to: `/game?username=${name}` }),
    );
  }

  protected handleSubmitButtonForm() {
    const formElement = this.formRef.value as HTMLFormElement;
    if (!formElement) return;

    formElement.requestSubmit();
  }

  protected clearValidities(e: InputEvent) {
    const input = e.target as HTMLInputElement;

    input.setCustomValidity('');
  }
}
