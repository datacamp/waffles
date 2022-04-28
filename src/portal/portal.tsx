import React, { useState, useRef } from 'react';
import { createPortal } from 'react-dom';

import { useIsomorphicLayoutEffect } from '../hooks';

const DEFAULT_ID = 'waffles-portal-root';

type PortalProps = {
  /* If the node with this `id` doesn't exist, it will be created, and appended to the end of the `body`. */
  id?: string;
  /* The content to render into the portal. */
  children: React.ReactNode;
};

function Portal({ id = DEFAULT_ID, children }: PortalProps) {
  const portalRef = useRef<HTMLElement | null>(null);
  const [isMounted, setIsMounted] = useState(false);
  const [, forceUpdate] = useState(Object.create(null));

  useIsomorphicLayoutEffect(() => {
    const rootNode = document.getElementById(id);

    if (rootNode) {
      portalRef.current = rootNode;
    } else {
      portalRef.current = document.createElement('div');
      portalRef.current.id = id;
    }

    if (!document.body.contains(portalRef.current)) {
      document.body.appendChild(portalRef.current);
      forceUpdate(Object.create(null));
    }

    setIsMounted(true);

    return () => {
      if (portalRef.current && document.body) {
        document.body.removeChild(portalRef.current);
      }
    };
  }, [id]);

  return isMounted && portalRef.current
    ? createPortal(children, portalRef.current)
    : null;
}

export default Portal;
