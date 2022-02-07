import { useState, useEffect } from 'react';

// Determine if scroll is at the top or at the bottom of the container
// Because of differences between browsers, bottom position is close approximation
function useScrollPosition(targetRef: React.RefObject<HTMLElement>) {
  const [isAtTop, setIsAtTop] = useState(false);
  const [isAtBottom, setIsAtBottom] = useState(false);

  useEffect(() => {
    const element = targetRef.current;

    function setPositionFlags() {
      if (element) {
        setIsAtTop(element.scrollTop === 0);
        // Leave some wiggle room to take into account differences in calculations between browsers
        setIsAtBottom(
          Math.ceil(element.scrollHeight - element.scrollTop) -
            element.clientHeight <
            4,
        );
      }
    }

    setPositionFlags();

    if (element) {
      element.addEventListener('scroll', setPositionFlags);
      window.addEventListener('resize', setPositionFlags);
    }

    return () => {
      element?.removeEventListener('scroll', setPositionFlags);
      window.removeEventListener('resize', setPositionFlags);
    };
  }, [targetRef]);

  return { isAtTop, isAtBottom };
}

export default useScrollPosition;
