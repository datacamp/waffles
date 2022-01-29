import React, { useRef } from 'react';

import useScrollPosition from './use-scroll-position';
import { bodyStyle } from './styles';

type BodyProps = {
  children: React.ReactNode;
};

function Body({ children }: BodyProps) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const { isAtTop, isAtBottom } = useScrollPosition(wrapperRef);

  return (
    <div
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
