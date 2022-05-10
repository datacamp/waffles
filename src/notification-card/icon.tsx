import { iconWrapperStyle, iconStyle, iconBackgroundStyle } from './styles';
import NotificationCard from './notification-card';

import { tokens } from '../tokens';
import {
  CheckmarkCircleInverted,
  CrossCircleInverted,
  AttentionCircleInverted,
  InfoCircleInverted,
  RocketInverted,
} from '../icon';

const regularVariantMap = {
  default: {
    icon: <InfoCircleInverted />,
    iconColor: tokens.colors.blueDark,
    backgroundColor: tokens.colors.white,
  },
  success: {
    icon: <CheckmarkCircleInverted />,
    iconColor: tokens.colors.green,
    backgroundColor: tokens.colors.navy,
  },
  warning: {
    icon: <AttentionCircleInverted />,
    iconColor: tokens.colors.orangeLight,
    backgroundColor: tokens.colors.navy,
  },
  error: {
    icon: <CrossCircleInverted />,
    iconColor: tokens.colors.red,
    backgroundColor: tokens.colors.white,
  },
  upgrade: {
    icon: <RocketInverted />,
    iconColor: tokens.colors.purple,
    backgroundColor: 'transparent',
  },
};

const invertedVariantMap = {
  ...regularVariantMap,
  upgrade: {
    ...regularVariantMap.upgrade,
    iconColor: tokens.colors.purpleLight,
  },
};

type IconProps = {
  variant: NonNullable<
    React.ComponentProps<typeof NotificationCard>['variant']
  >;
  inverted: boolean;
};

function Icon({ variant, inverted }: IconProps) {
  const variantMap = inverted ? invertedVariantMap : regularVariantMap;

  return (
    <div css={iconWrapperStyle()}>
      <div css={iconStyle({ iconColor: variantMap[variant].iconColor })}>
        {variantMap[variant].icon}
      </div>
      <div
        css={iconBackgroundStyle({
          backgroundColor: variantMap[variant].backgroundColor,
        })}
      />
    </div>
  );
}

export default Icon;
