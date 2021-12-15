import React, { useRef, useState, useEffect } from 'react';

import { tabListStyle, tabsWrapper } from './styles';

type TabListProps = {
  inverted: boolean;
  children: React.ReactNode;
} & React.HTMLAttributes<HTMLDivElement>;

function TabList({ inverted, children, ...restProps }: TabListProps) {
  const [showGradientMask, setShowGradientMask] = useState(false);

  const tabListRef = useRef<HTMLDivElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Show gradient mask if the combined width of all tabs elements is bigger than width of the bar itself
    function handleShowMask() {
      if (tabListRef.current && wrapperRef.current) {
        if (wrapperRef.current.offsetWidth > tabListRef.current.offsetWidth) {
          setShowGradientMask(true);
        } else {
          setShowGradientMask(false);
        }
      }
    }

    handleShowMask();

    window.addEventListener('resize', handleShowMask);

    return () => {
      window.removeEventListener('resize', handleShowMask);
    };
  }, []);

  return (
    <div
      role="tablist"
      aria-orientation="horizontal"
      ref={tabListRef}
      css={tabListStyle({ isGradientMaskVisible: showGradientMask })}
    >
      <div {...restProps} ref={wrapperRef} css={tabsWrapper({ inverted })}>
        {children}
      </div>
    </div>
  );
}

export default TabList;
