import { keyframes } from '@emotion/react';

type SidebarSlideInOutOptions = {
  isVisible: boolean;
  offset: number;
};

export function sidebarSlideInOut({
  isVisible,
  offset,
}: SidebarSlideInOutOptions) {
  const initialTransform = `translateX(${-offset}px)`;
  const finalTransform = 'translateX(0)';

  return keyframes`
    from {
      transform: ${isVisible ? initialTransform : finalTransform};
    }
    to {
      transform: ${isVisible ? finalTransform : initialTransform};
    }
  `;
}

type ButtonSlideInOutOptions = {
  isVisible: boolean;
};

export function bttonSlideInOut({ isVisible }: ButtonSlideInOutOptions) {
  const initialTransform = `translateX(-100px)`;
  const finalTransform = 'translateX(0)';

  return keyframes`
    from {
      transform: ${isVisible ? initialTransform : finalTransform};
      opacity: ${isVisible ? 0 : 1};
    }
    to {
      transform: ${isVisible ? finalTransform : initialTransform};
      opacity: ${isVisible ? 1 : 0};
    }
  `;
}
