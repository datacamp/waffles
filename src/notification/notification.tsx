import React from 'react';

import { Heading } from '../heading';
import { Paragraph } from '../paragraph';
import { ScreenReaderOnly } from '../screen-reader-only';
import Icon from './icon';
import CloseButton from './close-button';
import {
  notificationStyle,
  contentStyle,
  titleStyle,
  descriptionStyle,
} from './styles';

type NotificationProps = {
  title: string;
  description?: React.ReactNode;
  variant?: 'default' | 'success' | 'warning' | 'error';
  inverted?: boolean;
  fullWidth?: boolean;
  closeable?: boolean;
  onClose?: () => void;
};

function Notification({
  title,
  description,
  variant = 'default',
  inverted = false,
  fullWidth = false,
  closeable = false,
  onClose,
}: NotificationProps) {
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
    <section role="status" css={notificationStyle({ variant })}>
      <Icon variant={variant} />
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
  );
}

export default Notification;
