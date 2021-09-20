import React, { useEffect, useState } from 'react';

// Expose DOM element size and postion relative to viewport
// Use getBoundingClientRect under the hood
// Recalculates position on viewport scroll, and resize
function useElementMeasurements(targetRef: React.RefObject<HTMLElement>) {
  const [elementMeasurments, setElementMeasurments] = useState<DOMRect | null>(
    null,
  );

  useEffect(() => {
    function calculateMeasurments() {
      if (!targetRef.current) {
        return;
      }
      setElementMeasurments(targetRef.current.getBoundingClientRect());
    }

    calculateMeasurments();

    window.addEventListener('scroll', calculateMeasurments);
    window.addEventListener('resize', calculateMeasurments);

    return () => {
      window.removeEventListener('scroll', calculateMeasurments);
      window.removeEventListener('resize', calculateMeasurments);
    };
  }, [targetRef]);

  return elementMeasurments;
}

export default useElementMeasurements;
