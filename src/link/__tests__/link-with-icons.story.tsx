import { css } from '@emotion/react';

import { tokens } from '../../tokens';
import { AddCircle, ExternalLink } from '../../icon';
import { Paragraph } from '../../paragraph';
import { Link } from '../index';

const wrapperStyle = css`
  padding: ${tokens.spacing.medium};
`;

const iconSizes = ['xsmall', 'small', 'medium'] as const;

function Story() {
  return (
    <>
      {/* Regular */}
      <div css={wrapperStyle}>
        <Paragraph>
          Ut enim ad minim veniam,{' '}
          <Link iconLeft={<AddCircle />} href="https://datacamp.com">
            Go to DataCamp website
          </Link>{' '}
          ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </Paragraph>
        <Paragraph>
          Ut enim ad minim veniam,{' '}
          <Link iconRight={<ExternalLink />} href="https://datacamp.com">
            Go to DataCamp website
          </Link>{' '}
          ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </Paragraph>
        <Paragraph>
          Ut enim ad minim veniam,{' '}
          <Link
            iconLeft={<AddCircle />}
            iconRight={<ExternalLink />}
            href="https://datacamp.com"
          >
            Go to DataCamp website
          </Link>{' '}
          ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </Paragraph>
      </div>
      {/* Inverted */}
      <div
        css={css`
          ${wrapperStyle}
          background-color: ${tokens.colors.navy};
        `}
      >
        <Paragraph inverted>
          Ut enim ad minim veniam,{' '}
          <Link inverted iconLeft={<AddCircle />} href="https://datacamp.com">
            Go to DataCamp website
          </Link>{' '}
          ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </Paragraph>
        <Paragraph inverted>
          Ut enim ad minim veniam,{' '}
          <Link
            inverted
            iconRight={<ExternalLink />}
            href="https://datacamp.com"
          >
            Go to DataCamp website
          </Link>{' '}
          ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </Paragraph>
        <Paragraph inverted>
          Ut enim ad minim veniam,{' '}
          <Link
            inverted
            iconLeft={<AddCircle />}
            iconRight={<ExternalLink />}
            href="https://datacamp.com"
          >
            Go to DataCamp website
          </Link>{' '}
          ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </Paragraph>
      </div>
      {/* Custom icon size */}
      <div css={wrapperStyle}>
        {iconSizes.map((iconSize) => {
          return (
            <Paragraph key={`icon-size-${iconSize}`}>
              Ut enim ad minim veniam,{' '}
              <Link
                iconLeft={<AddCircle size={iconSize} />}
                href="https://datacamp.com"
              >
                Go to DataCamp website
              </Link>{' '}
              ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </Paragraph>
          );
        })}
      </div>
    </>
  );
}

export default Story;
