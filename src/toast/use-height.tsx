import { useRef, useState, useEffect } from 'react';

// Return explicit height (in pixels) of an element
// Required for smooth exit animation, since it is not possible to animate from auto height in CSS
function useHeight(targetRef: React.RefObject<HTMLElement>) {
  const animateTimer = useRef<ReturnType<typeof requestAnimationFrame>>();
  const [height, setHeight] = useState('auto');

  useEffect(() => {
    const element = targetRef.current;

    if (element) {
      cancelAnimationFrame(Number(animateTimer.current));
      animateTimer.current = requestAnimationFrame(() => {
        setHeight(`${element.clientHeight}px`);
      });
    }

    return () => {
      cancelAnimationFrame(Number(animateTimer.current));
    };
  }, [targetRef]);

  return height;
}

export default useHeight;
