import {
  CheckmarkCircleInverted,
  CrossCircleInverted,
  AttentionInverted,
  InfoCircleInverted,
  RocketInverted,
} from '../icon';

import { iconWrapperStyle, iconStyle, iconBackgroundStyle } from './styles';
import NotificationCard from './notification-card';

type IconProps = {
  variant: NonNullable<
    React.ComponentProps<typeof NotificationCard>['variant']
  >;
  inverted: boolean;
};

function Icon({ variant, inverted }: IconProps) {
  function renderIcon() {
    switch (variant) {
      case 'success':
        return <CheckmarkCircleInverted />;
      case 'warning':
        return <AttentionInverted />;
      case 'error':
        return <CrossCircleInverted />;
      case 'upgrade':
        return <RocketInverted />;
      default:
        return <InfoCircleInverted />;
    }
  }

  return (
    <div css={iconWrapperStyle()}>
      <div css={iconStyle({ variant, inverted })}>{renderIcon()}</div>
      <div css={iconBackgroundStyle({ variant, inverted })} />
    </div>
  );
}

export default Icon;
