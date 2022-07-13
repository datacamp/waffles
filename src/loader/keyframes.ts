import { keyframes } from '@emotion/react';

export const stroke = keyframes`
   100% {
    stroke-dashoffset: 0;
  }
`;

export const loaderStartMask = keyframes`
  0%, 6% {
    clip-path: polygon(0% -12%, 0% -12%, 169% 65.5%, 169% 65.5%);
  }
  100% {
    clip-path: polygon(0% -12%, 0% 308%, 169% 383%, 169% 65.5%);
  }
`;

export const loaderEndMask = keyframes`
  0%, 71% {
    clip-path: polygon(0% 0%, 0% 78.5%, 100% 34.5%, 100% -30%);
  }
  96%, 100% {
    clip-path: polygon(0% 0%, 0% 140%, 100% 96%, 100% -30%);
  }
`;
