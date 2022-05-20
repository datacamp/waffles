import * as brandingVariants from '../index';

describe('Branding Asset', () => {
  it('exports every Branding Asset asset', () => {
    expect(brandingVariants).toMatchSnapshot();
  });
});
