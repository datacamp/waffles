import { css } from '@emotion/react';

import { tokens } from '@datacamp/waffles/tokens';
import React from 'react';

const cardStyle = css`
  display: flex;
  height: 180px;
  width: 100%;
  background-color: ${tokens.colors.white};
  border: ${tokens.borderWidth.thin} solid ${tokens.colors.beigeMedium};
  border-radius: ${tokens.borderRadius.medium};
  overflow: hidden;
`;

const imageWrapperStyle = css`
  background-color: ${tokens.colors.purpleLight};
  padding: ${tokens.spacing.xsmall};
`;

const imageStyle = css`
  height: 100%;
`;

const contentStyle = css`
  padding: ${tokens.spacing.medium};
  flex-grow: 1;
`;

type LandingPageCardProps = {
  imageUrl: string;
  children: React.ReactNode;
};

function LandingPageCard({ imageUrl, children }: LandingPageCardProps) {
  return (
    <div css={cardStyle}>
      <div css={imageWrapperStyle}>
        <img src={imageUrl} css={imageStyle} />
      </div>
      <div css={contentStyle}>{children}</div>
    </div>
  );
}

export default LandingPageCard;
