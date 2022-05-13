import * as Assets from '../index';

describe('Asset', () => {
  it('exports every asset', () => {
    expect(Assets).toMatchSnapshot();
  });
});
