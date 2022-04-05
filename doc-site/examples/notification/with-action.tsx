import { Notification } from '@datacamp/waffles/notification';

function Example() {
  return (
    <Notification
      title="Terms Of Use Has Been Updated"
      action={
        <Notification.ActionButton
          as="a"
          href="https://www.datacamp.com/terms-of-use"
        >
          Check What Changed
        </Notification.ActionButton>
      }
      variant="warning"
    />
  );
}

export default Example;
