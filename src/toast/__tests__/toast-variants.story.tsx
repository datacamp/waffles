import { css } from '@emotion/react';

import { ToastProvider, useToast } from '../index';
import { tokens } from '../../tokens';
import { Button } from '../../button';

const wrapperStyle = css`
  display: flex;
  flex-direction: column;
  gap: ${tokens.spacing.small};
  padding: ${tokens.spacing.medium};
  width: 240px;
`;

function Triggers() {
  const { toast } = useToast();

  return (
    <div css={wrapperStyle}>
      <Button
        onClick={() =>
          toast({
            title:
              'Very Long Default Toast Title Which Most Likely Will Span Multiple Lines',
            description:
              'Default toast description which spans through multiple lines.',
          })
        }
      >
        Show Default Toast
      </Button>
      <Button
        onClick={() =>
          toast({
            title: 'Success Toast Title',
            description: 'Success toast description.',
            variant: 'success',
          })
        }
      >
        Show Success Toast
      </Button>
      <Button
        onClick={() =>
          toast({
            title: 'Warning Toast Title',
            description: 'Warning toast description.',
            variant: 'warning',
          })
        }
      >
        Show Warning Toast
      </Button>
      <Button
        onClick={() =>
          toast({
            title: 'Error Toast Title',
            description: 'Error toast description.',
            variant: 'error',
          })
        }
      >
        Show Error Toast
      </Button>
    </div>
  );
}

function Story() {
  return (
    <ToastProvider>
      <Triggers />
    </ToastProvider>
  );
}

export default Story;
