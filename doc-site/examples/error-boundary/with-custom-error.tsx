import { useState } from 'react';
import { css } from '@emotion/react';

import { tokens } from '@datacamp/waffles/tokens';
import { hexToRgba } from '@datacamp/waffles/helpers';
import { ErrorBoundary, useError } from '@datacamp/waffles/error-boundary';
import { Button } from '@datacamp/waffles/button';
import { Heading } from '@datacamp/waffles/heading';
import { Paragraph } from '@datacamp/waffles/paragraph';

function ThrowErrorComponent() {
  throw new Error('Very serious error!');
  return null;
}

function CustomError() {
  const { error, onReset } = useError();

  return (
    <section
      role="alert"
      css={css`
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: ${tokens.spacing.medium};
        background-color: ${hexToRgba(tokens.colors.red, 0.15)};
        border: ${tokens.borderWidth.thin} solid
          ${hexToRgba(tokens.colors.red, tokens.opacity.high)};
        border-radius: ${tokens.borderRadius.medium};
        max-width: 300px;
      `}
    >
      <Heading size="xlarge">Oops, somethig happened!</Heading>
      {error.message && (
        <Paragraph
          css={css`
            margin-bottom: ${tokens.spacing.medium};
          `}
        >
          {error.message}
        </Paragraph>
      )}
      <Button variant="secondary" onClick={onReset}>
        Retry
      </Button>
    </section>
  );
}

function Example() {
  const [hasError, setHasError] = useState(false);

  return (
    <ErrorBoundary
      fallback={<CustomError />}
      onReset={() => setHasError(false)}
    >
      <Button onClick={() => setHasError(true)}>Crash &amp; Burn</Button>
      {hasError ? <ThrowErrorComponent /> : null}
    </ErrorBoundary>
  );
}

export default Example;
