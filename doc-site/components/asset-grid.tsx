import React, { useRef } from 'react';
import useOnScreen from 'hooks/use-on-screen';
import useContentsTable from 'hooks/use-contents-table';
import { AssetModule } from 'helpers/group-assets';
import { css } from '@emotion/react';
import { tokens } from '@datacamp/waffles/tokens';
import { Text } from '@datacamp/waffles/text';
import { Download } from '@datacamp/waffles/icon';
import { mediaQuery } from '@datacamp/waffles/helpers';
import { Button } from '@datacamp/waffles/button';

import markdownElements from '../components/markdown-elements';

import PreviewControls from './preview-controls';

const Heading = markdownElements.h2;

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
  assets: AssetModule;
  maxColumns: number;
};
function AssetGrid({ assetType, assets, maxColumns }: AssetGridProps) {
  const hasDarkBackground = assetType === 'ALPA Loop';
  const sectionHeading = `${assetType} Assets`;
  const sectionRef = useRef<HTMLElement>(null);
  const isVisible = useOnScreen(sectionRef);

  useContentsTable(isVisible, sectionHeading);

  return (
    <section ref={sectionRef}>
      <Heading>{sectionHeading}</Heading>
      <div css={assetPreviewStyle(maxColumns, hasDarkBackground)}>
        {Object.entries(assets).map((assetData) => {
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
            assetType.toLowerCase().split(' ')[0]
          }-asset-bundle.zip`}
          download
          iconLeft={<Download />}
        >
          Download {sectionHeading}
        </Button>
      </PreviewControls>
    </section>
  );
}

export default AssetGrid;
