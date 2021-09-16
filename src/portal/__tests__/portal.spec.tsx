import { render } from '@testing-library/react';

import { Portal } from '../index';

describe('Portal', () => {
  it('renders passed content correctly', () => {
    const { getByText } = render(
      <Portal>
        <span>Taylor Swift</span>
      </Portal>,
    );

    const content = getByText('Taylor Swift');

    expect(content).toBeInTheDocument();
  });
});
