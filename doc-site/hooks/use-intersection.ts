import { RefObject, useEffect, useState } from 'react';

export default function useOnScreen(ref: RefObject<Element>) {
  const [isIntersecting, setIntersecting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIntersecting(entry.isIntersecting),
      { threshold: [0.25, 0.5, 0.75, 1] },
    );
    ref.current && observer.observe(ref.current as Element);
    // Remove the observer as soon as the component is unmounted
    return () => {
      observer.disconnect();
    };
  }, []);

  return isIntersecting;
}
