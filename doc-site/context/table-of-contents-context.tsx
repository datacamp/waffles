/* eslint-disable @typescript-eslint/no-non-null-assertion */
import React, { createContext, useContext, useState } from 'react';

const EntriesContext = createContext<string[]>(undefined!);
const AddEntryContext = createContext<
  React.Dispatch<React.SetStateAction<string[]>>
>(undefined!);

type TableOfContentsProviderProps = {
  children: React.ReactNode;
};

function TableOfContentsProvider({ children }: TableOfContentsProviderProps) {
  const [entries, setEntries] = useState<string[]>([]);

  return (
    <EntriesContext.Provider value={entries}>
      <AddEntryContext.Provider value={setEntries}>
        {children}
      </AddEntryContext.Provider>
    </EntriesContext.Provider>
  );
}

function useTableOfContentsEntries() {
  const entries = useContext(EntriesContext);

  if (typeof entries === undefined) {
    throw new Error(
      'Make sure to wrap useTableOfContentsEntries with a TableOfContentsProvider.',
    );
  }

  return entries;
}

function useAddTableOfContentsEntry() {
  const setEntries = useContext(AddEntryContext);

  if (typeof setEntries === undefined) {
    throw new Error(
      'Make sure to wrap useCounuseAddTableOfContentsEntry with a TableOfContentsProvider.',
    );
  }

  return setEntries;
}

export {
  TableOfContentsProvider,
  useTableOfContentsEntries,
  useAddTableOfContentsEntry,
};
