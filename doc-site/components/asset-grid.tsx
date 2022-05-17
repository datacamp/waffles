import React from 'react';
import { css } from '@emotion/react';
import { tokens } from '@datacamp/waffles/tokens';
import { Text } from '@datacamp/waffles/text';
import { Heading } from '@datacamp/waffles/heading';

import Bookmark from './bookmark';

const gridHeadingStyle = css`
  &:not(:first-of-type) {
    ${tokens.spacing.medium};
  }
`;

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

type AssetModule = Record<
  string,
  (props: Record<string, unknown>) => JSX.Element
>;

type AssetGridProps = {
  assetType: string;
  assets: AssetModule;
};

function AssetGrid({ assetType, assets }: AssetGridProps) {
  return (
    <>
      <Heading id={`${assetType}-assets`} css={gridHeadingStyle} as={'h2'}>
        {assetType}
        <Bookmark targetId={`${assetType}-assets`} />
      </Heading>
      <section css={wrapperStyle}>
        <div css={assetPreview}>
          {Object.entries(assets).map((assetData) => {
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
    </>
  );
}

export default AssetGrid;
