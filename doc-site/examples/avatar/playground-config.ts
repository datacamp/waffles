import { Avatar } from '@datacamp/waffles/avatar';

import type { PlaygroundConfig } from '../../types';

const initialCode = `
import { Avatar } from '@datacamp/waffles/avatar';

function Playground() {
  return (
    <Avatar variant="green" size="medium" />
  );
}
`;

const playgroundConfig: PlaygroundConfig = {
  initialCode,
  scope: {
    Avatar,
  },
};

export default playgroundConfig;
