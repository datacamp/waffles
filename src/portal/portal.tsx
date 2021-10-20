import React, { useEffect, useState, useRef } from 'react';
import { createPortal } from 'react-dom';

type PortalProps = {
  /* The content to render into the portal. */
  children: React.ReactNode;
};

function Portal({ children }: PortalProps) {
  const element = useRef<HTMLElement | null>(null);
  const [isMounted, setIsMounted] = useState(false);
  const [, forceUpdate] = useState(Object.create(null));

  // Check wheter component is mounted or not, since useEffect doesn't trigger on server
  // Therefore all DOM objects and methods will be available
  useEffect(() => {
    setIsMounted(true);

    return () => {
      setIsMounted(false);
    };
  }, []);

  // Create portal node in document's body
  useEffect(() => {
    if (isMounted) {
      element.current = document.createElement('div');
      document.body.appendChild(element.current);
      // Simple trick to force re-render
      forceUpdate(Object.create(null));
    }

    return () => {
      if (isMounted && element.current) {
        document.body.removeChild(element.current);
      }
    };
  }, [isMounted]);

  return element.current ? createPortal(children, element.current) : null;
}

export default Portal;
