import React from 'react';

import { useId } from '../hooks';
import { Text } from '../text';
import { categoryDividerStyle, categoryLabelStyle } from './styles';

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
    <div
      {...restProps}
      role="group"
      {...(label && { 'aria-labelledby': categoryId })}
    >
      {!noDivider && <div css={categoryDividerStyle()} />}
      {label && (
        <Text as="p" id={categoryId} css={categoryLabelStyle()}>
          {label}
        </Text>
      )}
      {children}
    </div>
  );
}

export default Category;
