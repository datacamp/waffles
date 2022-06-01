import { css } from '@emotion/react';

import { tokens } from '../tokens';
import { mediaQuery } from '../helpers';

import { panelEnter, panelExit } from './keyframes';
import Drawer from './drawer';

// Sync animation of background drawer panel and content wrapper
// Makes both of them behave nicely on iOS

type PanelStyleOptions = {
  isVisible: boolean;
  placement: NonNullable<React.ComponentProps<typeof Drawer>['placement']>;
};

const PANEL_MAX_WIDTH_BELOW_MEDIUM_BREAKPOINT = 356;
const PANEL_WIDTH_ABOVE_SMALL_BREAKPOINT = 600;

function basePanelStyle({ isVisible, placement }: PanelStyleOptions) {
  const horizontalDirection = placement === 'left' ? -1 : 1;

  return css`
    position: fixed;
    top: 0;
    ${placement === 'left' ? 'left' : 'right'}: 0;
    outline: 0;
    overflow: hidden;
    pointer-events: all;
    width: calc(100vw - ${tokens.spacing.xxlarge});
    max-width: ${PANEL_MAX_WIDTH_BELOW_MEDIUM_BREAKPOINT};
    // Animation
    transform: translateX(
      ${horizontalDirection * PANEL_MAX_WIDTH_BELOW_MEDIUM_BREAKPOINT}px
    );
    animation: ${isVisible
        ? panelEnter({
            offset: PANEL_MAX_WIDTH_BELOW_MEDIUM_BREAKPOINT,
            slideFrom: placement,
          })
        : panelExit({
            offset: PANEL_MAX_WIDTH_BELOW_MEDIUM_BREAKPOINT,
            slideFrom: placement,
          })}
      200ms cubic-bezier(0, 0, 0.6, 1) forwards;

    ${mediaQuery.aboveSmall} {
      width: min(
        calc(100vw - ${tokens.spacing.xxlarge}),
        ${PANEL_WIDTH_ABOVE_SMALL_BREAKPOINT}px
      );
      // Animation
      transform: translateX(
        ${horizontalDirection * PANEL_WIDTH_ABOVE_SMALL_BREAKPOINT}px
      );
      animation: ${isVisible
          ? panelEnter({
              offset: PANEL_WIDTH_ABOVE_SMALL_BREAKPOINT,
              slideFrom: placement,
            })
          : panelExit({
              offset: PANEL_WIDTH_ABOVE_SMALL_BREAKPOINT,
              slideFrom: placement,
            })}
        200ms cubic-bezier(0, 0, 0.6, 1) forwards;
    }
  `;
}

export function panelStyle({ isVisible, placement }: PanelStyleOptions) {
  return css`
    ${basePanelStyle({ isVisible, placement })}
    height: 100vh;
    background-color: ${tokens.colors.white};
    box-shadow: ${tokens.boxShadow.thick};
    z-index: ${tokens.zIndex.modal};
  `;
}

export function panelContentStyle({ isVisible, placement }: PanelStyleOptions) {
  return css`
    ${basePanelStyle({ isVisible, placement })}
    display: flex;
    flex-direction: column;
    position: fixed;
    bottom: 0;
    z-index: ${tokens.zIndex.modal + 10};
  `;
}
