import { css } from '@emotion/react';

import { Avatar } from '../index';
import { tokens } from '../../tokens';
import { Text } from '../../text';

const wrapperStyle = css`
  display: flex;
  align-items: center;
  color: ${tokens.colors.navy};
  gap: ${tokens.spacing.medium};
`;

const sizes = [
  'xxxlarge',
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
          </div>
        );
      })}
    </div>
  );
}

export default Story;
