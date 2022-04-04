import { render, fireEvent, act, waitFor } from '@testing-library/react';

import { Notification } from '../index';

describe('Notification', () => {
  it('renders title and description', async () => {
    const { getByText } = render(
      <Notification
        title="Taylor Swift Tour Announced"
        description="The World Tour is going to start this summer."
      />,
    );

    let title;
    await waitFor(() => {
      title = getByText('Taylor Swift Tour Announced');
    });
    const description = getByText(/the world tour/i);

    expect(title).toBeInTheDocument();
    expect(description).toBeInTheDocument();
  });

  it('renders close button when closable flag is passed', async () => {
    const { getByLabelText } = render(
      <Notification title="Taylor Swift Tour Announced" closable />,
    );

    let button;
    await waitFor(() => {
      button = getByLabelText('Close notification');
    });

    expect(button).toBeInTheDocument();
  });

  it('renders action button', async () => {
    const { getByText } = render(
      <Notification
        title="Taylor Swift Tour Announced"
        action={
          <Notification.ActionButton>Check Details</Notification.ActionButton>
        }
      />,
    );

    let button;
    await waitFor(() => {
      button = getByText('Check Details');
    });

    expect(button).toBeInTheDocument();
  });

  it('after close button is clicked, correct handler is triggered, and notification disappears', async () => {
    jest.useFakeTimers();

    const handleClick = jest.fn();
    const { queryByText, getByLabelText } = render(
      <Notification
        title="Taylor Swift Tour Announced"
        closable
        onClose={handleClick}
      />,
    );

    let button;
    await waitFor(() => {
      button = getByLabelText('Close notification');
    });
    button && fireEvent.click(button);

    // Component unmount is delayed because of close animation
    act(() => {
      jest.advanceTimersByTime(1000);
    });

    const title = queryByText('Taylor Swift Tour Announced');

    expect(handleClick).toHaveBeenCalledTimes(1);
    expect(title).not.toBeInTheDocument();

    jest.useRealTimers();
  });

  it('sets the data attribute on the notification', async () => {
    const { getByTestId } = render(
      <Notification data-testid="test-notification" title="Test" />,
    );

    let notification;
    await waitFor(() => {
      notification = getByTestId('test-notification');
    });

    expect(notification).toBeInTheDocument();
  });

  describe('accessible announcement', () => {
    it('should be rendered by success notification', async () => {
      const { getByText } = render(
        <Notification title="Notification Title" variant="success" />,
      );

      let announcement;
      await waitFor(() => {
        announcement = getByText('Success:');
      });

      expect(announcement).toBeInTheDocument();
    });

    it('should be rendered by warning notification', async () => {
      const { getByText } = render(
        <Notification title="Notification Title" variant="warning" />,
      );

      let announcement;
      await waitFor(() => {
        announcement = getByText('Warning:');
      });

      expect(announcement).toBeInTheDocument();
    });

    it('should be rendered by error notification', async () => {
      const { getByText } = render(
        <Notification title="Notification Title" variant="error" />,
      );

      let announcement;
      await waitFor(() => {
        announcement = getByText('Error:');
      });

      expect(announcement).toBeInTheDocument();
    });
  });

  it('renders snapshot of regular notification with all optional content', async () => {
    const { container, getByText } = render(
      <Notification
        title="Notification Title"
        description={
          <>
            Notification <strong>description</strong>.
          </>
        }
        closable
        action={<Notification.ActionButton>Action</Notification.ActionButton>}
      />,
    );

    let title;
    await waitFor(() => {
      title = getByText('Notification Title');
    });
    const notification = container.querySelector('section');

    expect(title).toBeInTheDocument();
    expect(notification).toMatchSnapshot();
  });

  it('renders snapshot of inverted notification with all optional content', async () => {
    const { container, getByText } = render(
      <Notification
        inverted
        title="Inverted Notification Title"
        description={
          <>
            Inverted notification <strong>description</strong>.
          </>
        }
        closable
        action={<Notification.ActionButton>Action</Notification.ActionButton>}
      />,
    );

    let title;
    await waitFor(() => {
      title = getByText('Inverted Notification Title');
    });
    const notification = container.querySelector('section');

    expect(title).toBeInTheDocument();
    expect(notification).toMatchSnapshot();
  });
});
