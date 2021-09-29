import React from 'react';
import { css } from '@emotion/react';

import { tokens } from '@datacamp/waffles/tokens';
import { ContentContainer } from '@datacamp/waffles/content-container';
import { HEADER_HEIGHT } from './constants';
import Header from './page-header';
import Sidebar from './sidebar';
import Navigation from './navigation';

const wrapperStyle = css`
  display: flex;
  padding-top: ${HEADER_HEIGHT};
  min-height: 100vh;
`;

const mainStyle = css`
  background-color: ${tokens.colors.beigeSubtle};
  flex-grow: 1;
`;

type PageLayoutProps = {
  children: React.ReactNode;
};

function PageLayout({ children }: PageLayoutProps) {
  return (
    <>
      <Header />
      <div css={wrapperStyle}>
        <Sidebar>
          <Navigation />
        </Sidebar>
        <main css={mainStyle}>
          <ContentContainer>{children}</ContentContainer>
        </main>
      </div>
    </>
  );
}

export default PageLayout;
