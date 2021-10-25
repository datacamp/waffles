import React from 'react';

import { Text } from '../text';
import { labelStyle, wrapperStyle, inputStyle, errorStyle } from './styles';

type InputProps = {
  label: string;
  error?: string;
} & React.HTMLAttributes<HTMLInputElement>;

function Input({ label, error, ...restProps }: InputProps) {
  return (
    <Text as="label" css={labelStyle()}>
      {label}
      <div css={wrapperStyle()}>
        <input {...restProps} css={inputStyle({ hasError: !!error })} />
        {error && <Text css={errorStyle()}>{error}</Text>}
      </div>
    </Text>
  );
}

export default Input;
