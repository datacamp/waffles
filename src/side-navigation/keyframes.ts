import { keyframes } from '@emotion/react';

type SidebarKeyframesOptions = {
  offset: number;
};

export function sidebarEnter({ offset }: SidebarKeyframesOptions) {
  return keyframes`
    from {
      transform: translateX(${-offset}px);
    }
    to {
      transform: translateX(0);
    }
  `;
}

export function sidebarExit({ offset }: SidebarKeyframesOptions) {
  return keyframes`
    from {
      transform: translateX(0);
    }
    to {
      transform: translateX(${-offset}px);
    }
  `;
}

export function closeButtonEnter() {
  return keyframes`
    from {
      transform: translateX(-100px);
      opacity: 0;
    }
    to {
      transform: translateX(0);
      opacity: 1;
    }`;
}

export function closeButtonExit() {
  return keyframes`
    from {
      transform: translateX(0);
      opacity: 1;
    }
    to {
      transform: translateX(-100px);
      opacity: 0;
    }
  `;
}
