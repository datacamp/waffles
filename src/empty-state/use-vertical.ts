import { useState, useEffect } from 'react';

import { tokens } from '../tokens';

// Return true if the component has a small width (below `tokens.breakpoints.small), so that it can revert to displaying vertically
function useVertical(targetRef: React.RefObject<HTMLElement>) {
  const [isVertical, setisVertical] = useState(false);

  useEffect(() => {
    const element = targetRef.current;

    function elementResizeHandler() {
      if (element) {
        setisVertical(element.clientWidth < parseInt(tokens.breakpoints.small));
      }
    }

    elementResizeHandler();

    window.addEventListener('resize', elementResizeHandler);

    return () => {
      window.removeEventListener('resize', elementResizeHandler);
    };
  }, [targetRef]);

  return isVertical;
}

export default useVertical;
