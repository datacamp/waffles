import Link from 'next/link';
import { css } from '@emotion/react';
import { tokens } from '@datacamp/waffles/tokens';
import { Link as LinkBase } from '@datacamp/waffles/link';
import { hexToRgba } from '@datacamp/waffles/helpers';
import { Heading } from '@datacamp/waffles/heading';

import slugify from '../helpers/slugify';
import { useTableOfContentsEntries } from '../context/table-of-contents-context';

const contentsTableStyle = css`
  position: fixed;
  margin: 0;
  max-width: 240px;
`;

const headingStyle = css`
  font-size: ${tokens.fontSizes.xsmall};
  letter-spacing: ${tokens.letterSpacing.relaxed};
  line-height: ${tokens.lineHeights.default};
`;

const linkStyle = css`
  color: ${tokens.colors.navySubtleTextOnLight};
  font-size: ${tokens.fontSizes.small};
  font-weight: ${tokens.fontWeights.regular};
  line-height: ${tokens.lineHeights.relaxed};
`;

const listStyle = css`
  padding: 0;
`;

type ListItemStyleOptions = {
  isActive: boolean;
};

function listItemStyle({ isActive }: ListItemStyleOptions) {
  return css`
    display: flex;
    list-style: none;
    padding: ${tokens.spacing.xsmall} ${tokens.spacing.medium};
    border-left: ${isActive
      ? `2px solid ${tokens.colors.navy}`
      : `2px solid ${hexToRgba(tokens.colors.navy, tokens.opacity.low)}`};
  `;
}

type EntryProps = {
  name: string;
  isActive: boolean;
};

function Entry({ name, isActive }: EntryProps) {
  return (
    <li css={listItemStyle({ isActive })}>
      <Link href={`#${slugify(name)}`} passHref>
        <LinkBase css={linkStyle}>{name}</LinkBase>
      </Link>
    </li>
  );
}

function TableOfContents() {
  const content = useTableOfContentsEntries();

  if (content.entries.length > 0) {
    return (
      <div css={contentsTableStyle}>
        <Heading as="h2" css={headingStyle}>
          CONTENT
        </Heading>
        <ul css={listStyle}>
          {content.entries.map((entry, index) => (
            <Entry
              key={`toc-entry-${index}`}
              name={entry}
              isActive={content.activeSection === slugify(entry)}
            />
          ))}
        </ul>
      </div>
    );
  }

  return null;
}

export default TableOfContents;
