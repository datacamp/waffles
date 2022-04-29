import { css } from '@emotion/react';
import { tokens } from '@datacamp/waffles/tokens';
import { ErrorBoundary } from '@datacamp/waffles/error-boundary';

import formattedModuleExports from '../helpers/formatted-module-exports';

import basicTheme from './editor-theme';
import Highlight from './editor-highlight';
import CodePreview from './code-preview';

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
    <ErrorBoundary>
      <CodePreview css={previewStyle}>
        <Highlight theme={basicTheme}>
          {formattedModuleExports(module, path)}
        </Highlight>
      </CodePreview>
    </ErrorBoundary>
  );
}

export default Imports;
