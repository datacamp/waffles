import React from 'react';
import { useFocusRing } from '@react-aria/focus';
import { mergeProps } from '@react-aria/utils';

import { Text } from '../text';
import { labelStyle, inputStyle, contentStyle } from './styles';
import Toggle from './toggle';

type SwitchProps = {
  children: React.ReactNode;
  inverted?: boolean;
  error?: boolean;
} & Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'>;

function Switch({
  inverted = false,
  checked = false,
  disabled = false,
  error = false,
  children,
  ...restProps
}: SwitchProps) {
  const { isFocusVisible, focusProps } = useFocusRing();

  return (
    <label css={labelStyle({ disabled })}>
      <Text as="div" css={contentStyle({ inverted })}>
        {children}
      </Text>
      <input
        {...mergeProps(focusProps, restProps)}
        type="checkbox"
        role="switch"
        disabled={disabled}
        checked={checked}
        aria-checked={checked}
        css={inputStyle()}
        aria-invalid={error}
      />
      <Toggle {...{ inverted, checked, error, isFocusVisible }} />
    </label>
  );
}

export default Switch;
