import { css } from '@emotion/react';

import { tokens } from '../tokens';
import { mediaQuery } from '../helpers';
import { panelSlideIn, panelSlideOut } from './keyframes';

type PanelStyleOptions = {
  isVisible: boolean;
};

const PANEL_WIDTH = '300px';
const PANEL_WIDTH_ABOVE_SMALL_BEAKPOINT = '600px';

export function panelStyle({ isVisible }: PanelStyleOptions) {
  return css`
    display: flex;
    flex-direction: column;
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    background-color: ${tokens.colors.white};
    box-shadow: ${tokens.boxShadow.thick};
    outline: 0;
    overflow: hidden;
    pointer-events: all;
    z-index: ${tokens.zIndex.modal};
    width: ${PANEL_WIDTH};
    // Animation
    transform: translateX(-${PANEL_WIDTH});
    animation: ${isVisible
        ? panelSlideIn(PANEL_WIDTH)
        : panelSlideOut(PANEL_WIDTH)}
      200ms cubic-bezier(0, 0, 0.6, 1) forwards;

    ${mediaQuery.aboveSmall} {
      width: ${PANEL_WIDTH_ABOVE_SMALL_BEAKPOINT};
      // Animation
      transform: translateX(-${PANEL_WIDTH_ABOVE_SMALL_BEAKPOINT});
      animation: ${isVisible
          ? panelSlideIn(PANEL_WIDTH_ABOVE_SMALL_BEAKPOINT)
          : panelSlideOut(PANEL_WIDTH_ABOVE_SMALL_BEAKPOINT)}
        200ms cubic-bezier(0, 0, 0.6, 1) forwards;
    }
  `;
}
