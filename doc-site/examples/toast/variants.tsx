import { css } from '@emotion/react';

import { tokens } from '@datacamp/waffles/tokens';
import { ToastProvider, useToast } from '@datacamp/waffles/toast';
import { Button } from '@datacamp/waffles/button';

function ToastTriggers() {
  const { toast } = useToast();

  return (
    <div
      css={css`
        display: flex;
        gap: ${tokens.spacing.small};
        flex-wrap: wrap;
      `}
    >
      <Button
        variant="secondary"
        onClick={() =>
          toast({
            title: 'New Python Workspace',
            description: 'Learn data exploration with Python.',
          })
        }
      >
        Default Toast
      </Button>
      <Button
        variant="secondary"
        onClick={() =>
          toast({
            title: 'Message Sent',
            variant: 'success',
          })
        }
      >
        Success Toast
      </Button>
      <Button
        variant="secondary"
        onClick={() =>
          toast({
            title: 'Changes Will Affect Your Datasets',
            variant: 'warning',
          })
        }
      >
        Warning Toast
      </Button>
      <Button
        variant="secondary"
        onClick={() =>
          toast({
            title: 'Connection Error',
            variant: 'error',
          })
        }
      >
        Error Toast
      </Button>
    </div>
  );
}

function Example() {
  return (
    <ToastProvider>
      <ToastTriggers />
    </ToastProvider>
  );
}

export default Example;
