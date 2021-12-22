import React from 'react';

import { Chapeau } from '../chapeau';
import { categoryDividerStyle, categoryLabelStyle, listStyle } from './styles';

type CategoryProps = {
  label?: string;
  noDivider?: boolean;
  children: React.ReactNode;
};

function Category({ label, children, noDivider = false }: CategoryProps) {
  return (
    <li>
      {!noDivider && <div css={categoryDividerStyle()} />}
      {label && <Chapeau css={categoryLabelStyle()}>{label}</Chapeau>}
      <ul css={listStyle()}>{children}</ul>
    </li>
  );
}

export default Category;
