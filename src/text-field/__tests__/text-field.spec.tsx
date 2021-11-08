import { useRef, useEffect } from 'react';
import { render } from '@testing-library/react';

import { AddCircle, ChevronRight } from '../../icon';
import { TextField } from '../index';

const MOCKED_ID = '123abC';

jest.mock('nanoid', () => {
  return {
    nanoid: () => MOCKED_ID,
  };
});

// Most of the functionalities are identical to what Input component offers

function TestRefTextField() {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  return (
    <TextField
      ref={inputRef}
      label="Favorite singer"
      placeholder="Taylor Swift"
    />
  );
}

describe('TextField', () => {
  it('renders a basic text field', () => {
    const { container } = render(<TextField label="Favorite singer" />);

    const input = container.querySelector('input');
    const label = container.querySelector('label');

    expect(input).toBeInTheDocument();
    expect(label).toHaveTextContent('Favorite singer');
  });

  it('renders a text field with description and placeholder', () => {
    const { getByPlaceholderText, getByText } = render(
      <TextField
        label="Favorite singer"
        description="Additional description"
        placeholder="Taylor Swift"
      />,
    );

    const input = getByPlaceholderText('Taylor Swift');
    const description = getByText('Additional description');

    expect(input).toBeInTheDocument();
    expect(description).toBeInTheDocument();
  });

  it('renders additional message when text field is required', () => {
    const { getByText } = render(
      <TextField label="Favorite singer" required />,
    );

    const message = getByText(/required/i);

    expect(message).toBeInTheDocument();
  });

  it('renders error message', () => {
    const { getByText } = render(
      <TextField label="Favorite singer" error="Enter correct singer name." />,
    );

    const error = getByText('Enter correct singer name.');

    expect(error).toBeInTheDocument();
  });

  it('input and label are associated by the same ID', () => {
    const { container } = render(<TextField label="Favorite singer" />);

    const input = container.querySelector('input');
    const label = container.querySelector('label');

    expect(label).toHaveAttribute('for', `form-control-${MOCKED_ID}`);
    expect(input).toHaveAttribute('id', `form-control-${MOCKED_ID}`);
  });

  it('input and error are associated by the same ID', () => {
    const { container, getByText } = render(
      <TextField label="Favorite singer" error="Enter correct singer name." />,
    );

    const input = container.querySelector('input');
    const error = getByText('Enter correct singer name.');

    expect(input).toHaveAttribute(
      'aria-errormessage',
      `form-control-error-${MOCKED_ID}`,
    );
    expect(error).toHaveAttribute('id', `form-control-error-${MOCKED_ID}`);
  });

  it('sets the data attribute on the input', () => {
    const { getByTestId } = render(
      <TextField
        data-testid="favorite-singer-text-field"
        label="Favorite singer"
      />,
    );

    const input = getByTestId('favorite-singer-text-field');

    expect(input).toBeInTheDocument();
  });

  it('renders the disabled input', () => {
    const { container } = render(
      <TextField disabled label="Favorite singer" />,
    );

    const input = container.querySelector('input');

    expect(input).toBeDisabled();
  });

  it('renders left icon', () => {
    const { container } = render(
      <TextField iconLeft={<AddCircle />} label="Favorite singer" />,
    );

    const icon = container.querySelector('svg');

    expect(icon).toBeInTheDocument();
  });

  it('renders right enhancer', () => {
    const { container, getByTestId } = render(
      <TextField
        label="Favorite singer"
        enhancerRight={
          <TextField.Enhancer data-testid="right-enhancer">
            <ChevronRight />
          </TextField.Enhancer>
        }
      />,
    );

    const enhancer = getByTestId('right-enhancer');
    const icon = container.querySelector('svg');

    expect(enhancer).toBeInTheDocument();
    expect(enhancer).toContainElement(icon);
  });

  it('accepts ref and could be focused programmatically', () => {
    const { container } = render(<TestRefTextField />);

    const input = container.querySelector('input');

    expect(input).toHaveFocus();
  });

  it('renders snapshot with label and description', () => {
    const { container } = render(
      <TextField
        label="Favorite singer"
        description="Additional description"
        placeholder="Taylor Swift"
      />,
    );

    const textField = container.firstChild;
    expect(textField).toMatchSnapshot();
  });

  it('renders snapshot of required with error', () => {
    const { container } = render(
      <TextField
        label="Favorite singer"
        error="Enter correct singer name."
        required
      />,
    );

    const textField = container.firstChild;
    expect(textField).toMatchSnapshot();
  });

  it('renders snapshot of inverted', () => {
    const { container } = render(
      <TextField
        inverted
        label="Favorite singer"
        description="Additional description"
      />,
    );

    const textField = container.firstChild;
    expect(textField).toMatchSnapshot();
  });

  it('renders snapshot of search type', () => {
    const { container } = render(<TextField type="search" label="Search" />);

    const input = container.firstChild;
    expect(input).toMatchSnapshot();
  });

  it('renders snapshot of password type', () => {
    const { container } = render(
      <TextField type="password" label="Password" />,
    );

    const input = container.firstChild;
    expect(input).toMatchSnapshot();
  });
});
