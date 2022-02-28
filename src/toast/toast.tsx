import React from 'react';

import { useAnimateTransition } from '../hooks';
import {
  AttentionCircleInverted,
  CheckmarkCircleInverted,
  CrossCircleInverted,
} from '../icon';
import { Heading } from '../heading';
import { Paragraph } from '../paragraph';
import { ScreenReaderOnly } from '../screen-reader-only';
import CloseButton from './close-button';
import {
  toastStyle,
  wrapperStyle,
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
  const isAnimating = useAnimateTransition(isOpen, 600);

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

  return isAnimating ? (
    <li css={wrapperStyle()}>
      <section role="status" css={toastStyle({ isVisible: isOpen, variant })}>
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
  ) : null;
}

export default Toast;
