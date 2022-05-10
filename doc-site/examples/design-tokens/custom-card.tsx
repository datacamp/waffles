import { css } from '@emotion/react';
import { tokens } from '@datacamp/waffles/tokens';
import { Paragraph } from '@datacamp/waffles/paragraph';
import { Heading } from '@datacamp/waffles/heading';

const cardStyle = css`
  background-color: ${tokens.colors.navy};
  border-radius: ${tokens.borderRadius.medium};
  padding: ${tokens.spacing.medium};
  max-width: 340px;
`;

const highlighStyle = css`
  color: ${tokens.colors.green};
`;

const textStyle = css`
  margin-bottom: 0;
`;

function Example() {
  return (
    <section css={cardStyle}>
      <Heading inverted>
        Your <span css={highlighStyle}>Certification</span> Journey
      </Heading>
      <Paragraph inverted css={textStyle}>
        To get certified by DataCamp, we&apos;ll be testing your skills in SQL
        and in R or Python, through a series of timed assessments.
      </Paragraph>
    </section>
  );
}

export default Example;
