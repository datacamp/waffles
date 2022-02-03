import { keyframes } from '@emotion/react';

export function panelSlideIn(panelWidth: string) {
  return keyframes`
  from {
    transform: translateX(-${panelWidth});
  }
  to {
    transform: translateX(0);
  }
`;
}

export function panelSlideOut(panelWidth: string) {
  return keyframes`
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-${panelWidth});
  }
`;
}
