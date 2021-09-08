import { render, fireEvent } from '@testing-library/react';

import { CodeBlock } from '../index';

const sizes = ['medium', 'large'] as const;

describe('Code', () => {
  it('renders pre and code elements containing the text', () => {
    const { container } = render(
      <CodeBlock>{`pyftsubset JetBrainsMono.ttf
 --output-file="JetBrainsMono.woff"
 --flavor=woff
 --with-zopfli
 --layout-features="kern,liga,clig,ccmp"
 --unicodes="*"`}</CodeBlock>,
    );

    const preElement = container.querySelector('pre');
    const codeElement = container.querySelector('code');

    expect(preElement).toBeInTheDocument();
    expect(preElement).toContainElement(codeElement);
    expect(codeElement).toBeInTheDocument();
    expect(codeElement).toHaveTextContent(/JetBrainsMono.woff/i);
  });

  it('sets the data attribute on the pre element', () => {
    const { getByTestId } = render(
      <CodeBlock data-testid="code-block-element">
        npm install @datacamp/waffles
      </CodeBlock>,
    );

    const preElement = getByTestId('code-block-element');

    expect(preElement).toBeInTheDocument();
  });

  it('renders snapshot of focused state', () => {
    const { getByTestId } = render(
      <CodeBlock data-testid="code-block-element">test</CodeBlock>,
    );

    const preElement = getByTestId('code-block-element');
    fireEvent.focus(preElement);

    expect(preElement).toMatchSnapshot();
  });

  describe('renders snapshot of', () => {
    sizes.forEach((size) => {
      it(`size ${size}`, () => {
        const { container } = render(<CodeBlock size={size}>test</CodeBlock>);

        const codeElement = container.querySelector('pre');
        expect(codeElement).toMatchSnapshot();
      });
    });
  });

  describe('renders snapshot of inverted', () => {
    sizes.forEach((size) => {
      it(`size ${size}`, () => {
        const { container } = render(
          <CodeBlock size={size} inverted>
            test
          </CodeBlock>,
        );

        const codeElement = container.querySelector('pre');
        expect(codeElement).toMatchSnapshot();
      });
    });
  });
});
