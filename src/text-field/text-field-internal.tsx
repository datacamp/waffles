import React from 'react';

import { useId } from '../hooks';
import { Input } from '../input';
import { wrapperStyle } from './styles';
import Label from './label';
import Description from './description';
import Required from './required';

type TextFieldProps = {
  label: string;
  description?: string;
  error?: string;
  size?: 'small' | 'medium' | 'large';
  inverted?: boolean;
  iconLeft?: React.ReactNode;
  enhancerRight?: React.ReactNode;
} & Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'>;

function TextFieldInternal(
  {
    label,
    description,
    required,
    inverted = false,
    ...restProps
  }: TextFieldProps,
  ref?: React.Ref<HTMLInputElement>,
) {
  const fieldId = useId('text-field');

  return (
    <div css={wrapperStyle()}>
      <Label htmlFor={fieldId} inverted={inverted}>
        {label}
        {required && <Required inverted={inverted} />}
      </Label>
      {description && (
        <Description inverted={inverted}>{description}</Description>
      )}
      <Input
        {...{ required, inverted }}
        {...restProps}
        ref={ref}
        id={fieldId}
      />
    </div>
  );
}

export default TextFieldInternal;
