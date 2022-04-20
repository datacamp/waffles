/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { createContext, useContext } from 'react';

type MenuContextValue = {
  listRef: React.MutableRefObject<Array<HTMLButtonElement | null>>;
  setIsOpen: (isOpen: boolean) => void;
  getItemProps: (userProps?: React.HTMLProps<HTMLElement>) => unknown;
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

  return context;
}

export { MenuProvider, useMenu };
