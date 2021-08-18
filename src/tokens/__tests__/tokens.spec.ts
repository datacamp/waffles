import { tokens } from '../index';

describe('tokens', () => {
  it('preserve correct data structure', () => {
    expect(tokens).toMatchSnapshot();
  });
});
