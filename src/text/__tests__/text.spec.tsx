import { render } from '@testing-library/react';

import { Text } from '../index';

describe('Text', () => {
  it('renders a span element containing the text', () => {
    const { container } = render(<Text>Taylor Swift Fanclub</Text>);

    const text = container.querySelector('span');

    expect(text).toBeInTheDocument();
    expect(text).toHaveTextContent('Taylor Swift Fanclub');
  });

  it('sets the data attribute on the text element', () => {
    const { getByTestId } = render(
      <Text data-testid="taylors-text">Taylor Swift Fanclub</Text>,
    );

    const text = getByTestId('taylors-text');

    expect(text).toBeInTheDocument();
  });

  it('renders an element passed via "as" prop', () => {
    const { container } = render(<Text as="p">Taylor Swift Fanclub</Text>);

    const text = container.querySelector('p');

    expect(text).toBeInTheDocument();
    expect(text).toHaveTextContent('Taylor Swift Fanclub');
  });

  it('renders snapshot', () => {
    const { getByText } = render(<Text>Definitely not Taylor Swift</Text>);

    const text = getByText(/taylor swift/i);

    expect(text).toBeInTheDocument();
    expect(text).toMatchSnapshot();
  });
});
