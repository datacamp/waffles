import React from 'react';

import { Button as ButtonBase } from '../button';
import { buttonStyle } from './styles';

type ButtonProps = {
  /* Focus this particular button when dialog is opened. */
  autoFocus?: boolean;
} & React.ComponentProps<typeof ButtonBase>;

// Override autoFocus behavior to play nicely with react-focus-on
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

export default ButtonInternal;
