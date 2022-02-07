/* eslint-disable @typescript-eslint/no-empty-function */
import { render, fireEvent, waitFor, act } from '@testing-library/react';

import { AlertDialog } from '../index';

jest.mock('../../icon', () => {
  return {
    Cross: () => 'CrossIcon',
  };
});

type AlertDialogTestProps = {
  isOpen: boolean;
  onClose: () => void;
};

function AlertDialogTest({ isOpen, onClose }: AlertDialogTestProps) {
  return (
    <AlertDialog
      isOpen={isOpen}
      onClose={onClose}
      aria-labelledby="alert-dialog-title"
    >
      <AlertDialog.Header id="alert-dialog-title">Warning!</AlertDialog.Header>
      <AlertDialog.Body>Oops, something happened.</AlertDialog.Body>
      <AlertDialog.Footer>
        <AlertDialog.Button autoFocus onClick={onClose}>
          Got It!
        </AlertDialog.Button>
      </AlertDialog.Footer>
    </AlertDialog>
  );
}

describe('AlertDialogTest', () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.useRealTimers();
  });

  it('renders alert dialog and all subcomponents with all a11y attributes passed', async () => {
    const { getByTestId, getByRole, getByText, getByLabelText } = render(
      <AlertDialogTest isOpen={true} onClose={() => {}} />,
    );

    // Let fade in animations finish
    act(() => {
      jest.advanceTimersByTime(500);
    });

    let overlay;
    await waitFor(() => {
      overlay = getByTestId('dialog-overlay');
    });
    const dialog = getByRole('alertdialog');
    const title = getByText('Warning!');
    const body = getByText(/something happened/i);
    const closeButton = getByLabelText('Close');
    const dismissButton = getByText('Got It!');

    expect(dialog).toBeInTheDocument();
    expect(dialog).toHaveAttribute('aria-labelledby', 'alert-dialog-title');
    expect(overlay).toBeInTheDocument();
    expect(title).toBeInTheDocument();
    expect(title).toHaveAttribute('id', 'alert-dialog-title');
    expect(body).toBeInTheDocument();
    expect(closeButton).toBeInTheDocument();
    expect(dismissButton).toBeInTheDocument();
  });

  it("doesn't render alert dialog when it is closed", () => {
    const { queryByTestId } = render(
      <AlertDialogTest isOpen={false} onClose={() => {}} />,
    );

    const overlay = queryByTestId('dialog-overlay');
    const dialog = queryByTestId('test-dialog');

    expect(dialog).not.toBeInTheDocument();
    expect(overlay).not.toBeInTheDocument();
  });

  it('when close button at the top is clicked, onClose handler is called', async () => {
    const handleClose = jest.fn();
    const { getByLabelText } = render(
      <AlertDialogTest isOpen={true} onClose={handleClose} />,
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
      <AlertDialogTest isOpen={true} onClose={handleClose} />,
    );

    // Let fade in animations finish
    act(() => {
      jest.advanceTimersByTime(500);
    });

    let dismissButton;
    await waitFor(() => {
      dismissButton = getByText('Got It!');
    });

    dismissButton && fireEvent.click(dismissButton);

    expect(handleClose).toHaveBeenCalledTimes(1);
  });

  it('when alert dialog is open, button with autoFocus flag set should be focused', async () => {
    const { getByText } = render(
      <AlertDialogTest isOpen={true} onClose={() => {}} />,
    );

    // Let fade in animations finish
    act(() => {
      jest.advanceTimersByTime(500);
    });

    let dismissButton;
    await waitFor(() => {
      dismissButton = getByText('Got It!').closest('button');
    });

    expect(dismissButton).toHaveFocus();
  });

  it('renders snapshot', async () => {
    const { getByRole } = render(
      <AlertDialogTest isOpen={true} onClose={() => {}} />,
    );

    // Let fade in animations finish
    act(() => {
      jest.advanceTimersByTime(500);
    });

    let alertDialog;
    await waitFor(() => {
      alertDialog = getByRole('alertdialog');
    });

    expect(alertDialog).toMatchSnapshot();
  });
});
