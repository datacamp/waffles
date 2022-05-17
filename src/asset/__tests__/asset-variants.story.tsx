import { css } from '@emotion/react';

import * as assets from '../index';
import { tokens } from '../../tokens';
import { Text } from '../../text';

const wrapperStyle = css`
  display: flex;
  flex-wrap: wrap;
  padding: ${tokens.spacing.small};
  background-color: ${tokens.colors.white};
  border: ${tokens.borderWidth.thin} solid ${tokens.colors.beigeMedium};
  border-radius: ${tokens.borderRadius.medium};
`;

const assetWrapperStyle = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: ${tokens.spacing.xsmall};
  width: 160px;
  height: 160px;
`;

const labelStyle = css`
  color: inherit;
  padding-top: ${tokens.spacing.small};
`;

function Story() {
  return (
    <div css={wrapperStyle}>
      {Object.entries(assets).map((assetEntry) => {
        const [name, Asset] = assetEntry;
        return (
          <div key={name} css={assetWrapperStyle} data-testid="asset-row">
            <Asset />
            <Text css={labelStyle}>{name}</Text>
          </div>
        );
      })}
    </div>
  );
}

export default Story;
