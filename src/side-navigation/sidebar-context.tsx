/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { createContext, useContext } from 'react';

type SidebarContextValue = {
  isOpen: boolean;
  onClose: () => void;
};

const SidebarContext = createContext<SidebarContextValue>(undefined!);

type TableOfContentsProviderProps = {
  children: React.ReactNode;
} & SidebarContextValue;

function SidebarProvider({
  isOpen,
  onClose,
  children,
}: TableOfContentsProviderProps) {
  return (
    <SidebarContext.Provider value={{ isOpen, onClose }}>
      {children}
    </SidebarContext.Provider>
  );
}

function useSidebar() {
  const state = useContext(SidebarContext);

  return state;
}

export { SidebarProvider, useSidebar };
