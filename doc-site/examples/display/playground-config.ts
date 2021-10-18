import { Display } from '@datacamp/waffles/display';

import type { PlaygroundConfig } from '../../types';

const initialCode = `
import { Display } from '@datacamp/waffles/display';

function Playground() {
  return (
    <Display>We are smart.</Display>
  );
}
`;

const playgroundConfig: PlaygroundConfig = {
  initialCode,
  scope: {
    Display,
  },
};

export default playgroundConfig;
