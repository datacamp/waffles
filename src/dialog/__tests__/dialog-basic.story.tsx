import { useState } from 'react';
import { css } from '@emotion/react';

import { Dialog } from '../index';
import { tokens } from '../../tokens';
import { Paragraph } from '../../paragraph';
import { Button } from '../../button';

const mainContent = css`
  padding: ${tokens.spacing.medium};
`;

function Story() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <article css={mainContent}>
      <Button onClick={() => setIsOpen(true)}>Open</Button>
      <Dialog
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        aria-labelledby="dialog-title"
      >
        <Dialog.Header id="dialog-title">Title of a Dialog</Dialog.Header>
        <Dialog.Body>
          <Paragraph>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Paragraph>
        </Dialog.Body>
        <Dialog.Footer>
          <Dialog.Button variant="secondary" onClick={() => setIsOpen(false)}>
            Cancel
          </Dialog.Button>
          <Dialog.Button autoFocus onClick={() => setIsOpen(false)}>
            Confirm
          </Dialog.Button>
        </Dialog.Footer>
      </Dialog>
    </article>
  );
}

export default Story;
