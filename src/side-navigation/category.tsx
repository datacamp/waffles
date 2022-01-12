import React from 'react';

import { useId } from '../hooks';
import { categoryDividerStyle, categoryLabelStyle, listStyle } from './styles';

type CategoryProps = {
  label?: React.ReactNode;
  noDivider?: boolean;
  children: React.ReactNode;
} & React.HTMLAttributes<HTMLDivElement>;

function Category({
  label,
  children,
  noDivider = false,
  ...restProps
}: CategoryProps) {
  const categoryId = useId('menu-category');

  return (
    <div {...restProps}>
      {!noDivider && <div css={categoryDividerStyle()} />}
      {label && (
        <h2 id={categoryId} css={categoryLabelStyle()}>
          {label}
        </h2>
      )}
      <ul {...(label && { 'aria-labelledby': categoryId })} css={listStyle()}>
        {children}
      </ul>
    </div>
  );
}

export default Category;
