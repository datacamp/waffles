import { css } from '@emotion/react';

import { tokens } from '../../tokens';
import * as icons from '../index';

const wrapperStyle = css`
  width: 400px;
`;

const iconRowStyle = css`
  display: flex;
  align-items: center;
  color: ${tokens.colors.navy};
  gap: ${tokens.spacing.medium};
`;

const labelStyle = css`
  width: 200px;
  font-family: ${tokens.fontFamilies.sansSerif};
  font-size: ${tokens.fontSizes.medium};
  line-height: ${tokens.lineHeights.relaxed};
`;

const sizes = ['medium', 'small', 'xsmall'] as const;

function Story() {
  return (
    <div css={wrapperStyle}>
      {Object.entries(icons).map((iconEntry) => {
        const [name, Icon] = iconEntry;

        return (
          <div data-testid="icon-row" css={iconRowStyle} key={name}>
            <span css={labelStyle}>{name}</span>
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
