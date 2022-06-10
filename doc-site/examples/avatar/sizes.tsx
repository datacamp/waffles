import { css } from '@emotion/react';
import { tokens } from '@datacamp/waffles/tokens';
import { DataCampBrand } from '@datacamp/waffles/icon';
import { Heading } from '@datacamp/waffles/heading';
import { Avatar } from '@datacamp/waffles/avatar';
import { GitLogomark } from '@datacamp/waffles/asset';

const wrapperStyle = css`
  display: flex;
  gap: ${tokens.spacing.small};
  flex-wrap: wrap;
  margin-bottom: ${tokens.spacing.medium};
`;

function Example() {
  return (
    <>
      <Heading size="medium">Text Content</Heading>
      <div css={wrapperStyle}>
        <Avatar size="xxsmall" content="D" />
        <Avatar size="xsmall" content="D" />
        <Avatar size="small" content="D" />
        <Avatar size="medium" content="D" />
        <Avatar size="large" content="D" />
        <Avatar size="xlarge" content="D" />
        <Avatar size="xxlarge" content="D" />
        <Avatar size="huge" content="D" />
      </div>
      <Heading size="medium">Icon Content</Heading>
      <div css={wrapperStyle}>
        <Avatar size="xxsmall" content={<DataCampBrand />} />
        <Avatar size="xsmall" content={<DataCampBrand />} />
        <Avatar size="small" content={<DataCampBrand />} />
        <Avatar size="medium" content={<DataCampBrand />} />
        <Avatar size="large" content={<DataCampBrand />} />
        <Avatar size="xlarge" content={<DataCampBrand />} />
        <Avatar size="xxlarge" content={<DataCampBrand />} />
        <Avatar size="huge" content={<DataCampBrand />} />
      </div>
      <Heading size="medium">Asset Content</Heading>
      <div
        css={css`
          ${wrapperStyle}
          margin-bottom: 0;
        `}
      >
        <Avatar size="xxsmall" content={<GitLogomark />} />
        <Avatar size="xsmall" content={<GitLogomark />} />
        <Avatar size="small" content={<GitLogomark />} />
        <Avatar size="medium" content={<GitLogomark />} />
        <Avatar size="large" content={<GitLogomark />} />
        <Avatar size="xlarge" content={<GitLogomark />} />
        <Avatar size="xxlarge" content={<GitLogomark />} />
        <Avatar size="huge" content={<GitLogomark />} />
      </div>
    </>
  );
}

export default Example;
