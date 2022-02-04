import { render } from '@testing-library/react';

import { Badge } from '../index';

const sizes = ['small', 'medium', 'large'] as const;
const variants = [
  'green',
  'navy',
  'white',
  'red',
  'orange',
  'yellow',
  'blue',
  'purple',
  'pink',
  'grey',
  'greySubtle',
] as const;

describe('Badge', () => {
  it('renders a badge containing the text', () => {
    const { getByText } = render(<Badge variant="green">Taylor Swift</Badge>);

    const badge = getByText('Taylor Swift');

    expect(badge).toBeInTheDocument();
  });

  it('sets the data attribute on the badge', () => {
    const { getByTestId } = render(
      <Badge variant="purple" data-testid="taylors-badge">
        Taylor Swift
      </Badge>,
    );

    const badge = getByTestId('taylors-badge');

    expect(badge).toBeInTheDocument();
  });

  describe('renders snapshot of', () => {
    variants.forEach((variant) => {
      sizes.forEach((size) => {
        it(`variant ${variant} and size ${size}`, () => {
          const { container } = render(
            <Badge variant={variant} size={size}>
              Test
            </Badge>,
          );

          const badge = container.firstChild;
          expect(badge).toMatchSnapshot();
        });
      });
    });
  });
});
