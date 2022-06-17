import React, { useRef, useState, useEffect } from 'react';

import { tabListStyle, tabsWrapper } from './styles';

type TabListProps = {
  inverted: boolean;
  children: React.ReactNode;
} & React.HTMLAttributes<HTMLDivElement>;

function TabList({ inverted, children, ...restProps }: TabListProps) {
  const [showRightGradientMask, setShowRightGradientMask] = useState(false);
  const [showLeftGradientMask, setShowLeftGradientMask] = useState(false);

  const tabListRef = useRef<HTMLDivElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tabList = tabListRef.current;

    // Show right gradient mask if the combined width of all tabs elements is bigger than width of the bar itself
    function handleShowRightMask() {
      if (tabList && wrapperRef.current) {
        setShowRightGradientMask(
          wrapperRef.current.offsetWidth > tabList.offsetWidth,
        );
      }
    }

    // Show left gradient mask if the tabList has been horizontally scrolled at all
    function handleShowLeftMask() {
      if (tabList && wrapperRef.current) {
        setShowLeftGradientMask(tabList.scrollLeft > 0);
      }
    }

    handleShowRightMask();
    tabList?.addEventListener('scroll', handleShowLeftMask);
    window.addEventListener('resize', handleShowRightMask);

    return () => {
      tabList?.removeEventListener('scroll', handleShowLeftMask);
      window.removeEventListener('resize', handleShowRightMask);
    };
  }, []);

  return (
    <div
      role="tablist"
      aria-orientation="horizontal"
      ref={tabListRef}
      css={tabListStyle({
        isLeftGradientMaskVisible: showLeftGradientMask,
        isRightGradientMaskVisible: showRightGradientMask,
      })}
    >
      <div {...restProps} ref={wrapperRef} css={tabsWrapper({ inverted })}>
        {children}
      </div>
    </div>
  );
}

export default TabList;
