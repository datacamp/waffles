import { css } from '@emotion/react';

import { tokens } from '../../tokens';
import { Badge } from '../index';

const wrapperStyle = css`
  display: flex;
  gap: ${tokens.spacing.medium};
  padding: ${tokens.spacing.medium};
`;

const singleSizeStyle = css`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: ${tokens.spacing.small};
`;

const sizes = ['small', 'medium', 'large'] as const;

function Story() {
  return (
    <div css={wrapperStyle}>
      {sizes.map((size) => {
        return (
          <div key={size} css={singleSizeStyle}>
            <Badge size={size} color={tokens.colors.green}>
              Very Long Badge Label
            </Badge>
            <Badge size={size} color={tokens.colors.orange}>
              Long Badge Label
            </Badge>
            <Badge size={size} color={tokens.colors.purple}>
              Label
            </Badge>
            <Badge size={size} color={tokens.colors.navy}>
              Label
            </Badge>
          </div>
        );
      })}
    </div>
  );
}

export default Story;
