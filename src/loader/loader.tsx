import React from 'react';

import { tokens } from '../tokens';

import { loaderSvgStyle, loaderSvgWrapperStyle, wrapperStyle } from './styles';

type LoaderProps = {
  /* Whether the loader is inverted in color or not. */
  inverted?: boolean;
} & React.SVGAttributes<SVGElement>;

function Loader({ inverted = false, ...restProps }: LoaderProps) {
  const { height, width } = restProps;

  return (
    <div
      css={wrapperStyle({ height: height as string, width: width as string })}
      data-testid="loader-wrapper"
    >
      <div css={loaderSvgWrapperStyle}>
        <svg viewBox="0 0 2640 3444" css={loaderSvgStyle} {...restProps}>
          <path
            d="M0 0 M2569 1056L143 2447V149l1175 673v1867l1248 715"
            fill="none"
            stroke={inverted ? tokens.colors.white : tokens.colors.navyDark}
            strokeLinejoin="round"
            strokeWidth="300"
          ></path>
        </svg>
      </div>
    </div>
  );
}

export default Loader;
