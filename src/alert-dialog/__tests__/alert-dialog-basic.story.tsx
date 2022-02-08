import { useState } from 'react';
import { css } from '@emotion/react';

import { tokens } from '../../tokens';
import { Button } from '../../button';
import { Paragraph } from '../../paragraph';
import { AlertDialog } from '../index';

const mainContent = css`
  padding: ${tokens.spacing.medium};
`;

function Story() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <article css={mainContent}>
      <Button onClick={() => setIsOpen(true)}>Open</Button>
      <AlertDialog
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        aria-labelledby="alert-dialog-title"
      >
        <AlertDialog.Header id="alert-dialog-title">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore
        </AlertDialog.Header>
        <AlertDialog.Body>
          <Paragraph>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </Paragraph>
        </AlertDialog.Body>
        <AlertDialog.Footer>
          <AlertDialog.Button
            autoFocus
            fullWidth
            onClick={() => setIsOpen(false)}
          >
            Got It
          </AlertDialog.Button>
        </AlertDialog.Footer>
      </AlertDialog>
    </article>
  );
}

export default Story;
