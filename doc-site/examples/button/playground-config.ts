import { Button } from '@datacamp/waffles/button';
import { AddCircle, ChevronRight } from '@datacamp/waffles/icon';

import type { PlaygroundConfig } from '../../types';

const initialCode = `
import { Button } from '@datacamp/waffles/button';
import { AddCircle, ChevronRight } from '@datacamp/waffles/icon';

function Playground() {
  return (
    <Button variant="primary" size="medium">Hello</Button>
  );
}
`;

const playgroundConfig: PlaygroundConfig = {
  initialCode,
  scope: {
    Button,
    AddCircle,
    ChevronRight,
  },
};

export default playgroundConfig;
