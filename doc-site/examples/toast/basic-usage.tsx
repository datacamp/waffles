import { ToastProvider, useToast } from '@datacamp/waffles/toast';
import { Button } from '@datacamp/waffles/button';

function ToastTrigger() {
  const { toast } = useToast();

  return (
    <Button
      onClick={() =>
        toast({
          title: 'Workspace Saved',
          variant: 'success',
        })
      }
    >
      Open Toast
    </Button>
  );
}

function Example() {
  return (
    <ToastProvider>
      <ToastTrigger />
    </ToastProvider>
  );
}

export default Example;
