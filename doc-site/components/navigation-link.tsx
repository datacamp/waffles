import React from 'react';
import Link from 'next/link';
import { useFocusRing } from '@react-aria/focus';
import { css } from '@emotion/react';
import { useRouter } from 'next/router';

import { tokens } from '@datacamp/waffles/tokens';
import { hexToRgba } from '@datacamp/waffles/helpers';

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
  transition: background-color 75ms ease-out, color 75ms ease-out,
    box-shadow 125ms ease-out;
  cursor: pointer;
  user-select: none;

  &:hover {
    color: ${tokens.colors.white};
    background-color: ${hexToRgba(
      tokens.colors.navySubtleTextOnDark,
      tokens.opacity.low,
    )};

    span {
      border-left-color: ${hexToRgba(tokens.colors.white, tokens.opacity.high)};
    }
  }
`;

const subLinkStyle = css`
  display: flex;
  align-items: center;
  height: 100%;
  margin-left: 12px;
  padding-left: ${tokens.spacing.medium};
  border-left: ${tokens.borderWidth.medium} solid
    ${hexToRgba(tokens.colors.navySubtleTextOnDark, tokens.opacity.high)};
  transition: border-color 75ms ease-out;
`;

type NavigationLinkProps = {
  href: string;
  children: React.ReactNode;
  isSubLink?: boolean;
} & React.HTMLProps<HTMLAnchorElement>;

function NavigationLink({
  href,
  children,
  isSubLink = false,
  ...restProps
}: NavigationLinkProps) {
  const { pathname } = useRouter();
  const isActive = pathname === href;

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
            ${isActive &&
            css`
              color: ${tokens.colors.white};

              &:hover span {
                border-left-color: ${tokens.colors.white};
              }
            `}
          `}
        >
          {isSubLink ? (
            <span
              css={css`
                ${subLinkStyle}
                ${isActive &&
                css`
                  border-left-color: ${tokens.colors.white};
                `}
              `}
            >
              {children}
            </span>
          ) : (
            children
          )}
        </a>
      </Link>
    </li>
  );
}

export default NavigationLink;
