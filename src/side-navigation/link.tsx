import React from 'react';
import { useFocusRing } from '@react-aria/focus';
import { mergeProps } from '@react-aria/utils';

import { linkStyle, linkInnerContentStyle, subLinkStyle } from './styles';

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

  function renderContent() {
    if (isSubLink) {
      return <span css={subLinkStyle({ isActive })}>{children}</span>;
    } else if (icon) {
      return (
        <>
          {icon}
          <span css={linkInnerContentStyle()}>{children}</span>
        </>
      );
    }

    return children;
  }

  return (
    <li>
      <a
        {...mergeProps(focusProps, restProps)}
        href={href}
        css={linkStyle({ isActive, isFocusVisible })}
      >
        {renderContent()}
      </a>
    </li>
  );
}

export default Link;
