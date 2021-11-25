import { useRef, useEffect } from 'react';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { AddCircle, ChevronRight } from '../../icon';
import { InputField } from '../index';

const MOCKED_ID = '123abC';

jest.mock('nanoid', () => {
  return {
    nanoid: () => MOCKED_ID,
  };
});

// A lot of features are already tested in Input component tests

function TestRefInputField() {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  return (
    <InputField
      ref={inputRef}
      label="Favorite singer"
      placeholder="Taylor Swift"
    />
  );
}

describe('InputField', () => {
  it('renders a basic input field', () => {
    const { container } = render(<InputField label="Favorite singer" />);

    const input = container.querySelector('input');
    const label = container.querySelector('label');

    expect(input).toBeInTheDocument();
    expect(label).toHaveTextContent('Favorite singer');
  });

  it('renders a input field with description and placeholder', () => {
    const { getByPlaceholderText, getByText } = render(
      <InputField
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

  it('after clicking on label input got focused', () => {
    const handleFocus = jest.fn();
    const { getByText } = render(
      <InputField
        label="Favorite singer"
        placeholder="Taylor Swift"
        onFocus={handleFocus}
      />,
    );

    const label = getByText('Favorite singer');
    userEvent.click(label);

    expect(handleFocus).toHaveBeenCalledTimes(1);
  });

  it('renders additional message when input field is required', () => {
    const { getByText } = render(
      <InputField label="Favorite singer" required />,
    );

    const message = getByText(/required/i);

    expect(message).toBeInTheDocument();
  });

  it('renders error message', () => {
    const { getByText } = render(
      <InputField label="Favorite singer" error="Enter correct singer name." />,
    );

    const error = getByText('Enter correct singer name.');

    expect(error).toBeInTheDocument();
  });

  it('sets correct aria attributes when has error', () => {
    const { getByPlaceholderText } = render(
      <InputField
        error="Enter correct singer name."
        label="Favorite singer"
        placeholder="Taylor Swift"
      />,
    );

    const input = getByPlaceholderText('Taylor Swift');

    expect(input).toHaveAttribute('aria-invalid', 'true');
  });

  it('input and label are associated by the same ID', () => {
    const { container } = render(<InputField label="Favorite singer" />);

    const input = container.querySelector('input');
    const label = container.querySelector('label');

    expect(label).toHaveAttribute('for', `form-control-${MOCKED_ID}`);
    expect(input).toHaveAttribute('id', `form-control-${MOCKED_ID}`);
  });

  it('when user defined ID is passed, input and label are associated by it', () => {
    const { container } = render(
      <InputField label="Favorite singer" id="favorite-singer-text-field" />,
    );

    const input = container.querySelector('input');
    const label = container.querySelector('label');

    expect(label).toHaveAttribute('for', `favorite-singer-text-field`);
    expect(input).toHaveAttribute('id', `favorite-singer-text-field`);
  });

  it('input and error are associated by the same ID', () => {
    const { container, getByText } = render(
      <InputField label="Favorite singer" error="Enter correct singer name." />,
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
      <InputField
        data-testid="favorite-singer-text-field"
        label="Favorite singer"
      />,
    );

    const input = getByTestId('favorite-singer-text-field');

    expect(input).toBeInTheDocument();
  });

  it('renders the disabled input', () => {
    const { container } = render(
      <InputField disabled label="Favorite singer" />,
    );

    const input = container.querySelector('input');

    expect(input).toBeDisabled();
  });

  it('renders left icon', () => {
    const { container } = render(
      <InputField iconLeft={<AddCircle />} label="Favorite singer" />,
    );

    const icon = container.querySelector('svg');

    expect(icon).toBeInTheDocument();
  });

  it('renders right enhancer', () => {
    const { container, getByTestId } = render(
      <InputField
        label="Favorite singer"
        enhancerRight={
          <InputField.Enhancer data-testid="right-enhancer">
            <ChevronRight />
          </InputField.Enhancer>
        }
      />,
    );

    const enhancer = getByTestId('right-enhancer');
    const icon = container.querySelector('svg');

    expect(enhancer).toBeInTheDocument();
    expect(enhancer).toContainElement(icon);
  });

  it('accepts ref and could be focused programmatically', () => {
    const { container } = render(<TestRefInputField />);

    const input = container.querySelector('input');

    expect(input).toHaveFocus();
  });

  it('renders snapshot with label and description', () => {
    const { container } = render(
      <InputField
        label="Favorite singer"
        description="Additional description"
        placeholder="Taylor Swift"
      />,
    );

    const inputField = container.firstChild;
    expect(inputField).toMatchSnapshot();
  });

  it('renders snapshot of required with error', () => {
    const { container } = render(
      <InputField
        label="Favorite singer"
        error="Enter correct singer name."
        required
      />,
    );

    const inputField = container.firstChild;
    expect(inputField).toMatchSnapshot();
  });

  it('renders snapshot of inverted', () => {
    const { container } = render(
      <InputField
        inverted
        label="Favorite singer"
        description="Additional description"
      />,
    );

    const inputField = container.firstChild;
    expect(inputField).toMatchSnapshot();
  });

  it('renders snapshot of search type', () => {
    const { container } = render(<InputField type="search" label="Search" />);

    const input = container.firstChild;
    expect(input).toMatchSnapshot();
  });

  it('renders snapshot of password type', () => {
    const { container } = render(
      <InputField type="password" label="Password" />,
    );

    const input = container.firstChild;
    expect(input).toMatchSnapshot();
  });
});
