import { useState, useEffect } from 'react';

import { tokens } from '../tokens';

// Return true if the component has a small width
function useSmallVariant(targetRef: React.RefObject<HTMLElement>) {
  const [isSmallVariant, setIsSmallVariant] = useState(false);

  useEffect(() => {
    const element = targetRef.current;

    function elementResizeHandler() {
      if (element) {
        setIsSmallVariant(
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

  return isSmallVariant;
}

export default useSmallVariant;
