import { ToastProvider, useToast } from '@datacamp/waffles/toast';
import { Button } from '@datacamp/waffles/button';

function ToastTrigger() {
  const { toast } = useToast();

  return (
    <Button
      onClick={() =>
        toast({
          title: 'Always Visible Toast',
          description:
            "Doesn't hide automatically. Must be dismissed manually.",
        })
      }
    >
      Persistent Toast
    </Button>
  );
}

function Example() {
  return (
    <ToastProvider disableAutoHide>
      <ToastTrigger />
    </ToastProvider>
  );
}

export default Example;
