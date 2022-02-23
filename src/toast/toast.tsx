import React from 'react';

import {
  AttentionCircleInverted,
  CheckmarkCircleInverted,
  CrossCircleInverted,
} from '../icon';
import { Heading } from '../heading';
import { Paragraph } from '../paragraph';
import { ScreenReaderOnly } from '../screen-reader-only';
import { toastStyle, iconStyle, titleStyle, descriptionStyle } from './styles';

type ToastProps = {
  title: string;
  variant?: 'default' | 'success' | 'warning' | 'error';
  description?: React.ReactNode;
};

function Toast({ title, variant = 'default', description }: ToastProps) {
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
    <section role="status" css={toastStyle({ variant })}>
      <div css={iconStyle()}>{renderIcon()}</div>
      <div>
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
    </section>
  );
}

export default Toast;
