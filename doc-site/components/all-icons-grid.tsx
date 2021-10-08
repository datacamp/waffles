import React from 'react';
import { css } from '@emotion/react';

import { tokens } from '@datacamp/waffles/tokens';
import * as allIcons from '@datacamp/waffles/icon';
import { Text } from '@datacamp/waffles/text';
import groupedIcons from '../helpers/grouped-icons';

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
  border-bottom-left-radius: ${tokens.borderRadius.medium};
  border-bottom-right-radius: ${tokens.borderRadius.medium};
`;

const iconWrapperStyle = css`
  display: flex;
  align-items: center;
  padding: ${tokens.spacing.small};
  width: 220px;
`;

const labelStyle = css`
  padding-left: ${tokens.spacing.small};
  color: inherit;
`;

type IconPreviewType = {
  name: string;
  icon: React.ReactNode;
  inverted?: boolean;
};

function IconPreview({ name, icon, inverted = false }: IconPreviewType) {
  return (
    <div
      css={css`
        ${iconWrapperStyle}
        color: ${inverted ? tokens.colors.white : tokens.colors.navy};
      `}
    >
      {icon}
      <Text css={labelStyle}>{name}</Text>
    </div>
  );
}

function AllIconsGrid() {
  const { regular, inverted } = groupedIcons(allIcons);

  return (
    <section css={wraperStyle}>
      <div css={regularIconsPreview}>
        {Object.entries(regular).map((iconData) => {
          const [name, Icon] = iconData;
          return <IconPreview key={name} name={name} icon={<Icon />} />;
        })}
      </div>
      <div css={invertedIconsPreview}>
        {Object.entries(inverted).map((iconData) => {
          const [name, Icon] = iconData;
          return (
            <IconPreview key={name} name={name} icon={<Icon />} inverted />
          );
        })}
      </div>
    </section>
  );
}

export default AllIconsGrid;
