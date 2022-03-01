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

type ToastKeyframesOptions = {
  height: string;
};

export function toastExit({ height }: ToastKeyframesOptions) {
  return keyframes`
    0% {
      opacity: 1;
      transform: scale3d(1, 1, 1);
      height: ${height};
    }
    50% {
      opacity: 0;
      transform: scale3d(0.5, 0.5, 0.5);
      height: ${height};
    }
    100% {
      opacity: 0;
      transform: scale3d(0.5, 0.5, 0.5);
      height: 0;
    }
  `;
}
