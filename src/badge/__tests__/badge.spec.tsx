import { render } from '@testing-library/react';

import { tokens } from '../../tokens';
import { Badge } from '../index';

const sizes = ['small', 'medium', 'large'] as const;

describe('Badge', () => {
  it('renders a badge containing the text', () => {
    const { getByText } = render(
      <Badge color={tokens.colors.green}>Taylor Swift</Badge>,
    );

    const badge = getByText('Taylor Swift');

    expect(badge).toBeInTheDocument();
  });

  it('sets the data attribute on the badge', () => {
    const { getByTestId } = render(
      <Badge color={tokens.colors.purple} data-testid="taylors-badge">
        Taylor Swift
      </Badge>,
    );

    const badge = getByTestId('taylors-badge');

    expect(badge).toBeInTheDocument();
  });

  describe('renders snapshot of', () => {
    sizes.forEach((size) => {
      it(`size ${size}`, () => {
        const { container } = render(
          <Badge size={size} color={tokens.colors.greyDark}>
            Test Label
          </Badge>,
        );

        const badge = container.firstChild;
        expect(badge).toMatchSnapshot();
      });
    });
  });
});
