import React, { useState, useEffect } from 'react';

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
    onChange,
    ...restProps
  }: SelectProps,
  ref?: React.Ref<HTMLSelectElement>,
) {
  const [isFocused, setIsFocused] = useState(false);
  const [withPlaceholder, setWithPlaceholder] = useState(false);

  useEffect(() => {
    setWithPlaceholder(value === '' || value === 'placeholder');
  }, [value]);

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

  function handleChange(event: React.ChangeEvent<HTMLSelectElement>) {
    if (onChange) {
      onChange(event);
    }
    setWithPlaceholder(value === '' || value === 'placeholder');
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
              onChange={handleChange}
              css={selectStyle({
                hasError: !!error,
                withPlaceholder,
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
