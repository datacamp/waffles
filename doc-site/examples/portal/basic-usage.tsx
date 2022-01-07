import { useState } from 'react';
import { css } from '@emotion/react';

import { tokens } from '@datacamp/waffles/tokens';
import { Portal } from '@datacamp/waffles/portal';
import { Button } from '@datacamp/waffles/button';
import { Heading } from '@datacamp/waffles/heading';
import { Paragraph } from '@datacamp/waffles/paragraph';

const contentStyle = css`
  position: fixed;
  top: 70px;
  right: ${tokens.spacing.medium};
  background-color: ${tokens.colors.white};
  padding: ${tokens.spacing.medium};
  border-radius: ${tokens.borderRadius.medium};
  z-index: ${tokens.zIndex.popup};
  box-shadow: ${tokens.boxShadow.thin}, ${tokens.boxShadow.xthick};
`;

function Example() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setIsOpen(true)}>Open Portal</Button>
      {isOpen && (
        <Portal>
          <div css={contentStyle}>
            <Heading>The Portal</Heading>
            <Paragraph>Completely new dimension.</Paragraph>
            <Button onClick={() => setIsOpen(false)}>Close Portal</Button>
          </div>
        </Portal>
      )}
    </>
  );
}

export default Example;
