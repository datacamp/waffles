import { useRef, useEffect } from 'react';
import { render, fireEvent } from '@testing-library/react';

import { Radio } from '../index';

function TestRefRadio() {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  return (
    <Radio ref={inputRef} onChange={jest.fn()}>
      Test label
    </Radio>
  );
}

describe('Radio', () => {
  it('renders a basic radio', () => {
    const { getByLabelText } = render(
      <Radio onChange={jest.fn()}>Taylor Swift</Radio>,
    );

    const radio = getByLabelText('Taylor Swift', { selector: 'input' });

    expect(radio).toBeInTheDocument();
  });

  it('handles focus event correctly', () => {
    const handleFocus = jest.fn();
    const { getByLabelText } = render(
      <Radio onFocus={handleFocus} onChange={jest.fn()}>
        Taylor Swift
      </Radio>,
    );

    const radio = getByLabelText('Taylor Swift', { selector: 'input' });
    fireEvent.focus(radio);

    expect(handleFocus).toHaveBeenCalledTimes(1);
  });

  it('sets the data attribute on the radio', () => {
    const { getByTestId } = render(
      <Radio data-testid="taylors-radio" onChange={jest.fn()}>
        Taylor Swift
      </Radio>,
    );

    const radio = getByTestId('taylors-radio');

    expect(radio).toBeInTheDocument();
  });

  it('renders the disabled radio', () => {
    const { getByLabelText } = render(
      <Radio disabled onChange={jest.fn()}>
        Taylor Swift
      </Radio>,
    );

    const radio = getByLabelText('Taylor Swift', { selector: 'input' });

    expect(radio).toBeDisabled();
  });

  it('accepts ref and could be focused programmatically', () => {
    const { container } = render(<TestRefRadio />);

    const input = container.querySelector('input');

    expect(input).toHaveFocus();
  });

  it('renders basic snapshot', () => {
    const { container } = render(
      <Radio onChange={jest.fn()}>Taylor Swift</Radio>,
    );

    const radio = container.firstChild;

    expect(radio).toMatchSnapshot();
  });

  it('renders snapshot of checked', () => {
    const { container } = render(
      <Radio checked onChange={jest.fn()}>
        Taylor Swift
      </Radio>,
    );

    const radio = container.firstChild;

    expect(radio).toMatchSnapshot();
  });

  it('renders snapshot with error', () => {
    const { container } = render(
      <Radio error onChange={jest.fn()}>
        Taylor Swift
      </Radio>,
    );

    const radio = container.firstChild;

    expect(radio).toMatchSnapshot();
  });

  it('renders snapshot of inverted', () => {
    const { container } = render(
      <Radio inverted onChange={jest.fn()}>
        Taylor Swift
      </Radio>,
    );

    const radio = container.firstChild;

    expect(radio).toMatchSnapshot();
  });

  it('renders snapshot of disabled state', () => {
    const { container } = render(
      <Radio disabled onChange={jest.fn()}>
        Taylor Swift
      </Radio>,
    );

    const radio = container.firstChild;

    expect(radio).toMatchSnapshot();
  });

  it('renders snapshot of focused state', () => {
    const { container, getByLabelText } = render(
      <Radio onChange={jest.fn()}>Taylor Swift</Radio>,
    );

    const input = getByLabelText('Taylor Swift', { selector: 'input' });
    fireEvent.focus(input);
    const radio = container.firstChild;

    expect(radio).toMatchSnapshot();
  });
});
