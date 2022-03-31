import { NotificationCard } from '../notification-card';
import { Heading } from '../heading';
import { Paragraph } from '../paragraph';
import { ScreenReaderOnly } from '../screen-reader-only';
import Toast from './toast';
import { toastStyle, titleStyle, descriptionStyle } from './styles';

type CardProps = Omit<
  React.ComponentProps<typeof Toast>,
  'disableAutoHide' | 'autoHideDuration'
>;

function Card({ title, variant = 'default', description, onClose }: CardProps) {
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
      variant={variant}
      onClose={onClose}
      closable
      css={toastStyle()}
    >
      <Heading as="h2" size="medium" css={titleStyle()}>
        {renderAnnouncement()}
        {title}
      </Heading>
      {description && (
        <Paragraph variant="secondary" css={descriptionStyle()}>
          {description}
        </Paragraph>
      )}
    </NotificationCard>
  );
}

export default Card;
