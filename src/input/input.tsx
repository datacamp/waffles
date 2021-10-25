import React from 'react';

import { inputWrapperStyle, inputStyle, requiredWrapperStyle } from './styles';
import Label from './label';
import Caption from './caption';
import Required from './required';
import Description from './description';
import Error from './error';

type InputProps = {
  label: string;
  description?: string;
  error?: string;
} & React.InputHTMLAttributes<HTMLInputElement>;

function Input({
  label,
  description,
  required,
  error,
  ...restProps
}: InputProps) {
  return (
    <Label>
      {required ? (
        <div css={requiredWrapperStyle()}>
          <Caption>{label}</Caption>
          <Required />
        </div>
      ) : (
        <Caption>{label}</Caption>
      )}
      {description && <Description>{description}</Description>}
      <div css={inputWrapperStyle()}>
        <input
          required={required}
          {...restProps}
          css={inputStyle({ hasError: !!error })}
        />
        {error && <Error>{error}</Error>}
      </div>
    </Label>
  );
}

export default Input;
