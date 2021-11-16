import React, { useState, Children, cloneElement, isValidElement } from 'react';

import { Search, Visible, Hidden } from '../icon';
import { inputWrapperStyle, inputStyle } from './styles';
import IconLeft from './icon-left';
import EnhancerRight from './enhancer-right';
import Enhancer from './enhancer';

type InputProps = {
  size?: 'small' | 'medium' | 'large';
  inverted?: boolean;
  error?: boolean;
  iconLeft?: React.ReactNode;
  enhancerRight?: React.ReactNode;
} & Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'>;

function InputInternal(
  {
    type,
    size = 'medium',
    inverted = false,
    disabled = false,
    error = false,
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
          <Search data-testid="search-icon" />
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
      // Disable custom enhancer when whole input is disabled by passing disabled prop
      return (
        <EnhancerRight {...{ size, inverted }}>
          {Children.map(enhancerRight, (child) => {
            if (isValidElement(child)) {
              return cloneElement(child, {
                disabled,
              });
            }

            return null;
          })}
        </EnhancerRight>
      );
    }
    return null;
  }

  return (
    <div css={inputWrapperStyle({ size, disabled, isFocused })}>
      {renderIconLeft()}
      <input
        {...restProps}
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
          hasError: error,
          size,
          inverted,
          hasIconLeft: type === 'search' || !!iconLeft,
          hasEnhancerRight: type === 'password' || !!enhancerRight,
        })}
      />
      {renderEnhancerRight()}
    </div>
  );
}

export default InputInternal;
