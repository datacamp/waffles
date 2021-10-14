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
      <Paragraph size="large">
        Python is a general-purpose programming language that is becoming ever
        more popular for data science. Companies worldwide are using Python to
        harvest insights from their data and gain a competitive edge. Unlike
        other Python tutorials, this course focuses on Python specifically for
        data science.
      </Paragraph>
      <Paragraph size="medium">
        Python is a general-purpose programming language that is becoming ever
        more popular for data science. Companies worldwide are using Python to
        harvest insights from their data and gain a competitive edge. Unlike
        other Python tutorials, this course focuses on Python specifically for
        data science.
      </Paragraph>
      <Paragraph size="small">
        Python is a general-purpose programming language that is becoming ever
        more popular for data science. Companies worldwide are using Python to
        harvest insights from their data and gain a competitive edge. Unlike
        other Python tutorials, this course focuses on Python specifically for
        data science.
      </Paragraph>
    </div>
  );
}

export default Example;
