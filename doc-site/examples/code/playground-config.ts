import { Paragraph } from '@datacamp/waffles/paragraph';
import { Code } from '@datacamp/waffles/code';

import type { PlaygroundConfig } from '../../types';

const initialCode = `
import { Code } from '@datacamp/waffles/code';
import { Paragraph } from '@datacamp/waffles/paragraph';

function Playground() {
  return (
    <Paragraph>
      You can use regular <Code>Button</Code> component as a link by{' '}
      passing <Code>a</Code> via <Code>as</Code> prop.
    </Paragraph>
  );
}
`;

const playgroundConfig: PlaygroundConfig = {
  initialCode,
  scope: {
    Code,
    Paragraph,
  },
};

export default playgroundConfig;
