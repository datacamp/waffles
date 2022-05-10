import React from 'react';
import { mergeProps } from '@react-aria/utils';
import { useFocusRing } from '@react-aria/focus';

import { labelStyle, inputStyle, contentStyle } from './styles';
import Checkmark from './checkmark';

import { Text } from '../text';

type CheckboxProps = {
  /* The description displayed next to the checkbox. */
  children: React.ReactNode;
  /* Sets the style of the checkbox suitable for dark backgrounds. */
  inverted?: boolean;
  /* Sets appropriate error styling, and `aria-invalid` attribute. */
  error?: boolean;
} & Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'>;

function CheckboxInternal(
  {
    inverted = false,
    checked = false,
    disabled = false,
    error = false,
    children,
    ...restProps
  }: CheckboxProps,
  ref?: React.Ref<HTMLInputElement>,
) {
  const { isFocusVisible, focusProps } = useFocusRing();

  return (
    <label css={labelStyle({ disabled })}>
      <input
        {...mergeProps(focusProps, restProps)}
        ref={ref}
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

export default CheckboxInternal;
