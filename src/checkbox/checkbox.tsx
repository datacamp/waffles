import React from 'react';
import { useFocusRing } from '@react-aria/focus';
import { mergeProps } from '@react-aria/utils';

import { Text } from '../text';
import { labelStyle, inputStyle, contentStyle } from './styles';
import Checkmark from './checkmark';

type CheckboxProps = {
  children: React.ReactNode;
} & Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'>;

function Checkbox({
  checked = false,
  disabled = false,
  children,
  ...restProps
}: CheckboxProps) {
  const { isFocusVisible, focusProps } = useFocusRing();

  return (
    <label css={labelStyle({ disabled })}>
      <input
        {...mergeProps(focusProps, restProps)}
        type="checkbox"
        disabled={disabled}
        checked={checked}
        css={inputStyle()}
      />
      <Checkmark checked={checked} isFocusVisible={isFocusVisible} />
      <Text as="div" css={contentStyle()}>
        {children}
      </Text>
    </label>
  );
}

export default Checkbox;
