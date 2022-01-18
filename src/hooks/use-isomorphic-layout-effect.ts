import { useEffect, useLayoutEffect } from 'react';

/**
 * Occasionally there is a need to use useLayoutEffect to ensure there is not a render flash for certain operations.
 * Unfortunately React shows a warning, when trying to use useLayoutEffect on the server.
 */
const useIsomorphicLayoutEffect =
  typeof window !== 'undefined' &&
  window.document &&
  window.document.createElement
    ? useLayoutEffect
    : useEffect;

export default useIsomorphicLayoutEffect;
