import React, { useState } from 'react';

import { ChevronDown } from '../icon';
import { selectWrapperStyle, selectStyle, iconRightStyle } from './styles';

type SelectProps = {
  size?: 'small' | 'medium' | 'large';
  inverted?: boolean;
  error?: boolean;
} & Omit<React.SelectHTMLAttributes<HTMLSelectElement>, 'size' | 'multiple'>;

function SelectInternal(
  {
    size = 'medium',
    inverted = false,
    disabled = false,
    error = false,
    children,
    onFocus,
    onBlur,
    ...restProps
  }: SelectProps,
  ref?: React.Ref<HTMLSelectElement>,
) {
  const [isFocused, setIsFocused] = useState(false);

  function handleFocus(event: React.FocusEvent<HTMLSelectElement>) {
    if (onFocus) {
      onFocus(event);
    }
    setIsFocused(true);
  }

  function handleBlur(event: React.FocusEvent<HTMLSelectElement>) {
    if (onBlur) {
      onBlur(event);
    }
    setIsFocused(false);
  }

  return (
    <div css={selectWrapperStyle({ disabled, isFocused })}>
      <select
        {...restProps}
        ref={ref}
        disabled={disabled}
        onFocus={handleFocus}
        onBlur={handleBlur}
        css={selectStyle({
          hasError: error,
          size,
          inverted,
        })}
      >
        {children}
      </select>
      <div css={iconRightStyle({ size, inverted })}>
        <ChevronDown />
      </div>
    </div>
  );
}

export default SelectInternal;
