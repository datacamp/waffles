import { css } from '@emotion/react';
import { Tooltip } from '@datacamp/waffles/tooltip';
import { tokens } from '@datacamp/waffles/tokens';
import { Button } from '@datacamp/waffles/button';

const higlightStyle = css`
  color: ${tokens.colors.green};
`;

function Example() {
  return (
    <Tooltip
      content={
        <>
          Always keep tooltip&apos;s content{' '}
          <span css={higlightStyle}>short</span> and{' '}
          <span css={higlightStyle}>simple</span>.
        </>
      }
      placement="bottomLeft"
    >
      <Button>Tooltip Trigger</Button>
    </Tooltip>
  );
}

export default Example;
