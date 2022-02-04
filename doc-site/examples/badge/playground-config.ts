import { Badge } from '@datacamp/waffles/badge';

import type { PlaygroundConfig } from '../../types';

const initialCode = `
import { Badge } from '@datacamp/waffles/badge';

function Playground() {
  return (
    <Badge variant="green" size="medium">Label</Badge>
  );
}
`;

const playgroundConfig: PlaygroundConfig = {
  initialCode,
  scope: {
    Badge,
  },
};

export default playgroundConfig;
