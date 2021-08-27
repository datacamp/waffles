import { tokens } from '../tokens';
import { hexToRgba } from '../utils';

// Mappings between button's sizes and variants, and design tokens

export const sizeMap = {
  small: {
    sizing: tokens.sizing.small,
    spacing: tokens.spacing.small,
  },
  medium: {
    sizing: tokens.sizing.medium,
    spacing: tokens.spacing.medium,
  },
  large: {
    sizing: tokens.sizing.large,
    spacing: tokens.spacing.medium,
  },
};

export const regularVariantMap = {
  primary: {
    color: tokens.colors.navy,
    backgroundColor: tokens.colors.green,
    hoverColor: tokens.colors.greenLight,
    borderColor: 'transparent',
  },
  secondary: {
    color: tokens.colors.navy,
    backgroundColor: 'transparent',
    hoverColor: hexToRgba(tokens.colors.navy, tokens.opacity.low),
    borderColor: hexToRgba(tokens.colors.navy, tokens.opacity.high),
  },
  plain: {
    color: tokens.colors.blueDarkText,
    backgroundColor: 'transparent',
    hoverColor: hexToRgba(tokens.colors.navy, tokens.opacity.low),
    borderColor: 'transparent',
  },
  destructive: {
    color: tokens.colors.navy,
    backgroundColor: tokens.colors.red,
    hoverColor: tokens.colors.redLight,
    borderColor: 'transparent',
  },
};

export const invertedVariantMap = {
  ...regularVariantMap,
  secondary: {
    color: tokens.colors.white,
    backgroundColor: 'transparent',
    hoverColor: hexToRgba(tokens.colors.white, tokens.opacity.low),
    borderColor: hexToRgba(tokens.colors.white, tokens.opacity.high),
  },
  plain: {
    color: tokens.colors.blueDark,
    backgroundColor: 'transparent',
    hoverColor: hexToRgba(tokens.colors.white, tokens.opacity.low),
    borderColor: 'transparent',
  },
};
