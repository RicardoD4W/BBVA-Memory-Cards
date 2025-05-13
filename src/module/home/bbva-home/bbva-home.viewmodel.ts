import { Router } from '@vaadin/router';
import { LitElement } from 'lit';
import { createRef } from 'lit/directives/ref.js';

export class BbvaHomeViewModel extends LitElement {
  protected formRef = createRef();

  protected handleSubmitForm(e: SubmitEvent) {
    e.preventDefault();

    const formEvent = this.formRef.value as HTMLFormElement;
    if (!formEvent) return;

    const formData = new FormData(formEvent);
    const name = formData.get('username')?.toString().trim();
    if (!name) return;

    Router.go(`/game?username=${name}`);
  }

  protected handleSubmitButtonForm() {
    const formElement = this.formRef.value as HTMLFormElement;
    if (!formElement) return;

    formElement.requestSubmit();
  }
}
