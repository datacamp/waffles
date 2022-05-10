import { css } from '@emotion/react';

import { Tooltip } from '../index';
import { tokens } from '../../tokens';
import { Button } from '../../button';

const wrapperStyle = css`
  padding: ${tokens.spacing.medium};
`;

const customTooltipStyle = css`
  padding: ${tokens.spacing.medium};
  background-color: ${tokens.colors.purpleDark};
  color: ${tokens.colors.white};
`;

const highlightStyle = css`
  color: ${tokens.colors.yellowLight};
`;

function Story() {
  return (
    <div css={wrapperStyle}>
      <Tooltip
        css={customTooltipStyle}
        placement="bottomLeft"
        content={
          <>
            Custom style tooltip&apos;s{' '}
            <span css={highlightStyle}>content</span> with{' '}
            <span css={highlightStyle}>highlights</span>!
          </>
        }
      >
        <Button>Tooltip Trigger</Button>
      </Tooltip>
    </div>
  );
}

export default Story;
