import { Tooltip } from '@datacamp/waffles/tooltip';
import { Button } from '@datacamp/waffles/button';

function Example() {
  return (
    <Tooltip content="Short tooltip message." placement="right">
      <Button>Tooltip Trigger</Button>
    </Tooltip>
  );
}

export default Example;
