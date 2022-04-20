import React, {
  useState,
  useEffect,
  useRef,
  Children,
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
import Item from './item';
import { dropdownStyle } from './styles';

type MenuProps = {
  trigger: JSX.Element;
  children: React.ReactNode;
  offset?: string;
};

function Menu({ trigger, children, offset = tokens.spacing.small }: MenuProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const listItemsRef = useRef<Array<HTMLButtonElement | null>>([]);

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

  const element = cloneElement(
    trigger,
    getReferenceProps({
      ref: reference,
      ...trigger.props,
      'aria-expanded': isOpen,
      'aria-haspopup': 'menu',
    }),
  );

  const menuItems = Children.map(children, (child, index) => {
    if (isValidElement(child)) {
      return cloneElement(
        child,
        getItemProps({
          ref: (node: HTMLButtonElement) => {
            listItemsRef.current[index] = node;
          },
          ...child.props,
          onClick: () => {
            child.props.onClick?.();
            setIsOpen(false);
            // @ts-expect-error: focus() not recognized
            refs.reference.current?.focus();
          },
        }),
      );
    }

    return null;
  });

  return (
    <>
      {element}
      <Portal>
        {isOpen && (
          <FloatingFocusManager context={context} preventTabbing>
            <ul
              {...getFloatingProps({
                ref: floating,
              })}
              role="menu"
              css={dropdownStyle({ x, y })}
            >
              {menuItems}
            </ul>
          </FloatingFocusManager>
        )}
      </Portal>
    </>
  );
}

Menu.Item = Item;

export default Menu;
