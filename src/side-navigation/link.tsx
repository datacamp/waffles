import React from 'react';
import { useFocusRing } from '@react-aria/focus';
import { mergeProps } from '@react-aria/utils';

import { linkStyle, subLinkStyle } from './styles';

type LinkProps = {
  href: string;
  children: React.ReactNode;
  isActive?: boolean;
  isSubLink?: boolean;
} & React.HTMLProps<HTMLAnchorElement>;

function Link({
  href,
  children,
  isActive = false,
  isSubLink = false,
  ...restProps
}: LinkProps) {
  const { focusProps, isFocusVisible } = useFocusRing();

  return (
    <li>
      <a
        {...mergeProps(focusProps, restProps)}
        href={href}
        css={linkStyle({ isActive, isFocusVisible })}
      >
        {isSubLink ? (
          <span css={subLinkStyle({ isActive })}>{children}</span>
        ) : (
          children
        )}
      </a>
    </li>
  );
}

export default Link;
