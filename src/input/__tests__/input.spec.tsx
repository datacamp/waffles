import { useRef, useEffect } from 'react';
import { render, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { AddCircle, ChevronRight } from '../../icon';
import { Input } from '../index';

const sizes = ['small', 'medium', 'large'] as const;

function TestRefInput() {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  return <Input ref={inputRef} placeholder="Taylor Swift" />;
}

function DummyIcon() {
  return (
    <svg viewBox="0 0 100 100">
      <circle cx="50" cy="50" r="50" />
    </svg>
  );
}

describe('Input', () => {
  it('renders a basic input', () => {
    const { container } = render(<Input />);

    const input = container.querySelector('input');

    expect(input).toBeInTheDocument();
  });

  it('renders a placeholder', () => {
    const { getByPlaceholderText } = render(
      <Input placeholder="Taylor Swift" />,
    );

    const input = getByPlaceholderText('Taylor Swift');

    expect(input).toBeInTheDocument();
  });

  it('handles typing correctly', () => {
    const onChange = jest.fn();
    const { getByPlaceholderText } = render(
      <Input onChange={onChange} placeholder="Taylor Swift" />,
    );

    const input = getByPlaceholderText('Taylor Swift');
    userEvent.type(input, 'test');

    expect(onChange).toHaveBeenCalledTimes(4);
  });

  it('handles focus correctly', () => {
    const handleFocus = jest.fn();
    const { getByPlaceholderText } = render(
      <Input onFocus={handleFocus} placeholder="Taylor Swift" />,
    );

    const input = getByPlaceholderText('Taylor Swift');
    fireEvent.focus(input);

    expect(handleFocus).toHaveBeenCalledTimes(1);
  });

  it('sets the data attribute on the input', () => {
    const { getByTestId } = render(<Input data-testid="taylors-input" />);

    const input = getByTestId('taylors-input');

    expect(input).toBeInTheDocument();
  });

  it('sets the aria-label on the input', () => {
    const { getByLabelText } = render(<Input aria-label="Accessible input" />);

    const input = getByLabelText('Accessible input');

    expect(input).toBeInTheDocument();
  });

  it('renders the disabled input', () => {
    const { getByPlaceholderText } = render(
      <Input disabled placeholder="Ariana Grande" />,
    );

    const input = getByPlaceholderText('Ariana Grande');

    expect(input).toBeDisabled();
  });

  it('renders left icon', () => {
    const { container } = render(<Input iconLeft={<AddCircle />} />);

    const icon = container.querySelector('svg');

    expect(icon).toBeInTheDocument();
  });

  it('renders basic icon as a right enhancer', () => {
    const { container } = render(<Input enhancerRight={<ChevronRight />} />);

    const icon = container.querySelector('svg');

    expect(icon).toBeInTheDocument();
  });

  it('renders right enhancer', () => {
    const { container, getByTestId } = render(
      <Input
        enhancerRight={
          <Input.Enhancer data-testid="right-enhancer">
            <ChevronRight />
          </Input.Enhancer>
        }
      />,
    );

    const enhancer = getByTestId('right-enhancer');
    const icon = container.querySelector('svg');

    expect(enhancer).toBeInTheDocument();
    expect(enhancer).toContainElement(icon);
  });

  it('renders both left icon and right enhancer', () => {
    const { container, getByTestId } = render(
      <Input
        iconLeft={<AddCircle />}
        enhancerRight={
          <Input.Enhancer data-testid="right-enhancer">
            <ChevronRight />
          </Input.Enhancer>
        }
      />,
    );

    const enhancer = getByTestId('right-enhancer');
    const icons = container.querySelectorAll('svg');

    expect(enhancer).toBeInTheDocument();
    expect(icons).toHaveLength(2);
  });

  it('accepts ref and could be focused programmatically', () => {
    const { container } = render(<TestRefInput />);

    const input = container.querySelector('input');

    expect(input).toHaveFocus();
  });

  describe('search type', () => {
    it('renders appropriate icon', () => {
      const { getByTestId } = render(
        <Input type="search" data-testid="search-input" />,
      );

      const icon = getByTestId('search-icon');

      expect(icon).toBeInTheDocument();
    });
  });

  describe('password type', () => {
    it('renders toggle password visibility enhancer', () => {
      const { getByLabelText } = render(<Input type="password" />);

      const enhancer = getByLabelText('Show password text');

      expect(enhancer).toBeInTheDocument();
    });

    it('after clicking password visibility toggle, input type changes to text, so the password is visible', () => {
      const { getByLabelText, getByTestId } = render(
        <Input type="password" data-testid="password-input" />,
      );

      const enhancer = getByLabelText('Show password text');
      fireEvent.click(enhancer);
      const input = getByTestId('password-input');
      const toggledEnahancer = getByLabelText('Hide password text');

      expect(input).toHaveAttribute('type', 'text');
      expect(toggledEnahancer).toBeInTheDocument();
    });
  });

  describe('renders snapshot of', () => {
    sizes.forEach((size) => {
      it(`size ${size}`, () => {
        const { container } = render(<Input size={size} />);

        const input = container.firstChild;
        expect(input).toMatchSnapshot();
      });
    });
  });

  describe('renders snapshot of inverted', () => {
    sizes.forEach((size) => {
      it(`size ${size}`, () => {
        const { container } = render(<Input size={size} inverted />);

        const input = container.firstChild;
        expect(input).toMatchSnapshot();
      });
    });
  });

  it('renders snapshot of disabled state', () => {
    const { container } = render(
      <Input disabled placeholder="Ariana Grande" />,
    );

    const input = container.firstChild;
    expect(input).toMatchSnapshot();
  });

  it('renders snapshot of focused state', () => {
    const { getByPlaceholderText } = render(
      <Input placeholder="Ariana Grande" />,
    );

    const input = getByPlaceholderText('Ariana Grande');
    fireEvent.focus(input);

    expect(input).toMatchSnapshot();
  });

  it('renders snapshot with left icon', () => {
    const { container } = render(<Input iconLeft={<DummyIcon />} />);

    const input = container.firstChild;
    expect(input).toMatchSnapshot();
  });

  it('renders snapshot with right enhancer', () => {
    const { container } = render(
      <Input
        enhancerRight={
          <Input.Enhancer>
            <DummyIcon />
          </Input.Enhancer>
        }
      />,
    );

    const input = container.firstChild;
    expect(input).toMatchSnapshot();
  });

  it('renders snapshot of search type', () => {
    const { container } = render(<Input type="search" />);

    const input = container.firstChild;
    expect(input).toMatchSnapshot();
  });

  it('renders snapshot of password type', () => {
    const { container } = render(<Input type="password" />);

    const input = container.firstChild;
    expect(input).toMatchSnapshot();
  });

  it('renders snapshot with error', () => {
    const { container } = render(<Input error />);

    const input = container.firstChild;
    expect(input).toMatchSnapshot();
  });
});

describe('Input.Enhancer', () => {
  it('renders custom enhancer and its content', () => {
    const { container } = render(
      <Input.Enhancer>
        <AddCircle />
      </Input.Enhancer>,
    );

    const enhancer = container.querySelector('button');
    const icon = container.querySelector('svg');

    expect(enhancer).toBeInTheDocument();
    expect(enhancer).toContainElement(icon);
  });

  it('sets the data attribute on the enhancer', () => {
    const { getByTestId } = render(
      <Input.Enhancer data-testid="custom-enhancer">
        <AddCircle />
      </Input.Enhancer>,
    );

    const enhancer = getByTestId('custom-enhancer');

    expect(enhancer).toBeInTheDocument();
  });

  it('sets the aria-label on the enhancer', () => {
    const { getByLabelText } = render(
      <Input.Enhancer aria-label="Add">
        <AddCircle />
      </Input.Enhancer>,
    );

    const enhancer = getByLabelText('Add');

    expect(enhancer).toBeInTheDocument();
  });

  it('renders the disabled enhancer', () => {
    const { getByTestId } = render(
      <Input.Enhancer disabled data-testid="custom-enhancer">
        <AddCircle />
      </Input.Enhancer>,
    );

    const enhancer = getByTestId('custom-enhancer');

    expect(enhancer).toBeDisabled();
  });

  it('handles click event correctly', () => {
    const handleClick = jest.fn();
    const { getByTestId } = render(
      <Input.Enhancer onClick={handleClick} data-testid="custom-enhancer">
        <AddCircle />
      </Input.Enhancer>,
    );

    const enhancer = getByTestId('custom-enhancer');
    fireEvent.click(enhancer);

    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
