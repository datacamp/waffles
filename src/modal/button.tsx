import React, { forwardRef } from 'react';

import { Button as ButtonBase } from '../button';
import { buttonStyle } from './styles';

type ButtonProps = { autoFocus?: boolean } & React.ComponentProps<
  typeof ButtonBase
>;

function ButtonInternal(
  { autoFocus = false, ...restProps }: ButtonProps,
  ref: React.Ref<HTMLElement>,
) {
  return (
    <ButtonBase
      {...restProps}
      data-autofocus={autoFocus ? true : null}
      ref={ref}
      css={buttonStyle()}
    />
  );
}

const Button = forwardRef(ButtonInternal);

export default Button;
