import { mediaQuery } from '../index';

describe('mediaQuery', () => {
  it('exposes media queries generated from breakpoints', () => {
    expect(mediaQuery).toMatchSnapshot();
  });
});
