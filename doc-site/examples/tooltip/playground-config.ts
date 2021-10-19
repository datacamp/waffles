import { Tooltip } from '@datacamp/waffles/tooltip';
import { Button } from '@datacamp/waffles/button';

import type { PlaygroundConfig } from '../../types';

const initialCode = `
import { Tooltip } from '@datacamp/waffles/tooltip';
import { Button } from '@datacamp/waffles/button';

function Playground() {
  return (
    <Tooltip content="Short tooltip message." placement="right">
      <Button>Tooltip Trigger</Button>
    </Tooltip>
  );
}
`;

const playgroundConfig: PlaygroundConfig = {
  initialCode,
  scope: {
    Tooltip,
    Button,
  },
};

export default playgroundConfig;
