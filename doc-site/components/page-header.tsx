import { css } from '@emotion/react';
import Link from 'next/link';

import { tokens } from '@datacamp/waffles/tokens';
import { Button } from '@datacamp/waffles/button';
import { Text } from '@datacamp/waffles/text';
import { useMediaQuery } from '@datacamp/waffles/hooks';
import { mediaQuery } from '@datacamp/waffles/helpers';
import { Menu, GithubBrand } from '@datacamp/waffles/icon';
import metadata from '../../package.json';
import { HEADER_HEIGHT } from './constants';
import Logo from './logo';

const headerStyle = css`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: ${HEADER_HEIGHT};
  background-color: ${tokens.colors.white};
  box-shadow: ${tokens.boxShadow.thin}, ${tokens.boxShadow.medium};
  padding-left: ${tokens.spacing.small};
  padding-right: ${tokens.spacing.small};
  position: fixed;
  z-index: ${tokens.zIndex.sticky};

  ${mediaQuery.aboveSmall} {
    justify-content: flex-start;
  }
`;

const logoLinkStyle = css`
  width: 110px;
  padding-left: ${tokens.spacing.xsmall};
  padding-right: ${tokens.spacing.xsmall};
`;

const versionStyle = css`
  margin-right: auto;
  padding-left: ${tokens.spacing.small};
  padding-top: 2px;
`;

type PageHeaderProps = {
  onNavOpen: () => void;
};

function PageHeader({ onNavOpen }: PageHeaderProps) {
  const { isAboveSmall } = useMediaQuery();

  return (
    <header css={headerStyle}>
      {isAboveSmall ? null : (
        <Button
          variant="plain"
          icon={<Menu />}
          onClick={onNavOpen}
          aria-label="Open Navigation"
        />
      )}
      <Link href="/" passHref>
        <Button
          as="a"
          variant="plain"
          icon={<Logo />}
          aria-label="Waffles, DataCamp Design System"
          css={logoLinkStyle}
        />
      </Link>
      {isAboveSmall && <Text css={versionStyle}>{`v${metadata.version}`}</Text>}
      <Button
        as="a"
        variant="plain"
        icon={<GithubBrand />}
        aria-label="Visit Waffles GitHub Repository"
        href="https://github.com/datacamp/waffles"
      />
    </header>
  );
}

export default PageHeader;
