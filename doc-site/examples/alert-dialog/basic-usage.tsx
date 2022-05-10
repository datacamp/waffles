import { useState } from 'react';
import { Paragraph } from '@datacamp/waffles/paragraph';
import { Button } from '@datacamp/waffles/button';
import { AlertDialog } from '@datacamp/waffles/alert-dialog';

function Example() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setIsOpen(true)}>Open Alert Dialog</Button>
      <AlertDialog
        aria-labelledby="delete-exercise-alert-dialog-header"
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
      >
        <AlertDialog.Header id="delete-exercise-alert-dialog-header">
          You Are About To Delete An Exercise
        </AlertDialog.Header>
        <AlertDialog.Body>
          <Paragraph>
            Are you sure you want to proceed with this action? This can not be
            undone.
          </Paragraph>
        </AlertDialog.Body>
        <AlertDialog.Footer>
          <AlertDialog.Button
            autoFocus
            variant="secondary"
            onClick={() => setIsOpen(false)}
          >
            Cancel
          </AlertDialog.Button>
          <AlertDialog.Button
            variant="destructive"
            onClick={() => setIsOpen(false)}
          >
            Delete
          </AlertDialog.Button>
        </AlertDialog.Footer>
      </AlertDialog>
    </>
  );
}

export default Example;
