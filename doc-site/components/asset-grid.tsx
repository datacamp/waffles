import React from 'react';
import getAssetGroup from 'helpers/asset-group';
import { css } from '@emotion/react';
import { tokens } from '@datacamp/waffles/tokens';
import { Text } from '@datacamp/waffles/text';
import { Download } from '@datacamp/waffles/icon';
import { mediaQuery } from '@datacamp/waffles/helpers';
import { Button } from '@datacamp/waffles/button';

import PreviewControls from './preview-controls';

function assetPreviewStyle(maxColumnCount: number, hasDarkBackground: boolean) {
  return css`
    display: grid;
    grid-template-columns: repeat(${maxColumnCount - 2}, 1fr);
    gap: ${tokens.spacing.large};
    align-items: center;
    padding: ${tokens.spacing.medium};
    background-color: ${hasDarkBackground
      ? tokens.colors.navy
      : tokens.colors.white};
    border: ${tokens.borderWidth.thin} solid ${tokens.colors.beigeMedium};
    border-top-right-radius: ${tokens.borderRadius.medium};
    border-top-left-radius: ${tokens.borderRadius.medium};

    ${mediaQuery.aboveMedium} {
      grid-template-columns: repeat(${maxColumnCount - 1}, 1fr);
    }

    ${mediaQuery.aboveLarge} {
      grid-template-columns: repeat(${maxColumnCount}, 1fr);
    }
  `;
}

function assetWrapperStyle(hasDarkBackground: boolean) {
  return css`
    color: ${hasDarkBackground ? tokens.colors.white : tokens.colors.navy};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  `;
}

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

type AssetPreviewProps = {
  name: string;
  hasDarkBackground: boolean;
  asset: React.ReactNode;
};

function AssetPreview({ name, hasDarkBackground, asset }: AssetPreviewProps) {
  return (
    <div css={assetWrapperStyle(hasDarkBackground)}>
      {asset}
      <Text css={labelStyle}>{name}</Text>
    </div>
  );
}

type AssetGridProps = {
  assetType: string;
  maxColumns?: number;
  hasDarkBackground?: boolean;
};

function AssetGrid({
  assetType,
  maxColumns = 4,
  hasDarkBackground = false,
}: AssetGridProps) {
  return (
    <>
      <div css={assetPreviewStyle(maxColumns, hasDarkBackground)}>
        {Object.entries(getAssetGroup(assetType)).map((assetData) => {
          const [name, Asset] = assetData;

          return (
            <AssetPreview
              key={name}
              name={name}
              hasDarkBackground={hasDarkBackground}
              asset={<Asset height={assetType === 'Logo' ? 30 : undefined} />}
            />
          );
        })}
      </div>
      <PreviewControls>
        <Button
          as="a"
          size="small"
          variant="plain"
          href={`../../downloads/waffles-${
            assetType ? assetType.toLowerCase().split(' ')[0] : 'other'
          }-asset-bundle.zip`}
          download
          iconLeft={<Download />}
        >
          Download {assetType} Assets
        </Button>
      </PreviewControls>
    </>
  );
}

export default AssetGrid;
