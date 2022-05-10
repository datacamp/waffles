/* eslint-disable @typescript-eslint/no-empty-function */
import { useRef, useEffect } from 'react';
import userEvent from '@testing-library/user-event';
import { render } from '@testing-library/react';

import { TextArea } from '../index';

const MOCKED_ID = '123abC';

jest.mock('nanoid', () => {
  return {
    nanoid: () => MOCKED_ID,
  };
});

function TestRefTextArea() {
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    textareaRef.current?.focus();
  }, []);

  return <TextArea ref={textareaRef} />;
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

    const textarea = getByTestId('test-textarea');

    expect(textarea).toBeInTheDocument();
  });

  it('sets the aria-label on the textarea', () => {
    const { getByLabelText } = render(
      <TextArea aria-label="Accessible textarea" />,
    );

    const textarea = getByLabelText('Accessible textarea');

    expect(textarea).toBeInTheDocument();
  });

  it('renders the disabled text area', () => {
    const { container } = render(<TextArea disabled />);

    const textarea = container.querySelector('textarea');

    expect(textarea).toBeDisabled();
  });

  it('when error is set provide aria-invalid attribute', () => {
    const { container } = render(<TextArea error />);

    const textarea = container.querySelector('textarea');

    expect(textarea).toHaveAttribute('aria-invalid', 'true');
  });

  it('shows character count', () => {
    const { getByText } = render(
      <TextArea
        showCharacterCount
        maxLength={100}
        value="Taylor Swift"
        onChange={() => {}}
      />,
    );

    const counter = getByText('12 / 100');

    expect(counter).toBeInTheDocument();
  });

  it('character counter and textarea are associated by the same ID', () => {
    const { container, getByLabelText } = render(
      <TextArea
        showCharacterCount
        maxLength={255}
        value="Ariana Grande"
        onChange={() => {}}
      />,
    );

    const textarea = container.querySelector('textarea');
    const counterLabel = getByLabelText('13 of 255 characters used');

    expect(textarea).toHaveAttribute(
      'aria-describedby',
      `character-count-${MOCKED_ID}`,
    );
    expect(counterLabel).toHaveAttribute('id', `character-count-${MOCKED_ID}`);
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

  it('renders snapshot when character count is displayed', () => {
    const { container } = render(
      <TextArea
        showCharacterCount
        maxLength={255}
        value="Welcome"
        onChange={() => {}}
      />,
    );

    const textarea = container.firstChild;
    expect(textarea).toMatchSnapshot();
  });
});
