import { css } from '@emotion/react';

import { tokens } from '../tokens';
import { mediaQuery } from '../helpers';
import { panelSlideIn, panelSlideOut } from './keyframes';

// Sync animation of background drawer panel and content wrapper
// Makes both of them behave nicely on iOS

type PanelStyleOptions = {
  isVisible: boolean;
};

function basePanelStyle({ isVisible }: PanelStyleOptions) {
  return css`
    position: fixed;
    top: 0;
    left: 0;
    outline: 0;
    overflow: hidden;
    pointer-events: all;
    width: 300px;
    // Animation
    transform: translateX(-300px);
    animation: ${isVisible ? panelSlideIn('300px') : panelSlideOut('300px')}
      200ms cubic-bezier(0, 0, 0.6, 1) forwards;

    ${mediaQuery.aboveSmall} {
      width: 600px;
      // Animation
      transform: translateX(-600px);
      animation: ${isVisible ? panelSlideIn('600px') : panelSlideOut('600px')}
        200ms cubic-bezier(0, 0, 0.6, 1) forwards;
    }
  `;
}

export function panelStyle({ isVisible }: PanelStyleOptions) {
  return css`
    ${basePanelStyle({ isVisible })}
    height: 100vh;
    background-color: ${tokens.colors.white};
    box-shadow: ${tokens.boxShadow.thick};
    z-index: ${tokens.zIndex.modal};
  `;
}

export function panelContentStyle({ isVisible }: PanelStyleOptions) {
  return css`
    ${basePanelStyle({ isVisible })}
    display: flex;
    flex-direction: column;
    position: fixed;
    bottom: 0;
    z-index: ${tokens.zIndex.modal + 10};
  `;
}
