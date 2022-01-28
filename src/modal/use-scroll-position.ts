import { useState, useEffect } from 'react';

function useScrollPosition(targetRef: React.RefObject<HTMLElement>) {
  const [isAtTop, setIsAtTop] = useState(false);
  const [isAtBottom, setIsAtBottom] = useState(false);

  useEffect(() => {
    const element = targetRef.current;

    function setPositionFlags() {
      if (element) {
        setIsAtTop(element.scrollTop === 0);
        setIsAtBottom(
          Math.ceil(element.scrollHeight - element.scrollTop) ===
            element.clientHeight,
        );
      }
    }

    if (element) {
      setIsAtBottom(element.scrollTop === 0);
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
