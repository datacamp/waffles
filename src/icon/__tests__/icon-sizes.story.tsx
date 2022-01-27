import { css } from '@emotion/react';

import { tokens } from '../../tokens';
import { Text } from '../../text';
import * as icons from '../index';

const wrapperStyle = css`
  width: 400px;
  padding: ${tokens.spacing.medium};
`;

const iconRowStyle = css`
  display: flex;
  align-items: center;
  color: ${tokens.colors.navy};
  gap: ${tokens.spacing.medium};
  height: ${tokens.sizing.medium};
`;

const labelStyle = css`
  width: 200px;
`;

const sizes = ['xlarge', 'large', 'medium', 'small', 'xsmall'] as const;

function Story() {
  return (
    <div css={wrapperStyle}>
      {Object.entries(icons).map((iconEntry) => {
        const [name, Icon] = iconEntry;

        return (
          <div data-testid="icon-row" css={iconRowStyle} key={name}>
            <Text css={labelStyle}>{name}</Text>
            {sizes.map((size) => {
              return <Icon key={`${name}-${size}`} size={size} />;
            })}
          </div>
        );
      })}
    </div>
  );
}

export default Story;
