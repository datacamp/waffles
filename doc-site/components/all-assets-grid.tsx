import React from 'react';
import { css } from '@emotion/react';
import { tokens } from '@datacamp/waffles/tokens';
import { Text } from '@datacamp/waffles/text';
import * as allAssets from '@datacamp/waffles/asset';

const wrapperStyle = css`
  display: flex;
  flex-direction: column;
`;

const assetPreview = css`
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

type AssetPreviewType = {
  name: string;
  asset: React.ReactNode;
  isLabelVisible?: boolean;
};

function AssetPreview({ name, asset }: AssetPreviewType) {
  return (
    <div css={assetWrapperStyle}>
      {asset}
      <Text css={labelStyle}>{name}</Text>
    </div>
  );
}

// TODO: Handle splitting assets up into their types (3D, assignment, misc etc)

function AllAssetsGrid() {
  return (
    <section css={wrapperStyle}>
      <div css={assetPreview}>
        {Object.entries(allAssets).map((assetData) => {
          const [name, Asset] = assetData;
          return (
            <AssetPreview
              key={name}
              name={name}
              asset={<Asset width={'160px'} />}
            />
          );
        })}
      </div>
    </section>
  );
}

export default AllAssetsGrid;
