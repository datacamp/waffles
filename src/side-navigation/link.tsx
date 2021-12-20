import React from 'react';
import { useFocusRing } from '@react-aria/focus';
import { mergeProps } from '@react-aria/utils';

import { Text } from '../text';
import { linkStyle, linkInnerContentStyle } from './styles';

type LinkProps = {
  href: string;
  children: React.ReactNode;
  icon?: React.ReactNode;
  isActive?: boolean;
  isSubLink?: boolean;
} & React.HTMLProps<HTMLAnchorElement>;

function Link({
  href,
  children,
  icon,
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
        {!isSubLink && icon}
        <Text
          css={linkInnerContentStyle({ hasIcon: !!icon, isSubLink, isActive })}
        >
          {children}
        </Text>
      </a>
    </li>
  );
}

export default Link;
