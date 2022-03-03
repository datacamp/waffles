import React, { useState, useRef, useEffect } from 'react';

import { useCallbackRef } from '../hooks';
import useHeight from './use-height';
import Card from './card';
import { animatedWrapperStyle } from './styles';

type ToastProps = {
  title: string;
  variant?: 'default' | 'success' | 'warning' | 'error';
  description?: React.ReactNode;
  onClose: () => void;
};

function Toast({
  onClose,
  title,
  variant = 'default',
  description,
}: ToastProps) {
  // A flag to trigger enter / exit animation
  const [isVisible, setIsVisible] = useState(true);
  // For exit animation to work smoothly, height of animated wrapper is required
  const wrapperRef = useRef<HTMLLIElement>(null);
  const height = useHeight(wrapperRef);
  // Internal timer, a timeout after which the toast is closed automatically
  const autoCloseTimer = useRef<ReturnType<typeof setTimeout>>();

  const handleClose = useCallbackRef(() => {
    onClose();
  });

  // Close toast after close button is clicked
  // First it triggers exit animation, after that it clears internal timer
  // To let exit animation finish before toast unmount, close callback is triggered after a delay
  // Finally completely remove the toast
  function forceClose() {
    if (isVisible) {
      setIsVisible(false);
      clearTimeout(Number(autoCloseTimer.current));
      setTimeout(() => {
        handleClose();
      }, 600);
    }
  }

  // Close toast after timeout, tracked internally
  useEffect(() => {
    if (isVisible) {
      autoCloseTimer.current = setTimeout(() => {
        setIsVisible(false);
        setTimeout(() => {
          handleClose();
        }, 600);
      }, 6000);
    }

    return () => {
      clearTimeout(Number(autoCloseTimer.current));
    };
  }, [isVisible, handleClose]);

  return (
    <li ref={wrapperRef} css={animatedWrapperStyle({ isVisible, height })}>
      <Card {...{ title, variant, description }} onClose={forceClose} />
    </li>
  );
}

export default Toast;
