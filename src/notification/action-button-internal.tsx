import React from 'react';

import type { PolymorphicRef, PolymorphicComponentProps } from '../helpers';
import { Button } from '../button';

type ButtonBaseProps = {
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
  inverted?: boolean;
  children: React.ReactNode;
};

export type ActionButtonProps<T extends React.ElementType = 'button'> =
  PolymorphicComponentProps<T, ButtonBaseProps>;

function ActionButtonInternal<T extends React.ElementType = 'button'>(
  props: ActionButtonProps<T>,
  ref?: PolymorphicRef<T>,
) {
  return <Button size="small" variant="plain" ref={ref} {...props} />;
}

export default ActionButtonInternal;
