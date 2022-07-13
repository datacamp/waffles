import { css } from '@emotion/react';

import { tokens } from '../tokens';

import Loader from './loader';
import { loaderEndMask, loaderStartMask, stroke } from './keyframes';

const animationSettings = '2s infinite alternate';

type WrapperStyleOptions = {
  height: string;
  width: string;
};

export function wrapperStyle({ height, width }: WrapperStyleOptions) {
  return css`
    height: ${height};
    width: ${width};
    animation: ${loaderStartMask} cubic-bezier(0.65, 0, 0.55, 1)
      ${animationSettings};
    will-change: clip-path;
  `;
}

export const loaderSvgWrapperStyle = css`
  clip-path: polygon(-0.1% -10%, 169% 65%, -0.1% 139%);
  animation: ${loaderEndMask} cubic-bezier(0, 0, 0.85, 1) ${animationSettings};
  will-change: clip-path;
`;

type LoaderSvgStyleOptions = {
  inverted: NonNullable<React.ComponentProps<typeof Loader>['inverted']>;
};

export function loaderSvgStyle({ inverted }: LoaderSvgStyleOptions) {
  return css`
    display: block;
    stroke: ${inverted ? tokens.colors.white : tokens.colors.navyDark};
  `;
}

export const loaderPathStyle = css`
  animation: ${stroke} cubic-bezier(0.65, 0, 0.55, 1) ${animationSettings};
  stroke-dasharray: 9800;
  stroke-dashoffset: 9800;
  will-change: stroke-dashoffset;
`;
