import React, {
  Children,
  isValidElement,
  cloneElement,
  createRef,
} from 'react';

import { useId } from '../hooks';
import Tab from './tab';
import { tabListStyle, tabsWrapper } from './styles';

type TabsProps = {
  activeTab: React.Key;
  children: React.ReactNode;
  onChange?: (activeTab: React.Key) => void;
  autoActivate?: boolean;
  inverted?: boolean;
};

type InternalTabRef = {
  index: number;
  ref: React.RefObject<HTMLButtonElement>;
};

function Tabs({
  activeTab,
  children,
  onChange,
  autoActivate = false,
  inverted = false,
}: TabsProps) {
  const tabsId = useId('tabs');
  // Keep refs to all non-disabled tabs, so it is possible to navigate between them with arrow keys
  const tabRefs: InternalTabRef[] = [];

  // Show horizontal tab bar with labelled tabs
  // Enhance each tab with a11y attributes
  // Populate list of tab refs
  function renderTabs() {
    return Children.map(children, (child, index) => {
      if (isValidElement(child)) {
        const tabKey = child.key || index;
        const isActive = tabKey === activeTab;
        const tabRef = createRef<HTMLButtonElement>();

        // If a tab is not disabled, add it to list of refs
        if (!child.props.disabled) {
          tabRefs.push({
            index,
            ref: tabRef,
          });
        }

        return cloneElement(child, {
          id: `${tabsId}-tab-${index}`,
          tabIndex: isActive ? 0 : -1,
          onClick: () => handleClick(tabKey),
          onKeyDown: (event: React.KeyboardEvent<HTMLButtonElement>) =>
            handleKeyDown(event, index),
          isActive,
          inverted,
          'aria-selected': isActive,
          'aria-controls': `${tabsId}-tab-panel-${index}`,
          ref: tabRef,
        });
      }

      return null;
    });
  }

  // Generate tab panels based on provided tabs content
  // Only active tab content is shown
  function renderTabPanels() {
    return Children.map(children, (child, index) => {
      if (isValidElement(child)) {
        const tabKey = child.key || index;
        const isActive = tabKey === activeTab;

        return (
          <div
            role="tabpanel"
            id={`${tabsId}-tab-panel-${index}`}
            hidden={!isActive}
            aria-labelledby={`${tabsId}-tab-${index}`}
          >
            {isActive && child.props.children}
          </div>
        );
      }

      return null;
    });
  }

  function handleClick(tabKey: React.Key) {
    onChange && onChange(tabKey);
  }

  // Manage navigation between tabs with arrow keys
  function handleKeyDown(
    event: React.KeyboardEvent<HTMLButtonElement>,
    index: number,
  ) {
    // With only 1 tab no need to handle keyboard interactions
    if (tabRefs.length <= 1) {
      return;
    }

    const { key } = event; // Key code of the pressed key

    if (
      key === 'ArrowRight' ||
      key === 'ArrowLeft' ||
      key === 'Home' ||
      key === 'End'
    ) {
      let nextTab;

      // If there are disabled tabs, index and position of tab ref in an array could be different
      const currentIndex = tabRefs.findIndex((ref) => {
        return ref.index === index;
      });

      // After last tab move focus to the beginning of the list
      if (key === 'ArrowRight') {
        if (index < tabRefs[tabRefs.length - 1].index) {
          nextTab = tabRefs[currentIndex + 1].ref.current;
        } else {
          nextTab = tabRefs[0].ref.current;
        }
      }

      // After first tab move focus to the end of the list
      if (key === 'ArrowLeft') {
        if (index > tabRefs[0].index) {
          nextTab = tabRefs[currentIndex - 1].ref.current;
        } else {
          nextTab = tabRefs[tabRefs.length - 1].ref.current;
        }
      }

      if (key === 'Home') {
        nextTab = tabRefs[0].ref.current;
      }

      if (key === 'End') {
        nextTab = tabRefs[tabRefs.length - 1].ref.current;
      }

      nextTab?.focus();

      if (autoActivate) {
        nextTab?.click();
      }
    }
  }

  return (
    <>
      <div role="tablist" aria-orientation="horizontal" css={tabListStyle()}>
        <div css={tabsWrapper({ inverted })}>{renderTabs()}</div>
      </div>
      {renderTabPanels()}
    </>
  );
}

Tabs.Tab = Tab;

export default Tabs;
