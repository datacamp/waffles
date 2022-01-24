import React from 'react';
import { css } from '@emotion/react';
import { useRouter } from 'next/router';

import { tokens } from '@datacamp/waffles/tokens';
import { mediaQuery } from '@datacamp/waffles/helpers';
import { useMediaQuery } from '@datacamp/waffles/hooks';
import { Button } from '@datacamp/waffles/button';
import { ContentContainer } from '@datacamp/waffles/content-container';
import { Edit } from '@datacamp/waffles/icon';

import { TableOfContentsProvider } from '../context/table-of-contents-context';
import { ARTICLE_CONTENT_WIDTH } from './constants';
import TableOfContents from './table-of-contents';

const GITHUB_EDIT_URL =
  'https://github.com/datacamp/waffles/edit/master/doc-site/pages';

const containerStyle = css`
  display: block;

  ${mediaQuery.aboveLarge} {
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

type ContentLayoutProps = {
  children: React.ReactNode;
};

// Set of additional wrappers for markdown documentation pages

function ContentLayout({ children }: ContentLayoutProps) {
  const { pathname } = useRouter();
  const { isAboveLarge } = useMediaQuery();

  return (
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
        {isAboveLarge && <TableOfContents />}
      </TableOfContentsProvider>
    </ContentContainer>
  );
}

export default ContentLayout;
