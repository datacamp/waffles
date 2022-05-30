import { css } from '@emotion/react';

import { loaderEndMask, loaderStartMask, stroke } from './keyframes';

const animationSettings = '2s infinite alternate';

type WrapperStyleProps = {
  height: string;
  width: string;
};

export function wrapperStyle({ height, width }: WrapperStyleProps) {
  return css`
    display: block;
    height: ${height};
    width: ${width};
    animation: ${loaderStartMask} cubic-bezier(0.65, 0, 0.55, 1)
      ${animationSettings};
    will-change: clip-path;
  `;
}

export const loaderSvgWrapperStyle = css`
  animation: ${loaderEndMask} cubic-bezier(0, 0, 0.85, 1) ${animationSettings};
  will-change: clip-path;
`;

export const loaderSvgStyle = css`
  display: block;
  clip-path: polygon(-0.1% -10%, 169% 65%, -0.1% 139%);
  animation: ${stroke} cubic-bezier(0.65, 0, 0.55, 1) ${animationSettings};
  stroke-dasharray: 9800;
  stroke-dashoffset: 9800;
  will-change: stroke-dashoffset;
`;