import React, { forwardRef } from 'react';

import TextInternal from './text-internal';
import type { TextProps } from './text-internal';

type LinkComponent = <T extends React.ElementType = 'a'>(
  props: TextProps<T>,
) => JSX.Element | null;

const Text: LinkComponent = forwardRef(TextInternal);

export default Text;
