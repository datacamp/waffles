import * as brands from '../index';

describe('Brand', () => {
  it('exports every Brand component', () => {
    expect(brands).toMatchSnapshot();
  });
});
