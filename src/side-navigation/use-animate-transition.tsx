import { useEffect, useState, useRef } from 'react';

// Add timeout to conditional component unmount
// It allows CSS exit animation to finish
// CSS keyframes animation duration should be shorther than timeout
function useAnimateTransition(isVisible: boolean, timeout: number) {
  const [isAnimating, setIsAnimating] = useState(false);

  const isMounted = useRef(false);
  const animateStartTimer = useRef<ReturnType<typeof requestAnimationFrame>>();
  const animateOutTimer = useRef<ReturnType<typeof setTimeout>>();

  function clearTimers() {
    animateStartTimer &&
      cancelAnimationFrame(Number(animateStartTimer.current));
    animateOutTimer && clearTimeout(Number(animateOutTimer.current));
  }

  useEffect(() => {
    isMounted.current = true;

    return () => {
      isMounted.current = false;
    };
  }, []);

  useEffect(() => {
    if (isVisible && isMounted) {
      clearTimers();
      animateStartTimer.current = requestAnimationFrame(() => {
        setIsAnimating(true);
      });
    } else {
      animateOutTimer.current = setTimeout(() => {
        setIsAnimating(false);
      }, timeout);
    }

    return () => {
      clearTimers();
    };
  }, [isVisible, timeout]);

  return isAnimating;
}

export default useAnimateTransition;
