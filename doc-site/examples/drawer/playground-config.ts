import { useState } from 'react';

import { Drawer } from '@datacamp/waffles/drawer';
import { Paragraph } from '@datacamp/waffles/paragraph';
import { Button } from '@datacamp/waffles/button';

import type { PlaygroundConfig } from '../../types';

const initialCode = `
import { useState } from 'react';

import { Drawer } from '@datacamp/waffles/drawer';
import { Paragraph } from '@datacamp/waffles/paragraph';
import { Button } from '@datacamp/waffles/button';

function Playground() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setIsOpen(true)}>Open Drawer</Button>
      <Drawer
        placement="left"
        aria-labelledby="basic-drawer-header"
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
      >
        <Drawer.Header id="basic-drawer-header">
          Drawer Title
        </Drawer.Header>
        <Drawer.Body>
          <Paragraph>
            Main content of the drawer. Even very long content is supported.
          </Paragraph>
        </Drawer.Body>
        <Drawer.Footer>
          <Drawer.Button variant="secondary" onClick={() => setIsOpen(false)}>
            Cancel
          </Drawer.Button>
          <Drawer.Button
            autoFocus
            varaint="primary"
            onClick={() => setIsOpen(false)}
          >
            Confirm
          </Drawer.Button>
        </Drawer.Footer>
      </Drawer>
    </>
  );
}
`;

const playgroundConfig: PlaygroundConfig = {
  initialCode,
  scope: {
    useState,
    Drawer,
    Paragraph,
    Button,
  },
};

export default playgroundConfig;
