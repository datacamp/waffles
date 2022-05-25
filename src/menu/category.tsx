import React from 'react';

import { useId } from '../hooks';
import { Text } from '../text';
import { useMenu } from './menu-context';
import { categoryDividerStyle, categoryLabelStyle } from './styles';

type CategoryProps = {
  /* Category section caption. */
  label?: React.ReactNode;
  /* Determines if a subtle horizontal divider is shown above the category label. */
  noDivider?: boolean;
  /* A list of `Menu` subcomponents, such as `Menu.Item` or `Menu.Button`. */
  children: React.ReactNode;
} & React.HTMLAttributes<HTMLDivElement>;

function Category({
  label,
  children,
  noDivider = false,
  ...restProps
}: CategoryProps) {
  const categoryId = useId('menu-category');
  const { inverted } = useMenu();

  return (
    <div
      {...restProps}
      role="group"
      {...(label && { 'aria-labelledby': categoryId })}
    >
      {!noDivider && <div css={categoryDividerStyle({ inverted })} />}
      {label && (
        <Text as="p" id={categoryId} css={categoryLabelStyle({ inverted })}>
          {label}
        </Text>
      )}
      {children}
    </div>
  );
}

export default Category;
