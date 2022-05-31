import React, { useState, cloneElement } from 'react';

import { Search, Visible, Hidden } from '../icon';

import { inputWrapperStyle, inputStyle } from './styles';
import IconLeft from './icon-left';
import EnhancerRight from './enhancer-right';
import Enhancer from './enhancer';

type InputProps = {
  /* Defines the size of the input. In most cases default `medium` size should be used. */
  size?: 'small' | 'medium' | 'large';
  /* Sets the style of the input suitable for dark backgrounds. */
  inverted?: boolean;
  /* Sets appropriate error style and `aria-invalid` attribute. */
  error?: boolean;
  /* An icon displayed to the left. Could be any [icon](/components/icon) from Waffles (use default `medium` size) or a custom component. */
  iconLeft?: JSX.Element;
  /* An enhancer displayed to the right. Could be `Input.Enhancer` or any [icon](/components/icon) from Waffles (use default `medium` size). */
  enhancerRight?: JSX.Element;
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

  function renderIcon(
    originalIcon: JSX.Element,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    props?: Partial<any> & React.Attributes,
  ) {
    // Check if the icon has a provided custom size prop already
    return originalIcon.props.size
      ? cloneElement(originalIcon, {
          ...props,
        })
      : cloneElement(originalIcon, {
          // Handle large buttons having medium sized icons by default, and small / medium as defined
          size: size === 'large' ? 'medium' : size,
          ...props,
        });
  }

  function renderIconLeft() {
    if (type === 'search') {
      return (
        <IconLeft {...{ size, inverted }}>
          <Search
            data-testid="search-icon"
            size={size === 'large' ? 'medium' : size}
          />
        </IconLeft>
      );
    } else if (iconLeft) {
      return (
        <IconLeft {...{ size, inverted }}>{renderIcon(iconLeft)}</IconLeft>
      );
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
            size={size}
          >
            {isPasswordVisible ? <Hidden /> : <Visible />}
          </Enhancer>
        </EnhancerRight>
      );
    } else if (enhancerRight) {
      // Disable custom enhancer when whole input is disabled by passing disabled prop
      return (
        <EnhancerRight {...{ size, inverted }}>
          {renderIcon(enhancerRight, {
            disabled,
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
        aria-invalid={error}
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
