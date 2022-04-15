import { useEffect } from 'react';
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

import { useId } from '../hooks';

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

type TooltipOptions = {
  isOpen: boolean;
  onOpenChange: (isOpen: boolean) => void;
  placement:
    | 'bottom'
    | 'top'
    | 'right'
    | 'left'
    | 'bottomLeft'
    | 'bottomRight'
    | 'topLeft'
    | 'topRight';
  offset: string;
};

// Calculate floating element position in relation to trigger
// Recalculates position on viewport scroll, and resize
function useTooltip({
  isOpen,
  onOpenChange,
  placement,
  offset,
}: TooltipOptions) {
  const parsedOffset = parseInt(offset, 10);
  const id = useId('tooltip');

  const { x, y, reference, floating, update, context, refs } = useFloating({
    placement: placementMap[placement],
    middleware: [floatingOffset(parsedOffset), flip()],
    open: isOpen,
    onOpenChange,
  });

  const { getReferenceProps, getFloatingProps } = useInteractions([
    useHover(context, { delay: REST_TIMER }),
    useFocus(context),
    useDismiss(context),
  ]);

  useEffect(() => {
    if (refs.reference.current && refs.floating.current && isOpen) {
      return autoUpdate(refs.reference.current, refs.floating.current, update);
    }

    return;
  }, [refs.reference, refs.floating, update, isOpen]);

  return { id, x, y, reference, getReferenceProps, floating, getFloatingProps };
}

export default useTooltip;
