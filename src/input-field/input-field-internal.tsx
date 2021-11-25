import React from 'react';

import { FormControl } from '../form-control';
import { Input } from '../input';

type InputFieldProps = {
  /* The label displayed above the input. */
  label: string;
  /* Optional description shown above the input. */
  description?: React.ReactNode;
  /* Error message displayed below the input. Also sets appropriate error styling of the input itself, and `aria-invalid` attribute.*/
  error?: string;
  /* Shows required indicator above the input. */
  required?: boolean;
  /* Defines the size of the input field. In most cases default `medium` size should be used. */
  size?: 'small' | 'medium' | 'large';
  /* Sets the style of the input field suitable for dark backgrounds. */
  inverted?: boolean;
  /* An icon displayed to the left. Could be any [icon](/components/icon) from Waffles (use default `medium` size) or a custom component. */
  iconLeft?: React.ReactNode;
  /* An enhancer displayed to the right. Could be `InputField.Enhancer` or any [icon](/components/icon) from Waffles (use default `medium` size). */
  enhancerRight?: React.ReactNode;
} & Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'>;

function InputFieldInternal(
  {
    id,
    label,
    description,
    error,
    required = false,
    inverted = false,
    ...restProps
  }: InputFieldProps,
  ref?: React.Ref<HTMLInputElement>,
) {
  return (
    <FormControl {...{ id, label, description, error, required, inverted }}>
      {(formControlProps) => {
        return (
          <Input
            {...{ required, inverted }}
            {...formControlProps}
            {...restProps}
            error={!!error}
            ref={ref}
          />
        );
      }}
    </FormControl>
  );
}

export default InputFieldInternal;
