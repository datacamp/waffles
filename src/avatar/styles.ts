// Mappings between avatar's sizes and variants, and design tokens

import { css } from '@emotion/react';

import { tokens } from '../tokens';

import Avatar from './avatar';

const sizeMap = {
  xsmall: {
    fontSize: '10px',
    sizing: '24px',
  },
  small: {
    fontSize: '10px',
    sizing: '32px',
  },
  medium: {
    fontSize: tokens.fontSizes.small,
    sizing: '40px',
  },
  large: {
    fontSize: tokens.fontSizes.medium,
    sizing: '64px',
  },
  xlarge: {
    fontSize: tokens.fontSizes.medium,
    sizing: '96px',
  },
  xxlarge: {
    fontSize: tokens.fontSizes.medium,
    sizing: '128px',
  },
  xxxlarge: {
    fontSize: tokens.fontSizes.medium,
    sizing: '160px',
  },
};

const variantMap = {
  green: {
    color: tokens.colors.navy,
    backgroundColor: tokens.colors.green,
  },
  navy: {
    color: tokens.colors.white,
    backgroundColor: tokens.colors.navy,
  },
  white: {
    color: tokens.colors.navy,
    backgroundColor: tokens.colors.white,
  },
  red: {
    color: tokens.colors.navy,
    backgroundColor: tokens.colors.red,
  },
  orange: {
    color: tokens.colors.navy,
    backgroundColor: tokens.colors.orange,
  },
  yellow: {
    color: tokens.colors.navy,
    backgroundColor: tokens.colors.yellow,
  },
  blue: {
    color: tokens.colors.navy,
    backgroundColor: tokens.colors.blue,
  },
  purple: {
    color: tokens.colors.white,
    backgroundColor: tokens.colors.purple,
  },
  pink: {
    color: tokens.colors.navy,
    backgroundColor: tokens.colors.pink,
  },
  grey: {
    color: tokens.colors.navy,
    backgroundColor: tokens.colors.greyMedium,
  },
  greySubtle: {
    color: '#626D79',
    backgroundColor: tokens.colors.greyLight,
  },
};

type AvatarWrapperProps = {
  size: NonNullable<React.ComponentProps<typeof Avatar>['size']>;
  variant: NonNullable<React.ComponentProps<typeof Avatar>['variant']>;
};

export function avatarWrapperStyle({ size, variant }: AvatarWrapperProps) {
  return css`
    background-color: ${variantMap[variant].backgroundColor};
    color: ${variantMap[variant].color};
    border-radius: ${sizeMap[size].sizing};
    width: ${sizeMap[size].sizing};
    height: ${sizeMap[size].sizing};
  `;
}
