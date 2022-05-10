import React, { forwardRef } from 'react';

import ActionButtonInternal from './action-button-internal';

import type { ActionButtonProps } from './action-button-internal';

type ButtonComponent = <T extends React.ElementType = 'button'>(
  props: ActionButtonProps<T>,
) => JSX.Element | null;

const ActionButton: ButtonComponent = forwardRef(ActionButtonInternal);

export default ActionButton;
