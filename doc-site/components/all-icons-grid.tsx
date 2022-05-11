import React, { useState } from 'react';
import { css } from '@emotion/react';
import { tokens } from '@datacamp/waffles/tokens';
import { Text } from '@datacamp/waffles/text';
import * as allIcons from '@datacamp/waffles/icon';
import { Button } from '@datacamp/waffles/button';

import groupedIcons from '../helpers/grouped-icons';

import PreviewControls from './preview-controls';

const { Visible, Hidden } = allIcons;

const wraperStyle = css`
  display: flex;
  flex-direction: column;
`;

const regularIconsPreview = css`
  display: flex;
  flex-wrap: wrap;
  padding: ${tokens.spacing.small};
  background-color: ${tokens.colors.white};
  border: ${tokens.borderWidth.thin} solid ${tokens.colors.beigeMedium};
  border-bottom: 0;
  border-top-left-radius: ${tokens.borderRadius.medium};
  border-top-right-radius: ${tokens.borderRadius.medium};
`;

const invertedIconsPreview = css`
  display: flex;
  flex-wrap: wrap;
  padding: ${tokens.spacing.small};
  background-color: ${tokens.colors.navy};
  border: ${tokens.borderWidth.thin} solid transparent;
  border-top: 0;
`;

const iconWrapperStyle = css`
  display: flex;
  align-items: center;
  padding: ${tokens.spacing.small};
`;

const labelStyle = css`
  padding-left: ${tokens.spacing.small};
  color: inherit;
`;

const buttonContentStyle = css`
  width: 88px;
  text-align: center;
`;

type IconPreviewType = {
  name: string;
  icon: React.ReactNode;
  isLabelVisible?: boolean;
  inverted?: boolean;
};

function IconPreview({
  name,
  icon,
  isLabelVisible = true,
  inverted = false,
}: IconPreviewType) {
  return (
    <div
      css={css`
        ${iconWrapperStyle}
        color: ${inverted ? tokens.colors.white : tokens.colors.navy};
        width: ${isLabelVisible ? '220px' : 'auto'};
      `}
    >
      {icon}
      {isLabelVisible && <Text css={labelStyle}>{name}</Text>}
    </div>
  );
}

function AllIconsGrid() {
  const { regular, inverted } = groupedIcons(allIcons);

  const [allLabelsVisible, setLabelsVisiblity] = useState(false);

  return (
    <section css={wraperStyle}>
      <div css={regularIconsPreview}>
        {Object.entries(regular).map((iconData) => {
          const [name, Icon] = iconData;
          return (
            <IconPreview
              key={name}
              name={name}
              icon={<Icon />}
              isLabelVisible={allLabelsVisible}
            />
          );
        })}
      </div>
      <div css={invertedIconsPreview}>
        {Object.entries(inverted).map((iconData) => {
          const [name, Icon] = iconData;
          return (
            <IconPreview
              key={name}
              name={name}
              icon={<Icon />}
              isLabelVisible={allLabelsVisible}
              inverted
            />
          );
        })}
      </div>
      <PreviewControls>
        <Button
          variant="plain"
          size="small"
          iconLeft={allLabelsVisible ? <Hidden /> : <Visible />}
          onClick={() => setLabelsVisiblity(!allLabelsVisible)}
        >
          <div css={buttonContentStyle}>
            {allLabelsVisible ? 'Hide' : 'Show'} Names
          </div>
        </Button>
      </PreviewControls>
    </section>
  );
}

export default AllIconsGrid;
