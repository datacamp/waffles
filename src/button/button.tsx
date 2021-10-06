import React, { forwardRef } from 'react';

import ButtonInternal from './button-internal';

type ButtonComponent = (
  props: React.ComponentProps<typeof ButtonInternal>,
) => JSX.Element | null;

const Button: ButtonComponent = forwardRef(ButtonInternal);

export default Button;
