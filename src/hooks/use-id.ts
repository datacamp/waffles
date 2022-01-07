import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';

/**
 * Autogenerate random ID to facilitate accessibility features.
 *
 * For a components which are part of server-side initial render it may be required to provide IDs manually to avoid client-server values mismatch.
 *
 * @param prefix Custom prefix for an ID
 * @returns Random ID with a prefix
 */
function useId(prefix: string) {
  const [id, setId] = useState(`${prefix}-0`);

  useEffect(() => {
    setId(nanoid(6));
  }, []);

  return `${prefix}-${id}`;
}

export default useId;
