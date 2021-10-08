import { render } from '@testing-library/react';

import { Paragraph } from '../index';

const variants = ['primary', 'secondary'] as const;
const sizes = ['small', 'medium', 'large'] as const;

describe('Paragraph', () => {
  it('renders a paragraph containing the text', () => {
    const { container } = render(
      <Paragraph>Short paragraph about Taylor Swift.</Paragraph>,
    );

    const paragraph = container.querySelector('p');

    expect(paragraph).toBeInTheDocument();
    expect(paragraph).toHaveTextContent('Short paragraph about Taylor Swift.');
  });

  it('sets the data attribute on the paragraph', () => {
    const { getByTestId } = render(
      <Paragraph data-testid="paragraph-22">
        Short paragraph about Taylor Swift.
      </Paragraph>,
    );

    const paragraph = getByTestId('paragraph-22');

    expect(paragraph).toBeInTheDocument();
  });

  describe('renders snapshot of', () => {
    variants.forEach((variant) => {
      sizes.forEach((size) => {
        it(`variant ${variant} and size ${size}`, () => {
          const { container } = render(
            <Paragraph variant={variant} size={size}>
              Test
            </Paragraph>,
          );

          const paragraph = container.querySelector('p');
          expect(paragraph).toMatchSnapshot();
        });
      });
    });
  });

  describe('renders snapshot of inverted', () => {
    variants.forEach((variant) => {
      it(`variant ${variant}`, () => {
        const { container } = render(
          <Paragraph variant={variant} inverted>
            Test
          </Paragraph>,
        );

        const paragraph = container.querySelector('p');
        expect(paragraph).toMatchSnapshot();
      });
    });
  });
});
