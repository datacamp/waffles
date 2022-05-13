import * as assets from '../index';

describe('Asset', () => {
  it('exports every asset', () => {
    expect(assets).toMatchSnapshot();
  });
});
