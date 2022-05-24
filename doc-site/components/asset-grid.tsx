import React from 'react';
import { AssetModule } from 'helpers/group-assets';
import { css } from '@emotion/react';
import { tokens } from '@datacamp/waffles/tokens';
import { Text } from '@datacamp/waffles/text';
import { Link } from '@datacamp/waffles/link';
import { Heading } from '@datacamp/waffles/heading';

import Bookmark from './bookmark';

const gridHeadingStyle = css`
  padding-top: ${tokens.spacing.medium};
`;

const downloadLinkStyle = css`
  margin-top: ${tokens.spacing.medium};
`;

const assetPreview = (columnCount: number) => {
  return css`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(${columnCount}px, 1fr));
    gap: ${tokens.spacing.large};
    align-items: center;
    padding: ${tokens.spacing.medium};
    background-color: ${tokens.colors.white};
    border: ${tokens.borderWidth.thin} solid ${tokens.colors.beigeMedium};
    border-radius: ${tokens.borderRadius.medium};
  `;
};

const assetWrapperStyle = css`
  color: ${tokens.colors.navy};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const labelStyle = css`
  display: block;
  flex: 1;
  color: inherit;
  padding-bottom: ${tokens.spacing.xsmall};
  padding-top: ${tokens.spacing.small};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  max-width: 100%;
`;

type AssetPreviewType = {
  name: string;
  asset: React.ReactNode;
};

function AssetPreview({ name, asset }: AssetPreviewType) {
  return (
    <div css={assetWrapperStyle}>
      {asset}
      <Text css={labelStyle}>{name}</Text>
    </div>
  );
}

type AssetGridProps = {
  assetType: string;
  assets: AssetModule;
  maxColumns: number;
};

function AssetGrid({ assetType, assets, maxColumns }: AssetGridProps) {
  // Calculate the responsive max column width, given a maxColumns number
  const maxColumnWidth = (720 - 32 - 24 * (maxColumns - 1) - 2) / maxColumns;
  return (
    <>
      <Heading id={`${assetType}-assets`} css={gridHeadingStyle} as={'h2'}>
        {assetType}
        <Bookmark targetId={`${assetType}-assets`} />
      </Heading>
      <section>
        <div css={assetPreview(maxColumnWidth)}>
          {Object.entries(assets).map((assetData) => {
            const [name, Asset] = assetData;

            return (
              <AssetPreview
                key={name}
                name={name}
                asset={<Asset height={assetType === 'Logo' ? 30 : ''} />}
              />
            );
          })}
        </div>
      </section>
      <Link
        href={`../../downloads/waffles-${
          assetType.toLowerCase().split(' ')[0]
        }-asset-bundle.zip`}
        download
        css={downloadLinkStyle}
      >
        Download {assetType} `SVG` Assets
      </Link>
    </>
  );
}

export default AssetGrid;
