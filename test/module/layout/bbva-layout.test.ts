/* eslint-disable @typescript-eslint/no-unused-expressions */

import { expect, fixture, html } from '@open-wc/testing';
import '../../../src/module/layout/bbva-layout/bbva-layout.view';
import { BbvaLayoutView } from '../../../src/module/layout/bbva-layout/bbva-layout.view';

describe('<bbva-layout>', () => {
  it('se conecta correctamente al DOM', async () => {
    const el = await fixture<BbvaLayoutView>(html`<bbva-layout></bbva-layout>`);
    expect(el).dom.to.equal('<bbva-layout></bbva-layout>');
    expect(el).to.be.instanceOf(BbvaLayoutView);
    expect(el.tagName.toLowerCase()).to.equal('bbva-layout');
  });

  it('se renderiza el componente <bbva-header>', async () => {
    const el = await fixture(html`<bbva-layout></bbva-layout>`);
    const header = el.shadowRoot?.querySelector('bbva-header');
    expect(header).to.not.be.null;
  });

  it('renderiza el <slot> dentro de <main>', async () => {
    const el = await fixture(html`<bbva-layout></bbva-layout>`);
    const main = el.shadowRoot?.querySelector('main');
    const slot = main?.querySelector('slot');
    expect(slot).to.not.be.null;
  });
});
