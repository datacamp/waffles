import React from 'react';

import type { PolymorphicRef, PolymorphicComponentProps } from '../helpers';
import { Button } from '../button';

type ButtonBaseProps = {
  /* An icon displayed to the left. Could be any [icon](/components/icon) from Waffles (use default `medium` size) or a custom component. */
  iconLeft?: React.ReactNode;
  /* An icon displayed to the right. Could be any [icon](/components/icon) from Waffles (use default `medium` size) or a custom component. */
  iconRight?: React.ReactNode;
  /* [skip docs] */
  inverted?: boolean;
  /* The content inside the button. Most of the time should be a plain text. */
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
