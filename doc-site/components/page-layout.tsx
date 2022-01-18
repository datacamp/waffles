import React, { useState } from 'react';
import { css } from '@emotion/react';
import { useRouter } from 'next/router';

import { tokens } from '@datacamp/waffles/tokens';
import { mediaQuery } from '@datacamp/waffles/helpers';
import { useMediaQuery } from '@datacamp/waffles/hooks';
import { Button } from '@datacamp/waffles/button';
import { ContentContainer } from '@datacamp/waffles/content-container';
import { Edit } from '@datacamp/waffles/icon';

import { TableOfContentsProvider } from '../context/table-of-contents-context';
import { HEADER_HEIGHT, ARTICLE_CONTENT_WIDTH } from './constants';
import Header from './page-header';
import Navigation from './navigation';
import TableOfContents from './table-of-contents';

const GITHUB_EDIT_URL =
  'https://github.com/datacamp/waffles/edit/master/doc-site/pages';

const wrapperStyle = css`
  display: flex;
  min-height: 100vh;
  padding-top: ${HEADER_HEIGHT};

  ${mediaQuery.small} {
    display: grid;
    grid-template-columns: auto 1fr;
  }
`;

const mainStyle = css`
  background-color: ${tokens.colors.beigeSubtle};
  overflow: hidden;
  width: 100%;
`;

const containerStyle = css`
  display: block;

  ${mediaQuery.large} {
    display: flex;
  }
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
  const [isNavOpen, setNavOpen] = useState(false);
  const { isAboveLarge } = useMediaQuery();

  return (
    <>
      <Header onNavOpen={() => setNavOpen(true)} />
      <div css={wrapperStyle}>
        <Navigation isOpen={isNavOpen} onClose={() => setNavOpen(false)} />
        <main css={mainStyle}>
          <ContentContainer css={containerStyle}>
            <TableOfContentsProvider>
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
              {isAboveLarge && <TableOfContents />}
            </TableOfContentsProvider>
          </ContentContainer>
        </main>
      </div>
    </>
  );
}

export default PageLayout;
