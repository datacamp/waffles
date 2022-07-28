import React, { useState, cloneElement } from 'react';
import {
  offset as floatingOffset,
  flip,
  autoUpdate,
  useFloating,
  useInteractions,
  useHover,
  useFocus,
  useDismiss,
} from '@floating-ui/react-dom-interactions';

import { tokens } from '../tokens';
import { Text } from '../text';
import { useId, useMergeRefs } from '../hooks';

import { tooltipStyle } from './styles';

const REST_TIMER = 125;

// Mapping between Waffles and floating-ui placement
const placementMap = {
  bottom: 'bottom',
  top: 'top',
  right: 'right',
  left: 'left',
  bottomLeft: 'bottom-start',
  bottomRight: 'bottom-end',
  topLeft: 'top-start',
  topRight: 'top-end',
} as const;

type TooltipProps = {
  /* The content that will trigger the tooltip. Must be single element. */
  children: JSX.Element;
  /* The content of the tooltip. */
  content: React.ReactNode;
  /* Sets the tooltip's position relative to the trigger. */
  placement?:
    | 'bottom'
    | 'top'
    | 'right'
    | 'left'
    | 'bottomLeft'
    | 'bottomRight'
    | 'topLeft'
    | 'topRight';
  /* Sets the distance between tooltip and its trigger. By default `tokens.spacing.small` [design token](/foundation/design-tokens/) is used. */
  offset?: string;
  /* Sets the style of the tooltip suitable for dark backgrounds. */
  inverted?: boolean;
} & Omit<React.HTMLAttributes<HTMLDivElement>, 'children'>;

function Tooltip({
  children,
  content,
  placement = 'bottom',
  offset = tokens.spacing.small,
  inverted = false,
  ...restProps
}: TooltipProps) {
  const [isOpen, setIsOpen] = useState(false);
  const id = useId('tooltip');

  const { x, y, reference, floating, context } = useFloating({
    placement: placementMap[placement],
    middleware: [floatingOffset(parseInt(offset, 10)), flip()],
    open: isOpen,
    onOpenChange: setIsOpen,
    whileElementsMounted: autoUpdate,
  });

  const { getReferenceProps, getFloatingProps } = useInteractions([
    useHover(context, { delay: REST_TIMER }),
    useFocus(context),
    useDismiss(context),
  ]);

  // @ts-expect-error: children.ref not recognized
  const triggerRef = useMergeRefs(reference, children.ref);

  const element = cloneElement(
    children,
    getReferenceProps({
      key: children.key,
      ref: triggerRef,
      ...children.props,
      ...(isOpen && { 'aria-describedby': id }),
    }),
  );

  return (
    <>
      {element}
      {isOpen && (
        <Text
          {...getFloatingProps({
            ...restProps,
            ref: floating,
            id,
          })}
          as="div"
          role="tooltip"
          css={tooltipStyle({ x, y, inverted })}
        >
          {content}
        </Text>
      )}
    </>
  );
}

export default Tooltip;
