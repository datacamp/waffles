import React, { useMemo } from 'react';

function setRef<T>(
  ref:
    | React.MutableRefObject<T | null>
    | ((instance: T | null) => void)
    | null
    | undefined,
  value: T | null,
) {
  if (typeof ref === 'function') {
    ref(value);
  } else if (ref) {
    ref.current = value;
  }
}

/**
 * Merge two React refs into single one in a stable way.
 *
 * Useful when the ref received via props must be combined with internal component ref.
 *
 * @param refA Initial ref
 * @param refB Secondary ref
 * @returns A function that receives the element and assign the value to the given refs
 */
function useMergeRefs<RefA, RefB>(
  refA: React.Ref<RefA> | null | undefined,
  refB: React.Ref<RefB> | null | undefined,
): React.Ref<RefA & RefB> | null {
  return useMemo(() => {
    if (refA == null && refB == null) {
      return null;
    }
    return (refValue) => {
      setRef(refA, refValue);
      setRef(refB, refValue);
    };
  }, [refA, refB]);
}

export default useMergeRefs;
