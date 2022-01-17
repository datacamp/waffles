import { useState } from 'react';
import { css } from '@emotion/react';

import { tokens } from '../../tokens';
import { Home, Cog, AddCircle, Flash, Compass, Book, Chat } from '../../icon';
import { Button } from '../../button';
import { Badge } from '../../badge';
import { SideNavigation } from '../index';

const layoutStyle = css`
  display: grid;
  grid-template-columns: auto 1fr;
  min-height: 100vh;
`;

const mainContent = css`
  padding: ${tokens.spacing.medium};
`;

function Story() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div css={layoutStyle}>
      <SideNavigation isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <SideNavigation.Nav>
          <SideNavigation.Category noDivider>
            <SideNavigation.Item
              iconLeft={<Home />}
              iconRight={<AddCircle />}
              href="/"
            >
              Welcome
            </SideNavigation.Item>
            <SideNavigation.Item isActive iconLeft={<Cog />} href="/setup">
              Setup
            </SideNavigation.Item>
          </SideNavigation.Category>
          <SideNavigation.Category label="Components">
            <SideNavigation.Subcategory iconLeft={<Flash />} label="Action">
              <SideNavigation.Item href="/button">Button</SideNavigation.Item>
              <SideNavigation.Item href="/link">Link</SideNavigation.Item>
            </SideNavigation.Subcategory>
            <SideNavigation.Subcategory
              iconLeft={<Compass />}
              label="Navigation"
            >
              <SideNavigation.Item isNew href="/side-nav">
                Side Navigation
              </SideNavigation.Item>
              <SideNavigation.Item href="/tabs">Tabs</SideNavigation.Item>
            </SideNavigation.Subcategory>
          </SideNavigation.Category>
          <SideNavigation.Category
            label={
              <Badge size="small" color={tokens.colors.greyDark}>
                Beta
              </Badge>
            }
            noDivider
          >
            <SideNavigation.Item
              size="small"
              iconLeft={<Book size="xsmall" />}
              href="/documentation"
            >
              Documentation
            </SideNavigation.Item>
            <SideNavigation.Item
              size="small"
              iconLeft={<Chat size="xsmall" />}
              href="/give-feedback"
            >
              Give Feedback
            </SideNavigation.Item>
          </SideNavigation.Category>
        </SideNavigation.Nav>
      </SideNavigation>
      <article css={mainContent}>
        <Button onClick={() => setIsOpen(true)}>Open</Button>
      </article>
    </div>
  );
}

export default Story;
