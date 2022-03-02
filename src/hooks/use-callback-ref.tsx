import { useRef, useCallback } from 'react';

import useIsomorphicLayoutEffect from './use-isomorphic-layout-effect';

/**
 * Persist any function or value between renders. Keeps it up to date if it changes.
 *
 * @param fn Function to persist
 * @returns Persisted function
 */
function useCallbackRef<Args extends unknown[], Return>(
  fn: (...args: Args) => Return,
) {
  const ref = useRef(fn);

  useIsomorphicLayoutEffect(() => {
    ref.current = fn;
  });

  return useCallback((...args: Args) => {
    // @ts-expect-error: hide this
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    return (0, ref.current!)(...args);
  }, []);
}

export default useCallbackRef;
