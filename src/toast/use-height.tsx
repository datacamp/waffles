import { useRef, useState, useEffect } from 'react';

// Return explicit height of element required for smooth exit animation
function useHeight(targetRef: React.RefObject<HTMLElement>) {
  const animateTimer = useRef<ReturnType<typeof requestAnimationFrame>>();
  const [height, setHeight] = useState('auto');

  function clearTimer() {
    animateTimer && cancelAnimationFrame(Number(animateTimer.current));
  }

  useEffect(() => {
    const element = targetRef.current;

    if (element) {
      clearTimer();
      animateTimer.current = requestAnimationFrame(() => {
        setHeight(`${element.clientHeight}px`);
      });
    }

    return () => {
      clearTimer();
    };
  }, [targetRef]);

  return height;
}

export default useHeight;
