import React, { useState, useEffect } from 'react';
import { css } from '@emotion/react';

import { tokens } from '@datacamp/waffles/tokens';
import { useMediaQuery } from '@datacamp/waffles/hooks';
import { mediaQuery } from '@datacamp/waffles/helpers';
import {
  Rocket,
  Bookmark,
  Branch,
  Assignment,
  LineChart,
  Book,
  Chat,
  ExternalLink,
} from '@datacamp/waffles/icon';
import { Button } from '@datacamp/waffles/button';
import { Badge } from '@datacamp/waffles/badge';
import { Paragraph } from '@datacamp/waffles/paragraph';
import { SideNavigation as SideNav } from '@datacamp/waffles/side-navigation';

const layoutStyle = css`
  display: block;
  // Set 'min-height: 100vh;' for real-world application

  ${mediaQuery.aboveMedium} {
    display: grid;
    grid-template-columns: auto 1fr;
  }
`;

const contentStyle = css`
  background-color: ${tokens.colors.beige};
  padding: ${tokens.spacing.medium};
`;

// When working with react-router or in NextJS
// use useLocation or useRouter accordingly.
// For details check:
// https://github.com/datacamp-engineering/side-nav-workshop

function useHashLocation() {
  const [location, setLocation] = useState('');

  useEffect(() => {
    function handleHashChange() {
      setLocation(window.location.hash);
    }

    handleHashChange();

    window.addEventListener('hashchange', handleHashChange);

    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  return location;
}

type NavItemProps = {
  children: React.ReactNode;
  href: string;
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
  isNew?: boolean;
  isSubcategoryItem?: boolean;
  size?: React.ComponentProps<typeof SideNav.Item>['size'];
};

function NavItem({
  children,
  href,
  iconLeft,
  iconRight,
  isNew,
  isSubcategoryItem,
  size,
}: NavItemProps) {
  const location = useHashLocation();

  return (
    <SideNav.Item
      {...{ href, iconLeft, iconRight, isNew, isSubcategoryItem, size }}
      isActive={location === href}
    >
      {children}
    </SideNav.Item>
  );
}

function Example() {
  const { isAboveMedium } = useMediaQuery();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div css={layoutStyle}>
      <SideNav isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <div
          css={css`
            padding: ${tokens.spacing.medium};
            padding-bottom: 0;
          `}
        >
          <Button as="a" href="#getting-started" fullWidth>
            Getting Started
          </Button>
        </div>
        <SideNav.Nav>
          <SideNav.Category noDivider>
            <NavItem href="#progress" iconLeft={<Rocket />}>
              Progress
            </NavItem>
            <NavItem href="#bookmarks" iconLeft={<Bookmark />}>
              Bookmarks
            </NavItem>
          </SideNav.Category>
          <SideNav.Category label="Learn">
            <NavItem href="#custom-tracks" iconLeft={<Branch />}>
              Custom Tracks
            </NavItem>
            <NavItem href="#assignments" iconLeft={<Assignment />}>
              Assignments
            </NavItem>
            <SideNav.Subcategory label="Insights" iconLeft={<LineChart />}>
              <NavItem href="#reports" isNew>
                Reports
              </NavItem>
              <NavItem href="#skill-matrix">Skill Matrix</NavItem>
            </SideNav.Subcategory>
          </SideNav.Category>
          <SideNav.Category
            label={
              <Badge variant="grey" size="small">
                Beta
              </Badge>
            }
            noDivider
            css={css`
              margin-top: ${tokens.spacing.large};
            `}
          >
            <NavItem
              href="https://www.datacamp.com/"
              iconLeft={<Book size="xsmall" />}
              iconRight={<ExternalLink size="xsmall" />}
              size="small"
            >
              Documentation
            </NavItem>
            <NavItem
              href="#feedback"
              iconLeft={<Chat size="xsmall" />}
              size="small"
            >
              Give Feedback
            </NavItem>
          </SideNav.Category>
        </SideNav.Nav>
      </SideNav>
      <article css={contentStyle}>
        <Paragraph>
          Resize the viewport to make mobile menu trigger button to appear /
          disappear.
        </Paragraph>
        {isAboveMedium ? null : (
          <Button onClick={() => setIsOpen(true)}>Open</Button>
        )}
      </article>
    </div>
  );
}

export default Example;
