import React from 'react';
import { css } from '@emotion/react';

import { tokens } from '@datacamp/waffles/tokens';
import { mediaQuery } from '@datacamp/waffles/helpers';

const cardStyle = css`
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: ${tokens.colors.white};
  border: ${tokens.borderWidth.thin} solid ${tokens.colors.beigeMedium};
  border-radius: ${tokens.borderRadius.medium};
  overflow: hidden;

  ${mediaQuery.small} {
    min-height: 180px;
    flex-direction: row;
  }
`;

const imageWrapperStyle = css`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${tokens.colors.purpleLight};
  padding: ${tokens.spacing.xsmall};

  ${mediaQuery.small} {
    max-width: 236px;
  }
`;

const imageStyle = css`
  max-height: 140px;

  ${mediaQuery.small} {
    height: 100%;
  }
`;

const contentStyle = css`
  padding: ${tokens.spacing.medium};
`;

type LandingPageCardProps = {
  imageUrl: string;
  children: React.ReactNode;
};

function LandingPageCard({ imageUrl, children }: LandingPageCardProps) {
  return (
    <section css={cardStyle}>
      <div css={imageWrapperStyle}>
        <img src={imageUrl} css={imageStyle} />
      </div>
      <div css={contentStyle}>{children}</div>
    </section>
  );
}

export default LandingPageCard;
