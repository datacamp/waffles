import { Notification } from '@datacamp/waffles/notification';
import { Link } from '@datacamp/waffles/link';

function Example() {
  return (
    <Notification
      title="Course Updated"
      description={
        <>
          The{' '}
          <Link href="https://app.datacamp.com/learn/courses/reporting-in-sql">
            Reporting in SQL
          </Link>{' '}
          course has been updated recently.
        </>
      }
    />
  );
}

export default Example;
