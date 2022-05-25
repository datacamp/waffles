/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { createContext, useContext } from 'react';

import type { ReferenceType } from '@floating-ui/react-dom-interactions';

type MenuContextValue = {
  listRef: React.MutableRefObject<Array<HTMLButtonElement | null>>;
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  getItemProps: (userProps?: React.HTMLProps<HTMLElement>) => unknown;
  triggerRef: React.MutableRefObject<ReferenceType | null>;
  inverted: boolean;
};

const MenuContext = createContext<MenuContextValue>(undefined!);

type MenuProviderProps = {
  children: React.ReactNode;
} & MenuContextValue;

function MenuProvider({ children, ...value }: MenuProviderProps) {
  return <MenuContext.Provider value={value}>{children}</MenuContext.Provider>;
}

function useMenu() {
  const context = useContext(MenuContext);

  if (context === undefined) {
    throw new Error(
      'Make sure to wrap useMenu with a MenuProvider or Menu component.',
    );
  }

  return context;
}

export { MenuProvider, useMenu };
