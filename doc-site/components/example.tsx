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
  background-color: ${tokens.colors.white};
  margin-top: ${tokens.spacing.small};
  border: ${tokens.borderWidth.thin} solid ${tokens.colors.beigeMedium};
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
};

function Example({ children, minHeight, path, title }: ExampleProps) {
  const [code, setCode] = useState('');
  const [isCodePreviewVisible, setCodePreviewVisibility] = useState(false);

  function toggleCodePreviewVisibility(): void {
    setCodePreviewVisibility(!isCodePreviewVisible);
  }

  useEffect(() => {
    // Load raw content of code example
    async function importExampleCode(): Promise<void> {
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
          ${isCodePreviewVisible &&
          css`
            border-bottom: 0;
          `}
          ${minHeight &&
          css`
            min-height: ${minHeight}px;
          `}
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
