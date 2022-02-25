import { keyframes } from '@emotion/react';

export function overlayEnter() {
  return keyframes`
  from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  `;
}

export function overlayExit() {
  return keyframes`
  from {
      opacity: 1;
    }
    to {
      opacity: 0;
    }
  `;
}
