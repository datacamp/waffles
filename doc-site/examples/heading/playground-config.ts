import { Heading } from '@datacamp/waffles/heading';

import type { PlaygroundConfig } from '../../types';

const initialCode = `
import { Heading } from '@datacamp/waffles/heading';

function Playground() {
  return (
    <Heading size="xlarge">Hands-on learning experience</Heading>
  );
}
`;

const playgroundConfig: PlaygroundConfig = {
  initialCode,
  scope: {
    Heading,
  },
};

export default playgroundConfig;
