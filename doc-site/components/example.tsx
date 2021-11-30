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
import PreviewControls from './preview-controls';

const sectionStyle = css`
  margin-top: ${tokens.spacing.medium};
`;

const wrapperStyle = css`
  padding: ${tokens.spacing.medium};
  padding-bottom: ${tokens.spacing.xlarge};
  margin-top: ${tokens.spacing.small};
  border-width: ${tokens.borderWidth.thin};
  border-style: solid;
  border-top-right-radius: ${tokens.borderRadius.medium};
  border-top-left-radius: ${tokens.borderRadius.medium};
  overflow: hidden;
`;

const buttonContentStyle = css`
  width: 78px;
  text-align: center;
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
    // Trim and remove eslint flags
    async function importExampleCode() {
      const rawCode = await import(`!!raw-loader!../examples/${path}.tsx`);
      const trimmedCode = rawCode.default
        .replace(/\/\* eslint-disable[^*].+\*\//, '')
        .trim();
      setCode(trimmedCode);
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
          border-bottom-color: ${darkPreview
            ? hexToRgba(tokens.colors.white, tokens.opacity.low)
            : hexToRgba(tokens.colors.beigeMedium, tokens.opacity.high)};
        `}
      >
        {children}
      </div>
      {code && isCodePreviewVisible && (
        <CodePreview>
          <Highlight theme={basicTheme}>{code}</Highlight>
        </CodePreview>
      )}
      <PreviewControls>
        <Button
          variant="plain"
          size="small"
          iconLeft={<Code />}
          disabled={!code}
          onClick={toggleCodePreviewVisibility}
        >
          <div css={buttonContentStyle}>
            {isCodePreviewVisible ? 'Hide' : 'Show'} Code
          </div>
        </Button>
      </PreviewControls>
    </section>
  );
}

export default Example;
