import { css } from '@emotion/react';

import { tokens } from '@datacamp/waffles/tokens';
import { useMediaQuery } from '@datacamp/waffles/hooks';
import { hexToRgba } from '@datacamp/waffles/helpers';
import { Text } from '@datacamp/waffles/text';
import { SideNavigation as SideNav } from '@datacamp/waffles/side-navigation';

import metadata from '../../package.json';
import Item from './navigation-item';

const versionStyle = css`
  color: ${tokens.colors.white};
  padding-left: ${tokens.spacing.medium};
  padding-top: ${tokens.spacing.medium};
`;

const copyrightStyle = css`
  display: block;
  color: ${hexToRgba(tokens.colors.navySubtleTextOnDark, tokens.opacity.high)};
  font-size: ${tokens.fontSizes.small};
  padding: ${tokens.spacing.medium};
  padding-top: ${tokens.spacing.large};
  user-select: none;
`;

type NavigationProps = {
  isOpen: boolean;
  onClose: () => void;
};

function Navigation({ isOpen, onClose }: NavigationProps) {
  const { isAboveSmall } = useMediaQuery();

  return (
    <SideNav isOpen={isOpen} onClose={onClose}>
      {isAboveSmall ? null : (
        <Text as="p" css={versionStyle}>{`v${metadata.version}`}</Text>
      )}
      <SideNav.Nav>
        <SideNav.Category label="Overview" noDivider>
          <Item href="/">Welcome</Item>
          <Item href="/overview/setup">Setup</Item>
          <Item href="/overview/roadmap">Roadmap</Item>
        </SideNav.Category>
        <SideNav.Category label="Foundation">
          <Item href="/foundation/design-tokens">Design Tokens</Item>
          <Item href="/foundation/accessibility">Accessibility</Item>
        </SideNav.Category>
        <SideNav.Category label="Components">
          <SideNav.Subcategory label="Action">
            <Item href="/components/button">Button</Item>
            <Item href="/components/link">Link</Item>
          </SideNav.Subcategory>
          <SideNav.Subcategory label="Typography">
            <Item href="/components/heading">Heading</Item>
            <Item href="/components/paragraph">Paragraph</Item>
            <Item href="/components/display">Display</Item>
            <Item href="/components/chapeau">Chapeau</Item>
            <Item href="/components/code">Code</Item>
            <Item href="/components/code-block">Code Block</Item>
            <Item href="/components/text">Text</Item>
          </SideNav.Subcategory>
          <SideNav.Subcategory label="Navigation">
            <Item href="/components/side-navigation">Side Navigation</Item>
            <Item href="/components/tabs">Tabs</Item>
          </SideNav.Subcategory>
          <SideNav.Subcategory label="Form">
            <Item href="/components/form-field" isNew>
              Form Field
            </Item>
            <Item href="/components/input">Input</Item>
            <Item href="/components/text-area">Text Area</Item>
            <Item href="/components/select">Select</Item>
            <Item href="/components/checkbox">Checkbox</Item>
            <Item href="/components/switch">Switch</Item>
            <Item href="/components/radio">Radio</Item>
          </SideNav.Subcategory>
          <SideNav.Subcategory label="Overlay">
            <Item href="/components/dialog" isNew>
              Dialog
            </Item>
            <Item href="/components/alert-dialog" isNew>
              Alert Dialog
            </Item>
            <Item href="/components/drawer" isNew>
              Drawer
            </Item>
            <Item href="/components/tooltip">Tooltip</Item>
          </SideNav.Subcategory>
          <SideNav.Subcategory label="Content">
            <Item href="/components/badge" isNew>
              Badge
            </Item>
            <Item href="/components/icon">Icon</Item>
            <Item href="/components/content-container">Content Container</Item>
          </SideNav.Subcategory>
          <SideNav.Subcategory label="Utility">
            <Item href="/components/portal">Portal</Item>
            <Item href="/components/screen-reader-only">
              Screen Reader Only
            </Item>
            <Item href="/components/helpers">Helpers</Item>
            <Item href="/components/hooks">Hooks</Item>
          </SideNav.Subcategory>
        </SideNav.Category>
      </SideNav.Nav>
      <Text as="small" css={copyrightStyle}>
        © 2022 DataCamp, Inc.
      </Text>
    </SideNav>
  );
}

export default Navigation;
