import React, { forwardRef } from 'react';

import ItemInternal from './item-internal';
import type { ItemProps } from './item-internal';

type ItemComponent = <T extends React.ElementType = 'a'>(
  props: ItemProps<T>,
) => JSX.Element | null;

const Item: ItemComponent = forwardRef(ItemInternal);

export default Item;
