import React, { useRef } from 'react';

import useScrollPosition from './use-scroll-position';
import { bodyStyle } from './styles';

type BodyProps = {
  /* Dialog main content or description. When it is getting long, subtle scroll indicators appear at the top and bottom. */
  children: React.ReactNode;
} & React.HTMLAttributes<HTMLDivElement>;

function Body({ children, ...restProps }: BodyProps) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const { isAtTop, isAtBottom } = useScrollPosition(wrapperRef);

  return (
    <div
      {...restProps}
      ref={wrapperRef}
      css={bodyStyle({
        showShadowTop: !isAtTop,
        showShadowBottom: !isAtBottom,
      })}
    >
      {children}
    </div>
  );
}

export default Body;
