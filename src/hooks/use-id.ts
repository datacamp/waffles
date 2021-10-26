import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';

function useId(prefix: string) {
  const [id, setId] = useState(`${prefix}-0`);

  useEffect(() => {
    setId(nanoid(6));
  }, []);

  return `${prefix}-${id}`;
}

export default useId;
