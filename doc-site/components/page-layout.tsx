import React from 'react';
import { css } from '@emotion/react';
import { useRouter } from 'next/router';

import { tokens } from '@datacamp/waffles/tokens';
import { Button } from '@datacamp/waffles/button';
import { ContentContainer } from '@datacamp/waffles/content-container';
import { Edit } from '@datacamp/waffles/icon';
import { HEADER_HEIGHT } from './constants';
import Header from './page-header';
import Sidebar from './sidebar';
import Navigation from './navigation';

const GITHUB_EDIT_URL =
  'https://github.com/datacamp/waffles/edit/master/doc-site/pages';

const wrapperStyle = css`
  display: flex;
  padding-top: ${HEADER_HEIGHT};
  min-height: 100vh;
`;

const mainStyle = css`
  background-color: ${tokens.colors.beigeSubtle};
  flex-grow: 1;
`;

const footerStyle = css`
  display: flex;
  justify-content: flex-end;
  margin-top: ${tokens.spacing.large};
`;

type PageLayoutProps = {
  children: React.ReactNode;
};

function PageLayout({ children }: PageLayoutProps) {
  const { pathname } = useRouter();
  const isEditable = pathname !== '/';

  return (
    <>
      <Header />
      <div css={wrapperStyle}>
        <Sidebar>
          <Navigation />
        </Sidebar>
        <main css={mainStyle}>
          <ContentContainer>
            {children}
            {isEditable && (
              <footer css={footerStyle}>
                <Button
                  as="a"
                  href={`${GITHUB_EDIT_URL}${pathname}.mdx`}
                  variant="plain"
                  size="small"
                  iconLeft={<Edit />}
                >
                  Edit This Page
                </Button>
              </footer>
            )}
          </ContentContainer>
        </main>
      </div>
    </>
  );
}

export default PageLayout;
