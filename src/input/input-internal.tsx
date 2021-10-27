import React, { useState } from 'react';

import { useId } from '../hooks';
import { Search, Visible, Hidden } from '../icon';
import { inputWrapperStyle, inputStyle, requiredWrapperStyle } from './styles';
import Label from './label';
import Caption from './caption';
import Required from './required';
import Description from './description';
import Error from './error';
import IconLeft from './icon-left';
import EnhancerRight from './enhancer-right';
import Enhancer from './enhancer';

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
    type,
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
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const errorId = useId('input-error');

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

  function renderIconLeft() {
    if (type === 'search') {
      return (
        <IconLeft {...{ size, inverted }}>
          <Search />
        </IconLeft>
      );
    } else if (iconLeft) {
      return <IconLeft {...{ size, inverted }}>{iconLeft}</IconLeft>;
    }
    return null;
  }

  function renderEnhancerRight() {
    if (type === 'password') {
      return (
        <EnhancerRight {...{ size, inverted }}>
          <Enhancer
            aria-label={`${isPasswordVisible ? 'Show' : 'Hide'} password text`}
            onClick={() => setIsPasswordVisible(!isPasswordVisible)}
          >
            {isPasswordVisible ? <Hidden /> : <Visible />}
          </Enhancer>
        </EnhancerRight>
      );
    } else if (enhancerRight) {
      return (
        <EnhancerRight {...{ size, inverted }}>{enhancerRight}</EnhancerRight>
      );
    }
    return null;
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
        {renderIconLeft()}
        <input
          {...restProps}
          {...(error && {
            'aria-errormessage': errorId,
            'aria-describedby': errorId,
            'aria-invalid': true,
          })}
          {...(type === 'password' && {
            autoComplete: 'new-password',
            spellCheck: false,
          })}
          ref={ref}
          type={isPasswordVisible ? 'text' : type}
          required={required}
          aria-required={required}
          onFocus={handleFocus}
          onBlur={handleBlur}
          css={inputStyle({
            hasError: !!error,
            size,
            inverted,
            hasIconLeft: type === 'search' || !!iconLeft,
            hasEnhancerRight: type === 'password' || !!enhancerRight,
          })}
        />
        {renderEnhancerRight()}
        {error && (
          <Error id={errorId} inverted={inverted}>
            {error}
          </Error>
        )}
      </div>
    </Label>
  );
}

export default InputInternal;
