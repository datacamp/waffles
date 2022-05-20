import React from 'react';
import { css } from '@emotion/react';
import { tokens } from '@datacamp/waffles/tokens';
import { Text } from '@datacamp/waffles/text';
import * as allBrandingAssets from '@datacamp/waffles/datacamp-branding';

const wrapperStyle = css`
  display: flex;
  flex-direction: column;
`;

const assetPreview = css`
  padding: ${tokens.spacing.medium};
  background-color: ${tokens.colors.white};
  border: ${tokens.borderWidth.thin} solid ${tokens.colors.beigeMedium};
  border-radius: ${tokens.borderRadius.medium};
`;

const assetWrapperStyle = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: ${tokens.spacing.xsmall};
  height: 150px;
`;

const labelStyle = css`
  display: block;
  flex: 1;
  color: inherit;
  padding-top: ${tokens.spacing.small};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

type BrandssetPreviewType = {
  name: string;
  asset: React.ReactNode;
};

function BrandAssetPreview({ name, asset }: BrandssetPreviewType) {
  return (
    <div css={assetWrapperStyle}>
      {asset}
      <Text css={labelStyle}>{name}</Text>
    </div>
  );
}

function AllBrandingGrid() {
  return (
    <section css={wrapperStyle}>
      <div css={assetPreview}>
        {Object.entries(allBrandingAssets).map(([name, BrandAsset]) => {
          return (
            <BrandAssetPreview
              key={name}
              name={name}
              asset={<BrandAsset height={'100px'} />}
            />
          );
        })}
      </div>
    </section>
  );
}

export default AllBrandingGrid;
