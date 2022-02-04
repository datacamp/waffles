import { keyframes } from '@emotion/react';

export function panelSlideIn(offset: string) {
  return keyframes`
  from {
    transform: translateX(-${offset});
  }
  to {
    transform: translateX(0);
  }
`;
}

export function panelSlideOut(offset: string) {
  return keyframes`
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-${offset});
  }
`;
}
