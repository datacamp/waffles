import { css } from '@emotion/react';

import { Notification } from '../index';
import { tokens } from '../../tokens';

const wrapperStyle = css`
  display: flex;
  flex-wrap: wrap;
  gap: ${tokens.spacing.medium};
  padding: ${tokens.spacing.medium};
`;

const variants = ['default', 'success', 'warning', 'error', 'upgrade'] as const;

function Story() {
  return (
    <>
      {/* Regular */}
      <div css={wrapperStyle}>
        {variants.map((variant) => {
          return (
            <Notification
              key={`${variant}-notification`}
              title={`Long ${variant} notification title`}
              description="Long optional regular notification description."
              variant={variant}
              action={
                <Notification.ActionButton>Action</Notification.ActionButton>
              }
              closable
            />
          );
        })}
      </div>
      {/* Inverted */}
      <div
        css={css`
          ${wrapperStyle}
          background-color: ${tokens.colors.navy};
        `}
      >
        {variants.map((variant) => {
          return (
            <Notification
              key={`${variant}-notification`}
              title={`Inverted ${variant} notification title`}
              description="Long optional inverted notification description."
              variant={variant}
              action={
                <Notification.ActionButton>Action</Notification.ActionButton>
              }
              closable
              inverted
            />
          );
        })}
      </div>
    </>
  );
}

export default Story;
