import React, {
  useState,
  useRef,
  isValidElement,
  cloneElement,
  Children,
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

import { dropdownStyle } from './styles';
import { MenuProvider } from './menu-context';
import Category from './category';

const placementMap = {
  bottom: 'bottom-end',
  top: 'top-end',
  right: 'right-start',
  left: 'left-start',
} as const;

type MenuProps = {
  /* The element that will trigger menu dropdown. In general [Button](/components/button) from Waffles should be used. */
  trigger: JSX.Element;
  /* Content of the menu, either `Menu.Category` or custom components. */
  children: React.ReactNode;
  /* Sets the menu dropdown's position relative to the trigger. Defaults to `bottom`. */
  placement?: 'bottom' | 'top' | 'right' | 'left';
  /* Sets the distance between menu dropdown and its trigger. By default `tokens.spacing.small` [design token](/foundation/design-tokens/) is used. */
  offset?: string;
  /* Sets the style of all menu elements suitable for dark backgrounds. */
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

  // Pass an index to each child of Category, so Menu could be navigated with arrows properly
  function renderItems() {
    let itemIndex = 0;

    return deepChildrenMap(children, (child) => {
      if (isValidElement(child)) {
        if (child.type === Category) {
          // Category is expected to NOT have any nested children
          const enhancedChildren = Children.map(
            child.props.children,
            (child) => {
              return cloneElement(child, {
                index: itemIndex++,
              });
            },
          );

          return cloneElement(child, {
            children: enhancedChildren,
          });
        }

        return child;
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
