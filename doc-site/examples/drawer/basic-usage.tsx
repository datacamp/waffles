import { useState } from 'react';
import { css } from '@emotion/react';
import { tokens } from '@datacamp/waffles/tokens';
import { TextArea } from '@datacamp/waffles/text-area';
import { Select } from '@datacamp/waffles/select';
import { Radio } from '@datacamp/waffles/radio';
import { Input } from '@datacamp/waffles/input';
import { FormField } from '@datacamp/waffles/form-field';
import { Drawer } from '@datacamp/waffles/drawer';
import { Button } from '@datacamp/waffles/button';

function Example() {
  const [isOpen, setIsOpen] = useState(false);
  const [placement, setPlacement] = useState<'left' | 'right'>('left');

  return (
    <>
      <div
        css={css`
          display: flex;
          gap: ${tokens.spacing.medium};
          align-items: center;
        `}
      >
        <Button onClick={() => setIsOpen(true)}>Open Drawer</Button>
        <Radio
          name="drawerPlacement"
          value="left"
          checked={placement === 'left'}
          onChange={() => setPlacement('left')}
        >
          to the left
        </Radio>
        <Radio
          name="drawerPlacement"
          value="right"
          checked={placement === 'right'}
          onChange={() => setPlacement('right')}
        >
          to the right
        </Radio>
      </div>
      <Drawer
        placement={placement}
        aria-labelledby="new-course-drawer-header"
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
      >
        <Drawer.Header id="new-course-drawer-header">
          Create New Course
        </Drawer.Header>
        <Drawer.Body>
          <form
            css={css`
              display: flex;
              flex-direction: column;
              gap: ${tokens.spacing.medium};
            `}
          >
            <FormField label="Name" required>
              <Input />
            </FormField>
            <FormField label="Technology" required>
              <Select>
                <option value="python">Python</option>
                <option value="r-lang">R</option>
                <option value="sql">SQL</option>
              </Select>
            </FormField>
            <FormField label="Description">
              <TextArea rows={4} />
            </FormField>
          </form>
        </Drawer.Body>
        <Drawer.Footer>
          <Drawer.Button variant="secondary" onClick={() => setIsOpen(false)}>
            Cancel
          </Drawer.Button>
          <Drawer.Button
            autoFocus
            variant="primary"
            onClick={() => setIsOpen(false)}
          >
            Submit
          </Drawer.Button>
        </Drawer.Footer>
      </Drawer>
    </>
  );
}

export default Example;
