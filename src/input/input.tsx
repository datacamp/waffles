import React from 'react';

import { Text } from '../text';
import {
  labelStyle,
  textLabelStyle,
  textDescriptionStyle,
  wrapperStyle,
  inputStyle,
  errorStyle,
} from './styles';

type InputProps = {
  label: string;
  description?: string;
  error?: string;
} & React.InputHTMLAttributes<HTMLInputElement>;

function Input({ label, description, error, ...restProps }: InputProps) {
  return (
    <label css={labelStyle()}>
      <Text css={textLabelStyle()}>{label}</Text>
      {description && <Text css={textDescriptionStyle()}>{description}</Text>}
      <div css={wrapperStyle()}>
        <input {...restProps} css={inputStyle({ hasError: !!error })} />
        {error && <Text css={errorStyle()}>{error}</Text>}
      </div>
    </label>
  );
}

export default Input;
