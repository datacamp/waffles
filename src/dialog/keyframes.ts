import { keyframes } from '@emotion/react';

export function panelEnter() {
  return keyframes`
    from {
      opacity: 0;
      transform: translateY(12px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  `;
}

export function panelExit() {
  return keyframes`
  from {
    opacity: 1;
    transform: translateY(0);
  }
  to {
    opacity: 0;
    transform: translateY(0);
  }
  `;
}
