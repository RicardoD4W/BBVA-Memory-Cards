/* eslint-disable @typescript-eslint/no-unused-expressions */
import { expect, fixture, html } from '@open-wc/testing';
import '../../../../src/module/game/bbva-game/components/bbva-user-avatar/bbva-user-avatar.view';
import { BbvaUserAvatarView } from '../../../../src/module/game/bbva-game/components/bbva-user-avatar/bbva-user-avatar.view';

describe('<bbva-user-avatar>', () => {
  it('se conecta correctamente al DOM', async () => {
    const el = await fixture<BbvaUserAvatarView>(
      html`<bbva-user-avatar></bbva-user-avatar>`,
    );
    expect(el).to.be.instanceOf(BbvaUserAvatarView);
    expect(el.shadowRoot).not.to.be.null;
    expect(el).dom.to.equal('<bbva-user-avatar></bbva-user-avatar>');
  });

  it('se muestra el nombre de usuario cuando se pasa como propiedad', async () => {
    const el = await fixture<BbvaUserAvatarView>(
      html`<bbva-user-avatar .username=${'usuario1'}></bbva-user-avatar>`,
    );
    const usernameElement = el.shadowRoot?.querySelector('.username');
    expect(usernameElement?.textContent?.trim()).to.equal('usuario1');
  });

  it('no se muestra el nombre de usuario si la propiedad username está vacía', async () => {
    const el = await fixture<BbvaUserAvatarView>(
      html`<bbva-user-avatar .username=${''}></bbva-user-avatar>`,
    );
    const usernameElement = el.shadowRoot?.querySelector('.username');
    expect(usernameElement?.textContent?.trim()).to.equal('');
  });
});
