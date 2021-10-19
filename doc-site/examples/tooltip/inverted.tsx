import { Tooltip } from '@datacamp/waffles/tooltip';
import { Button } from '@datacamp/waffles/button';

function Example() {
  return (
    <Tooltip
      inverted
      content="Short inverted tooltip message."
      placement="right"
    >
      <Button inverted>Tooltip Trigger</Button>
    </Tooltip>
  );
}

export default Example;
