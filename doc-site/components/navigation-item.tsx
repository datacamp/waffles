import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

import { SideNavigation as SideNav } from '@datacamp/waffles/side-navigation';

type NavigationItemProps = {
  href: string;
  children: React.ReactNode;
  isNew?: boolean;
  isSubcategoryItem?: boolean;
};

function NavigationItem({
  href,
  children,
  isNew,
  isSubcategoryItem,
}: NavigationItemProps) {
  const { pathname } = useRouter();
  const isActive = pathname === href;

  return (
    <Link href={href} passHref>
      <SideNav.Item {...{ isActive, isNew, isSubcategoryItem }}>
        {children}
      </SideNav.Item>
    </Link>
  );
}

export default NavigationItem;
