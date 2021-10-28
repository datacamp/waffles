import React from 'react';
import { useFocusRing } from '@react-aria/focus';
import { mergeProps } from '@react-aria/utils';

import { Text } from '../text';
import { labelStyle, inputStyle, contentStyle } from './styles';
import Checkmark from './checkmark';

type CheckboxProps = {
  children: React.ReactNode;
  inverted?: boolean;
  error?: boolean;
} & Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'>;

function Checkbox({
  inverted = false,
  checked = false,
  disabled = false,
  error = false,
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
        aria-invalid={error}
      />
      <Checkmark {...{ inverted, checked, error, isFocusVisible }} />
      <Text as="div" css={contentStyle({ inverted })}>
        {children}
      </Text>
    </label>
  );
}

export default Checkbox;
