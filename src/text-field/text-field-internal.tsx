import React from 'react';

import { FormControl } from '../form-control';
import { Input } from '../input';

type TextFieldProps = {
  label: string;
  description?: string;
  error?: string;
  required?: boolean;
  size?: 'small' | 'medium' | 'large';
  inverted?: boolean;
  iconLeft?: React.ReactNode;
  enhancerRight?: React.ReactNode;
} & Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'>;

function TextFieldInternal(
  {
    id,
    label,
    description,
    error,
    required = false,
    inverted = false,
    ...restProps
  }: TextFieldProps,
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

export default TextFieldInternal;
