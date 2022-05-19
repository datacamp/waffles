import { css } from '@emotion/react';

import * as datacampBrandingAssets from '../index';
import { tokens } from '../../tokens';
import { Text } from '../../text';

const wrapperStyle = css`
  display: flex;
  flex-wrap: wrap;
  padding: ${tokens.spacing.small};
  background-color: ${tokens.colors.navy};
  border: ${tokens.borderWidth.thin} solid ${tokens.colors.beigeMedium};
  border-radius: ${tokens.borderRadius.medium};
`;

const datacampBrandingWrapperStyle = css`
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
      {Object.entries(datacampBrandingAssets).map((assetEntry) => {
        const [name, DataCampBrandingAsset] = assetEntry;
        return (
          <div
            key={name}
            css={datacampBrandingWrapperStyle}
            data-testid="datacamp-branding-row"
          >
            <DataCampBrandingAsset inverted />
            <Text css={labelStyle}>{name}</Text>
          </div>
        );
      })}
    </div>
  );
}

export default Story;
