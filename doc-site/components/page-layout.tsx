import React from 'react';
import { css } from '@emotion/react';
import { useRouter } from 'next/router';

import { tokens } from '@datacamp/waffles/tokens';
import { Button } from '@datacamp/waffles/button';
import { ContentContainer } from '@datacamp/waffles/content-container';
import { Edit } from '@datacamp/waffles/icon';
import { HEADER_HEIGHT, ARTICLE_CONTENT_WIDTH } from './constants';
import Header from './page-header';
import Sidebar from './sidebar';
import Navigation from './navigation';
import TableOfContents from './table-of-contents';

const GITHUB_EDIT_URL =
  'https://github.com/datacamp/waffles/edit/master/doc-site/pages';

const wrapperStyle = css`
  display: flex;
  padding-top: ${HEADER_HEIGHT};
  min-height: 100vh;
`;

const containerStyle = css`
  display: flex;
`;

const mainStyle = css`
  background-color: ${tokens.colors.beigeSubtle};
  flex-grow: 1;
  overflow: hidden;
`;

const articleStyle = css`
  max-width: ${ARTICLE_CONTENT_WIDTH};
  flex-grow: 1;
`;

const footerStyle = css`
  display: flex;
  justify-content: flex-end;
  margin-top: ${tokens.spacing.large};
`;

type PageLayoutProps = {
  children: React.ReactNode;
  hideEditLink?: boolean;
};

function PageLayout({ children, hideEditLink = false }: PageLayoutProps) {
  const { pathname } = useRouter();

  return (
    <>
      <Header />
      <div css={wrapperStyle}>
        <Sidebar>
          <Navigation />
        </Sidebar>
        <main css={mainStyle}>
          <ContentContainer css={containerStyle}>
            <article css={articleStyle}>
              {children}
              {!hideEditLink && (
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
            </article>
            <TableOfContents>{children}</TableOfContents>
          </ContentContainer>
        </main>
      </div>
    </>
  );
}

export default PageLayout;
