import React, { useState } from 'react';

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

function InputInternal(
  {
    label,
    description,
    required,
    error,
    size = 'medium',
    inverted = false,
    iconLeft,
    enhancerRight,
    onFocus,
    onBlur,
    ...restProps
  }: InputProps,
  ref?: React.Ref<HTMLInputElement>,
) {
  const [isFocused, setIsFocused] = useState(false);

  function handleFocus(event: React.FocusEvent<HTMLInputElement>) {
    if (onFocus) {
      onFocus(event);
    }
    setIsFocused(true);
  }

  function handleBlur(event: React.FocusEvent<HTMLInputElement>) {
    if (onBlur) {
      onBlur(event);
    }
    setIsFocused(false);
  }

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
      <div css={inputWrapperStyle({ isFocused })}>
        {iconLeft && (
          <IconLeft size={size} inverted={inverted}>
            {iconLeft}
          </IconLeft>
        )}
        <input
          {...restProps}
          ref={ref}
          required={required}
          onFocus={handleFocus}
          onBlur={handleBlur}
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

export default InputInternal;
