import { css } from '@emotion/react';

import { Avatar } from '../index';
import { tokens } from '../../tokens';
import { Camera } from '../../icon';
import { TargetArrow3d } from '../../asset';

const wrapperStyle = css`
  display: flex;
  align-items: center;
  color: ${tokens.colors.navy};
  gap: ${tokens.spacing.medium};
`;

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
    <div css={wrapperStyle}>
      {variants.map((variant) => {
        return (
          <div data-testid="avatar" key={`avatar-${variant}`}>
            <Avatar variant={variant} content="A" />
            <Avatar variant={variant} content={<Camera />} />
            <Avatar variant={variant} contentFill content={<TargetArrow3d />} />
            <Avatar
              variant={variant}
              contentFill
              content={<img src="" alt="Image" />}
            />
          </div>
        );
      })}
    </div>
  );
}

export default Story;
