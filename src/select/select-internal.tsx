import React, { useState } from 'react';

import { ChevronDown } from '../icon';
import { FormControl } from '../form-control';
import { selectWrapperStyle, selectStyle, iconRightStyle } from './styles';

type SelectProps = {
  label: string;
  description?: string;
  error?: string;
  required?: boolean;
  size?: 'small' | 'medium' | 'large';
  inverted?: boolean;
} & Omit<React.SelectHTMLAttributes<HTMLSelectElement>, 'size' | 'multiple'>;

function SelectInternal(
  {
    label,
    description,
    error,
    required,
    size = 'medium',
    inverted = false,
    disabled = false,
    children,
    value,
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
    <FormControl {...{ label, description, error, required, inverted }}>
      {(formControlProps) => {
        return (
          <div css={selectWrapperStyle({ disabled, isFocused })}>
            <select
              {...formControlProps}
              {...restProps}
              {...{ value, required, disabled }}
              ref={ref}
              onFocus={handleFocus}
              onBlur={handleBlur}
              css={selectStyle({
                hasError: !!error,
                withPlaceholder: value === '' || value === 'placeholder',
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
      }}
    </FormControl>
  );
}

export default SelectInternal;
