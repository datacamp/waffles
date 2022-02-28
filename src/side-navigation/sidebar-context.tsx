/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { createContext, useContext } from 'react';

type SidebarContextValue = {
  isOpen: boolean;
  onClose: () => void;
};

const SidebarContext = createContext<SidebarContextValue>(undefined!);

type SidebarProviderProps = {
  children: React.ReactNode;
} & SidebarContextValue;

function SidebarProvider({ isOpen, onClose, children }: SidebarProviderProps) {
  return (
    <SidebarContext.Provider value={{ isOpen, onClose }}>
      {children}
    </SidebarContext.Provider>
  );
}

function useSidebar() {
  const context = useContext(SidebarContext);

  return context;
}

export { SidebarProvider, useSidebar };
