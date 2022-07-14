import { useState } from 'react';
import { Paragraph } from '@datacamp/waffles/paragraph';
import { Dialog } from '@datacamp/waffles/dialog';
import { Button } from '@datacamp/waffles/button';

import type { PlaygroundConfig } from '../../types';

const initialCode = `
import { useState } from 'react';

import { Dialog } from '@datacamp/waffles/dialog';
import { Paragraph } from '@datacamp/waffles/paragraph';
import { Button } from '@datacamp/waffles/button';

function Playground() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setIsOpen(true)}>Open Dialog</Button>
      <Dialog
        aria-labelledby="basic-dialog-header"
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
      >
        <Dialog.Header id="basic-dialog-header">
          Dialog Title
        </Dialog.Header>
        <Dialog.Body>
          <Paragraph>
            Main content of the dialog. Even very long content is supported.
          </Paragraph>
        </Dialog.Body>
        <Dialog.Footer>
          <Dialog.Button variant="secondary" onClick={() => setIsOpen(false)}>
            Cancel
          </Dialog.Button>
          <div>
            <Dialog.Button
              variant="secondary"
              onClick={() => setIsOpen(false)}
            >
              Secondary Action
            </Dialog.Button>
            <Dialog.Button
              autoFocus
              variant="primary"
              onClick={() => setIsOpen(false)}
            >
              Confirm
            </Dialog.Button>
          </div>
        </Dialog.Footer>
      </Dialog>
    </>
  );
}
`;

const playgroundConfig: PlaygroundConfig = {
  initialCode,
  scope: {
    useState,
    Dialog,
    Paragraph,
    Button,
  },
};

export default playgroundConfig;
