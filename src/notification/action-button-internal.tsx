import React from 'react';

import { Button } from '../button';

import type { PolymorphicRef, PolymorphicComponentProps } from '../helpers';

type ActionButtonBaseProps = {
  /* An icon displayed to the left. Could be any [icon](/components/icon) from Waffles (use default `medium` size) or a custom component. */
  iconLeft?: JSX.Element;
  /* An icon displayed to the right. Could be any [icon](/components/icon) from Waffles (use default `medium` size) or a custom component. */
  iconRight?: JSX.Element;
  /* The content inside the button. Most of the time should be a plain text. */
  children: React.ReactNode;
  /* [skip docs] */
  inverted?: boolean;
  /* [skip docs] */
  isUpgrade?: boolean;
};

export type ActionButtonProps<T extends React.ElementType = 'button'> =
  PolymorphicComponentProps<T, ActionButtonBaseProps>;

function ActionButtonInternal<T extends React.ElementType = 'button'>(
  { isUpgrade, ...restProps }: ActionButtonProps<T>,
  ref?: PolymorphicRef<T>,
) {
  return (
    <Button
      {...restProps}
      ref={ref}
      size="small"
      variant={isUpgrade ? 'upgrade' : 'plain'}
    />
  );
}

export default ActionButtonInternal;
