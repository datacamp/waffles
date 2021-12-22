import React, { forwardRef } from 'react';

import SubcategoryInternal from './subcategory-internal';
import type { SubcategoryProps } from './subcategory-internal';

type ItemComponent = <T extends React.ElementType = 'a'>(
  props: SubcategoryProps<T>,
) => JSX.Element | null;

const Item: ItemComponent = forwardRef(SubcategoryInternal);

export default Item;
