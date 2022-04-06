import { useState } from 'react';

import { ErrorBoundary } from '@datacamp/waffles/error-boundary';
import { Button } from '@datacamp/waffles/button';

function ThrowErrorComponent() {
  throw new Error('Very serious error!');
  return null;
}

function Example() {
  const [hasError, setHasError] = useState(false);

  return (
    <ErrorBoundary onReset={() => setHasError(false)}>
      <Button onClick={() => setHasError(true)}>Crash &amp; Burn</Button>
      {hasError ? <ThrowErrorComponent /> : null}
    </ErrorBoundary>
  );
}

export default Example;
