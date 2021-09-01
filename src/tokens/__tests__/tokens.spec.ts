import { tokens } from '../index';

describe('tokens', () => {
  it('expose tokens generated based on JSON file compatible with Figma Tokens plugin', () => {
    expect(tokens).toMatchSnapshot();
  });
});
