import { useRef, useEffect } from 'react';
import userEvent from '@testing-library/user-event';
import { render } from '@testing-library/react';

import { Select } from '../index';

const sizes = ['small', 'medium', 'large'] as const;

const MOCKED_ID = '123abC';

jest.mock('nanoid', () => {
  return {
    nanoid: () => MOCKED_ID,
  };
});

function TestRefSelect() {
  const selectRef = useRef<HTMLSelectElement>(null);

  useEffect(() => {
    selectRef.current?.focus();
  }, []);

  return (
    <Select ref={selectRef} value="python" onChange={jest.fn()}>
      <option value="python">Python</option>
      <option value="r">R</option>
      <option value="sql">SQL</option>
    </Select>
  );
}

describe('Select', () => {
  it('renders a basic select', () => {
    const { container } = render(
      <Select value="python" onChange={jest.fn()}>
        <option value="python">Python</option>
        <option value="sql">SQL</option>
      </Select>,
    );

    const select = container.querySelector('select');
    const options = container.querySelectorAll('option');

    expect(select).toBeInTheDocument();
    expect(options).toHaveLength(2);
  });

  it('handles selecting one of the options correctly', () => {
    const handleChange = jest.fn();
    const { getByTestId } = render(
      <Select
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

  it('sets the data attribute on the select', () => {
    const { getByTestId } = render(
      <Select data-testid="custom-select" value="python" onChange={jest.fn()}>
        <option value="python">Python</option>
        <option value="sql">SQL</option>
      </Select>,
    );

    const select = getByTestId('custom-select');

    expect(select).toBeInTheDocument();
  });

  it('sets the aria-label attribute on the select', () => {
    const { getByLabelText } = render(
      <Select
        aria-label="Accessible select"
        value="python"
        onChange={jest.fn()}
      >
        <option value="python">Python</option>
        <option value="sql">SQL</option>
      </Select>,
    );

    const select = getByLabelText('Accessible select');

    expect(select).toBeInTheDocument();
  });

  it('renders the disabled select', () => {
    const { getByTestId } = render(
      <Select
        disabled
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

  it('when error is set provide aria-invalid attribute', () => {
    const { getByTestId } = render(
      <Select
        error
        value="python"
        data-testid="custom-select"
        onChange={jest.fn()}
      >
        <option value="python">Python</option>
        <option value="sql">SQL</option>
      </Select>,
    );

    const select = getByTestId('custom-select');

    expect(select).toHaveAttribute('aria-invalid', 'true');
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
          <Select size={size} value="python" onChange={jest.fn()}>
            <option value="python">Python</option>
            <option value="sql">SQL</option>
          </Select>,
        );

        const select = container.firstChild;
        expect(select).toMatchSnapshot();
      });
    });
  });

  it('renders snapshot of required with error', () => {
    const { container } = render(
      <Select required value="" onChange={jest.fn()}>
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
      <Select inverted value="python" onChange={jest.fn()}>
        <option value="python">Python</option>
        <option value="sql">SQL</option>
      </Select>,
    );

    const select = container.firstChild;
    expect(select).toMatchSnapshot();
  });

  it('renders snapshot of disabled', () => {
    const { container } = render(
      <Select disabled value="python" onChange={jest.fn()}>
        <option value="python">Python</option>
        <option value="sql">SQL</option>
      </Select>,
    );

    const select = container.firstChild;
    expect(select).toMatchSnapshot();
  });

  it('renders snapshot of placeholder, when value is set to empty string', () => {
    const { container } = render(
      <Select value="" onChange={jest.fn()}>
        <option value="">Placeholder</option>
        <option value="python">Python</option>
        <option value="sql">SQL</option>
      </Select>,
    );

    const select = container.firstChild;
    expect(select).toMatchSnapshot();
  });
});
