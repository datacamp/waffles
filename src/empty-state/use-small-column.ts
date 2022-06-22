import { useState, useEffect } from 'react';

import { tokens } from '../tokens';

// Return true if the component has a small width (below `tokens.breakpoints.small), so that it can revert to column flex direction
function useSmallColumn(targetRef: React.RefObject<HTMLElement>) {
  const [isSmallColumn, setisSmallColumn] = useState(false);

  useEffect(() => {
    const element = targetRef.current;

    function elementResizeHandler() {
      if (element) {
        setisSmallColumn(
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

  return isSmallColumn;
}

export default useSmallColumn;
