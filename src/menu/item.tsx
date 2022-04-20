import React, { forwardRef } from 'react';
import { useFocusRing } from '@react-aria/focus';
import { mergeProps } from '@react-aria/utils';

import { Text } from '../text';
import { itemStyle } from './styles';

type ItemProps = {
  children: React.ReactNode;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

function ItemInternal(
  { children, ...restProps }: ItemProps,
  ref: React.Ref<HTMLButtonElement>,
) {
  const { focusProps, isFocusVisible } = useFocusRing();
  return (
    <li>
      <button
        {...mergeProps(focusProps, restProps)}
        ref={ref}
        role="menuitem"
        css={itemStyle({ isFocusVisible })}
      >
        <Text>{children}</Text>
      </button>
    </li>
  );
}

const Item = forwardRef(ItemInternal);

export default Item;
