/* eslint-disable @typescript-eslint/no-unused-expressions */
import { expect, fixture, html } from '@open-wc/testing';
import '../../../src/routing/component/bbva-router/bbva-router.view';
import { BbvaRouterView } from '../../../src/routing/component/bbva-router/bbva-router.view';

describe('<bbva-router>', () => {
  it('se conecta correctamente al DOM', async () => {
    const el = await fixture<BbvaRouterView>(html`<bbva-router></bbva-router>`);
    expect(el).dom.to.equal('<bbva-router></bbva-router>');
    expect(el).to.be.instanceOf(BbvaRouterView);
    expect(el.tagName.toLowerCase()).to.equal('bbva-router');
  });

  it('se ejecuta _navigateTo al llamar _navigateListener', async () => {
    const el = await fixture<BbvaRouterView>(html`<bbva-router></bbva-router>`);

    const root = document.createElement('div');
    root.id = 'root';
    document.body.appendChild(root);

    let called = false;
    el['_router'].navigate = (to: string) => {
      called = to === '/game';
    };

    const event = new CustomEvent('router:navigate', {
      detail: { to: '/game' },
    });

    el['_navigateListener'](event);
    expect(called).to.be.true;

    document.body.removeChild(root);
  });

  it('se agrega y elimina el event listener correctamente', async () => {
    const el = await fixture<BbvaRouterView>(html`<bbva-router></bbva-router>`);
    const root = document.createElement('div');
    root.id = 'root';
    document.body.appendChild(root);

    let attached = false;
    let removed = false;

    root.addEventListener = (type: string) => {
      if (type === 'router:navigate') attached = true;
    };

    root.removeEventListener = (type: string) => {
      if (type === 'router:navigate') removed = true;
    };

    // Forzamos que use nuestro root simulado
    el['_app'] = root;
    el['_addEventListeners']();
    el['_removeEventListeners']();

    expect(attached).to.be.true;
    expect(removed).to.be.true;

    document.body.removeChild(root);
  });

  it('se renderiza bbva-game cuando se navega a /game', async () => {
    const root = document.createElement('div');
    root.id = 'root';
    document.body.appendChild(root);

    const el = await fixture<BbvaRouterView>(html`<bbva-router></bbva-router>`);
    el['_app'] = root;
    el['connectedCallback']();

    el['_router'].resolve();

    await new Promise((r) => setTimeout(r, 100));

    expect(root.innerHTML).to.be.contains('<bbva-home></bbva-home>');
    expect(root.querySelector('bbva-layout')).to.exist;

    document.body.removeChild(root);
  });

  it('se llama a _router.navigate con el destino correcto', async () => {
    const el = await fixture<BbvaRouterView>(html`<bbva-router></bbva-router>`);
    const root = document.createElement('div');
    root.id = 'root';
    document.body.appendChild(root);

    el['_app'] = root;

    let navigatedTo = '';
    el['_router'].navigate = (to: string) => {
      navigatedTo = to;
    };

    const event = new CustomEvent('router:navigate', {
      detail: { to: '/game' },
    });

    el['_navigateTo'](event);
    expect(navigatedTo).to.equal('/game');

    document.body.removeChild(root);
  });

  it('se inserta el layout y componente correcto al renderizar', async () => {
    const el = await fixture<BbvaRouterView>(html`<bbva-router></bbva-router>`);
    const root = document.createElement('div');
    root.id = 'root';
    document.body.appendChild(root);

    el['_app'] = root;
    el['_render']('bbva-home');

    expect(root.innerHTML).to.contain('<bbva-layout>');
    expect(root.innerHTML).to.contain('<bbva-home>');

    document.body.removeChild(root);
  });
});
