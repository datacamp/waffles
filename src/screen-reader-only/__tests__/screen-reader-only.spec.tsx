import { render } from '@testing-library/react';

import { ScreenReaderOnly } from '../index';

describe('ScreenReaderOnly', () => {
  it('renders snapshot', () => {
    const { container } = render(
      <p>
        Some regular visible text{' '}
        <ScreenReaderOnly>
          and visually hidden part visible only for screen readers
        </ScreenReaderOnly>
      </p>,
    );

    const content = container.firstChild;

    expect(content).toMatchSnapshot();
  });
});
