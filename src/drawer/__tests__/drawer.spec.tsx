/* eslint-disable @typescript-eslint/no-empty-function */
import { render, fireEvent, waitFor, act } from '@testing-library/react';

import { Drawer } from '../index';

jest.mock('../../icon', () => {
  return {
    Cross: () => 'CrossIcon',
  };
});

type DrawerTestProps = {
  isOpen: boolean;
  onClose: () => void;
  placement: 'left' | 'right';
};

function DrawerTest({ isOpen, onClose, placement }: DrawerTestProps) {
  return (
    <Drawer
      isOpen={isOpen}
      onClose={onClose}
      placement={placement}
      aria-labelledby="drawer-title"
      data-testid="test-drawer"
    >
      <Drawer.Header id="drawer-title">
        Fabulous Marillion Concert
      </Drawer.Header>
      <Drawer.Body>Write a script for a jesters tear yourself.</Drawer.Body>
      <Drawer.Footer>
        <Drawer.Button onClick={onClose}>Dismiss</Drawer.Button>
        <Drawer.Button autoFocus>Confirm</Drawer.Button>
      </Drawer.Footer>
    </Drawer>
  );
}

describe('Drawer', () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.useRealTimers();
  });

  it('renders drawer and all subcomponents with all a11y attributes passed', async () => {
    const { getByTestId, getByText, getByLabelText } = render(
      <DrawerTest isOpen={true} onClose={() => {}} placement="left" />,
    );

    // Let slide in animations finish
    act(() => {
      jest.advanceTimersByTime(500);
    });

    let overlay;
    await waitFor(() => {
      overlay = getByTestId('drawer-overlay');
    });
    const dialog = getByTestId('test-drawer');
    const title = getByText('Fabulous Marillion Concert');
    const body = getByText(/script for a jesters tear/i);
    const closeButton = getByLabelText('Close');
    const confirmButton = getByText('Confirm');

    expect(dialog).toBeInTheDocument();
    expect(dialog).toHaveAttribute('aria-labelledby', 'drawer-title');
    expect(overlay).toBeInTheDocument();
    expect(title).toBeInTheDocument();
    expect(title).toHaveAttribute('id', 'drawer-title');
    expect(body).toBeInTheDocument();
    expect(closeButton).toBeInTheDocument();
    expect(confirmButton).toBeInTheDocument();
  });

  it("doesn't render drawer when it is closed", () => {
    const { queryByTestId } = render(
      <DrawerTest isOpen={true} onClose={() => {}} placement="left" />,
    );

    const overlay = queryByTestId('drawer-overlay');
    const dialog = queryByTestId('test-drawer');

    expect(dialog).not.toBeInTheDocument();
    expect(overlay).not.toBeInTheDocument();
  });

  it('when close button at the top is clicked, onClose handler is called', async () => {
    const handleClose = jest.fn();
    const { getByLabelText } = render(
      <DrawerTest isOpen={true} onClose={handleClose} placement="left" />,
    );

    // Let slide in animations finish
    act(() => {
      jest.advanceTimersByTime(500);
    });

    let closeButton;
    await waitFor(() => {
      closeButton = getByLabelText('Close');
    });

    closeButton && fireEvent.click(closeButton);

    expect(handleClose).toHaveBeenCalledTimes(1);
  });

  it('when dismiss button in the footer is clicked, onClose handler is called', async () => {
    const handleClose = jest.fn();
    const { getByText } = render(
      <DrawerTest isOpen={true} onClose={handleClose} placement="left" />,
    );

    // Let slide in animations finish
    act(() => {
      jest.advanceTimersByTime(500);
    });

    let dismissButton;
    await waitFor(() => {
      dismissButton = getByText('Dismiss');
    });

    dismissButton && fireEvent.click(dismissButton);

    expect(handleClose).toHaveBeenCalledTimes(1);
  });

  it('when drawer is open, button with autoFocus flag set should be focused', async () => {
    const { getByText } = render(
      <DrawerTest isOpen={true} onClose={() => {}} placement="left" />,
    );

    // Let slide in animations finish
    act(() => {
      jest.advanceTimersByTime(500);
    });

    let confirmButton;
    await waitFor(() => {
      confirmButton = getByText('Confirm').closest('button');
    });

    expect(confirmButton).toHaveFocus();
  });

  it('renders snapshot when drawer is placed to the left', async () => {
    const { getByTestId } = render(
      <DrawerTest isOpen={true} onClose={() => {}} placement="left" />,
    );

    // Let slide in animations finish
    act(() => {
      jest.advanceTimersByTime(500);
    });

    let drawer;
    await waitFor(() => {
      drawer = getByTestId('test-drawer');
    });

    expect(drawer).toMatchSnapshot();
  });

  it('renders snapshot when drawer is placed to the right', async () => {
    const { getByTestId } = render(
      <DrawerTest isOpen={true} onClose={() => {}} placement="right" />,
    );

    // Let slide in animations finish
    act(() => {
      jest.advanceTimersByTime(500);
    });

    let drawer;
    await waitFor(() => {
      drawer = getByTestId('test-drawer');
    });

    expect(drawer).toMatchSnapshot();
  });
});
