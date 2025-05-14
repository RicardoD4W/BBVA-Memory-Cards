/* eslint-disable @typescript-eslint/no-unused-expressions */

import { checkNameValidity } from '../../../src/shared/utils/functions';
import { expect } from '@open-wc/testing';

describe('checkNameValidity', () => {
  it('acepta nombres válidos con una sola palabra', () => {
    expect(checkNameValidity('Juan')).to.be.true;
  });

  it('acepta nombres válidos compuestos con espacios', () => {
    expect(checkNameValidity('María José')).to.be.true;
    expect(checkNameValidity('José Luis Pérez')).to.be.true;
  });

  it('rechaza cadenas vacías', () => {
    expect(checkNameValidity('')).to.be.false;
  });

  it('rechaza nombres con números', () => {
    expect(checkNameValidity('Juan3')).to.be.false;
    expect(checkNameValidity('María 3José')).to.be.false;
  });

  it('rechaza nombres con caracteres especiales', () => {
    expect(checkNameValidity('Ana@')).to.be.false;
    expect(checkNameValidity('José!Luis')).to.be.false;
  });

  it('rechaza nombres con múltiples espacios consecutivos', () => {
    expect(checkNameValidity('Juan  Carlos')).to.be.false;
  });

  it('rechaza nombres que son solo espacios', () => {
    expect(checkNameValidity('   ')).to.be.false;
  });
});
