import { css } from '@emotion/react';

import Category from './navigation-category';
import Link from './navigation-link';

const listStyle = css`
  margin: 0;
  padding: 0;
  list-style: none;
`;

function Navigation() {
  return (
    <nav>
      <ul css={listStyle}>
        <Category label="Introduction">
          <Link href="/">Welcome</Link>
          <Link href="/introduction/setup">Setup</Link>
        </Category>
        <Category label="Components">
          <Link href="/components/heading">Heading</Link>
          <Link href="/components/paragraph">Paragraph</Link>
          <Link href="/components/tooltip">Tooltip</Link>
          <Link href="/components/portal">Portal</Link>
        </Category>
      </ul>
    </nav>
  );
}

export default Navigation;
