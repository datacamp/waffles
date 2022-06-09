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
          <div data-testid="avatar" key={`avatar-${size}`}>
            <Text>{size}</Text>
            <Avatar size={size} content="A" />
            <Avatar size={size} content={<Camera />} />
            <Avatar size={size} content={<TargetArrow3d />} />
            <Avatar
              size={size}
              contentFill
              content={
                <img
                  src="https://res.cloudinary.com/dyd911kmh/f_auto,c_limit,w_128,q_auto/Marketing/Testimonials/martijn-theuwissen.jpg"
                  alt="Martijn Theuwissen placeholder image"
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
