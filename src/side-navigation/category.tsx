import React from 'react';

import { Chapeau } from '../chapeau';
import { categoryDividerStyle, categoryLabelStyle, listStyle } from './styles';

type CategoryProps = {
  label?: string;
  noDivider?: boolean;
  children: React.ReactNode;
} & React.HTMLAttributes<HTMLDivElement>;

function Category({
  label,
  children,
  noDivider = false,
  ...restProps
}: CategoryProps) {
  return (
    <div {...restProps}>
      {!noDivider && <div css={categoryDividerStyle()} />}
      {label && <Chapeau css={categoryLabelStyle()}>{label}</Chapeau>}
      <ul css={listStyle()}>{children}</ul>
    </div>
  );
}

export default Category;
