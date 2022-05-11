import React from 'react';
import { mergeProps } from '@react-aria/utils';
import { useFocusRing } from '@react-aria/focus';

import { Text } from '../text';

import Toggle from './toggle';
import { labelStyle, inputStyle, contentStyle } from './styles';

type SwitchProps = {
  /* The description displayed next to the switch. */
  children: React.ReactNode;
  /* Sets the style of the switch suitable for dark backgrounds. */
  inverted?: boolean;
  /* Sets appropriate error styling, and `aria-invalid` attribute. */
  error?: boolean;
} & Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'>;

function SwitchInternal(
  {
    inverted = false,
    checked = false,
    disabled = false,
    error = false,
    children,
    ...restProps
  }: SwitchProps,
  ref?: React.Ref<HTMLInputElement>,
) {
  const { isFocusVisible, focusProps } = useFocusRing();

  return (
    <label css={labelStyle({ disabled })}>
      <Text as="div" css={contentStyle({ inverted })}>
        {children}
      </Text>
      <input
        {...mergeProps(focusProps, restProps)}
        ref={ref}
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

export default SwitchInternal;
