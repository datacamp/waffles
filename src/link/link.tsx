import React, { forwardRef } from 'react';

import LinkInternal from './link-internal';
import type { LinkProps } from './link-internal';

type LinkComponent = <T extends React.ElementType = 'a'>(
  props: LinkProps<T>,
) => JSX.Element | null;

const Link: LinkComponent = forwardRef(LinkInternal);

export default Link;
