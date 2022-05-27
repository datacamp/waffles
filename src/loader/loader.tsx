import React from 'react';

import { tokens } from '../tokens';

import { svgStyle, svgWrapperStyle, wrapperStyle } from './styles';

type LoaderProps = {
  /* Whether the loader is inverted in color or not. */
  inverted?: boolean;
} & React.SVGAttributes<SVGElement>;

const Loader = ({
  inverted = false,
  ...restProps
}: LoaderProps): React.ReactElement => {
  const { height, width } = restProps;
  return (
    <div css={wrapperStyle(height as string, width as string)}>
      <div css={svgWrapperStyle}>
        <svg viewBox="0 0 2640 3444" css={svgStyle} {...restProps}>
          <title>Loading</title>
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
};

export default Loader;
