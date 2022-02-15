import { css } from '@emotion/react';

import { tokens } from '@datacamp/waffles/tokens';
import { Paragraph } from '@datacamp/waffles/paragraph';

function Example() {
  return (
    <div
      css={css`
        display: flex;
        flex-direction: column;
        gap: ${tokens.spacing.small};
      `}
    >
      <Paragraph variant="primary">
        Through hands-on exercises, you’ll learn how to{' '}
        <strong>understand</strong> data, whether it’s a bar plot on the news or
        as a statistic shared during a work meeting. You’ll <em>expand</em> your
        knowledge of key data topics, including data science, machine learning,
        data visualization, and even data engineering and cloud computing.
      </Paragraph>
      <Paragraph variant="secondary">
        Through hands-on exercises, you’ll learn how to{' '}
        <strong>understand</strong> data, whether it’s a bar plot on the news or
        as a statistic shared during a work meeting. You’ll <em>expand</em> your
        knowledge of key data topics, including data science, machine learning,
        data visualization, and even data engineering and cloud computing.
      </Paragraph>
    </div>
  );
}

export default Example;
