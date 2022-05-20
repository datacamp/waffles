import { css } from '@emotion/react';

import * as brandingAssets from '../index';
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

const brandingAssetWrapperStyle = css`
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
      {Object.entries(brandingAssets).map((assetEntry) => {
        const [name, BrandingAsset] = assetEntry;
        return (
          <div
            key={name}
            css={brandingAssetWrapperStyle}
            data-testid="branding-asset-row"
          >
            <BrandingAsset inverted />
            <Text css={labelStyle}>{name}</Text>
          </div>
        );
      })}
    </div>
  );
}

export default Story;
