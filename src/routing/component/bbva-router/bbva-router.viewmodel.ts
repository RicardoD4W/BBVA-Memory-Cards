import { LitElement } from 'lit';
import Navigo from 'navigo';

import '../../../module/layout/bbva-layout/bbva-layout.view';
import '../../../module/home/bbva-home/bbva-home.view';
import '../../../module/game/bbva-game/bbva-game.view';
import { RouterNavigateEvent } from './events/router-navigate.event';

export class BbvaRouterViewModel extends LitElement {
  private _router = new Navigo('/', { hash: true });
  private _app = document.querySelector('#root');
  private _navigateListener = (e: Event) =>
    this._navigateTo(e as RouterNavigateEvent);

  connectedCallback(): void {
    super.connectedCallback();
    this._initRouter();
    this._addEventListeners();
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    this._removeEventListeners();
  }

  private _addEventListeners() {
    if (!this._app) return;
    this._app.addEventListener('router:navigate', this._navigateListener);
  }

  private _removeEventListeners() {
    if (!this._app) return;
    this._app.removeEventListener('router:navigate', this._navigateListener);
  }

  private _initRouter() {
    this._router
      .on({
        '/': () => this._render('bbva-home'),
        '/game': () => this._render('bbva-game'),
      })
      .notFound(() => this._router.navigate('/'))
      .resolve();
  }

  private _navigateTo(e: RouterNavigateEvent) {
    const { to } = e.detail;
    this._router.navigate(to);
  }

  private _render(componentTag: string) {
    if (!this._app) return;
    this._app.innerHTML = `
    <bbva-layout>
    <${componentTag}></${componentTag}>
    </bbva-layout>
    `;
  }
}
