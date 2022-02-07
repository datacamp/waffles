import { keyframes } from '@emotion/react';

type PanelSlideInOutOptions = {
  isVisible: boolean;
  offset: number;
  slideFrom: 'left' | 'right';
};

export function panelSlideInOut({
  isVisible,
  offset,
  slideFrom,
}: PanelSlideInOutOptions) {
  const horizontalDirection = slideFrom === 'left' ? -1 : 1;
  const initialTransform = 'translateX(0)';
  const finalTransform = `translateX(${horizontalDirection * offset}px)`;

  return keyframes`
    from {
      transform: ${isVisible ? finalTransform : initialTransform};
    }
    to {
      transform: ${isVisible ? initialTransform : finalTransform};
    }
  `;
}
