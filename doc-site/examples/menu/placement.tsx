import React, { useState } from 'react';
import { css } from '@emotion/react';

import { tokens } from '@datacamp/waffles/tokens';
import { Menu } from '@datacamp/waffles/menu';
import { Radio } from '@datacamp/waffles/radio';
import { Button } from '@datacamp/waffles/button';

function Example() {
  const [placement, setPlacement] =
    useState<React.ComponentProps<typeof Menu>['placement']>('right');

  return (
    <>
      <div
        css={css`
          display: flex;
          gap: ${tokens.spacing.medium};
          align-items: center;
        `}
      >
        <Menu
          trigger={<Button variant="secondary">Edit</Button>}
          placement={placement}
        >
          <Menu.Category noDivider>
            <Menu.Item label="Cut" />
            <Menu.Item label="Copy" />
            <Menu.Item label="Rename" />
          </Menu.Category>
        </Menu>
        <Radio
          name="menuPlacement"
          value="right"
          checked={placement === 'right'}
          onChange={() => setPlacement('right')}
        >
          to the right
        </Radio>
        <Radio
          name="menuPlacement"
          value="left"
          checked={placement === 'left'}
          onChange={() => setPlacement('left')}
        >
          to the left
        </Radio>
        <Radio
          name="menuPlacement"
          value="top"
          checked={placement === 'top'}
          onChange={() => setPlacement('top')}
        >
          on the top
        </Radio>
        <Radio
          name="menuPlacement"
          value="bottom"
          checked={placement === 'bottom'}
          onChange={() => setPlacement('bottom')}
        >
          on the bottom
        </Radio>
      </div>
    </>
  );
}

export default Example;
