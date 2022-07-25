import { useState, useEffect } from 'react';

import { tokens } from '../tokens';

// Return true if the component has a small width
function useHasSmallWidth(targetRef: React.RefObject<HTMLElement>) {
  const [hasSmallWidth, setHasSmallWidth] = useState(false);

  useEffect(() => {
    const element = targetRef.current;

    function elementResizeHandler() {
      if (element) {
        setHasSmallWidth(
          element.clientWidth < parseInt(tokens.breakpoints.small),
        );
      }
    }

    elementResizeHandler();

    window.addEventListener('resize', elementResizeHandler);

    return () => {
      window.removeEventListener('resize', elementResizeHandler);
    };
  }, [targetRef]);

  return hasSmallWidth;
}

export default useHasSmallWidth;
