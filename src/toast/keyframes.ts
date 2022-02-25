import { keyframes } from '@emotion/react';

export function toastEnter() {
  return keyframes`
    0% {
      opacity: 0;
      transform: scale3d(0.5, 0.5, 0.5);
    }
    50% {
      opacity: 1;
    }
    100% {
      opacity: 1;
      transform: scale3d(1, 1, 1);
    }
  `;
}

export function toastExit() {
  return keyframes`
    0% {
    opacity: 1;
    transform: scale3d(1, 1, 1);
    }
    50% {
      opacity: 0;
      transform: scale3d(0.5, 0.5, 0.5);
    }
    100% {
      opacity: 0;
      transform: scale3d(0.5, 0.5, 0.5);
    }
  `;
}
