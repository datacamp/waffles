import React, { useState, useRef, isValidElement, cloneElement } from 'react';
import {
  useFloating,
  offset as floatingOffset,
  flip,
  useListNavigation,
  useInteractions,
  useClick,
  useDismiss,
  FloatingFocusManager,
  autoUpdate,
} from '@floating-ui/react-dom-interactions';

import { tokens } from '../tokens';
import { Portal } from '../portal';
import { useId } from '../hooks';
import { deepChildrenMap } from '../helpers';
import { MenuProvider } from './menu-context';
import Item from './item';
import Button from './button';
import { dropdownStyle } from './styles';

const placementMap = {
  bottom: 'bottom-end',
  top: 'top-end',
  right: 'right-start',
  left: 'left-start',
} as const;

type MenuProps = {
  trigger: JSX.Element;
  children: React.ReactNode;
  placement?: 'bottom' | 'top' | 'right' | 'left';
  offset?: string;
  inverted?: boolean;
} & React.HTMLAttributes<HTMLDivElement>;

function MenuInternal({
  trigger,
  children,
  placement = 'bottom',
  offset = tokens.spacing.small,
  inverted = false,
  ...restProps
}: MenuProps) {
  const [isOpen, setIsOpen] = useState(false);
  const triggerId = useId('menu-trigger');
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const listItemsRef = useRef<Array<HTMLButtonElement | null>>([]); // Refs for all menu Items

  const { x, y, reference, floating, refs, context } = useFloating({
    open: isOpen,
    onOpenChange: setIsOpen,
    middleware: [floatingOffset(parseInt(offset, 10)), flip()],
    placement: placementMap[placement],
    whileElementsMounted: autoUpdate,
  });

  const { getReferenceProps, getFloatingProps, getItemProps } = useInteractions(
    [
      useClick(context),
      useDismiss(context),
      useListNavigation(context, {
        listRef: listItemsRef,
        activeIndex,
        onNavigate: setActiveIndex,
        loop: true,
      }),
    ],
  );

  // Enchance trigger with a11y aria attributes
  const element = cloneElement(
    trigger,
    getReferenceProps({
      ref: reference,
      ...trigger.props,
      id: triggerId,
      'aria-haspopup': 'menu',
      ...(isOpen && { 'aria-expanded': true }),
      inverted,
    }),
  );

  // Pass an index to each Item, so Menu could be navigated with arrows properly
  function renderItems() {
    let itemIndex = 0;

    return deepChildrenMap(children, (child) => {
      if (isValidElement(child)) {
        return cloneElement(child, {
          ...((child.type === Item || child.type === Button) && {
            index: itemIndex++,
          }),
        });
      }

      return null;
    });
  }

  return (
    <MenuProvider
      {...{
        listRef: listItemsRef,
        isOpen,
        setIsOpen,
        getItemProps,
        triggerRef: refs.reference,
        inverted,
      }}
    >
      {element}
      <Portal>
        {isOpen && (
          <FloatingFocusManager context={context} preventTabbing>
            <div
              {...getFloatingProps({
                ref: floating,
                ...restProps,
              })}
              role="menu"
              aria-labelledby={triggerId}
              css={dropdownStyle({ x, y, inverted })}
            >
              {renderItems()}
            </div>
          </FloatingFocusManager>
        )}
      </Portal>
    </MenuProvider>
  );
}

export default MenuInternal;
