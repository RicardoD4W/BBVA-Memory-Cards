/* eslint-disable @typescript-eslint/no-unused-expressions */

import { expect, fixture, html } from '@open-wc/testing';
import '../../../src/module/home/bbva-home/bbva-home.view';
import { BbvaHomeView } from '../../../src/module/home/bbva-home/bbva-home.view';

describe('<bbva-home>', () => {
  let formElement: HTMLFormElement;
  let inputElement: HTMLInputElement;
  let button: HTMLElement;

  beforeEach(async () => {
    const el = await fixture(html`<bbva-home></bbva-home>`);
    formElement = el.shadowRoot?.querySelector('form') as HTMLFormElement;
    inputElement = el.shadowRoot?.querySelector(
      'input[name="username"]',
    ) as HTMLInputElement;
    button = el.shadowRoot?.querySelector('bbva-button') as HTMLElement;
  });

  it('se conecta correctamente al DOM', async () => {
    const el = await fixture<BbvaHomeView>(html`<bbva-home></bbva-home>`);
    expect(el).dom.to.equal('<bbva-home></bbva-home>');
    expect(el).to.be.instanceOf(BbvaHomeView);
    expect(el.tagName.toLowerCase()).to.equal('bbva-home');
  });

  it('se envia el formulario correctamente cuando el nombre es válido', async () => {
    inputElement.value = 'Juan';
    formElement?.dispatchEvent(
      new Event('submit', { bubbles: true, cancelable: true }),
    );

    expect(inputElement.validity.valid).to.be.true;
  });

  it('se muestra un mensaje de error cuando el nombre no es válido', async () => {
    inputElement.value = '123';
    formElement?.dispatchEvent(
      new Event('submit', { bubbles: true, cancelable: true }),
    );

    expect(inputElement.validity.valid).to.be.false;
  });

  it('se borran los mensajes de validez cuando el usuario escribe en el campo', async () => {
    inputElement.value = '123';
    inputElement.dispatchEvent(new InputEvent('input'));

    expect(inputElement.validationMessage).to.be.empty;
  });

  it('se permite enviar el formulario a través del botón', async () => {
    inputElement.value = 'Carlos';
    button?.click();
    expect(inputElement.validity.valid).to.be.true;
  });
});
