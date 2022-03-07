import { render, fireEvent, act } from '@testing-library/react';

import { ToastProvider, useToast } from '../index';

function ToastTest() {
  const { toast } = useToast();

  return (
    <div>
      <button
        onClick={() =>
          toast({
            title: 'Default Toast Title',
            description: 'Default toast description.',
          })
        }
      >
        Show Default Toast
      </button>
      <button
        onClick={() =>
          toast({
            title: 'Success!',
            variant: 'success',
          })
        }
      >
        Show Success Toast
      </button>
      <button
        onClick={() =>
          toast({
            title: 'Warning Toast Title',
            variant: 'warning',
          })
        }
      >
        Show Warning Toast
      </button>
      <button
        onClick={() =>
          toast({
            title: 'Oops, Something Went Wrong',
            description: 'Error toast description.',
            variant: 'error',
          })
        }
      >
        Show Error Toast
      </button>
    </div>
  );
}

describe('Toast', () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.useRealTimers();
  });

  it('show toast with title and description', async () => {
    const { getByText } = render(
      <ToastProvider>
        <ToastTest />
      </ToastProvider>,
    );

    const toastTrigger = getByText('Show Default Toast');
    fireEvent.click(toastTrigger);

    act(() => {
      jest.advanceTimersByTime(1000);
    });

    const title = getByText('Default Toast Title');
    const description = getByText('Default toast description.');

    expect(title).toBeInTheDocument();
    expect(description).toBeInTheDocument();
  });

  it('when toast is triggered multiple times show it that many times', async () => {
    const { getByText, getAllByRole, queryByTestId } = render(
      <ToastProvider>
        <ToastTest />
      </ToastProvider>,
    );

    const toastTrigger = getByText('Show Default Toast');

    // Show 3 toasts
    fireEvent.click(toastTrigger);
    fireEvent.click(toastTrigger);
    fireEvent.click(toastTrigger);

    act(() => {
      jest.advanceTimersByTime(1000);
    });

    const toasts = getAllByRole('status');
    const list = queryByTestId('toasts-list');

    expect(toasts).toHaveLength(3);
    expect(list).toBeInTheDocument();
  });

  it('toast should be automatically closed after 6 seconds', async () => {
    const { getByText, queryByText, queryByTestId } = render(
      <ToastProvider>
        <ToastTest />
      </ToastProvider>,
    );

    const toastTrigger = getByText('Show Default Toast');
    fireEvent.click(toastTrigger);

    act(() => {
      // Take into account 600ms of closing animation
      jest.advanceTimersByTime(7000);
    });

    const title = queryByText('Default Toast Title');
    const list = queryByTestId('toasts-list');

    expect(title).not.toBeInTheDocument();
    expect(list).not.toBeInTheDocument();
  });

  it('when custom auto hide duration time is specified close a toasts after that duration', async () => {
    const { getByText, queryByText } = render(
      <ToastProvider autoHideDuration={10000}>
        <ToastTest />
      </ToastProvider>,
    );

    const toastTrigger = getByText('Show Success Toast');
    fireEvent.click(toastTrigger);

    act(() => {
      // Take into account 600ms of closing animation
      jest.advanceTimersByTime(11000);
    });

    const title = queryByText('Success!');

    expect(title).not.toBeInTheDocument();
  });

  it('when auto hide functionality is disabled do not hide a toast automatically', async () => {
    const { getByText } = render(
      <ToastProvider disableAutoHide>
        <ToastTest />
      </ToastProvider>,
    );

    const toastTrigger = getByText('Show Warning Toast');
    fireEvent.click(toastTrigger);

    // By default toast would be closed after 6 seconds
    // Could still be dismissed manually by clicking close button
    act(() => {
      jest.advanceTimersByTime(10000);
    });

    const title = getByText('Warning Toast Title');

    expect(title).toBeInTheDocument();
  });

  it('toast could be closed manually by appropriate close button', async () => {
    const { getByText, getByLabelText, queryByText } = render(
      <ToastProvider>
        <ToastTest />
      </ToastProvider>,
    );

    const toastTrigger = getByText('Show Default Toast');
    fireEvent.click(toastTrigger);

    act(() => {
      jest.advanceTimersByTime(1000);
    });

    const closeButton = getByLabelText('Close');
    fireEvent.click(closeButton);

    act(() => {
      // Take into account 600ms of closing animation
      jest.advanceTimersByTime(1000);
    });

    const title = queryByText('Default Toast Title');

    expect(title).not.toBeInTheDocument();
  });

  describe('accessible announcement', () => {
    it('should be rendered by success toast', async () => {
      const { getByText } = render(
        <ToastProvider>
          <ToastTest />
        </ToastProvider>,
      );

      const toastTrigger = getByText('Show Success Toast');
      fireEvent.click(toastTrigger);

      act(() => {
        jest.advanceTimersByTime(1000);
      });

      const announcement = getByText('Success:');

      expect(announcement).toBeInTheDocument();
    });

    it('should be rendered by warning toast', async () => {
      const { getByText } = render(
        <ToastProvider>
          <ToastTest />
        </ToastProvider>,
      );

      const toastTrigger = getByText('Show Warning Toast');
      fireEvent.click(toastTrigger);

      act(() => {
        jest.advanceTimersByTime(1000);
      });

      const announcement = getByText('Warning:');

      expect(announcement).toBeInTheDocument();
    });

    it('should be rendered by error toast', async () => {
      const { getByText } = render(
        <ToastProvider>
          <ToastTest />
        </ToastProvider>,
      );

      const toastTrigger = getByText('Show Error Toast');
      fireEvent.click(toastTrigger);

      act(() => {
        jest.advanceTimersByTime(1000);
      });

      const announcement = getByText('Error:');

      expect(announcement).toBeInTheDocument();
    });
  });

  describe('render snapshot of', () => {
    it('default toast', () => {
      const { getByText, getByRole } = render(
        <ToastProvider>
          <ToastTest />
        </ToastProvider>,
      );

      const toastTrigger = getByText('Show Default Toast');
      fireEvent.click(toastTrigger);

      act(() => {
        jest.advanceTimersByTime(1000);
      });

      const toast = getByRole('status');

      expect(toast).toMatchSnapshot();
    });

    it('success toast', () => {
      const { getByText, getByRole } = render(
        <ToastProvider>
          <ToastTest />
        </ToastProvider>,
      );

      const toastTrigger = getByText('Show Success Toast');
      fireEvent.click(toastTrigger);

      act(() => {
        jest.advanceTimersByTime(1000);
      });

      const toast = getByRole('status');

      expect(toast).toMatchSnapshot();
    });

    it('warning toast', () => {
      const { getByText, getByRole } = render(
        <ToastProvider>
          <ToastTest />
        </ToastProvider>,
      );

      const toastTrigger = getByText('Show Warning Toast');
      fireEvent.click(toastTrigger);

      act(() => {
        jest.advanceTimersByTime(1000);
      });

      const toast = getByRole('status');

      expect(toast).toMatchSnapshot();
    });

    it('error toast', () => {
      const { getByText, getByRole } = render(
        <ToastProvider>
          <ToastTest />
        </ToastProvider>,
      );

      const toastTrigger = getByText('Show Error Toast');
      fireEvent.click(toastTrigger);

      act(() => {
        jest.advanceTimersByTime(1000);
      });

      const toast = getByRole('status');

      expect(toast).toMatchSnapshot();
    });
  });
});
