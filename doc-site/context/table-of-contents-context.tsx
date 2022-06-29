/* eslint-disable @typescript-eslint/no-non-null-assertion */
import React, { createContext, useContext, useState } from 'react';

const EntriesContext = createContext<TableOfContentsEntries>(undefined!);
const AddEntryContext = createContext<
  React.Dispatch<React.SetStateAction<TableOfContentsEntries>>
>(undefined!);

type TableOfContentsProviderProps = {
  children: React.ReactNode;
};

type TableOfContentsEntries = {
  activeEntry: string;
  entries: string[];
};

function TableOfContentsProvider({ children }: TableOfContentsProviderProps) {
  const [entries, setEntries] = useState<TableOfContentsEntries>({
    activeEntry: '',
    entries: [],
  });

  return (
    <EntriesContext.Provider value={entries}>
      <AddEntryContext.Provider value={setEntries}>
        {children}
      </AddEntryContext.Provider>
    </EntriesContext.Provider>
  );
}

function useTableOfContentsEntries() {
  const context = useContext(EntriesContext);

  if (context === undefined) {
    throw new Error(
      'Make sure to wrap useTableOfContentsEntries with a TableOfContentsProvider.',
    );
  }

  return context;
}

function useAddTableOfContentsEntry() {
  const context = useContext(AddEntryContext);

  if (context === undefined) {
    throw new Error(
      'Make sure to wrap useAddTableOfContentsEntry with a TableOfContentsProvider.',
    );
  }

  return context;
}

export {
  TableOfContentsProvider,
  useTableOfContentsEntries,
  useAddTableOfContentsEntry,
};
