import { css } from '@emotion/react';

import Category from './navigation-category';
import Subcategory from './navigation-subcategory';
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
          <Link href="/introduction/roadmap">Roadmap</Link>
        </Category>
        <Category label="Foundation">
          <Link href="/foundation/design-tokens">Design Tokens</Link>
        </Category>
        <Category label="Components">
          <Subcategory label="Action">
            <Link href="/components/button">Button</Link>
            <Link href="/components/link">Link</Link>
          </Subcategory>
          <Subcategory label="Typography">
            <Link href="/components/heading">Heading</Link>
            <Link href="/components/paragraph">Paragraph</Link>
            <Link href="/components/display">Display</Link>
            <Link href="/components/chapeau">Chapeau</Link>
            <Link href="/components/code">Code</Link>
            <Link href="/components/code-block">Code Block</Link>
            <Link href="/components/text">Text</Link>
          </Subcategory>
          <Subcategory label="Overlay">
            <Link href="/components/tooltip">Tooltip</Link>
          </Subcategory>
          <Subcategory label="Content">
            <Link href="/components/icon">Icon</Link>
            <Link href="/components/content-container">Content Container</Link>
          </Subcategory>
          <Subcategory label="Utility">
            <Link href="/components/portal">Portal</Link>
            <Link href="/components/helpers">Helpers</Link>
          </Subcategory>
        </Category>
      </ul>
    </nav>
  );
}

export default Navigation;
