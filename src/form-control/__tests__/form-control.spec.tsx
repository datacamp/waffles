import { render } from '@testing-library/react';

import { FormControl } from '../index';

const MOCKED_ID = '123abC';

jest.mock('nanoid', () => {
  return {
    nanoid: () => MOCKED_ID,
  };
});

describe('FormControl', () => {
  it('renders a label and description to basic input', () => {
    const { container, getByText } = render(
      <FormControl
        label="Form control label"
        description="Form control description"
      >
        {(formControlProps) => {
          return <input {...formControlProps} />;
        }}
      </FormControl>,
    );

    const input = container.querySelector('input');
    const label = container.querySelector('label');
    const description = getByText('Form control description');

    expect(input).toBeInTheDocument();
    expect(label).toHaveTextContent('Form control label');
    expect(description).toBeInTheDocument();
  });

  it('form control child component and label are associated by the same ID', () => {
    const { container } = render(
      <FormControl label="Form control label">
        {(formControlProps) => {
          return <input {...formControlProps} />;
        }}
      </FormControl>,
    );

    const input = container.querySelector('input');
    const label = container.querySelector('label');

    expect(label).toHaveAttribute('for', `form-control-${MOCKED_ID}`);
    expect(input).toHaveAttribute('id', `form-control-${MOCKED_ID}`);
  });

  it('renders additional message when required', () => {
    const { getByText } = render(
      <FormControl label="Form control label" required>
        {(formControlProps) => {
          return <input {...formControlProps} required />;
        }}
      </FormControl>,
    );

    const message = getByText(/required/i);

    expect(message).toBeInTheDocument();
  });

  it('renders error message', () => {
    const { getByText } = render(
      <FormControl label="Form control label" error="Form control error">
        {(formControlProps) => {
          return <input {...formControlProps} />;
        }}
      </FormControl>,
    );

    const error = getByText('Form control error');

    expect(error).toBeInTheDocument();
  });

  it('form control child component and error are associated by the same ID, and aria-invalid attribute is set', () => {
    const { container, getByText } = render(
      <FormControl label="Form control label" error="Form control error">
        {(formControlProps) => {
          return <input {...formControlProps} />;
        }}
      </FormControl>,
    );

    const input = container.querySelector('input');
    const error = getByText('Form control error');

    expect(input).toHaveAttribute(
      'aria-errormessage',
      `form-control-error-${MOCKED_ID}`,
    );
    expect(input).toHaveAttribute('aria-invalid', 'true');
    expect(error).toHaveAttribute('id', `form-control-error-${MOCKED_ID}`);
  });
});
