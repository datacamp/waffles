import { css } from '@emotion/react';

import { Badge } from '../index';
import { tokens } from '../../tokens';

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
const variants = [
  'green',
  'navy',
  'white',
  'red',
  'orange',
  'yellow',
  'blue',
  'purple',
  'pink',
  'grey',
  'greySubtle',
] as const;

function Story() {
  return (
    <div>
      {variants.map((variant) => {
        return (
          <div css={wrapperStyle} key={variant}>
            {sizes.map((size) => {
              return (
                <div key={`${variant}-${size}`} css={singleSizeStyle}>
                  <Badge variant={variant} size={size}>
                    Very Long Badge Label
                  </Badge>
                  <Badge variant={variant} size={size}>
                    Long Badge Label
                  </Badge>
                  <Badge variant={variant} size={size}>
                    Label
                  </Badge>
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
}

export default Story;
