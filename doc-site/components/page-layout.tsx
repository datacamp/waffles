import React, { useState } from 'react';
import { css } from '@emotion/react';
import { tokens } from '@datacamp/waffles/tokens';
import { mediaQuery } from '@datacamp/waffles/helpers';

import TopNavigation from './top-navigation';
import Navigation from './navigation';
import { HEADER_HEIGHT } from './constants';

const layoutStyle = css`
  display: flex;
  min-height: 100vh;
  padding-top: ${HEADER_HEIGHT};

  ${mediaQuery.aboveMedium} {
    display: grid;
    grid-template-columns: auto 1fr;
  }
`;

const mainStyle = css`
  background-color: ${tokens.colors.beigeSubtle};
  overflow: hidden;
  width: 100%;
`;

type PageLayoutProps = {
  children: React.ReactNode;
};

// Streamlined layout for each page
// On desktop classic two column layout: side navigation to the left and main content to the right
// On mobile one column layout: single content column and fixed positioned side navigation

function PageLayout({ children }: PageLayoutProps) {
  const [isNavOpen, setNavOpen] = useState(false);

  return (
    <>
      <TopNavigation onNavOpen={() => setNavOpen(true)} />
      <div css={layoutStyle}>
        <Navigation isOpen={isNavOpen} onClose={() => setNavOpen(false)} />
        <main css={mainStyle}>{children}</main>
      </div>
    </>
  );
}

export default PageLayout;
