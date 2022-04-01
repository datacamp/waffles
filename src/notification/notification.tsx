import React, { useRef } from 'react';

import { NotificationCard } from '../notification-card';
import { Heading } from '../heading';
import { Paragraph } from '../paragraph';
import { ScreenReaderOnly } from '../screen-reader-only';
import useInternalLayout from './use-internal-layout';
import {
  notificationStyle,
  contentStyle,
  titleStyle,
  descriptionStyle,
  textContentStyle,
  actionStyle,
} from './styles';

type NotificationProps = {
  title: string;
  description?: React.ReactNode;
  variant?: 'default' | 'success' | 'warning' | 'error';
  inverted?: boolean;
  closable?: boolean;
  onClose?: () => void;
  action?: React.ReactNode;
};

function Notification({
  title,
  description,
  variant = 'default',
  inverted = false,
  closable = false,
  onClose,
  action,
}: NotificationProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const layout = useInternalLayout(cardRef);

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
    <NotificationCard
      {...{ variant, inverted, closable, onClose }}
      ref={cardRef}
      css={notificationStyle({ variant, inverted })}
    >
      <div css={contentStyle({ layout })}>
        <div css={textContentStyle({ layout })}>
          <Heading as="h2" size="medium" inverted={inverted} css={titleStyle()}>
            {renderAnnouncement()}
            {title}
          </Heading>
          {description && (
            <Paragraph
              variant="primary"
              inverted={inverted}
              css={descriptionStyle()}
            >
              {description}
            </Paragraph>
          )}
        </div>
        {action && <div css={actionStyle({ layout })}>{action}</div>}
      </div>
    </NotificationCard>
  );
}

export default Notification;
