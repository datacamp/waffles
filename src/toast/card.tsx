import {
  AttentionCircleInverted,
  CheckmarkCircleInverted,
  CrossCircleInverted,
} from '../icon';
import { Heading } from '../heading';
import { Paragraph } from '../paragraph';
import { ScreenReaderOnly } from '../screen-reader-only';
import Toast from './toast';
import CloseButton from './close-button';
import {
  toastStyle,
  iconStyle,
  contentStyle,
  titleStyle,
  descriptionStyle,
} from './styles';

type CardProps = Omit<
  React.ComponentProps<typeof Toast>,
  'disableAutoHide' | 'autoHideDuration'
>;

function Card({ onClose, title, variant = 'default', description }: CardProps) {
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

export default Card;
