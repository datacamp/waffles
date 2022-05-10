import { useState } from 'react';
import { css } from '@emotion/react';

import { Drawer } from '../index';
import { tokens } from '../../tokens';
import { Paragraph } from '../../paragraph';
import { Button } from '../../button';

const mainContentStyle = css`
  padding: ${tokens.spacing.medium};
`;

const buttonsStyle = css`
  display: flex;
  gap: ${tokens.spacing.small};
`;

type TestDrawerProps = {
  isOpen: boolean;
  onClose: () => void;
  placement: 'left' | 'right';
};

function TestDrawer({ isOpen, onClose, placement }: TestDrawerProps) {
  return (
    <Drawer
      isOpen={isOpen}
      onClose={onClose}
      aria-labelledby={`drawer-${placement}-title`}
      placement={placement}
      data-testid={`${placement}-drawer`}
    >
      <Drawer.Header id={`drawer-${placement}-title`}>
        Title of a Drawer
      </Drawer.Header>
      <Drawer.Body>
        <Paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Paragraph>
      </Drawer.Body>
      <Drawer.Footer>
        <Drawer.Button variant="secondary" onClick={onClose}>
          Cancel
        </Drawer.Button>
        <Drawer.Button autoFocus onClick={onClose}>
          Confirm
        </Drawer.Button>
      </Drawer.Footer>
    </Drawer>
  );
}

function Story() {
  const [isLeftOpen, setIsLeftOpen] = useState(false);
  const [isRightOpen, setIsRightOpen] = useState(false);

  return (
    <article css={mainContentStyle}>
      <div css={buttonsStyle}>
        <Button onClick={() => setIsLeftOpen(true)}>Open on Left</Button>
        <Button onClick={() => setIsRightOpen(true)}>Open on Right</Button>
      </div>
      <TestDrawer
        isOpen={isLeftOpen}
        onClose={() => setIsLeftOpen(false)}
        placement="left"
      />
      <TestDrawer
        isOpen={isRightOpen}
        onClose={() => setIsRightOpen(false)}
        placement="right"
      />
    </article>
  );
}

export default Story;
