import { render } from '@testing-library/react';

import { useMediaQuery } from '../index';

function TestComponent() {
  const { isAboveSmall, isAboveMedium, isAboveLarge } = useMediaQuery();

  return (
    <div>
      <p>Media query match for each breakpoint:</p>
      <ul>
        <li>{`small: ${isAboveSmall}`}</li>
        <li>{`medium: ${isAboveMedium}`}</li>
        <li>{`large: ${isAboveLarge}`}</li>
      </ul>
    </div>
  );
}

// It is not possible to test all aspects of the hook, e.g. changing viewport sizes
// More comprehensive tests are done in e2e stories for appropriate components

describe('useMediaQuery', () => {
  it('initially set all indicators to false', () => {
    Object.defineProperty(window, 'matchMedia', {
      writable: true,
      value: jest.fn().mockImplementation((query) => ({
        matches: false,
        media: query,
        addEventListener: jest.fn(),
        removeEventListener: jest.fn(),
      })),
    });

    const { getByText } = render(<TestComponent />);

    const smallIndicator = getByText('small: false');
    const mediumIndicator = getByText('medium: false');
    const largeIndicator = getByText('large: false');

    expect(smallIndicator).toBeInTheDocument();
    expect(mediumIndicator).toBeInTheDocument();
    expect(largeIndicator).toBeInTheDocument();
  });

  it('display proper indicator values, when all queries match', () => {
    Object.defineProperty(window, 'matchMedia', {
      writable: true,
      value: jest.fn().mockImplementation((query) => ({
        matches: true,
        media: query,
        addEventListener: jest.fn(),
        removeEventListener: jest.fn(),
      })),
    });

    const { getByText } = render(<TestComponent />);

    const smallIndicator = getByText('small: true');
    const mediumIndicator = getByText('medium: true');
    const largeIndicator = getByText('large: true');

    expect(smallIndicator).toBeInTheDocument();
    expect(mediumIndicator).toBeInTheDocument();
    expect(largeIndicator).toBeInTheDocument();
  });
});
