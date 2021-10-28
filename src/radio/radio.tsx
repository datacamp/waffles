import React from 'react';
import { useFocusRing } from '@react-aria/focus';
import { mergeProps } from '@react-aria/utils';

import { Text } from '../text';
import { labelStyle, inputStyle, contentStyle } from './styles';
import Radiomark from './radiomark';

type RadioProps = {
  children: React.ReactNode;
  inverted?: boolean;
  error?: boolean;
} & Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'>;

function Radio({
  inverted = false,
  checked = false,
  disabled = false,
  error = false,
  children,
  ...restProps
}: RadioProps) {
  const { isFocusVisible, focusProps } = useFocusRing();

  return (
    <label css={labelStyle({ disabled })}>
      <input
        {...mergeProps(focusProps, restProps)}
        type="radio"
        disabled={disabled}
        checked={checked}
        css={inputStyle()}
        aria-invalid={error}
      />
      <Radiomark {...{ inverted, checked, error, isFocusVisible }} />
      <Text as="div" css={contentStyle({ inverted })}>
        {children}
      </Text>
    </label>
  );
}

export default Radio;
