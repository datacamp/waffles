import { keyframes } from '@emotion/react';

export function notificationExit() {
  return keyframes`
    from {
      opacity: 1;
    }
    to {
      opacity: 0;
    }
  `;
}
