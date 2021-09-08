import { render } from '@testing-library/react';

import { Display } from '../index';

describe('Display', () => {
  it('renders a paragraph containing the text', () => {
    const { container } = render(<Display>We are bold!</Display>);

    const displayParagraph = container.querySelector('p');

    expect(displayParagraph).toBeInTheDocument();
    expect(displayParagraph).toHaveTextContent('We are bold!');
  });

  it('renders snapshot', () => {
    const { getByText } = render(<Display>Test</Display>);

    const displayParagraph = getByText('Test');

    expect(displayParagraph).toBeInTheDocument();
    expect(displayParagraph).toMatchSnapshot();
  });
});
