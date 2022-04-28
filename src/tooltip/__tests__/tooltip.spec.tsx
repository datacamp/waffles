import { useRef, useEffect } from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';

import { Tooltip } from '../index';

const MOCKED_ID = '123abC';

jest.mock('nanoid', () => {
  return {
    nanoid: () => MOCKED_ID,
  };
});

const placements = [
  'bottom',
  'top',
  'right',
  'left',
  'bottomLeft',
  'bottomRight',
  'topLeft',
  'topRight',
] as const;

function TestRefTooltip() {
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    buttonRef.current?.focus();
  }, []);

  return (
    <Tooltip content="Follow Taylor Swift">
      <button ref={buttonRef}>Tooltip Trigger</button>
    </Tooltip>
  );
}

describe('Tooltip', () => {
  it('renders a tooltip after trigger got focused', async () => {
    const { getByRole, getByText } = render(
      <Tooltip content="Follow Taylor Swift">
        <button>Show Swift Tooltip</button>
      </Tooltip>,
    );

    const button = getByText('Show Swift Tooltip');
    fireEvent.focus(button);

    let tooltip;
    await waitFor(() => {
      tooltip = getByRole('tooltip');
    });

    expect(tooltip).toBeInTheDocument();
    expect(tooltip).toHaveTextContent('Follow Taylor Swift');
  });

  it('renders a tooltip after mouse hovered over trigger', async () => {
    const { getByText } = render(
      <Tooltip content="Follow Taylor Swift">
        <button>Show Swift Tooltip</button>
      </Tooltip>,
    );

    const button = getByText('Show Swift Tooltip');
    fireEvent.mouseEnter(button);

    let tooltip;
    await waitFor(() => {
      tooltip = getByText('Follow Taylor Swift');
    });

    expect(tooltip).toBeInTheDocument();
  });

  it('trigger and tooltip are associated by the same ID', async () => {
    const { getByText } = render(
      <Tooltip content="Follow Taylor Swift">
        <button>Show Swift Tooltip</button>
      </Tooltip>,
    );

    const button = getByText('Show Swift Tooltip');
    fireEvent.focus(button);

    let tooltip;
    await waitFor(() => {
      tooltip = getByText('Follow Taylor Swift');
    });

    expect(tooltip).toHaveAttribute('id', `tooltip-${MOCKED_ID}`);
    expect(button).toHaveAttribute('aria-describedby', `tooltip-${MOCKED_ID}`);
  });

  it('clicking on trigger is handled properly', () => {
    const handleClick = jest.fn();
    const { getByText } = render(
      <Tooltip content="Follow Taylor Swift">
        <button onClick={handleClick}>Show Swift Tooltip</button>
      </Tooltip>,
    );

    const button = getByText('Show Swift Tooltip');
    fireEvent.click(button);

    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('sets the data attribute on the tooltip', async () => {
    const { getByText, getByTestId } = render(
      <Tooltip content="Follow Taylor Swift" data-testid="test-tooltip">
        <button>Show Swift Tooltip</button>
      </Tooltip>,
    );

    const button = getByText('Show Swift Tooltip');
    fireEvent.mouseEnter(button);

    let tooltip;
    await waitFor(() => {
      tooltip = getByTestId('test-tooltip');
    });

    expect(tooltip).toBeInTheDocument();
  });

  it('focusing trigger is handled properly', () => {
    const handleFocus = jest.fn();
    const { getByText } = render(
      <Tooltip content="Follow Taylor Swift">
        <button onFocus={handleFocus}>Show Swift Tooltip</button>
      </Tooltip>,
    );

    const button = getByText('Show Swift Tooltip');
    fireEvent.focus(button);
    expect(handleFocus).toHaveBeenCalledTimes(1);
  });

  it('tooltip trigger could be focused programmatically', async () => {
    const { getByText } = render(<TestRefTooltip />);

    const button = getByText('Tooltip Trigger');

    let tooltip;
    await waitFor(() => {
      tooltip = getByText('Follow Taylor Swift');
    });

    expect(button).toHaveFocus();
    expect(tooltip).toBeInTheDocument();
  });

  describe('renders snapshot of', () => {
    placements.forEach((placement) => {
      it(`${placement} placement`, async () => {
        const { getByRole, getByText } = render(
          <Tooltip content="Tooltip" placement={placement}>
            <button>Test</button>
          </Tooltip>,
        );

        const button = getByText('Test');
        fireEvent.focus(button);

        let tooltip;
        await waitFor(() => {
          tooltip = getByRole('tooltip');
        });
        expect(tooltip).toMatchSnapshot();
      });
    });

    it('inverted variant', async () => {
      const { getByRole, getByText } = render(
        <Tooltip content="Tooltip" inverted>
          <button>Test</button>
        </Tooltip>,
      );

      const button = getByText('Test');
      fireEvent.focus(button);

      let tooltip;
      await waitFor(() => {
        tooltip = getByRole('tooltip');
      });
      expect(tooltip).toMatchSnapshot();
    });
  });
});
