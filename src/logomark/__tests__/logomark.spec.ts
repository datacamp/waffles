import * as logomarks from '../index';

describe('Logomark', () => {
  it('exports every logomarks', () => {
    expect(logomarks).toMatchSnapshot();
  });
});
