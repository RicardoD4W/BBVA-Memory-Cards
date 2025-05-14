/* eslint-disable @typescript-eslint/no-unused-expressions */

import { expect, fixture, html, oneEvent } from '@open-wc/testing';
import '../../../src/shared/components/bbva-header/bbva-header.view';
import { BbvaHeaderView } from '../../../src/shared/components/bbva-header/bbva-header.view';

describe('<bbva-header>', () => {
  it('se conecta correctamente al DOM', async () => {
    const el = await fixture(html`<bbva-header></bbva-header>`);

    expect(el).dom.to.equal(`<bbva-header></bbva-header>`);
    expect(el).to.be.instanceOf(BbvaHeaderView);
    expect(el.tagName.toLowerCase()).to.equal('bbva-header');
  });

  it('se renderiza correctamente el título', async () => {
    const el = await fixture(html`<bbva-header></bbva-header>`);
    const h1 = el.shadowRoot?.querySelector('h1');
    expect(h1).to.exist;
    expect(h1?.textContent?.trim()).to.equal('Memory Cards');
  });

  it('emite un evento de navegación al home al llamar goHome()', async () => {
    const el = await fixture<BbvaHeaderView>(html`<bbva-header></bbva-header>`);

    const listener = oneEvent(el, 'router:navigate');
    el['goHome'](); // Llamamos el método protegido

    const event = await listener;
    expect(event).to.exist;
    expect((event as CustomEvent).detail.to).to.equal('/');
  });
});
