import { useState } from 'react';
import { Paragraph } from '@datacamp/waffles/paragraph';
import { Dialog } from '@datacamp/waffles/dialog';
import { Button } from '@datacamp/waffles/button';

function Example() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setIsOpen(true)}>Open Dialog</Button>
      <Dialog
        aria-labelledby="case-study-dialog-header"
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
      >
        <Dialog.Header id="case-study-dialog-header">
          Confirm Your Case Study Participation
        </Dialog.Header>
        <Dialog.Body>
          <Paragraph>
            To be able to participate in the case study, you will need a
            computer with a webcam. If you fail to submit, you will have to wait
            4 weeks before taking the case study again.
          </Paragraph>
          <Paragraph variant="secondary">
            Support is available during regular European working
            hours&mdash;Monday to Friday, CET 8:00 to 17:00.
          </Paragraph>
        </Dialog.Body>
        <Dialog.Footer>
          <Dialog.Button variant="secondary" onClick={() => setIsOpen(false)}>
            Cancel
          </Dialog.Button>
          <Dialog.Button
            autoFocus
            variant="primary"
            onClick={() => setIsOpen(false)}
          >
            Confirm
          </Dialog.Button>
        </Dialog.Footer>
      </Dialog>
    </>
  );
}

export default Example;
