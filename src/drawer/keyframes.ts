import { keyframes } from '@emotion/react';

type PanelKeyframesOptions = {
  offset: number;
  slideFrom: 'left' | 'right';
};

export function panelEnter({ offset, slideFrom }: PanelKeyframesOptions) {
  const horizontalDirection = slideFrom === 'left' ? -1 : 1;

  return keyframes`
    from {
      transform: translateX(${horizontalDirection * offset}px);
    }
    to {
      transform: translateX(0);
    }
  `;
}

export function panelExit({ offset, slideFrom }: PanelKeyframesOptions) {
  const horizontalDirection = slideFrom === 'left' ? -1 : 1;

  return keyframes`
    from {
      transform: translateX(0);
    }
    to {
      transform: translateX(${horizontalDirection * offset}px);
    }
  `;
}
