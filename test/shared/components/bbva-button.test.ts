import { expect, fixture, html } from '@open-wc/testing';
import '../../../src/shared/components/bbva-button/bbva-button.view';

describe('<bbva-button>', () => {
  it('se conecta correctamente al DOM', async () => {
    const el = await fixture(html`<bbva-button></bbva-button>`);

    expect(el).dom.to.equal(`<bbva-button></bbva-button>`);
    expect(el).to.be.instanceOf(HTMLElement);
    expect(el.tagName.toLowerCase()).to.equal('bbva-button');
  });
});
