import React from 'react';

import { inputWrapperStyle, inputStyle, requiredWrapperStyle } from './styles';
import Label from './label';
import Caption from './caption';
import Required from './required';
import Description from './description';
import Error from './error';
import IconLeft from './icon-left';
import EnhancerRight from './enhancer-right';

type InputProps = {
  label: string;
  description?: string;
  error?: string;
  size?: 'small' | 'medium' | 'large';
  inverted?: boolean;
  iconLeft?: React.ReactNode;
  enhancerRight?: React.ReactNode;
} & Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'>;

function Input({
  label,
  description,
  required,
  error,
  size = 'medium',
  inverted = false,
  iconLeft,
  enhancerRight,
  ...restProps
}: InputProps) {
  return (
    <Label>
      {required ? (
        <div css={requiredWrapperStyle()}>
          <Caption inverted={inverted}>{label}</Caption>
          <Required inverted={inverted} />
        </div>
      ) : (
        <Caption inverted={inverted}>{label}</Caption>
      )}
      {description && (
        <Description inverted={inverted}>{description}</Description>
      )}
      <div css={inputWrapperStyle()}>
        {iconLeft && (
          <IconLeft size={size} inverted={inverted}>
            {iconLeft}
          </IconLeft>
        )}
        <input
          required={required}
          {...restProps}
          css={inputStyle({
            hasError: !!error,
            size,
            inverted,
            hasIconLeft: !!iconLeft,
            hasEnhancerRight: !!enhancerRight,
          })}
        />
        {enhancerRight && (
          <EnhancerRight size={size} inverted={inverted}>
            {enhancerRight}
          </EnhancerRight>
        )}
        {error && <Error inverted={inverted}>{error}</Error>}
      </div>
    </Label>
  );
}

export default Input;
