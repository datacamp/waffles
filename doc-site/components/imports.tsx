import { css } from '@emotion/react';
import { tokens } from '@datacamp/waffles/tokens';

import basicTheme from './editor-theme';
import Highlight from './editor-highlight';
import CodePreview from './code-preview';

import formattedModuleExports from '../helpers/formatted-module-exports';

const previewStyle = css`
  border-radius: ${tokens.borderRadius.medium};
`;

type ImportsProps = {
  module: Record<string, unknown> | string[];
  path: string;
};

// Create import list based on an input provided via module prop
// For auto generated imports provide all exports from a module
// For manually specified imports provide the array of names
function Imports({ module, path }: ImportsProps) {
  return (
    <CodePreview css={previewStyle}>
      <Highlight theme={basicTheme}>
        {formattedModuleExports(module, path)}
      </Highlight>
    </CodePreview>
  );
}

export default Imports;
