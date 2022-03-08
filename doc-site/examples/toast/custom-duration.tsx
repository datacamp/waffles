import { ToastProvider, useToast } from '@datacamp/waffles/toast';
import { Button } from '@datacamp/waffles/button';

function ToastTrigger() {
  const { toast } = useToast();

  return (
    <Button
      onClick={() =>
        toast({
          title: 'Toast With Custom Duration',
          description:
            'Shorten or lengthen the default duration of 6000 milliseconds.',
        })
      }
    >
      Custom Duration Toast
    </Button>
  );
}

function Example() {
  return (
    <ToastProvider autoHideDuration={8000}>
      <ToastTrigger />
    </ToastProvider>
  );
}

export default Example;
