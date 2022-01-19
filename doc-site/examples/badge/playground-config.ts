import { tokens } from '@datacamp/waffles/tokens';
import { Badge } from '@datacamp/waffles/badge';

import type { PlaygroundConfig } from '../../types';

const initialCode = `
import { tokens } from '@datacamp/waffles/tokens';
import { Badge } from '@datacamp/waffles/badge';

function Playground() {
  return (
    <Badge color={tokens.colors.green} size="medium">Label</Badge>
  );
}
`;

const playgroundConfig: PlaygroundConfig = {
  initialCode,
  scope: {
    tokens,
    Badge,
  },
};

export default playgroundConfig;
