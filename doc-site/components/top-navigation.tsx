import Link from 'next/link';
import { css } from '@emotion/react';
import { tokens } from '@datacamp/waffles/tokens';
import { Text } from '@datacamp/waffles/text';
import { Menu, GithubBrand, FigmaBrand } from '@datacamp/waffles/icon';
import { useMediaQuery } from '@datacamp/waffles/hooks';
import { mediaQuery } from '@datacamp/waffles/helpers';
import { ErrorBoundary } from '@datacamp/waffles/error-boundary';
import { Button } from '@datacamp/waffles/button';
import { WafflesColoredLogo } from '@datacamp/waffles/asset';

import metadata from '../../package.json';

import { HEADER_HEIGHT } from './constants';

const headerStyle = css`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: ${HEADER_HEIGHT};
  z-index: 7500; // Value between dropdown and modal
  background-color: ${tokens.colors.white};
  box-shadow: ${tokens.boxShadow.thin}, ${tokens.boxShadow.medium};
  padding-left: ${tokens.spacing.small};
  padding-right: ${tokens.spacing.small};

  ${mediaQuery.aboveMedium} {
    justify-content: flex-start;
  }
`;

const logoLinkStyle = css`
  width: 110px;
  padding-left: ${tokens.spacing.xsmall};
  padding-right: ${tokens.spacing.xsmall};
`;

const responsiveLogoStyle = css`
  width: 100%;
`;

const versionStyle = css`
  margin-right: auto;
  padding-left: ${tokens.spacing.small};
  padding-top: 2px;
`;

const buttonWrapperStyle = css`
  display: flex;
  gap: 8px;
`;

type TopNavigationProps = {
  onNavOpen: () => void;
};

function TopNavigation({ onNavOpen }: TopNavigationProps) {
  const { isAboveMedium } = useMediaQuery();

  return (
    <ErrorBoundary>
      <header css={headerStyle}>
        {isAboveMedium ? null : (
          <Button
            variant="plain"
            icon={<Menu size="xlarge" />}
            onClick={onNavOpen}
            aria-label="Open Navigation"
          />
        )}
        <Link href="/" passHref>
          <Button
            as="a"
            variant="plain"
            icon={<WafflesColoredLogo css={responsiveLogoStyle} />}
            aria-label="Waffles, DataCamp Design System"
            css={logoLinkStyle}
          />
        </Link>
        {isAboveMedium && (
          <Text css={versionStyle}>{`v${metadata.version}`}</Text>
        )}
        <div css={buttonWrapperStyle}>
          <Button
            as="a"
            variant="plain"
            icon={<FigmaBrand size="large" />}
            aria-label="Visit Waffles Figma Components (external link)"
            href="https://www.figma.com/file/CCf4IlqeNxwVf3BtYO0WOP/%5BDC%5D-Components?node-id=10%3A224"
            target="_blank"
          />
          <Button
            as="a"
            variant="plain"
            icon={<GithubBrand size="large" />}
            aria-label="Visit Waffles GitHub Repository (external link)"
            href="https://github.com/datacamp/waffles"
            target="_blank"
          />
        </div>
      </header>
    </ErrorBoundary>
  );
}

export default TopNavigation;
