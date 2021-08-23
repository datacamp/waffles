import * as icons from '../index';

describe('Icon', () => {
  it('exports every icon', () => {
    expect(icons).toMatchSnapshot();
  });
});
