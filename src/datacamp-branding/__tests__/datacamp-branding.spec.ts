import * as brandingVariants from '../index';

describe('DataCamp Branding', () => {
  it('exports every DataCamp branding asset', () => {
    expect(brandingVariants).toMatchSnapshot();
  });
});
