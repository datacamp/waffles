import React, { Children, cloneElement, isValidElement } from 'react';

import Link from './link';
import { listStyle } from './styles';

type SubcategoryBaseProps = {
  label: string;
  children: React.ReactNode;
  icon?: React.ReactNode;
};

type SubcategoryLinkProps = {
  href: string;
  isActive?: boolean;
} & SubcategoryBaseProps;

type SubcategoryRegularProps = {
  href?: never;
  isActive?: never;
} & SubcategoryBaseProps;

type SubcategoryProps = SubcategoryLinkProps | SubcategoryRegularProps;

function Subcategory({
  label,
  icon,
  children,
  href,
  isActive = false,
  ...restProps
}: SubcategoryProps) {
  // Inject isSubLink prop to every child
  function renderChildren() {
    return Children.map(children, (child) => {
      if (isValidElement(child)) {
        return cloneElement(child, {
          isSubLink: true,
        });
      }

      return null;
    });
  }

  return (
    <li>
      <Link
        {...(href ? { href, isActive } : { as: 'div' })}
        icon={icon}
        {...restProps}
      >
        {label}
      </Link>
      <ul css={listStyle()}>{renderChildren()}</ul>
    </li>
  );
}

export default Subcategory;
