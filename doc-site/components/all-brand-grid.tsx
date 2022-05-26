import React from 'react';
import { css } from '@emotion/react';
import { tokens } from '@datacamp/waffles/tokens';
import { Text } from '@datacamp/waffles/text';
import { Link } from '@datacamp/waffles/link';
import * as allBrands from '@datacamp/waffles/brand';
import PreviewControls from './preview-controls';
import { Button } from '@datacamp/waffles/button';
import { Download } from '@datacamp/waffles/icon';

const wrapperStyle = css`
  display: flex;
  flex-direction: column;
`;

const downloadLinkStyle = css`
  margin-top: ${tokens.spacing.medium};
`;

const brandPreview = css`
  padding: ${tokens.spacing.medium};
  background-color: ${tokens.colors.white};
  border: ${tokens.borderWidth.thin} solid ${tokens.colors.beigeMedium};
  border-radius: ${tokens.borderRadius.medium};
`;

const brandWrapperStyle = css`
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

type BrandPreviewType = {
  name: string;
  asset: React.ReactNode;
};

function BrandAssetPreview({ name, asset }: BrandPreviewType) {
  return (
    <div css={brandWrapperStyle}>
      {asset}
      <Text css={labelStyle}>{name}</Text>
    </div>
  );
}

function AllBrandGrid() {
  return (
    <>
      <section css={wrapperStyle}>
        <div css={brandPreview}>
          {Object.entries(allBrands).map(([name, BrandAsset]) => {
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
      <PreviewControls>
        <Button
          as="a"
          size="small"
          variant="plain"
          href={`../../downloads/waffles-brand-bundle.zip`}
          download
          iconLeft={<Download />}
        >
          Download DataCamp Logos and Logomarks
        </Button>
      </PreviewControls>
    </>
  );
}

export default AllBrandGrid;
