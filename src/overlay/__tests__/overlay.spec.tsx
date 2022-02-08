import { render } from '@testing-library/react';

import { Overlay } from '../index';

describe('Overlay', () => {
  it('renders snapshot when is visible', () => {
    const { container } = render(<Overlay isVisible={true} />);

    const overlay = container.querySelector('div');

    expect(overlay).toMatchSnapshot();
  });

  it('renders snapshot when is not visible', () => {
    const { container } = render(<Overlay isVisible={false} />);

    const overlay = container.querySelector('div');

    expect(overlay).toMatchSnapshot();
  });
});
