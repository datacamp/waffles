import { render } from '@testing-library/react';

import { Code } from '../index';

const sizes = ['medium', 'large'] as const;

describe('Code', () => {
  it('renders a code element containing the text by default', () => {
    const { container } = render(<Code>npm run test -- -u</Code>);

    const codeElement = container.querySelector('code');

    expect(codeElement).toBeInTheDocument();
    expect(codeElement).toHaveTextContent('npm run test -- -u');
  });

  it('renders a pre element if it is passed via "as" prop', () => {
    const { container } = render(<Code as="pre">npm run test</Code>);

    const codeElement = container.querySelector('pre');

    expect(codeElement).toBeInTheDocument();
    expect(codeElement).toHaveTextContent('npm run test');
  });

  it('sets the data attribute on the code element', () => {
    const { getByTestId } = render(
      <Code data-testid="code-element">npm run test -- -u</Code>,
    );

    const codeElement = getByTestId('code-element');

    expect(codeElement).toBeInTheDocument();
  });

  describe('renders snapshot of', () => {
    sizes.forEach((size) => {
      it(`size ${size}`, () => {
        const { container } = render(<Code size={size}>test</Code>);

        const codeElement = container.querySelector('code');
        expect(codeElement).toMatchSnapshot();
      });
    });
  });

  describe('renders snapshot of inverted', () => {
    sizes.forEach((size) => {
      it(`size ${size}`, () => {
        const { container } = render(
          <Code size={size} inverted>
            test
          </Code>,
        );

        const codeElement = container.querySelector('code');
        expect(codeElement).toMatchSnapshot();
      });
    });
  });
});
