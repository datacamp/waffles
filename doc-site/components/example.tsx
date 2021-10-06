import React from 'react';
import { css } from '@emotion/react';
import { useEffect, useState } from 'react';

import { tokens } from '@datacamp/waffles/tokens';
import { Button } from '@datacamp/waffles/button';
import { Heading } from '@datacamp/waffles/heading';
import { Code } from '@datacamp/waffles/icon';
import { hexToRgba } from '@datacamp/waffles/helpers';
import basicTheme from './editor-theme';
import Highlight from './editor-highlight';
import CodePreview from './code-preview';
import CodePreviewControls from './code-preview-controls';

const sectionStyle = css`
  margin-top: ${tokens.spacing.medium};
`;

const wrapperStyle = css`
  padding: ${tokens.spacing.medium};
  padding-bottom: ${tokens.spacing.xlarge};
  margin-top: ${tokens.spacing.small};
  border-width: ${tokens.borderWidth.thin};
  border-style: solid;
  border-bottom-color: ${hexToRgba(
    tokens.colors.beigeMedium,
    tokens.opacity.high,
  )};
  border-top-right-radius: ${tokens.borderRadius.medium};
  border-top-left-radius: ${tokens.borderRadius.medium};
`;

type ExampleProps = {
  children: React.ReactNode;
  path: string;
  title: string;
  minHeight?: number;
  darkPreview?: boolean;
};

function Example({
  children,
  minHeight,
  path,
  title,
  darkPreview = false,
}: ExampleProps) {
  const [code, setCode] = useState('');
  const [isCodePreviewVisible, setCodePreviewVisibility] = useState(false);

  function toggleCodePreviewVisibility() {
    setCodePreviewVisibility(!isCodePreviewVisible);
  }

  useEffect(() => {
    // Load raw content of code example
    async function importExampleCode() {
      const rawCode = await import(`!!raw-loader!../examples/${path}.tsx`);
      setCode(rawCode.default);
    }
    importExampleCode();
  }, [path]);

  return (
    <section css={sectionStyle}>
      <Heading size="large">{title}</Heading>
      <div
        css={css`
          ${wrapperStyle};
          ${minHeight &&
          css`
            min-height: ${minHeight}px;
          `}
          background-color: ${darkPreview
            ? tokens.colors.navy
            : tokens.colors.white};
          border-color: ${darkPreview
            ? tokens.colors.navy
            : tokens.colors.beigeMedium};
        `}
      >
        {children}
      </div>
      {code && isCodePreviewVisible && (
        <CodePreview>
          <Highlight theme={basicTheme}>{code.trim()}</Highlight>
        </CodePreview>
      )}
      <CodePreviewControls>
        <Button
          variant="plain"
          size="small"
          iconLeft={<Code />}
          disabled={!code}
          onClick={toggleCodePreviewVisibility}
        >
          {isCodePreviewVisible ? 'Hide' : 'Show'} Code
        </Button>
      </CodePreviewControls>
    </section>
  );
}

export default Example;
