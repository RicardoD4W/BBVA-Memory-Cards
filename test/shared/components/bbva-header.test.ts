/* eslint-disable @typescript-eslint/no-unused-expressions */

import { expect, fixture, html } from '@open-wc/testing';
import { Router } from '@vaadin/router';
import '../../../src/shared/components/bbva-header/bbva-header.view';

describe('<bbva-header>', () => {
  it('se conecta correctamente al DOM', async () => {
    const el = await fixture(html`<bbva-header></bbva-header>`);

    expect(el).dom.to.equal(`<bbva-header></bbva-header>`);
    expect(el).to.be.instanceOf(HTMLElement);
    expect(el.tagName.toLowerCase()).to.equal('bbva-header');
  });

  it('renderiza correctamente el título', async () => {
    const el = await fixture(html`<bbva-header></bbva-header>`);
    const h1 = el.shadowRoot?.querySelector('h1');
    expect(h1).to.exist;
    expect(h1?.textContent?.trim()).to.equal('Memory Cards');
  });

  it('redirige al home al hacer clic en el título', async () => {
    const originalGo = Router.go;
    let calledWith: string | null = null;

    Router.go = (path: string) => {
      calledWith = path;
      return true;
    };

    const el = await fixture(html`<bbva-header></bbva-header>`);
    el.shadowRoot?.querySelector('h1')?.click();

    expect(calledWith).to.equal('/');
    Router.go = originalGo;
  });
});
