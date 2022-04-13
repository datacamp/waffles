import { useEffect } from 'react';
import {
  useFloating,
  offset as floatingOffset,
  flip,
} from '@floating-ui/react-dom';

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

type PositionerOptions = {
  isVisible: boolean;
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
function usePositioner({ isVisible, placement, offset }: PositionerOptions) {
  const parsedOffset = parseInt(offset, 10);

  const { x, y, reference, floating, update } = useFloating({
    placement: placementMap[placement],
    middleware: [floatingOffset(parsedOffset), flip()],
  });

  useEffect(() => {
    function updatePosition() {
      if (isVisible) {
        update();
      }
    }

    updatePosition();

    window.addEventListener('scroll', updatePosition, { passive: true });
    window.addEventListener('resize', updatePosition);

    return () => {
      window.addEventListener('scroll', updatePosition);
      window.addEventListener('resize', updatePosition);
    };
  }, [isVisible, update]);

  return { x, y, triggerRef: reference, floatingRef: floating };
}

export default usePositioner;
