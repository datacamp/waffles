import React from 'react';
import Link from './link';

type ItemProps = {
  href: string;
  children: React.ReactNode;
  icon?: React.ReactNode;
  isActive?: boolean;
  isSubLink?: boolean;
} & React.AnchorHTMLAttributes<HTMLAnchorElement>;

function Item(props: ItemProps) {
  return (
    <li>
      <Link {...props}></Link>
    </li>
  );
}

export default Item;
