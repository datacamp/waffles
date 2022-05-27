import React from 'react';
import { css } from '@emotion/react';

import { tokens } from '../tokens';

import { loaderEndMask, loaderStartMask, stroke } from './keyframes';

const animationSettings = '2s infinite alternate';

function wrapperStyle(
  inverted: boolean,
  height: string | number | undefined,
  width: string | number | undefined,
) {
  return css`
    display: block;
    color: ${inverted ? tokens.colors.white : tokens.colors.navyDark};
    animation: ${loaderStartMask} cubic-bezier(0.65, 0, 0.55, 1)
      ${animationSettings};
    will-change: clip-path;
    height: ${height};
    width: ${width};
  `;
}

type LoaderProps = {
  inverted?: boolean;
} & React.SVGAttributes<SVGElement>;

const Loader = ({
  inverted = false,
  ...restProps
}: LoaderProps): React.ReactElement => {
  const { height, width } = restProps;
  return (
    <div css={wrapperStyle(inverted, height, width)}>
      <div
        css={css`
          animation: ${loaderEndMask} cubic-bezier(0, 0, 0.85, 1)
            ${animationSettings};
          will-change: clip-path;
        `}
      >
        <svg
          css={css`
            display: block;
            clip-path: polygon(-0.1% -10%, 169% 65%, -0.1% 139%);
          `}
          viewBox="0 0 2640 3444"
          {...restProps}
        >
          <title>Loading</title>
          <path
            css={css`
              animation: ${stroke} cubic-bezier(0.65, 0, 0.55, 1)
                ${animationSettings};
              stroke-dasharray: 9800;
              stroke-dashoffset: 9800;
              will-change: stroke-dashoffset;
            `}
            d="M0 0 M2569 1056L143 2447V149l1175 673v1867l1248 715"
            fill="none"
            stroke="currentColor"
            strokeLinejoin="round"
            strokeWidth="300"
          ></path>
        </svg>
      </div>
    </div>
  );
};

export default Loader;
