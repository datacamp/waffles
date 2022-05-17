import React from 'react';

type LogomarkInternalProps = {
  /* [skip docs] */
  children: React.ReactNode;
} & React.SVGAttributes<SVGElement>;

function LogomarkInternal({ children, ...restProps }: LogomarkInternalProps) {
  return (
    <svg aria-hidden="true" {...restProps}>
      {children}
    </svg>
  );
}

export default LogomarkInternal;
