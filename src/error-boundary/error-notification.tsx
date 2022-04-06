import { Notification } from '../notification';
import { Back } from '../icon';

type ErrorNotificationProps = {
  error: Error;
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
