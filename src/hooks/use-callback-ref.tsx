/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-non-null-assertion */
import React, { useRef, useCallback } from 'react';

import useIsomorphicLayoutEffect from './use-isomorphic-layout-effect';

/**
 * Persist any function between renders. Keeps it up to date if it changes.
 *
 * @param fn Function to persist
 * @returns Persisted function
 */
function useCallbackRef<Args extends unknown[], Return>(
  fn: (...args: Args) => Return,
  deps: React.DependencyList = [],
) {
  const ref = useRef(fn);

  useIsomorphicLayoutEffect(() => {
    ref.current = fn;
  });

  return useCallback((...args: Args) => {
    // @ts-expect-error: hide this
    return (0, ref.current!)(...args);
  }, deps);
}

export default useCallbackRef;
