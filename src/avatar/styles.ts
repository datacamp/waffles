// Mappings between avatar's sizes and variants, and design tokens

import { css } from '@emotion/react';

import { tokens } from '../tokens';

import Avatar from './avatar';

const sizeMap = {
  xxsmall: {
    fontSize: '8px',
    sizing: '16px',
    contentSizing: '10px',
  },
  xsmall: {
    fontSize: tokens.fontSizes.small,
    sizing: '24px',
    contentSizing: '14px',
  },
  small: {
    fontSize: tokens.fontSizes.large,
    sizing: '32px',
    contentSizing: '18px',
  },
  medium: {
    fontSize: tokens.fontSizes.xxlarge,
    sizing: '40px',
    contentSizing: '22px',
  },
  large: {
    fontSize: '36px',
    sizing: '64px',
    contentSizing: '36px',
  },
  xlarge: {
    fontSize: '64px',
    sizing: '96px',
    contentSizing: '56px',
  },
  xxlarge: {
    fontSize: '96px',
    sizing: '128px',
    contentSizing: '76px',
  },
  huge: {
    fontSize: '116px',
    sizing: '160px',
    contentSizing: '96px',
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

type AvatarStyleOptions = {
  size: NonNullable<React.ComponentProps<typeof Avatar>['size']>;
  variant: NonNullable<React.ComponentProps<typeof Avatar>['variant']>;
};

export function avatarStyle({ size, variant }: AvatarStyleOptions) {
  return css`
    // Fix for background-color and border-radius combo artifacts
    background: radial-gradient(
      farthest-side,
      ${variantMap[variant].backgroundColor} calc(100% - 1px),
      transparent
    );

    color: ${variantMap[variant].color};
    border-radius: ${sizeMap[size].sizing};
    font-size: ${sizeMap[size].fontSize};
    line-height: ${sizeMap[size].sizing};
    width: ${sizeMap[size].sizing};
    height: ${sizeMap[size].sizing};
    font-family: ${tokens.fontFamilies.sansSerif};
    overflow: hidden;
  `;
}

type AvatarContentStyleOptions = {
  size: NonNullable<React.ComponentProps<typeof Avatar>['size']>;
  contentFill: boolean;
};

export function avatarContentStyle({
  size,
  contentFill,
}: AvatarContentStyleOptions) {
  return css`
    display: flex;
    width: 100%;
    height: 100%;
    justify-content: center;

    & > * {
      margin: auto 0;
      min-height: ${contentFill ? '100%' : sizeMap[size].contentSizing};
    }

    & > svg {
      width: ${contentFill ? '100%' : sizeMap[size].contentSizing};
    }

    & > :not(svg) {
      min-width: 100%;
    }
  `;
}
