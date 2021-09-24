import React from 'react';
import { css } from '@emotion/react';

import { tokens } from '@datacamp/waffles/tokens';
import { Chapeau } from '@datacamp/waffles/chapeau';

const labelStyle = css`
  color: ${tokens.colors.white};
  padding-left: ${tokens.spacing.medium};
  padding-right: ${tokens.spacing.medium};
  padding-bottom: ${tokens.spacing.small};
  padding-top: ${tokens.spacing.large};
  user-select: none;
`;

const listStyle = css`
  margin: 0;
  padding: 0;
  list-style: none;
`;

type NavigationCategoryProps = {
  label: string;
  children: React.ReactNode;
};

function NavigationCategory({ label, children }: NavigationCategoryProps) {
  return (
    <li>
      <Chapeau css={labelStyle}>{label}</Chapeau>
      <ul css={listStyle}>{children}</ul>
    </li>
  );
}

export default NavigationCategory;
