import React from 'react';

import { bodyStyle } from './styles';

type BodyProps = {
  /* Alert dialog description. */
  children: React.ReactNode;
} & React.HTMLAttributes<HTMLDivElement>;

function Body({ children, ...restProps }: BodyProps) {
  return (
    <div {...restProps} css={bodyStyle()}>
      {children}
    </div>
  );
}

export default Body;
