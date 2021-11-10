import React, { Children } from 'react';
import Link from 'next/link';
import { css } from '@emotion/react';

import { tokens } from '@datacamp/waffles/tokens';
import { Link as LinkBase } from '@datacamp/waffles/link';
import slugify from '../helpers/slugify';

const linkStyle = css`
  color: ${tokens.colors.navySubtleTextOnLight};
  font-size: ${tokens.fontSizes.medium};
  font-weight: ${tokens.fontWeights.regular};
  line-height: ${tokens.lineHeights.default};
`;

const listStyle = css`
  margin: 0;
  padding-left: ${tokens.spacing.xlarge};
  position: fixed;
`;

const listItemStyle = css`
  display: flex;
  list-style: none;
  margin-bottom: ${tokens.spacing.small};
`;

type EntryProps = {
  name: string;
};

function Entry({ name }: EntryProps) {
  return (
    <li css={listItemStyle}>
      <Link href={`#${slugify(name)}`} passHref>
        <LinkBase css={linkStyle}>{name}</LinkBase>
      </Link>
    </li>
  );
}

type TableOfContentsProps = {
  children: React.ReactNode;
};

// Return array of H2 elements text content
function tableOfContentsEntries(content: JSX.Element[]) {
  return content.reduce<string[]>((entries, element) => {
    if (element.type?.name.toLowerCase().includes('h2')) {
      return entries.concat(element.props.children);
    }
    return entries;
  }, []);
}

function TableOfContents({ children }: TableOfContentsProps) {
  const firstChild = Children.toArray(children)[0] as JSX.Element;
  const content = firstChild.props.children as JSX.Element[];
  const entries = Array.isArray(content) && tableOfContentsEntries(content);

  if (entries && entries.length > 0) {
    return (
      <aside>
        <ul css={listStyle}>
          {entries.map((entry, index) => (
            <Entry key={`toc-entry-${index}`} name={entry} />
          ))}
        </ul>
      </aside>
    );
  }

  return null;
}

export default TableOfContents;
