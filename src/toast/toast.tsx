import React, { useRef } from 'react';

import {
  AttentionCircleInverted,
  CheckmarkCircleInverted,
  CrossCircleInverted,
} from '../icon';
import { Heading } from '../heading';
import { Paragraph } from '../paragraph';
import { ScreenReaderOnly } from '../screen-reader-only';
import CloseButton from './close-button';
import useHeight from './use-height';
import {
  animatedWrapperStyle,
  toastStyle,
  iconStyle,
  contentStyle,
  titleStyle,
  descriptionStyle,
} from './styles';

type ToastProps = {
  title: string;
  variant?: 'default' | 'success' | 'warning' | 'error';
  description?: React.ReactNode;
  isOpen: boolean;
  onClose: () => void;
};

function Toast({
  isOpen,
  onClose,
  title,
  variant = 'default',
  description,
}: ToastProps) {
  const wrapperRef = useRef<HTMLLIElement>(null);
  const height = useHeight(wrapperRef);

  function renderIcon() {
    switch (variant) {
      case 'success':
        return <CheckmarkCircleInverted />;
      case 'error':
        return <CrossCircleInverted />;
      default:
        return <AttentionCircleInverted />;
    }
  }

  function renderAnnouncement() {
    switch (variant) {
      case 'success':
        return <ScreenReaderOnly>Success:</ScreenReaderOnly>;
      case 'warning':
        return <ScreenReaderOnly>Warning:</ScreenReaderOnly>;
      case 'error':
        return <ScreenReaderOnly>Error:</ScreenReaderOnly>;
      default:
        return null;
    }
  }

  return (
    <li
      ref={wrapperRef}
      css={animatedWrapperStyle({ isVisible: isOpen, height })}
    >
      <section role="status" css={toastStyle({ variant })}>
        <div css={iconStyle()}>{renderIcon()}</div>
        <div css={contentStyle()}>
          <Heading as="h2" size="medium" css={titleStyle()}>
            {renderAnnouncement()}
            {title}
          </Heading>
          {description && (
            <Paragraph variant="secondary" css={descriptionStyle()}>
              {description}
            </Paragraph>
          )}
        </div>
        <CloseButton onClick={onClose} />
      </section>
    </li>
  );
}

export default Toast;
