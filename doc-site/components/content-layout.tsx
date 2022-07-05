import React from 'react';
import { useRouter } from 'next/router';
import { css } from '@emotion/react';
import { tokens } from '@datacamp/waffles/tokens';
import { Edit } from '@datacamp/waffles/icon';
import { useMediaQuery } from '@datacamp/waffles/hooks';
import { mediaQuery } from '@datacamp/waffles/helpers';
import { ErrorBoundary } from '@datacamp/waffles/error-boundary';
import { ContentContainer } from '@datacamp/waffles/content-container';
import { Button } from '@datacamp/waffles/button';

import { TableOfContentsProvider } from '../context/table-of-contents-context';

import TableOfContents from './table-of-contents';
import { ARTICLE_CONTENT_WIDTH } from './constants';
import BackToTop from './back-to-top';

const GITHUB_EDIT_URL =
  'https://github.com/datacamp/waffles/edit/master/doc-site/pages';

const containerStyle = css`
  display: block;
  padding-top: 0;

  ${mediaQuery.aboveLarge} {
    display: flex;
    padding-top: 0;
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

const asideStyle = css`
  padding-left: ${tokens.spacing.xlarge};
`;

type ContentLayoutProps = {
  header: React.ReactNode;
  children: React.ReactNode;
};

// Set of additional wrappers for markdown documentation pages
function ContentLayout({ header, children }: ContentLayoutProps) {
  const { pathname } = useRouter();
  const { isAboveLarge } = useMediaQuery();

  return (
    <ErrorBoundary>
      {header}
      <ContentContainer css={containerStyle}>
        <TableOfContentsProvider>
          <article css={articleStyle}>
            {children}
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
          </article>
          {isAboveLarge && (
            <aside css={asideStyle}>
              <TableOfContents />
              <BackToTop />
            </aside>
          )}
        </TableOfContentsProvider>
      </ContentContainer>
    </ErrorBoundary>
  );
}

export default ContentLayout;
