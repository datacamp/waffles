import React from 'react';

import { Chapeau } from '../chapeau';
import { listStyle, categoryLabelStyle } from './styles';

type CategoryProps = {
  label: string;
  children: React.ReactNode;
};

function Category({ label, children }: CategoryProps) {
  return (
    <li>
      <Chapeau css={categoryLabelStyle()}>{label}</Chapeau>
      <ul css={listStyle()}>{children}</ul>
    </li>
  );
}

export default Category;
