import * as logos from '../index';

describe('Logo', () => {
  it('exports every logo', () => {
    expect(logos).toMatchSnapshot();
  });
});
