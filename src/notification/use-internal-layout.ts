import { useState, useEffect } from 'react';

const LAYOUT_BREAKPOINT = 600;

// Return type of the layout based on component width
function useInternalLayout(targetRef: React.RefObject<HTMLElement>) {
  const [layout, setLayout] = useState<'horizontal' | 'vertical'>('horizontal');

  useEffect(() => {
    const element = targetRef.current;

    function setLayoutType() {
      if (element) {
        setLayout(
          element.clientWidth < LAYOUT_BREAKPOINT ? 'vertical' : 'horizontal',
        );
      }
    }

    setLayoutType();

    window.addEventListener('resize', setLayoutType);

    return () => {
      window.removeEventListener('resize', setLayoutType);
    };
  }, [targetRef]);

  return layout;
}

export default useInternalLayout;
