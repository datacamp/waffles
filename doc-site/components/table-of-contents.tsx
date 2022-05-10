import Link from 'next/link';
import { css } from '@emotion/react';
import { tokens } from '@datacamp/waffles/tokens';
import { Link as LinkBase } from '@datacamp/waffles/link';

import slugify from '../helpers/slugify';
import { useTableOfContentsEntries } from '../context/table-of-contents-context';

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
  max-width: 240px;
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

function TableOfContents() {
  const entries = useTableOfContentsEntries();

  if (entries.length > 0) {
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
