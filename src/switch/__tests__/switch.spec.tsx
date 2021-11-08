import { useRef, useEffect } from 'react';
import { render, fireEvent } from '@testing-library/react';

import { Switch } from '../index';

function TestRefSwitch() {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  return (
    <Switch ref={inputRef} onChange={jest.fn()}>
      Test label
    </Switch>
  );
}

describe('Switch', () => {
  it('renders a label and sets correct aria attributes when not checked', () => {
    const { getByRole, getByText } = render(
      <Switch onChange={jest.fn()}>Dark mode</Switch>,
    );

    const input = getByRole('switch');
    const label = getByText('Dark mode');

    expect(input).toHaveAttribute('aria-checked', 'false');
    expect(label).toBeInTheDocument();
  });

  it('renders a label and sets correct aria attributes when checked', () => {
    const { getByRole, getByText } = render(
      <Switch checked onChange={jest.fn()}>
        Dark mode
      </Switch>,
    );

    const input = getByRole('switch');
    const label = getByText('Dark mode');

    expect(input).toHaveAttribute('aria-checked', 'true');
    expect(label).toBeInTheDocument();
  });

  it('handles click event correctly', () => {
    const handleClick = jest.fn();
    const { getByText } = render(
      <Switch onChange={handleClick}>Dark mode</Switch>,
    );

    const label = getByText('Dark mode');
    fireEvent.click(label);

    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('handles focus event correctly', () => {
    const handleFocus = jest.fn();
    const { getByLabelText } = render(
      <Switch onFocus={handleFocus} onChange={jest.fn()}>
        Dark mode
      </Switch>,
    );

    const input = getByLabelText('Dark mode', { selector: 'input' });
    fireEvent.focus(input);

    expect(handleFocus).toHaveBeenCalledTimes(1);
  });

  it('sets the data attribute', () => {
    const { getByTestId } = render(
      <Switch data-testid="dark-mode-switch" onChange={jest.fn()}>
        Dark mode
      </Switch>,
    );

    const input = getByTestId('dark-mode-switch');

    expect(input).toBeInTheDocument();
  });

  it('sets correct aria attributes when has error', () => {
    const { getByLabelText } = render(
      <Switch error onChange={jest.fn()}>
        Dark mode
      </Switch>,
    );

    const input = getByLabelText('Dark mode', { selector: 'input' });

    expect(input).toHaveAttribute('aria-invalid', 'true');
  });

  it('renders the disabled state', () => {
    const { getByLabelText } = render(
      <Switch disabled onChange={jest.fn()}>
        Dark mode
      </Switch>,
    );

    const input = getByLabelText('Dark mode', { selector: 'input' });

    expect(input).toBeDisabled();
  });

  it('accepts ref and could be focused programmatically', () => {
    const { container } = render(<TestRefSwitch />);

    const input = container.querySelector('input');

    expect(input).toHaveFocus();
  });

  it('renders basic snapshot', () => {
    const { container } = render(
      <Switch onChange={jest.fn()}>Dark mode</Switch>,
    );

    const switchComponent = container.firstChild;

    expect(switchComponent).toMatchSnapshot();
  });

  it('renders snapshot of checked state', () => {
    const { container } = render(
      <Switch checked onChange={jest.fn()}>
        Dark mode
      </Switch>,
    );

    const switchComponent = container.firstChild;

    expect(switchComponent).toMatchSnapshot();
  });

  it('renders snapshot with error', () => {
    const { container } = render(
      <Switch error onChange={jest.fn()}>
        Dark mode
      </Switch>,
    );

    const switchComponent = container.firstChild;

    expect(switchComponent).toMatchSnapshot();
  });

  it('renders snapshot of inverted', () => {
    const { container } = render(
      <Switch inverted onChange={jest.fn()}>
        Dark mode
      </Switch>,
    );

    const switchComponent = container.firstChild;

    expect(switchComponent).toMatchSnapshot();
  });

  it('renders snapshot of disabled state', () => {
    const { container } = render(
      <Switch disabled onChange={jest.fn()}>
        Dark mode
      </Switch>,
    );

    const switchComponent = container.firstChild;

    expect(switchComponent).toMatchSnapshot();
  });

  it('renders snapshot of focused state', () => {
    const { container, getByLabelText } = render(
      <Switch onChange={jest.fn()}>Dark mode</Switch>,
    );

    const input = getByLabelText('Dark mode', { selector: 'input' });
    fireEvent.focus(input);
    const switchComponent = container.firstChild;

    expect(switchComponent).toMatchSnapshot();
  });
});
