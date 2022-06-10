import { css } from '@emotion/react';

import { Avatar } from '../index';
import { tokens } from '../../tokens';
import { Text } from '../../text';
import { Camera } from '../../icon';
import { TargetArrow3d } from '../../asset';

const wrapperStyle = css`
  display: flex;
  align-items: center;
  color: ${tokens.colors.navy};
  gap: ${tokens.spacing.medium};
`;

const sizeWrapperStyle = css`
  gap: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const sizes = [
  'huge',
  'xxlarge',
  'xlarge',
  'large',
  'medium',
  'small',
  'xsmall',
  'xxsmall',
] as const;

function Story() {
  return (
    <div css={wrapperStyle}>
      {sizes.map((size) => {
        return (
          <div
            css={sizeWrapperStyle}
            data-testid="avatar"
            key={`avatar-${size}`}
          >
            <Text>{size}</Text>
            <Avatar size={size} content="A" />
            <Avatar size={size} content={<Camera />} />
            <Avatar size={size} content={<TargetArrow3d />} />
            <Avatar
              size={size}
              contentFill
              content={
                <img
                  src="/images/profile-pic-example.png"
                  alt="Image example"
                />
              }
            />
          </div>
        );
      })}
    </div>
  );
}

export default Story;
