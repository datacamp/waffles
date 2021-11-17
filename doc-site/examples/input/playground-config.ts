import { Input } from '@datacamp/waffles/input';
import { Branch, ChevronRight } from '@datacamp/waffles/icon';

import type { PlaygroundConfig } from '../../types';

const initialCode = `
import { Input } from '@datacamp/waffles/input';
import { Branch, ChevronRight } from '@datacamp/waffles/icon';

function Playground() {
  return (
    <Input size="medium" placeholder="Uncontrolled Input" />
  );
}
`;

const playgroundConfig: PlaygroundConfig = {
  initialCode,
  scope: {
    Input,
    Branch,
    ChevronRight,
  },
};

export default playgroundConfig;
