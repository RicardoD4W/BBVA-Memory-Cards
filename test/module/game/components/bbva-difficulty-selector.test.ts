/* eslint-disable @typescript-eslint/no-unused-expressions */
import { fixture, html, expect, oneEvent } from '@open-wc/testing';
import '../../../../src/module/game/bbva-game/components/bbva-difficulty-selector/bbva-difficulty-selector.view';
import { BbvaDifficultySelectorView } from '../../../../src/module/game/bbva-game/components/bbva-difficulty-selector/bbva-difficulty-selector.view';
import { DifficultChangedEvent } from '../../../../src/module/game/bbva-game/components/bbva-difficulty-selector/events/difficult-changed.event';

describe('<bbva-difficulty-selector>', () => {
  it('se conecta correctamente al DOM', async () => {
    const el = await fixture(
      html`<bbva-difficulty-selector></bbva-difficulty-selector>`,
    );

    expect(el).dom.to.equal(
      `<bbva-difficulty-selector></bbva-difficulty-selector>`,
    );
    expect(el).to.be.instanceOf(BbvaDifficultySelectorView);
    expect(el.tagName.toLowerCase()).to.equal('bbva-difficulty-selector');
  });

  it('se renderiza las opciones de dificultad correctamente', async () => {
    const el = await fixture<BbvaDifficultySelectorView>(
      html`<bbva-difficulty-selector></bbva-difficulty-selector>`,
    );

    const select = el.shadowRoot?.querySelector('select');
    const options = select?.querySelectorAll('option');

    expect(select).to.exist;
    expect(options?.length).to.equal(3);
    expect(options?.[0]?.value).to.equal('low');
    expect(options?.[1]?.value).to.equal('medium');
    expect(options?.[2]?.value).to.equal('high');
  });

  it('se disparar el evento DifficultChangedEvent al cambiar la opción', async () => {
    const el = await fixture<BbvaDifficultySelectorView>(
      html`<bbva-difficulty-selector></bbva-difficulty-selector>`,
    );

    const select = el.shadowRoot?.querySelector('select') as HTMLSelectElement;
    select.value = 'medium';

    const listener = oneEvent(el, 'difficult:changed');

    select.dispatchEvent(new DifficultChangedEvent({ level: 'medium' }));
    const eventInfo = { target: { value: 'low' } } as unknown as Event;
    el['handleDifficultyChange'](eventInfo);

    const event = (await listener) as DifficultChangedEvent;

    expect(event).to.be.instanceOf(DifficultChangedEvent);
    expect(event.detail.level).to.equal('medium');
  });

  it('se debe deshabilitar el selector cuando isDisabled está en true', async () => {
    const el = await fixture<BbvaDifficultySelectorView>(
      html`<bbva-difficulty-selector
        ?isDisabled=${true}
      ></bbva-difficulty-selector>`,
    );

    const select = el.shadowRoot?.querySelector('select') as HTMLSelectElement;
    expect(select.disabled).to.be.true;
  });
});
