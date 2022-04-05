import { css } from '@emotion/react';

import { tokens } from '@datacamp/waffles/tokens';
import { Notification } from '@datacamp/waffles/notification';
import { ArrowRight } from '@datacamp/waffles/icon';

function Example() {
  return (
    <div
      css={css`
        display: flex;
        flex-direction: column;
        gap: ${tokens.spacing.medium};
      `}
    >
      <Notification
        variant="default"
        title="We Don't Share Your Personal Information"
        description="Your info is only shared with an employer when you apply for a job or accept their request."
        closable
      />
      <Notification
        variant="success"
        title="Course Completed"
        action={
          <Notification.ActionButton iconRight={<ArrowRight />}>
            Take Assessment
          </Notification.ActionButton>
        }
      />
      <Notification
        variant="warning"
        title="Some Personal Details Are Missing"
        description="To discover jobs tailored exclusively for you, we need a bit more information about you."
      />
      <Notification
        variant="error"
        title="Do Not Close This Window"
        description="The recording will immediately stop if you close this window."
      />
    </div>
  );
}

export default Example;
