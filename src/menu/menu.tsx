import React, {
  useState,
  useEffect,
  useRef,
  isValidElement,
  cloneElement,
} from 'react';
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
import Category from './category';
import { dropdownStyle } from './styles';

type MenuProps = {
  trigger: JSX.Element;
  children: React.ReactNode;
  offset?: string;
  inverted?: boolean;
} & React.HTMLAttributes<HTMLDivElement>;

function Menu({
  trigger,
  children,
  offset = tokens.spacing.small,
  inverted = false,
  ...restProps
}: MenuProps) {
  const [isOpen, setIsOpen] = useState(false);
  const triggerId = useId('menu-trigger');
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const listItemsRef = useRef<Array<HTMLButtonElement | null>>([]); // Refs for all menu Items

  const { x, y, reference, floating, refs, update, context } = useFloating({
    open: isOpen,
    onOpenChange: setIsOpen,
    middleware: [floatingOffset(parseInt(offset, 10)), flip()],
    placement: 'bottom-end',
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

  useEffect(() => {
    if (refs.reference.current && refs.floating.current && isOpen) {
      return autoUpdate(refs.reference.current, refs.floating.current, update);
    }

    return;
  }, [refs.reference, refs.floating, update, isOpen]);

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

Menu.Item = Item;
Menu.Button = Button;
Menu.Category = Category;

export default Menu;
