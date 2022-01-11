import { keyframes } from '@emotion/react';

export const sidebarSlideIn = keyframes`
  from {
    transform: translateX(-300px);
  }
  to {
    transform: translateX(0);
  }
`;

export const sidebarSlideOut = keyframes`
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-300px);
  }
`;

export const overlayFadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const overlayFadeOut = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
`;

export const buttonSlideIn = keyframes`
  from {
    transform: translateX(-100px);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
`;

export const buttonSlideOut = keyframes`
  from {
    transform: translateX(0);
    opacity: 1;
  }
  to {
    transform: translateX(-100px);
    opacity: 0;
  }
`;
