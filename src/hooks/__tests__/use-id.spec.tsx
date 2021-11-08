import { render } from '@testing-library/react';

import { useId } from '../index';

function TestComponent() {
  const customId = useId('custom-id');

  return <span id={customId}>Test</span>;
}

describe('useId', () => {
  it('generates 6 characters long unique ID with provied prefix', () => {
    const { getByText } = render(<TestComponent />);

    const component = getByText('Test');

    expect(component).toHaveAttribute(
      'id',
      expect.stringMatching(/^custom-id-[A-Za-z0-9-_]{6}$/),
    );
  });
});
