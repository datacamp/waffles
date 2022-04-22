import React from 'react';

import { useId } from '../hooks';

import { categoryDividerStyle, categoryLabelStyle, listStyle } from './styles';

type CategoryProps = {
  /* Category section caption. */
  label?: React.ReactNode;
  /* Determines if a subtle horizontal divider is shown above the category label. */
  noDivider?: boolean;
  /* A list of `SideNavigation.Item` or `SideNavigation.Subcategory` components. */
  children: React.ReactNode;
} & React.HTMLAttributes<HTMLDivElement>;

function Category({
  label,
  children,
  noDivider = false,
  ...restProps
}: CategoryProps) {
  const categoryId = useId('side-navigation-category');

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
