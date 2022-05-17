import React from 'react';

type LogoInternalProps = {
  /* [skip docs] */
  children: React.ReactNode;
} & React.SVGAttributes<SVGElement>;

function LogoInternal({ children, ...restProps }: LogoInternalProps) {
  return (
    <svg aria-hidden="true" {...restProps}>
      {children}
    </svg>
  );
}

export default LogoInternal;
