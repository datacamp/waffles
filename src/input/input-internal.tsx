import React, { useState } from 'react';

import { useId } from '../hooks';
import { Search, Visible, Hidden } from '../icon';
import { inputWrapperStyle, inputStyle } from './styles';
import Error from './error';
import IconLeft from './icon-left';
import EnhancerRight from './enhancer-right';
import Enhancer from './enhancer';

type InputProps = {
  size?: 'small' | 'medium' | 'large';
  inverted?: boolean;
  iconLeft?: React.ReactNode;
  enhancerRight?: React.ReactNode;
  error?: string;
} & Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'>;

function InputInternal(
  {
    type,
    size = 'medium',
    inverted = false,
    disabled = false,
    iconLeft,
    enhancerRight,
    error,
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
            aria-label={`${isPasswordVisible ? 'Hide' : 'Show'} password text`}
            onClick={() => setIsPasswordVisible(!isPasswordVisible)}
            disabled={disabled}
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
    <div css={inputWrapperStyle({ disabled, isFocused })}>
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
        disabled={disabled}
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
  );
}

export default InputInternal;
