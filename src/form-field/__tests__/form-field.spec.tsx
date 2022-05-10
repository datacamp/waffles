import React, { useRef, useEffect } from 'react';
import userEvent from '@testing-library/user-event';
import { render } from '@testing-library/react';

import { FormField } from '../index';

const MOCKED_ID = '123abC';

jest.mock('nanoid', () => {
  return {
    nanoid: () => MOCKED_ID,
  };
});

function TestRefFormField() {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  return (
    <FormField label="Focused with ref">
      <input ref={inputRef} />
    </FormField>
  );
}

type TestInputProps = {
  error?: boolean;
  inverted?: boolean;
} & React.InputHTMLAttributes<HTMLInputElement>;

function TestInput({
  error = false,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  inverted = false,
  ...props
}: TestInputProps) {
  return <input {...props} aria-invalid={error} />;
}

describe('FormField', () => {
  it('enhances basic input with label and description', () => {
    const { container, getByText } = render(
      <FormField label="Form field label" description="Form field description">
        <TestInput />
      </FormField>,
    );

    const input = container.querySelector('input');
    const label = container.querySelector('label');
    const description = getByText('Form field description');

    expect(input).toBeInTheDocument();
    expect(label).toHaveTextContent('Form field label');
    expect(description).toBeInTheDocument();
  });

  it('after clicking on label input got focused', () => {
    const handleFocus = jest.fn();
    const { getByText } = render(
      <FormField label="How do you feel?" description="Additional description">
        <TestInput onFocus={handleFocus} />
      </FormField>,
    );

    const label = getByText('How do you feel?');
    userEvent.click(label);

    expect(handleFocus).toHaveBeenCalledTimes(1);
  });

  it('form field child component and label are associated by the same ID', () => {
    const { container } = render(
      <FormField label="Form field label">
        <TestInput />
      </FormField>,
    );

    const input = container.querySelector('input');
    const label = container.querySelector('label');

    expect(label).toHaveAttribute('for', `form-field-${MOCKED_ID}`);
    expect(input).toHaveAttribute('id', `form-field-${MOCKED_ID}`);
  });

  it('if ID is passed explicitly, label and child component are associated by it', () => {
    const { container } = render(
      <FormField label="Form field label" id="user-defined-id">
        <TestInput />
      </FormField>,
    );

    const input = container.querySelector('input');
    const label = container.querySelector('label');

    expect(label).toHaveAttribute('for', `user-defined-id`);
    expect(input).toHaveAttribute('id', `user-defined-id`);
  });

  it('child input component accepts ref and could be focused programmatically', () => {
    const { container } = render(<TestRefFormField />);

    const input = container.querySelector('input');

    expect(input).toHaveFocus();
  });

  it('allow props such as required to be passed directly to the child component', () => {
    const { container } = render(
      <FormField label="Form field label">
        <TestInput required />
      </FormField>,
    );

    const input = container.querySelector('input');

    expect(input).toHaveAttribute('required');
  });

  it('allow props such as required, and disabled to be passed directly to the child component', () => {
    const { container } = render(
      <FormField label="Form field label">
        <TestInput required disabled />
      </FormField>,
    );

    const input = container.querySelector('input');

    expect(input).toHaveAttribute('required');
    expect(input).toBeDisabled();
  });

  it("when 'requiredIndicator' is set to 'showRequired', and required prop is passed display 'Required' indicator", () => {
    const { container, getByText } = render(
      <FormField
        label="Form field label"
        requiredIndicator="showRequired"
        required
      >
        <TestInput />
      </FormField>,
    );

    const input = container.querySelector('input');
    const indicator = getByText(/required/i);

    expect(input).toHaveAttribute('required');
    expect(indicator).toBeInTheDocument();
  });

  it("when 'requiredIndicator' is set to 'showRequired', and required prop is not passed doesn't display indicator", () => {
    const { container, queryByText } = render(
      <FormField label="Form field label" requiredIndicator="showRequired">
        <TestInput />
      </FormField>,
    );

    const input = container.querySelector('input');
    const indicator = queryByText(/required/i);

    expect(input).not.toHaveAttribute('required');
    expect(indicator).not.toBeInTheDocument();
  });

  it("when 'requiredIndicator' is set to 'showOptional', and required prop is passed doesn't display indicator", () => {
    const { container, queryByText } = render(
      <FormField
        label="Form field label"
        requiredIndicator="showOptional"
        required
      >
        <TestInput />
      </FormField>,
    );

    const input = container.querySelector('input');
    const indicator = queryByText(/optional/i);

    expect(input).toHaveAttribute('required');
    expect(indicator).not.toBeInTheDocument();
  });

  it("when 'requiredIndicator' is set to 'showOptional', and required prop is not passed display 'Optional' indicator", () => {
    const { container, getByText } = render(
      <FormField label="Form field label" requiredIndicator="showOptional">
        <TestInput />
      </FormField>,
    );

    const input = container.querySelector('input');
    const indicator = getByText(/optional/i);

    expect(input).not.toHaveAttribute('required');
    expect(indicator).toBeInTheDocument();
  });

  it("when 'requiredIndicator' is set to 'none', and required prop is not passed don't display any indicator", () => {
    const { container, queryByText } = render(
      <FormField label="Form field label" requiredIndicator="none">
        <TestInput />
      </FormField>,
    );

    const input = container.querySelector('input');
    const optional = queryByText(/optional/i);
    const required = queryByText(/required/i);

    expect(input).not.toHaveAttribute('required');
    expect(optional).not.toBeInTheDocument();
    expect(required).not.toBeInTheDocument();
  });

  it("when 'requiredIndicator' is set to 'none', and required prop is passed don't display any indicator", () => {
    const { container, queryByText } = render(
      <FormField label="Form field label" required requiredIndicator="none">
        <TestInput />
      </FormField>,
    );

    const input = container.querySelector('input');
    const optional = queryByText(/optional/i);
    const required = queryByText(/required/i);

    expect(input).toHaveAttribute('required');
    expect(optional).not.toBeInTheDocument();
    expect(required).not.toBeInTheDocument();
  });

  it('renders error message', () => {
    const { getByText } = render(
      <FormField label="Form field label" error="Form field error">
        <TestInput />
      </FormField>,
    );

    const error = getByText('Form field error');

    expect(error).toBeInTheDocument();
  });

  it('form field child component and error are associated by the same ID, and aria-invalid attribute is set', () => {
    const { container, getByText } = render(
      <FormField label="Form field label" error="Form field error">
        <TestInput />
      </FormField>,
    );

    const input = container.querySelector('input');
    const error = getByText('Form field error');

    expect(input).toHaveAttribute(
      'aria-errormessage',
      `form-field-error-${MOCKED_ID}`,
    );
    expect(input).toHaveAttribute('aria-invalid', 'true');
    expect(error).toHaveAttribute('id', `form-field-error-${MOCKED_ID}`);
  });

  it('renders snapshot of form field', () => {
    const { container } = render(
      <FormField
        label="Form field label"
        description="Form field description."
        error="Provided value is incorrect."
        required
        requiredIndicator="showRequired"
      >
        <TestInput />
      </FormField>,
    );

    const formField = container.firstChild;
    expect(formField).toMatchSnapshot();
  });

  it('renders snapshot of inverted form field', () => {
    const { container } = render(
      <FormField
        inverted
        label="Inverted form field label"
        description="Inverted form field description."
        error="Provided value is incorrect."
        required
        requiredIndicator="showRequired"
      >
        <TestInput />
      </FormField>,
    );

    const formField = container.firstChild;
    expect(formField).toMatchSnapshot();
  });
});
