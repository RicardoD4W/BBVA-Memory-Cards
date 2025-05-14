import { expect, fixture, html } from '@open-wc/testing';
import '../../../src/routing/component/bbva-router/bbva-router.view';
import { BbvaRouterView } from '../../../src/routing/component/bbva-router/bbva-router.view';

describe('<bbva-router>', () => {
  it('se conecta correctamente al DOM', async () => {
    const el = await fixture(html`<bbva-router></bbva-router>`);
    expect(el).dom.to.equal(`<bbva-router></bbva-router>`);
    expect(el).to.be.instanceOf(BbvaRouterView);
    expect(el.tagName.toLowerCase()).to.equal('bbva-router');
  });
});
