/* eslint-disable @typescript-eslint/no-empty-function */
import { useRef, useEffect } from 'react';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { TextArea } from '../index';

const MOCKED_ID = '123abC';

jest.mock('nanoid', () => {
  return {
    nanoid: () => MOCKED_ID,
  };
});

function TestRefTextArea() {
  const inputRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  return <TextArea ref={inputRef} />;
}

describe('TextArea', () => {
  it('renders a basic text area', () => {
    const { container } = render(<TextArea />);

    const textarea = container.querySelector('textarea');

    expect(textarea).toBeInTheDocument();
  });

  it('handles typing correctly', () => {
    const handleChange = jest.fn();
    const { getByPlaceholderText } = render(
      <TextArea onChange={handleChange} placeholder="Leave a comment here" />,
    );

    const textarea = getByPlaceholderText('Leave a comment here');
    userEvent.type(textarea, 'test');

    expect(handleChange).toHaveBeenCalledTimes(4);
  });

  it('sets the data attribute on the text area', () => {
    const { getByTestId } = render(<TextArea data-testid="test-textarea" />);

    const input = getByTestId('test-textarea');

    expect(input).toBeInTheDocument();
  });

  it('renders the disabled text area', () => {
    const { container } = render(<TextArea disabled />);

    const textarea = container.querySelector('textarea');

    expect(textarea).toBeDisabled();
  });

  it('accepts ref and could be focused programmatically', () => {
    const { container } = render(<TestRefTextArea />);

    const textarea = container.querySelector('textarea');

    expect(textarea).toHaveFocus();
  });

  it('renders snapshot', () => {
    const { container } = render(
      <TextArea placeholder="Leave a comment here" />,
    );

    const textarea = container.firstChild;
    expect(textarea).toMatchSnapshot();
  });

  it('renders snapshot of required with error', () => {
    const { container } = render(<TextArea error />);

    const textarea = container.firstChild;
    expect(textarea).toMatchSnapshot();
  });

  it('renders snapshot of inverted', () => {
    const { container } = render(<TextArea inverted />);

    const textarea = container.firstChild;
    expect(textarea).toMatchSnapshot();
  });

  it('renders snapshot of disabled', () => {
    const { container } = render(<TextArea disabled />);

    const textarea = container.firstChild;
    expect(textarea).toMatchSnapshot();
  });

  it('renders all supporting elements to make auto-grow work', () => {
    const { container } = render(
      <TextArea autoGrow value="Welcome" onChange={() => {}} />,
    );

    const textarea = container.firstChild;
    expect(textarea).toMatchSnapshot();
  });
});
