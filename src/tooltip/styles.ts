import { css, SerializedStyles } from '@emotion/react';

import { tokens } from '../tokens';
import Tooltip from './tooltip';

const tooltipBaseStyle = css`
  background-color: ${tokens.colors.navy};
  color: ${tokens.colors.white};
  padding: ${tokens.spacing.small};
  border-radius: ${tokens.borderRadius.medium};
  position: absolute;
  top: 0;
  left: 0;
`;

type Placement = NonNullable<React.ComponentProps<typeof Tooltip>['placement']>;

type TooltipStyleOptions = {
  triggerMeasurements: DOMRect;
  placement: Placement;
  offset: string;
};

type PositionMap = {
  [key in Placement]: SerializedStyles;
};

export function tooltipStyle({
  triggerMeasurements,
  placement,
  offset,
}: TooltipStyleOptions) {
  const { left, right, top, bottom, width, height } = triggerMeasurements;

  const positionMap: PositionMap = {
    bottom: css`
      left: ${(left + right) / 2}px;
      top: calc(${bottom}px + ${offset});
      transform: translate(-50%, 0);
    `,
    bottomLeft: css`
      left: ${left}px;
      top: calc(${bottom}px + ${offset});
    `,
    bottomRight: css`
      left: ${left + width}px;
      top: calc(${bottom}px + ${offset});
      transform: translate(-100%);
    `,
    left: css`
      left: calc(${left}px - ${offset});
      top: ${top + height / 2}px;
      transform: translate(-100%, -50%);
    `,
    right: css`
      left: calc(${right}px + ${offset});
      top: ${top + height / 2}px;
      transform: translate(0, -50%);
    `,
    top: css`
      left: ${(left + right) / 2}px;
      top: calc(${top}px - ${offset});
      transform: translate(-50%, -100%);
    `,
    topLeft: css`
      left: ${left}px;
      top: calc(${top}px - ${offset});
      transform: translate(0, -100%);
    `,
    topRight: css`
      left: ${left + width}px;
      top: calc(${top}px - ${offset});
      transform: translate(-100%, -100%);
    `,
  };

  return css`
    ${tooltipBaseStyle}
    ${positionMap[placement]}
  `;
}
