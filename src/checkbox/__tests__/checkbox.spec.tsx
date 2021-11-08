import { useRef, useEffect } from 'react';
import { render, fireEvent } from '@testing-library/react';

import { Checkbox } from '../index';

function TestRefCheckbox() {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  return (
    <Checkbox ref={inputRef} onChange={jest.fn()}>
      Test label
    </Checkbox>
  );
}

describe('Checkbox', () => {
  it('renders a basic checkbox', () => {
    const { getByLabelText } = render(
      <Checkbox onChange={jest.fn()}>Taylor Swift</Checkbox>,
    );

    const checkbox = getByLabelText('Taylor Swift', { selector: 'input' });

    expect(checkbox).toBeInTheDocument();
  });

  it('handles focus event correctly', () => {
    const handleFocus = jest.fn();
    const { getByLabelText } = render(
      <Checkbox onFocus={handleFocus} onChange={jest.fn()}>
        Taylor Swift
      </Checkbox>,
    );

    const checkbox = getByLabelText('Taylor Swift', { selector: 'input' });
    fireEvent.focus(checkbox);

    expect(handleFocus).toHaveBeenCalledTimes(1);
  });

  it('sets the data attribute on the checkbox', () => {
    const { getByTestId } = render(
      <Checkbox data-testid="taylors-checkbox" onChange={jest.fn()}>
        Taylor Swift
      </Checkbox>,
    );

    const checkbox = getByTestId('taylors-checkbox');

    expect(checkbox).toBeInTheDocument();
  });

  it('renders the disabled checkbox', () => {
    const { getByLabelText } = render(
      <Checkbox disabled onChange={jest.fn()}>
        Taylor Swift
      </Checkbox>,
    );

    const checkbox = getByLabelText('Taylor Swift', { selector: 'input' });

    expect(checkbox).toBeDisabled();
  });

  it('accepts ref and could be focused programmatically', () => {
    const { container } = render(<TestRefCheckbox />);

    const input = container.querySelector('input');

    expect(input).toHaveFocus();
  });

  it('renders basic snapshot', () => {
    const { container } = render(
      <Checkbox onChange={jest.fn()}>Taylor Swift</Checkbox>,
    );

    const checkbox = container.firstChild;

    expect(checkbox).toMatchSnapshot();
  });

  it('renders snapshot of checked', () => {
    const { container } = render(
      <Checkbox checked onChange={jest.fn()}>
        Taylor Swift
      </Checkbox>,
    );

    const checkbox = container.firstChild;

    expect(checkbox).toMatchSnapshot();
  });

  it('renders snapshot with error', () => {
    const { container } = render(
      <Checkbox error onChange={jest.fn()}>
        Taylor Swift
      </Checkbox>,
    );

    const checkbox = container.firstChild;

    expect(checkbox).toMatchSnapshot();
  });

  it('renders snapshot of inverted', () => {
    const { container } = render(
      <Checkbox inverted onChange={jest.fn()}>
        Taylor Swift
      </Checkbox>,
    );

    const checkbox = container.firstChild;

    expect(checkbox).toMatchSnapshot();
  });

  it('renders snapshot of disabled state', () => {
    const { container } = render(
      <Checkbox disabled onChange={jest.fn()}>
        Taylor Swift
      </Checkbox>,
    );

    const checkbox = container.firstChild;

    expect(checkbox).toMatchSnapshot();
  });

  it('renders snapshot of focused state', () => {
    const { container, getByLabelText } = render(
      <Checkbox onChange={jest.fn()}>Taylor Swift</Checkbox>,
    );

    const input = getByLabelText('Taylor Swift', { selector: 'input' });
    fireEvent.focus(input);
    const checkbox = container.firstChild;

    expect(checkbox).toMatchSnapshot();
  });
});
