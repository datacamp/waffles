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

  return <TextArea ref={inputRef} label="How do you feel?" />;
}

describe('TextArea', () => {
  it('renders a basic text area', () => {
    const { container } = render(<TextArea label="How do you feel?" />);

    const textarea = container.querySelector('textarea');
    const label = container.querySelector('label');

    expect(textarea).toBeInTheDocument();
    expect(label).toHaveTextContent('How do you feel?');
  });

  it('renders a text area with description and placeholder', () => {
    const { getByPlaceholderText, getByText } = render(
      <TextArea
        label="How do you feel?"
        description="Additional description"
        placeholder="Leave a comment here"
      />,
    );

    const textarea = getByPlaceholderText('Leave a comment here');
    const description = getByText('Additional description');

    expect(textarea).toBeInTheDocument();
    expect(description).toBeInTheDocument();
  });

  it('handles typing correctly', () => {
    const handleChange = jest.fn();
    const { getByPlaceholderText } = render(
      <TextArea
        onChange={handleChange}
        label="How do you feel?"
        placeholder="Leave a comment here"
      />,
    );

    const textarea = getByPlaceholderText('Leave a comment here');
    userEvent.type(textarea, 'test');

    expect(handleChange).toHaveBeenCalledTimes(4);
  });

  it('after clicking on label text area got focused', () => {
    const handleFocus = jest.fn();
    const { getByText } = render(
      <TextArea
        label="How do you feel?"
        description="Additional description"
        onFocus={handleFocus}
      />,
    );

    const label = getByText('How do you feel?');
    userEvent.click(label);

    expect(handleFocus).toHaveBeenCalledTimes(1);
  });

  it('renders additional message when text area is required', () => {
    const { getByText } = render(
      <TextArea label="How do you feel?" required />,
    );

    const message = getByText(/required/i);

    expect(message).toBeInTheDocument();
  });

  it('renders error message', () => {
    const { getByText } = render(
      <TextArea label="How do you feel?" error="Comment is just too long." />,
    );

    const error = getByText('Comment is just too long.');

    expect(error).toBeInTheDocument();
  });

  it('sets correct aria attributes when has error', () => {
    const { getByPlaceholderText } = render(
      <TextArea
        label="How do you feel?"
        error="Comment is just too long."
        placeholder="Leave a comment here"
      />,
    );

    const textarea = getByPlaceholderText('Leave a comment here');

    expect(textarea).toHaveAttribute('aria-invalid', 'true');
  });

  it('textarea and label are associated by the same ID', () => {
    const { container } = render(<TextArea label="How do you feel?" />);

    const textarea = container.querySelector('textarea');
    const label = container.querySelector('label');

    expect(label).toHaveAttribute('for', `form-control-${MOCKED_ID}`);
    expect(textarea).toHaveAttribute('id', `form-control-${MOCKED_ID}`);
  });

  it('when user defined ID is passed, textarea and label are associated by it', () => {
    const { container } = render(
      <TextArea label="How do you feel?" id="mood-textarea" />,
    );

    const textarea = container.querySelector('textarea');
    const label = container.querySelector('label');

    expect(label).toHaveAttribute('for', `mood-textarea`);
    expect(textarea).toHaveAttribute('id', `mood-textarea`);
  });

  it('textarea and error are associated by the same ID', () => {
    const { container, getByText } = render(
      <TextArea label="How do you feel?" error="Comment is just too long." />,
    );

    const textarea = container.querySelector('textarea');
    const error = getByText('Comment is just too long.');

    expect(textarea).toHaveAttribute(
      'aria-errormessage',
      `form-control-error-${MOCKED_ID}`,
    );
    expect(error).toHaveAttribute('id', `form-control-error-${MOCKED_ID}`);
  });

  it('sets the data attribute on the text area', () => {
    const { getByTestId } = render(
      <TextArea data-testid="mood-textarea" label="How do you feel?" />,
    );

    const input = getByTestId('mood-textarea');

    expect(input).toBeInTheDocument();
  });

  it('renders the disabled text area', () => {
    const { container } = render(
      <TextArea disabled label="How do you feel?" />,
    );

    const textarea = container.querySelector('textarea');

    expect(textarea).toBeDisabled();
  });

  it('accepts ref and could be focused programmatically', () => {
    const { container } = render(<TestRefTextArea />);

    const textarea = container.querySelector('textarea');

    expect(textarea).toHaveFocus();
  });

  it('renders snapshot with label and description', () => {
    const { container } = render(
      <TextArea
        label="How do you feel?"
        description="Additional description"
        placeholder="Leave a comment here"
      />,
    );

    const textarea = container.firstChild;
    expect(textarea).toMatchSnapshot();
  });

  it('renders snapshot of required with error', () => {
    const { container } = render(
      <TextArea
        label="How do you feel?"
        error="Comment is just too long."
        required
      />,
    );

    const textarea = container.firstChild;
    expect(textarea).toMatchSnapshot();
  });

  it('renders snapshot of inverted', () => {
    const { container } = render(
      <TextArea
        inverted
        label="How do you feel?"
        description="Additional description"
      />,
    );

    const textarea = container.firstChild;
    expect(textarea).toMatchSnapshot();
  });

  it('renders snapshot of disabled', () => {
    const { container } = render(
      <TextArea
        disabled
        label="How do you feel?"
        description="Additional description"
      />,
    );

    const textarea = container.firstChild;
    expect(textarea).toMatchSnapshot();
  });

  it('renders all supporting elements to make auto-grow work', () => {
    const { container } = render(
      <TextArea autoGrow label="How do you feel?" />,
    );

    const textarea = container.firstChild;
    expect(textarea).toMatchSnapshot();
  });
});
