import { Notification } from '../notification';
import { Back } from '../icon';

type ErrorNotificationProps = {
  /* Error object. Usually used to display detailed `error.message`. */
  error: Error;
  /* Handler called just before `ErrorBoundary` resets its internal state. */
  onReset: () => void;
};

function ErrorNotification({ error, onReset }: ErrorNotificationProps) {
  return (
    <Notification
      title="Something Went Wrong"
      description={error.message}
      variant="error"
      action={
        <Notification.ActionButton onClick={onReset} iconRight={<Back />}>
          Try Again
        </Notification.ActionButton>
      }
    />
  );
}

export default ErrorNotification;
