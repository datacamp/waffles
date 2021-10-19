import { CodeBlock } from '@datacamp/waffles/code-block';

import type { PlaygroundConfig } from '../../types';

const initialCode = `
import { CodeBlock } from '@datacamp/waffles/code-block';

function Playground() {
  return (
    <CodeBlock size="large">{\`pyftsubset JetBrainsMono.ttf
--output-file="JetBrainsMono.woff"
--flavor=woff
--with-zopfli
--layout-features="kern,liga,clig,ccmp"
--unicodes="*"\`}</CodeBlock>
  );
}
`;

const playgroundConfig: PlaygroundConfig = {
  initialCode,
  scope: {
    CodeBlock,
  },
};

export default playgroundConfig;
