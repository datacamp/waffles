import React from 'react';
import Link from 'next/link';
import { useFocusRing } from '@react-aria/focus';
import { css } from '@emotion/react';

import { tokens } from '@datacamp/waffles/tokens';
import { hexToRgba } from '@datacamp/waffles/utils';

const linkStyle = css`
  display: flex;
  align-items: center;
  padding-left: ${tokens.spacing.medium};
  padding-right: ${tokens.spacing.medium};
  height: ${tokens.sizing.medium};
  color: ${tokens.colors.navySubtleTextOnDark};
  font-family: ${tokens.fontFamilies.sansSerif};
  font-weight: ${tokens.fontWeights.regular};
  font-size: ${tokens.fontSizes.medium};
  line-height: ${tokens.lineHeights.tight};
  text-decoration: none;
  outline: 0;
  width: 100%;
  transition: background-color 75ms ease-out, color 125ms ease-out,
    box-shadow 125ms ease-out;
  cursor: pointer;
  user-select: none;

  &:hover {
    color: ${tokens.colors.white};
    background-color: ${hexToRgba(
      tokens.colors.navySubtleTextOnDark,
      tokens.opacity.low,
    )};
  }
`;

type NavigationLinkProps = {
  href: string;
  children: React.ReactNode;
} & React.HTMLProps<HTMLAnchorElement>;

function NavigationLink({ href, children, ...restProps }: NavigationLinkProps) {
  const { focusProps, isFocusVisible } = useFocusRing();

  return (
    <li>
      <Link href={href} passHref>
        <a
          {...focusProps}
          {...restProps}
          css={css`
            ${linkStyle}
            ${isFocusVisible &&
            css`
              box-shadow: inset 0 0 0 2px ${tokens.colors.blueDark};
            `}
          `}
        >
          {children}
        </a>
      </Link>
    </li>
  );
}

export default NavigationLink;
