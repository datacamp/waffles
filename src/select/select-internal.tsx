import React, { useState } from 'react';

import { ChevronDown } from '../icon';
import { FormControl } from '../form-control';
import { selectWrapperStyle, selectStyle, iconRightStyle } from './styles';

type SelectProps = {
  /* The label displayed above the select. */
  label: string;
  /* Options to be displayed in the dropdown. To show a placeholder provide an `option` with an empty value, and both `disabled` and `hidden` attributes set. */
  children?: React.ReactNode;
  /* Optional description shown above the select. */
  description?: React.ReactNode;
  /* Error message displayed below the select. Also sets appropriate error styling of the text area itself, and `aria-invalid` attribute. */
  error?: string;
  /* Shows required indicator above the select. */
  required?: boolean;
  /* Defines the size of the select. In most cases default `medium` size should be used. */
  size?: 'small' | 'medium' | 'large';
  /* Sets the style of the select suitable for dark backgrounds. */
  inverted?: boolean;
} & Omit<React.SelectHTMLAttributes<HTMLSelectElement>, 'size' | 'multiple'>;

function SelectInternal(
  {
    id,
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
    <FormControl {...{ id, label, description, error, required, inverted }}>
      {(formControlProps) => {
        return (
          <div css={selectWrapperStyle({ size, disabled, isFocused })}>
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
