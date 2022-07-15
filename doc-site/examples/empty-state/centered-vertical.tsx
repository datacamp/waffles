import { css } from '@emotion/react';
import { tokens } from '@datacamp/waffles/tokens';
import { Paragraph } from '@datacamp/waffles/paragraph';
import { EmptyState } from '@datacamp/waffles/empty-state';
import { Button } from '@datacamp/waffles/button';
import { Paper3d } from '@datacamp/waffles/asset';

const descriptionStyle = css`
  margin-bottom: ${tokens.spacing.large};
`;

function Example() {
  return (
    <EmptyState
      title="You have no assignments yet"
      image={<Paper3d />}
      orientation="vertical"
      isCentered
    >
      <Paragraph css={descriptionStyle}>
        Reach out to your admin to get relevant content assigned to you.
      </Paragraph>
      <Button>Contact Admin</Button>
    </EmptyState>
  );
}

export default Example;
