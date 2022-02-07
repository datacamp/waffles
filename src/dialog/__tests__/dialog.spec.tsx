/* eslint-disable @typescript-eslint/no-empty-function */
import { render, fireEvent, waitFor, act } from '@testing-library/react';

import { Dialog } from '../index';

jest.mock('../../icon', () => {
  return {
    Cross: () => 'CrossIcon',
  };
});

type DialogTestProps = {
  isOpen: boolean;
  onClose: () => void;
};

function DialogTest({ isOpen, onClose }: DialogTestProps) {
  return (
    <Dialog isOpen={isOpen} onClose={onClose} aria-labelledby="dialog-title">
      <Dialog.Header id="dialog-title">Taylor Swift Discography</Dialog.Header>
      <Dialog.Body>Discover amazing pop songs by Tylor Swift.</Dialog.Body>
      <Dialog.Footer>
        <Dialog.Button onClick={onClose}>Dismiss</Dialog.Button>
        <Dialog.Button autoFocus>Confirm</Dialog.Button>
      </Dialog.Footer>
    </Dialog>
  );
}

describe('Dialog', () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.useRealTimers();
  });

  it('renders dialog and all subcomponents with all a11y attributes passed', async () => {
    const { getByRole, getByTestId, getByText, getByLabelText } = render(
      <DialogTest isOpen={true} onClose={() => {}} />,
    );

    // Let fade in animations finish
    act(() => {
      jest.advanceTimersByTime(500);
    });

    let overlay;
    await waitFor(() => {
      overlay = getByTestId('dialog-overlay');
    });
    const dialog = getByRole('dialog');
    const title = getByText('Taylor Swift Discography');
    const body = getByText(/amazing pop songs/i);
    const closeButton = getByLabelText('Close');
    const confirmButton = getByText('Confirm');

    expect(dialog).toBeInTheDocument();
    expect(dialog).toHaveAttribute('aria-labelledby', 'dialog-title');
    expect(overlay).toBeInTheDocument();
    expect(title).toBeInTheDocument();
    expect(title).toHaveAttribute('id', 'dialog-title');
    expect(body).toBeInTheDocument();
    expect(closeButton).toBeInTheDocument();
    expect(confirmButton).toBeInTheDocument();
  });

  it("doesn't render dialog when it is closed", () => {
    const { queryByTestId, queryByRole } = render(
      <DialogTest isOpen={false} onClose={() => {}} />,
    );

    const overlay = queryByTestId('dialog-overlay');
    const dialog = queryByRole('dialog');

    expect(dialog).not.toBeInTheDocument();
    expect(overlay).not.toBeInTheDocument();
  });

  it('when close button at the top is clicked, onClose handler is called', async () => {
    const handleClose = jest.fn();
    const { getByLabelText } = render(
      <DialogTest isOpen={true} onClose={handleClose} />,
    );

    // Let fade in animations finish
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
      <DialogTest isOpen={true} onClose={handleClose} />,
    );

    // Let fade in animations finish
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

  it('when dialog is open, button with autoFocus flag set should be focused', async () => {
    const { getByText } = render(
      <DialogTest isOpen={true} onClose={() => {}} />,
    );

    // Let fade in animations finish
    act(() => {
      jest.advanceTimersByTime(500);
    });

    let confirmButton;
    await waitFor(() => {
      confirmButton = getByText('Confirm').closest('button');
    });

    expect(confirmButton).toHaveFocus();
  });

  it('renders snapshot', async () => {
    const { getByRole } = render(
      <DialogTest isOpen={true} onClose={() => {}} />,
    );

    // Let fade in animations finish
    act(() => {
      jest.advanceTimersByTime(500);
    });

    let dialog;
    await waitFor(() => {
      dialog = getByRole('dialog');
    });

    expect(dialog).toMatchSnapshot();
  });
});
