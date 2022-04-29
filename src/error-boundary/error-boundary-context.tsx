/* eslint-disable @typescript-eslint/no-non-null-assertion */
import React, { createContext, useContext } from 'react';

type ErrorBoundaryContextValue = {
  error: Error;
  onReset: () => void;
};

const ErrorBoundaryContext = createContext<ErrorBoundaryContextValue>(
  undefined!,
);

type ErrorBoundaryProviderProps = {
  children: React.ReactNode;
} & ErrorBoundaryContextValue;

function ErrorBoundaryProvider({
  error,
  onReset,
  children,
}: ErrorBoundaryProviderProps) {
  return (
    <ErrorBoundaryContext.Provider value={{ error, onReset }}>
      {children}
    </ErrorBoundaryContext.Provider>
  );
}

function useError() {
  const context = useContext(ErrorBoundaryContext);

  if (context === undefined) {
    throw new Error(
      'Make sure to wrap useError with a ErrorBoundaryProvider or ErrorBoundary component.',
    );
  }

  return context;
}

export { ErrorBoundaryProvider, useError };
