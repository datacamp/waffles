import { render } from '@testing-library/react';

import { Chapeau } from '../index';

describe('Chapeau', () => {
  it('renders a paragraph containing the text', () => {
    const { container } = render(<Chapeau>Taylor Swift Anniversary</Chapeau>);

    const chapeau = container.querySelector('p');

    expect(chapeau).toBeInTheDocument();
    expect(chapeau).toHaveTextContent('Taylor Swift Anniversary');
  });

  it('renders snapshot', () => {
    const { getByText } = render(<Chapeau>Test</Chapeau>);

    const chapeau = getByText('Test');

    expect(chapeau).toBeInTheDocument();
    expect(chapeau).toMatchSnapshot();
  });

  it('renders snapshot of inverted variant', () => {
    const { getByText } = render(<Chapeau inverted>Test</Chapeau>);

    const chapeau = getByText('Test');

    expect(chapeau).toBeInTheDocument();
    expect(chapeau).toMatchSnapshot();
  });
});
