import { render } from '@testing-library/react';

import { Heading } from '../index';

const sizes = ['xxlarge', 'xlarge', 'large', 'medium'] as const;

describe('Heading', () => {
  it('renders a h2 element by default containing the text', () => {
    const { container } = render(
      <Heading>Remarkable Taylor Swift live performance</Heading>,
    );

    const heading = container.querySelector('h2');

    expect(heading).toBeInTheDocument();
    expect(heading).toHaveTextContent(
      'Remarkable Taylor Swift live performance',
    );
  });

  it('sets the data attribute on the heading', () => {
    const { getByTestId } = render(
      <Heading data-testid="custom-heading">
        Remarkable Taylor Swift live performance
      </Heading>,
    );

    const heading = getByTestId('custom-heading');

    expect(heading).toBeInTheDocument();
  });

  it('default heading level associated with size could be overwrited', () => {
    const { container } = render(
      <Heading size="xxlarge" as="h6">
        Remarkable Taylor Swift live performance
      </Heading>,
    );

    const heading = container.querySelector('h6');

    expect(heading).toBeInTheDocument();
    expect(heading).toHaveTextContent(
      'Remarkable Taylor Swift live performance',
    );
  });

  describe('renders snapshot of', () => {
    sizes.forEach((size) => {
      it(`size ${size}`, () => {
        const { getByText } = render(
          <Heading key={size} size={size}>
            Test
          </Heading>,
        );

        const heading = getByText('Test');
        expect(heading).toMatchSnapshot();
      });
    });
  });

  describe('renders snapshot of inverted', () => {
    sizes.forEach((size) => {
      it(`size ${size}`, () => {
        const { getByText } = render(
          <Heading key={size} size={size} inverted>
            Test
          </Heading>,
        );

        const heading = getByText('Test');
        expect(heading).toMatchSnapshot();
      });
    });
  });
});
