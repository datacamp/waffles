import { useRef, useEffect } from 'react';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { Select } from '../index';

const sizes = ['small', 'medium', 'large'] as const;

const MOCKED_ID = '123abC';

jest.mock('nanoid', () => {
  return {
    nanoid: () => MOCKED_ID,
  };
});

function TestRefSelect() {
  const inputRef = useRef<HTMLSelectElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  return (
    <Select
      ref={inputRef}
      label="Pick a technology"
      value="python"
      onChange={jest.fn()}
    >
      <option value="python">Python</option>
      <option value="r">R</option>
      <option value="sql">SQL</option>
    </Select>
  );
}

describe('Select', () => {
  it('renders a basic select', () => {
    const { container } = render(
      <Select label="Pick a technology" value="python" onChange={jest.fn()}>
        <option value="python">Python</option>
        <option value="sql">SQL</option>
      </Select>,
    );

    const select = container.querySelector('select');
    const label = container.querySelector('label');
    const options = container.querySelectorAll('option');

    expect(select).toBeInTheDocument();
    expect(label).toHaveTextContent('Pick a technology');
    expect(options).toHaveLength(2);
  });

  it('renders a select with description', () => {
    const { getByText } = render(
      <Select
        label="Pick a technology"
        description="Additional description"
        value="python"
        onChange={jest.fn()}
      >
        <option value="python">Python</option>
        <option value="sql">SQL</option>
      </Select>,
    );

    const description = getByText('Additional description');

    expect(description).toBeInTheDocument();
  });

  it('handles selecting one of the options correctly', () => {
    const handleChange = jest.fn();
    const { getByTestId } = render(
      <Select
        label="Pick a technology"
        value="python"
        data-testid="custom-select"
        onChange={handleChange}
      >
        <option value="python">Python</option>
        <option value="r">R</option>
        <option value="sql">SQL</option>
      </Select>,
    );

    const selectElement = getByTestId('custom-select');

    userEvent.selectOptions(selectElement, 'python');
    expect(handleChange).toHaveBeenCalledTimes(1);
  });

  it('after clicking on label input got focused', () => {
    const handleFocus = jest.fn();
    const { getByText } = render(
      <Select
        label="Pick a technology"
        description="Additional description"
        value="python"
        onFocus={handleFocus}
        onChange={jest.fn()}
      >
        <option value="python">Python</option>
        <option value="sql">SQL</option>
      </Select>,
    );

    const label = getByText('Pick a technology');
    userEvent.click(label);

    expect(handleFocus).toHaveBeenCalledTimes(1);
  });

  it('renders additional message when select is required', () => {
    const { getByText } = render(
      <Select
        required
        label="Pick a technology"
        description="Additional description"
        value="python"
        onChange={jest.fn()}
      >
        <option value="python">Python</option>
        <option value="sql">SQL</option>
      </Select>,
    );

    const message = getByText(/required/i);

    expect(message).toBeInTheDocument();
  });

  it('renders error message', () => {
    const { getByText } = render(
      <Select
        required
        label="Pick a technology"
        description="Additional description"
        value=""
        error="Select a technology."
        onChange={jest.fn()}
      >
        <option value="">Select appropriate technology...</option>
        <option value="python">Python</option>
        <option value="sql">SQL</option>
      </Select>,
    );

    const error = getByText('Select a technology.');

    expect(error).toBeInTheDocument();
  });

  it('sets correct aria attributes when has error', () => {
    const { getByTestId } = render(
      <Select
        required
        label="Pick a technology"
        description="Additional description"
        value=""
        error="Select a technology."
        data-testid="custom-select"
        onChange={jest.fn()}
      >
        <option value="">Select appropriate technology...</option>
        <option value="python">Python</option>
        <option value="sql">SQL</option>
      </Select>,
    );

    const select = getByTestId('custom-select');

    expect(select).toHaveAttribute('aria-invalid', 'true');
  });

  it('select and label are associated by the same ID', () => {
    const { container } = render(
      <Select
        label="Pick a technology"
        description="Additional description"
        value="python"
        onChange={jest.fn()}
      >
        <option value="python">Python</option>
        <option value="sql">SQL</option>
      </Select>,
    );

    const select = container.querySelector('select');
    const label = container.querySelector('label');

    expect(label).toHaveAttribute('for', `form-control-${MOCKED_ID}`);
    expect(select).toHaveAttribute('id', `form-control-${MOCKED_ID}`);
  });

  it('when user defined ID is passed, select and label are associated by it', () => {
    const { container } = render(
      <Select
        id="technology-select"
        label="Pick a technology"
        description="Additional description"
        value="python"
        onChange={jest.fn()}
      >
        <option value="python">Python</option>
        <option value="sql">SQL</option>
      </Select>,
    );

    const select = container.querySelector('select');
    const label = container.querySelector('label');

    expect(label).toHaveAttribute('for', `technology-select`);
    expect(select).toHaveAttribute('id', `technology-select`);
  });

  it('select and error are associated by the same ID', () => {
    const { getByTestId, getByText } = render(
      <Select
        required
        label="Pick a technology"
        description="Additional description"
        value=""
        error="Select a technology."
        data-testid="custom-select"
        onChange={jest.fn()}
      >
        <option value="">Select appropriate technology...</option>
        <option value="python">Python</option>
        <option value="sql">SQL</option>
      </Select>,
    );

    const select = getByTestId('custom-select');
    const error = getByText('Select a technology.');

    expect(select).toHaveAttribute(
      'aria-errormessage',
      `form-control-error-${MOCKED_ID}`,
    );
    expect(error).toHaveAttribute('id', `form-control-error-${MOCKED_ID}`);
  });

  it('sets the data attribute on the select', () => {
    const { getByTestId } = render(
      <Select
        data-testid="custom-select"
        label="Pick a technology"
        value="python"
        onChange={jest.fn()}
      >
        <option value="python">Python</option>
        <option value="sql">SQL</option>
      </Select>,
    );

    const select = getByTestId('custom-select');

    expect(select).toBeInTheDocument();
  });

  it('renders the disabled select', () => {
    const { getByTestId } = render(
      <Select
        disabled
        label="Pick a technology"
        value="python"
        data-testid="custom-select"
        onChange={jest.fn()}
      >
        <option value="python">Python</option>
        <option value="sql">SQL</option>
      </Select>,
    );

    const select = getByTestId('custom-select');

    expect(select).toBeDisabled();
  });

  it('accepts ref and could be focused programmatically', () => {
    const { container } = render(<TestRefSelect />);

    const input = container.querySelector('select');

    expect(input).toHaveFocus();
  });

  describe('renders snapshot of', () => {
    sizes.forEach((size) => {
      it(`size ${size}`, () => {
        const { container } = render(
          <Select
            size={size}
            label="Pick a technology"
            value="python"
            onChange={jest.fn()}
          >
            <option value="python">Python</option>
            <option value="sql">SQL</option>
          </Select>,
        );

        const select = container.firstChild;
        expect(select).toMatchSnapshot();
      });
    });
  });

  it('renders snapshot with label and description', () => {
    const { container } = render(
      <Select
        label="Pick a technology"
        description="Additional description"
        value="python"
        onChange={jest.fn()}
      >
        <option value="python">Python</option>
        <option value="sql">SQL</option>
      </Select>,
    );

    const select = container.firstChild;
    expect(select).toMatchSnapshot();
  });

  it('renders snapshot of required with error', () => {
    const { container } = render(
      <Select
        required
        error="Select a technology."
        label="Pick a technology"
        value=""
        onChange={jest.fn()}
      >
        <option value="">Select appropriate technology...</option>
        <option value="python">Python</option>
        <option value="sql">SQL</option>
      </Select>,
    );

    const select = container.firstChild;
    expect(select).toMatchSnapshot();
  });

  it('renders snapshot of inverted', () => {
    const { container } = render(
      <Select
        inverted
        label="Pick a technology"
        value="python"
        onChange={jest.fn()}
      >
        <option value="python">Python</option>
        <option value="sql">SQL</option>
      </Select>,
    );

    const select = container.firstChild;
    expect(select).toMatchSnapshot();
  });

  it('renders snapshot of disabled', () => {
    const { container } = render(
      <Select
        disabled
        label="Pick a technology"
        value="python"
        onChange={jest.fn()}
      >
        <option value="python">Python</option>
        <option value="sql">SQL</option>
      </Select>,
    );

    const select = container.firstChild;
    expect(select).toMatchSnapshot();
  });

  it('renders snapshot of placeholder, when value is set to empty string', () => {
    const { container } = render(
      <Select label="Pick a technology" value="" onChange={jest.fn()}>
        <option value="">Placeholder</option>
        <option value="python">Python</option>
        <option value="sql">SQL</option>
      </Select>,
    );

    const select = container.firstChild;
    expect(select).toMatchSnapshot();
  });
});
