import { css } from '@emotion/react';

import { tokens } from '../../tokens';
import { Button } from '../../button';
import { ToastProvider, useToast } from '../index';

const wrapperStyle = css`
  padding: ${tokens.spacing.medium};
`;

function Trigger() {
  const { toast } = useToast();

  return (
    <div css={wrapperStyle}>
      <Button
        onClick={() =>
          toast({
            title: 'Toast Title',
            description: 'Toast description.',
          })
        }
      >
        Show Toast
      </Button>
    </div>
  );
}

function Story() {
  return (
    <ToastProvider>
      <Trigger />
    </ToastProvider>
  );
}

export default Story;
