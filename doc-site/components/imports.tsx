import { css } from '@emotion/react';

import { tokens } from '@datacamp/waffles/tokens';
import { Paragraph } from '@datacamp/waffles/paragraph';
import formattedModuleExports from '../helpers/formatted-module-exports';
import CodePreview from './code-preview';
import basicTheme from './editor-theme';
import Highlight from './editor-highlight';

const previewStyle = css`
  border-radius: ${tokens.borderRadius.medium};
`;

type ImportsProps = {
  module: Record<string, unknown>;
  path: string;
};

function Imports({ module, path }: ImportsProps) {
  return (
    <>
      <Paragraph>
        You can import following components or utilities from this module:
      </Paragraph>
      <CodePreview css={previewStyle}>
        <Highlight theme={basicTheme}>
          {formattedModuleExports(module, path)}
        </Highlight>
      </CodePreview>
    </>
  );
}

export default Imports;
