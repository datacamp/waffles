import { useEffect, useState, useRef } from 'react';

/**
 * Unmount component after a specified time, which allows complex CSS animations to finish.
 *
 * @param isVisible Animated component basic visibility, change of this state triggers the animations
 * @param timeout Time in milliseconds after which component will unmount, CSS animation duration should be shorter than the timeout
 * @returns True or false, whether animation already finished or not
 */
function useAnimateTransition(isVisible: boolean, timeout: number) {
  const [isAnimating, setIsAnimating] = useState(false);

  const isMounted = useRef(false);
  const animateStartTimer = useRef<ReturnType<typeof requestAnimationFrame>>();
  const animateOutTimer = useRef<ReturnType<typeof setTimeout>>();

  function clearTimers() {
    cancelAnimationFrame(Number(animateStartTimer.current));
    clearTimeout(Number(animateOutTimer.current));
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
